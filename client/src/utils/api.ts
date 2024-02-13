interface Pa11y {
  data: {
    documentTitle: string;
    pageUrl: string;
    issues: Issues[];
  };
  ok: boolean;
}

interface Issues {
  code: string;
  type: string;
  typeCode: number;
  message: string;
  context: string;
  selector: string;
  runner: string;
  runnerExtras: unknown;
}

export const fetchPa11yApi = async (url: string): Promise<Pa11y> => {
  const body = {
    url,
  };

  const response = await fetch("http://localhost:5000/analizar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return { data: { documentTitle: "", pageUrl: "", issues: [] }, ok: false };
  }

  const results: Pa11y = await response.json();
  return results;
};
