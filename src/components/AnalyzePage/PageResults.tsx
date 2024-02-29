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
          return <Issue border={border} issue={issue} key={index} />;
        })}
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(PageResults);
