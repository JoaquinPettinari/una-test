export interface Pa11y {
  data: {
    documentTitle: string;
    pageUrl: string;
    issues: Issue[];
  };
  ok: boolean;
  issueCountByType: IssueType;
  accessible: boolean;
  countAprovedIssues: number;
}

interface Issue {
  code: string;
  type: string;
  typeCode: number;
  message: string;
  context: string;
  selector: string;
  runner: string;
  runnerExtras: unknown;
}

interface IssueType {
  error: number;
  warning: number;
  notice: number;
}

export const defaultResponse = {
  data: { documentTitle: "", pageUrl: "", issues: [] },
  ok: false,
  issueCountByType: { error: 0, warning: 0, notice: 0 },
  accessible: false,
  countAprovedIssues: 0,
};

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
    return defaultResponse;
  }

  const results: Pa11y = await response.json();
  return results;
};
