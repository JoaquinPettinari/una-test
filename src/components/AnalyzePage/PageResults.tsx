import { memo } from "react";
import { Pa11y } from "../../utils/api";
import IssueResumeCard from "./IssueResumeCard";
import { usePageResults } from "../../hooks/usePageResults";

interface PageResultsProps {
  pa11yResults: Pa11y;
}

// eslint-disable-next-line react-refresh/only-export-components
function PageResults({ pa11yResults }: PageResultsProps) {
  const { issues, onClickCard, colors, resumeCards } =
    usePageResults(pa11yResults);

  return (
    <div className="max-w-3xl m-auto mt-10 p-8 lg:p-0">
      <div className="w-full grid grid-cols-1 gap-3 sm:grid-cols-3">
        {resumeCards.map((props) => (
          <IssueResumeCard {...props} onClickCard={onClickCard} />
        ))}
      </div>
      <div className="w-full flex flex-col mt-10">
        {issues.map((issue, index) => {
          const border = colors[issue.type].border;
          return (
            <div
              key={index}
              className={`border-2 rounded-md mb-4 p-4 bg-white text-start ${border}`}
            >
              <h2 className="text-lg mb-2">
                <span className="uppercase font-bold">{issue.type}</span>:{" "}
                {issue.message}
              </h2>
              <hr />
              <div className="mt-3 text-gray-500">
                <h5 className="overflow-hidden text-ellipsis">
                  {issue.context}
                </h5>
                <br />
                <h5>{issue.code}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(PageResults);
