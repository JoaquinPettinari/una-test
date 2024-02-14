import { memo, useMemo } from "react";
import { Pa11y } from "../../utils/api";

interface PageResultsProps {
  pa11yResults: Pa11y;
}

const codeTypeColor: any = {
  error: "red",
  warning: "#EED202",
  notice: "#000080",
};

function PageResults({ pa11yResults }: PageResultsProps) {
  const { issueCountByType, data } = pa11yResults;
  const { error, warning, notice } = issueCountByType;
  const issuesResume = useMemo(() => {
    return [
      {
        label: "ERRORES",
        amount: error,
        color: codeTypeColor.error,
      },
      {
        label: "ADVERTENCIAS",
        amount: warning,
        color: codeTypeColor.warning,
      },
      {
        label: "OBSERVACIONES",
        amount: notice,
        color: codeTypeColor.notice,
      },
    ];
  }, [issueCountByType]);

  return (
    <div className="max-w-3xl m-auto mt-10">
      <div className="w-full grid grid-cols-1 gap-3 lg:grid-cols-3">
        {issuesResume.map(({ label, amount, color }, index) => (
          <div
            key={index}
            className="border-2 w-full rounded-md p-3"
            style={{ borderColor: color }}
          >
            <h3 className="font-medium text-xl text-gray-700">{label}</h3>
            <h4 className="font-medium text-6xl">{amount}</h4>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col mt-4 ">
        {data.issues.map((issue, index) => (
          <div
            key={index}
            className="border-2 mb-4 p-4 bg-white text-start"
            style={{ borderColor: codeTypeColor[issue.type] }}
          >
            <h2 className="text-lg mb-2">
              <span className="uppercase font-bold">{issue.type}</span>:{" "}
              {issue.message}
            </h2>
            <hr />
            <div className="mt-3 text-gray-500">
              <h5 className="overflow-hidden text-ellipsis">{issue.context}</h5>
              <br />
              <h5>{issue.code}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(PageResults);
