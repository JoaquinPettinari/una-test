import "./AnalyzePage.css";
import Resume from "./Resume";
import PageResults from "./PageResults";
import DocSection from "../DocSection/DocSection";
import { useContext } from "react";
import { AnalizeContext } from "../../Context";

export default function AnalyzePage() {
  const { loading, pa11yResults } = useContext(AnalizeContext);
  return (
    <main className="p-5">
      <DocSection />
      <section className="h-full flex flex-col">
        <div className={`overlay ${!loading && "none"}`}>
          <div className={"loader"} />
        </div>
        <div className={`w-full ${loading && "none"}`}>
          <header className="bg-gray-200 p-8">
            {pa11yResults.ok && (
              <Resume
                isAccessible={pa11yResults.accessible}
                countAprovedIssues={pa11yResults.countAprovedIssues}
              />
            )}
          </header>
          <PageResults pa11yResults={pa11yResults} />
        </div>
      </section>
    </main>
  );
}
