"use strict";
import { useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
//import { fetchPa11yApi } from "../../utils/api";
import { useEffect, useState } from "react";
import "./AnalyzePage.css";
import InputTest from "../InputTest/InputTest";
import { apiResult } from "../../utils/mockResult";
import { Pa11y, defaultResponse } from "../../utils/api";
import Resume from "./Resume";

export default function AnalyzePage() {
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

  console.log(pa11yResults);

  return (
    <div className="h-full flex">
      <div className={`overlay ${!loading && "none"}`}>
        <div className={"loader"} />
      </div>
      <div className="w-full bg-gray-200 p-8">
        <InputTest pageUrl={pa11yResults.data.pageUrl} />
        <Resume
          isAccessible={pa11yResults.accessible}
          countAprovedIssues={pa11yResults.countAprovedIssues}
        />
      </div>
    </div>
  );
}
