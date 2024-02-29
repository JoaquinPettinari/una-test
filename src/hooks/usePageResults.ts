import { useMemo, useState } from "react";
import { Pa11y } from "../utils/api";

enum ResumeCards {
  Error = 1,
  Warning = 2,
  Notice = 3,
}

function usePageResults(pa11yResults: Pa11y) {
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

  const issues = useMemo(() => {
    return data.issues.filter((issue) =>
      cardsSelected.includes(issue.typeCode)
    );
  }, [data, cardsSelected]);

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

  const resumeCards = useMemo(
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

  const downloadReport = () => {
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Reporte_${data.pageUrl}.json`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return {
    onClickCard,
    resumeCards,
    colors,
    issues,
    downloadReport,
  };
}

export { usePageResults };
