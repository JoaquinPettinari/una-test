import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Pa11y, defaultResponse, fetchPa11yApi } from "../utils/api";
import { useDebouncedCallback } from "use-debounce";

function useAnalyzePage() {
  const location = useLocation();
  const urlParam = new URLSearchParams(location.search).get("url");
  const [pa11yResults, setPa11yResultas] = useState<Pa11y>(defaultResponse);
  const [loading, setLoading] = useState(true);

  const debounced = useDebouncedCallback(async (value) => {
    const response = await fetchPa11yApi(value);
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
