import { memo, useMemo, useState } from "react";
import { Pa11y } from "../../utils/api";
import IssueResumeCard from "./IssueResumeCard";

interface PageResultsProps {
  pa11yResults: Pa11y;
}

enum ResumeCards {
  Error = 1,
  Warning = 2,
  Notice = 3,
}

// eslint-disable-next-line react-refresh/only-export-components
function PageResults({ pa11yResults }: PageResultsProps) {
  const [cardsSelected, setCardsSelected] = useState([
    ResumeCards.Error,
    ResumeCards.Warning,
    ResumeCards.Notice,
  ]);

  const onClickCard = (id: number) => {
    if (cardsSelected.includes(id)) {
      setCardsSelected((prevState) =>
        prevState.filter((selectedCard) => selectedCard !== id)
      );
    } else {
      setCardsSelected((prevState) => [...prevState, id]);
    }
  };
  const { issueCountByType, data } = pa11yResults;
  const { error, warning, notice } = issueCountByType;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colors: any = useMemo(
    () => ({
      error: {
        background: "bg-red-500",
        hover: "hover:bg-red-400",
        border: "border-red-500",
        selected: cardsSelected.includes(ResumeCards.Error),
      },
      warning: {
        background: "bg-yellow-500",
        hover: "hover:bg-yellow-400",
        border: "border-yellow-500",
        selected: cardsSelected.includes(ResumeCards.Warning),
      },
      notice: {
        background: "bg-blue-800",
        hover: "hover:bg-blue-700",
        border: "border-blue-800",
        selected: cardsSelected.includes(ResumeCards.Notice),
      },
    }),
    [cardsSelected]
  );

  const cards = useMemo(
    () => [
      {
        id: ResumeCards.Error,
        label: "ERRORES",
        amount: error,
        color: colors.error,
      },
      {
        id: ResumeCards.Warning,
        label: "ADVERTENCIAS",
        amount: warning,
        color: colors.warning,
      },
      {
        id: ResumeCards.Notice,
        label: "AVISOS",
        amount: notice,
        color: colors.notice,
      },
    ],
    [colors, error, warning, notice]
  );

  return (
    <div className="max-w-3xl m-auto mt-10 p-8 lg:p-0">
      <div className="w-full grid grid-cols-1 gap-3 sm:grid-cols-3">
        {cards.map((props) => (
          <IssueResumeCard {...props} onClickCard={onClickCard} />
        ))}
      </div>
      <div className="w-full flex flex-col mt-4 ">
        {data.issues.map((issue, index) => (
          <div
            key={index}
            className={`border-2 rounded-md mb-4 p-4 bg-white text-start`}
            style={{ borderColor: colors[issue.type]?.border }}
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

// eslint-disable-next-line react-refresh/only-export-components
export default memo(PageResults);
