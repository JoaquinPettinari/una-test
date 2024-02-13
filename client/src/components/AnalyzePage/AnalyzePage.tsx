import "./AnalyzePage.css";
import InputTest from "../InputTest/InputTest";
import Resume from "./Resume";
import { useAnalyzePage } from "../../hooks/useAnalyzePage";
import PageResults from "./PageResults";

export default function AnalyzePage() {
  const { loading, pa11yResults } = useAnalyzePage();
  console.log(pa11yResults);

  return (
    <div className="h-full flex flex-col">
      <div className={`overlay ${!loading && "none"}`}>
        <div className={"loader"} />
      </div>
      <div className={`w-full ${loading && "none"}`}>
        <div className="bg-gray-200 p-8">
          <InputTest pageUrl={pa11yResults.data.pageUrl} />
          <Resume
            isAccessible={pa11yResults.accessible}
            countAprovedIssues={pa11yResults.countAprovedIssues}
          />
        </div>
        <PageResults pa11yResults={pa11yResults} />
      </div>
    </div>
  );
}
