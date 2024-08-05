import { useMemo, useState } from "react";
import { Issue as IssueType } from "../../utils/api";

interface IssueProps {
  issue: IssueType;
  border: string;
}

const principlesName: { [key: number]: string } = {
  1: "Perceptible",
  2: "Operable",
  3: "Comprensible",
  4: "Robusto",
};

function Issue({ issue, border }: IssueProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const principle = useMemo(() => {
    return issue.parsedPrinciple;
  }, [issue.parsedPrinciple]);

  return (
    <article
      className={`border-2 rounded-md mb-4 p-4 bg-white text-start shadow-lg ${border}`}
    >
      <h2 className="text-lg mb-2">
        <span className="uppercase font-bold">{issue.type}</span>:{" "}
        {issue.message}
      </h2>
      <hr />
      <div className="mt-3 text-gray-500">
        <h5 className="overflow-hidden text-ellipsis">{issue.context}</h5>
        <ul>
          <li>
            Principio:{" "}
            {`${issue.parsedPrinciple?.principio} (${
              issue.parsedPrinciple?.principio
                ? principlesName[principle?.principio ?? "0"]
                : 0
            })`}
          </li>
          <li>Pauta: {issue.parsedPrinciple?.pauta}</li>
          <li>Criterio: {issue.parsedPrinciple?.criterio}</li>
        </ul>
      </div>
      <div className="w-full">
        <div className="overflow-hidden">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleAccordion}
          >
            <h5 className="text-gray-500">Guía de Ayuda</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-gray-400 ${
                isExpanded ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <div
            className={`py-2 transition duration-500 ease-in-out ${
              isExpanded ? "" : "hidden"
            }`}
            id="accordionContent"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <ul className="list-disc list-inside">
              {issue.guideLinks.map((link, index) => (
                <li key={index}>
                  <a href={link} className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Issue;
