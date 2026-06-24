import { useEffect, useState } from "react";
import fallbackMetrics from "../data/scholar-metrics.json";
import { personal } from "../data/resume";

export type ScholarMetrics = {
  citations: number;
  hIndex: number;
  source: "fallback" | "semantic-scholar" | "live";
};

const SCHOLAR_SEARCH =
  "https://api.semanticscholar.org/graph/v1/author/search?query=Kunal%20Agrawal%20University%20of%20Dayton&limit=1&fields=name,citationCount,hIndex";

async function fetchSemanticScholarMetrics(): Promise<ScholarMetrics | null> {
  const response = await fetch(SCHOLAR_SEARCH);
  if (!response.ok) return null;

  const data = (await response.json()) as {
    total?: number;
    data?: Array<{ citationCount?: number; hIndex?: number }>;
  };

  const author = data.data?.[0];
  if (!author?.citationCount || author.citationCount <= 0) return null;

  return {
    citations: author.citationCount,
    hIndex: author.hIndex ?? fallbackMetrics.hIndex,
    source: "semantic-scholar",
  };
}

export function useScholarMetrics() {
  const [metrics, setMetrics] = useState<ScholarMetrics>({
    citations: fallbackMetrics.citations,
    hIndex: fallbackMetrics.hIndex,
    source: "fallback",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const live = await fetchSemanticScholarMetrics();
        if (!cancelled && live) {
          setMetrics(live);
        }
      } catch {
        // Keep bundled Google Scholar snapshot from scholar-metrics.json.
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { metrics, loading, scholarUrl: personal.links.scholar };
}
