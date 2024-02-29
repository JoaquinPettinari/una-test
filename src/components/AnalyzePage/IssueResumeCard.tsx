interface IssueResumeCardProps {
  id: number;
  label: string;
  amount: number;
  color: {
    background: string;
    hover: string;
    border: string;
    selected: boolean;
  };
  onClickCard: (id: number) => void;
}

function IssueResumeCard({
  id,
  label,
  amount,
  color,
  onClickCard,
}: IssueResumeCardProps) {
  return (
    <div
      className={`${color.selected ? color.background : "bg-transparent"} ${
        color.border
      } ${
        color.selected && color.hover
      } border-2 w-full rounded-md p-3 cursor-pointer transition-colors`}
      onClick={() => onClickCard(id)}
    >
      <h3
        className={`font-medium text-xl ${
          color.selected ? "text-white" : "text-gray-700"
        }`}
      >
        {label}
      </h3>
      <h4
        className={`font-medium text-6xl ${
          color.selected ? "text-white" : "text-black"
        }`}
      >
        {amount}
      </h4>
    </div>
  );
}

export default IssueResumeCard;
