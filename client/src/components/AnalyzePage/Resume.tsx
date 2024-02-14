import Check from "../../assets/check.svg";
import Reject from "../../assets/reject.svg";
import "./AnalyzePage.css";

interface ResumeProps {
  isAccessible: boolean;
  countAprovedIssues: number;
}

const accessibilityPage = {
  icon: Check,
  title: "Accesible",
  class: "isAccessible",
  subtitle:
    "Se cumplieron %criterios criterios de un mínimo de 30 de acuerdo con la Disposición ONTI Nº6/2019",
};

const notAccessibilityPage = {
  icon: Reject,
  class: "notAccessible",
  title: "No es accesible",
  subtitle:
    "No se cumplió con el mínimo de 30 criterios de acuerdo con la Disposición ONTI Nº6/2019 teniendo solamente %criterios criterios cumplidos",
};

function Resume({ isAccessible, countAprovedIssues }: ResumeProps) {
  const accessibilityVariables = isAccessible
    ? accessibilityPage
    : notAccessibilityPage;
  return (
    <div
      className={`max-w-3xl flex m-auto mt-9 bg-gray-100 rounded-xl p-7 ${accessibilityVariables.class}`}
    >
      <img
        src={accessibilityVariables.icon}
        alt={`Icono cuando ${accessibilityVariables.title}`}
        className="w-20 h-20"
      />
      <div className="flex flex-col text-start ml-6">
        <h3 className="w-full font-semibold text-2xl">
          {accessibilityVariables.title}
        </h3>
        <h4>
          {accessibilityVariables.subtitle.replace(
            "%criterios",
            countAprovedIssues.toString()
          )}
        </h4>
      </div>
    </div>
  );
}

export default Resume;
