"use strict";
import { useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { fetchPa11yApi } from "../../utils/api";
import { useEffect, useState } from "react";

export default function AnalyzePage() {
  const location = useLocation();
  const urlParam = new URLSearchParams(location.search).get("page");
  const [pa11yResults, setPa11yResultas] = useState({});

  const debounced = useDebouncedCallback((value) => {
    setPa11yResultas(fetchPa11yApi(value));
  }, 2000);

  useEffect(() => {
    debounced(urlParam);
  }, [urlParam, debounced]);

  console.log(pa11yResults);

  return <h1>asd</h1>;
}
