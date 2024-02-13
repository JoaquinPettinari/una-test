import { memo, useMemo } from "react";
import { Pa11y } from "../../utils/api";

interface PageResultsProps {
  pa11yResults: Pa11y;
}

function PageResults({ pa11yResults }: PageResultsProps) {
  const { issueCountByType, data } = pa11yResults;
  const { error, warning, notice } = issueCountByType;
  const issuesResume = useMemo(() => {
    return [
      {
        label: "ERRORES",
        amount: error,
        color: "red",
      },
      {
        label: "ADVERTENCIAS",
        amount: warning,
        color: "#EED202",
      },
      {
        label: "OBSERVACIONES",
        amount: notice,
        color: "#000080",
      },
    ];
  }, [issueCountByType]);

  return (
    <div className="max-w-3xl m-auto mt-10">
      <div className="w-full grid grid-cols-1 gap-3 lg:grid-cols-3">
        {issuesResume.map(({ label, amount, color }) => (
          <div
            className="border-2 w-full rounded-md p-3"
            style={{ borderColor: color }}
          >
            <h3 className="font-medium text-xl text-gray-700">{label}</h3>
            <h4 className="font-medium text-6xl">{amount}</h4>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col ">
        {data.issues.map((issue) => (
          <div>{issue.message}</div>
        ))}
      </div>
    </div>
  );
}

export default memo(PageResults);
