import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Pa11y, defaultResponse } from "../utils/api";
import { useDebouncedCallback } from "use-debounce";
import { apiResult } from "../utils/mockResult";

function useAnalyzePage() {
  const location = useLocation();
  const urlParam = new URLSearchParams(location.search).get("page");
  const [pa11yResults, setPa11yResultas] = useState<Pa11y>(defaultResponse);
  const [loading, setLoading] = useState(true);

  const debounced = useDebouncedCallback(async (_value) => {
    //const response = await fetchPa11yApi(value);
    const response = apiResult;
    setPa11yResultas(response);
    setLoading(false);
  }, 2000);

  useEffect(() => {
    debounced(urlParam);
  }, [urlParam, debounced]);

  return {
    pa11yResults,
    loading,
  };
}

export { useAnalyzePage };
