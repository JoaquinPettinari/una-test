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

export interface Issue {
  code: string;
  type: string;
  typeCode: number;
  message: string;
  context: null | string;
  selector: string;
  runner: string;
  runnerExtras: unknown;
  parsedPrinciple?: { criterio: string, pauta: number, principio: number}
  guideLinks: string[];
}

interface IssueType {
  error: number;
  warning: number;
  notice: number;
}

interface FetchApiParams {
  url: string;
  actions: string | ArrayBuffer | null | undefined;
}

export const defaultResponse: Pa11y = {
  data: { documentTitle: "", pageUrl: "", issues: [] },
  ok: false,
  issueCountByType: { error: 0, warning: 0, notice: 0 },
  accessible: false,
  countAprovedIssues: 0,
  error: "",
};

export const fetchPa11yApi = async ({
  url,
  actions,
}: FetchApiParams): Promise<Pa11y> => {
  const isTesting = import.meta.env.DEV;
  const useMock = import.meta.env.VITE_USE_MOCK;

  if (isTesting && useMock === "true") {
    return apiResult;
  }
  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/api/analizar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ url, actions }),
    });

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
