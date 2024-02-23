import { apiResult } from "./mockResult";

export interface Pa11y {
  data: {
    documentTitle: string;
    pageUrl: string;
    issues: Issue[];
  };
  ok: boolean;
  issueCountByType: IssueType;
  accessible: boolean;
  error?: string;
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
  error: "",
};

export const fetchPa11yApi = async (url: string): Promise<Pa11y> => {
  const isTesting = import.meta.env.DEV;
  const useMock = import.meta.env.VITE_USE_MOCK;

  if (isTesting && useMock === "true") {
    return apiResult;
  }
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/api/analizar?` +
        new URLSearchParams({
          url: url,
        }),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const results: Pa11y = await response.json();
    return results;
  } catch (error) {
    console.log(error);
    return {
      ...defaultResponse,
      error: "Hubo un problema en el servidor: Timeout",
    };
  }
};
