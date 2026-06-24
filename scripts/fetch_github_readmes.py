import json
import urllib.request
import base64
from pathlib import Path

repos = [
    "resume-evaluator",
    "ollama-dashboard",
    "timesheet-tracker",
    "SALOCON",
    "Healthy_Heart",
    "Chronic-Disease-Prediction",
    "Fake-News-Detection",
    "Dental-Insurance-Claim-Automation",
    "Motion-Illusion-in-Static-Scene--MISS-",
    "Motorcycle-Helmet-Detection-Dataset--MHDD-",
]

out = Path(__file__).parent / "github_readmes.txt"

lines = []

def fetch_readme(name: str) -> str:
    url = f"https://api.github.com/repos/kunalagrawal2611/{name}/readme"
    req = urllib.request.Request(
        url, headers={"User-Agent": "portfolio-sync", "Accept": "application/vnd.github+json"}
    )
    try:
        d = json.loads(urllib.request.urlopen(req, timeout=15).read())
        return base64.b64decode(d["content"]).decode("utf-8", errors="replace")[:2000]
    except Exception as e:
        return f"ERROR: {e}"

for name in repos:
    lines.append("=" * 60)
    lines.append(name)
    lines.append(fetch_readme(name))

out.write_text("\n".join(lines), encoding="utf-8")
print(f"Wrote {out}")
