import { memo } from "react";
import { Pa11y } from "../../utils/api";
import IssueResumeCard from "./IssueResumeCard";
import { usePageResults } from "../../hooks/usePageResults";
import Issue from "./Issue";

interface PageResultsProps {
  pa11yResults: Pa11y;
}

// eslint-disable-next-line react-refresh/only-export-components
function PageResults({ pa11yResults }: PageResultsProps) {
  const { issues, onClickCard, colors, resumeCards, downloadReport } =
    usePageResults(pa11yResults);

  return (
    <div className="max-w-3xl m-auto mt-5 p-8 lg:p-0">
      <div className="text-start mb-5">
        {issues && (
          <button
            onClick={downloadReport}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Descargar reporte</span>
          </button>
        )}
      </div>
      <div className="w-full grid grid-cols-1 gap-3 sm:grid-cols-3">
        {resumeCards.map((props, index) => (
          <IssueResumeCard {...props} key={index} onClickCard={onClickCard} />
        ))}
      </div>
      <div className="w-full flex flex-col mt-10">
        {issues.map((issue, index) => {
          const border = colors[issue.type].border;
          return <Issue border={border} issue={issue} key={index} />;
        })}
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(PageResults);
