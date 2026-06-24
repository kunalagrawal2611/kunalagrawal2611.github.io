"""Fetch citation metrics from Google Scholar and update src/data/scholar-metrics.json."""

from __future__ import annotations

import json
import re
import urllib.request
from datetime import date
from pathlib import Path

SCHOLAR_URL = "https://scholar.google.com/citations?user=4hveYIAAAAAJ&hl=en"
OUTPUT = Path(__file__).resolve().parents[1] / "src" / "data" / "scholar-metrics.json"


def parse_scholar_html(html: str) -> dict[str, int]:
    rows = [int(value) for value in re.findall(r"gsc_rsb_st[^>]*>(\d+)<", html)]
    if len(rows) >= 3:
        return {"citations": rows[0], "hIndex": rows[2]}

    desc = re.search(r'<meta name="description" content="([^"]+)"', html)
    if desc:
        match = re.search(r"Cited by\s*([0-9,]+)", desc.group(1), re.I)
        if match:
            return {
                "citations": int(match.group(1).replace(",", "")),
                "hIndex": rows[2] if len(rows) >= 3 else 1,
            }

    match = re.search(r"Cited by (\d+)", html)
    if match:
        return {"citations": int(match.group(1)), "hIndex": 1}

    raise ValueError("Could not parse citation metrics from Google Scholar HTML")


def main() -> None:
    req = urllib.request.Request(SCHOLAR_URL, headers={"User-Agent": "Mozilla/5.0"})
    html = urllib.request.urlopen(req, timeout=15).read().decode("utf-8", errors="replace")
    metrics = parse_scholar_html(html)
    payload = {
        **metrics,
        "updatedAt": date.today().isoformat(),
    }
    OUTPUT.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {OUTPUT}: {payload}")


if __name__ == "__main__":
    main()
