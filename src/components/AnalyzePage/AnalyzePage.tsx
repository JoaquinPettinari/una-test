import "./AnalyzePage.css";
import Resume from "./Resume";
import PageResults from "./PageResults";
import DocSection from "../DocSection/DocSection";
import { useContext } from "react";
import { AnalizeContext } from "../../Context";
import { Else, If, Then } from "react-if";
import Skeletons from "./Skeletons";

export default function AnalyzePage() {
  const { loading, pa11yResults } = useContext(AnalizeContext);
  return (
    <main className="p-5 m-auto max-w-7xl">
      <If condition={!pa11yResults.ok && !loading}>
        <Then>
          <DocSection />
        </Then>
        <Else>
          <section className="h-full w-full flex flex-col">
            {loading ? (
              <Skeletons />
            ) : (
              <div className="w-full">
                <Resume
                  isAccessible={pa11yResults.accessible}
                  countAprovedIssues={pa11yResults.countAprovedIssues}
                />
                <PageResults pa11yResults={pa11yResults} />
              </div>
            )}
          </section>
        </Else>
      </If>
    </main>
  );
}
