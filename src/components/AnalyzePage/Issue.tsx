import { Issue as IssueType } from "../../utils/api";

interface IssueProps {
  issue: IssueType;
  border: string;
}

function Issue({ issue, border }: IssueProps) {
  return (
    <div
      className={`border-2 rounded-md mb-4 p-4 bg-white text-start ${border}`}
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
  );
}

export default Issue;
