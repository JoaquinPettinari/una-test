"use strict";
import { useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { fetchPa11yApi } from "../../utils/api";
import { useEffect, useState } from "react";
import "./AnalyzePage.css";

export default function AnalyzePage() {
  const location = useLocation();
  const urlParam = new URLSearchParams(location.search).get("page");
  const [pa11yResults, setPa11yResultas] = useState({});
  const [loading, setLoading] = useState(true);

  const debounced = useDebouncedCallback(async (value) => {
    const response = await fetchPa11yApi(value);
    setPa11yResultas(response);
    setLoading(false);
  }, 2000);

  useEffect(() => {
    debounced(urlParam);
  }, [urlParam, debounced]);

  console.log(pa11yResults);

  return (
    <div className="h-full">
      <div className={`overlay ${!loading && "none"}`}>
        <div className={"loader"} />
      </div>
    </div>
  );
}
