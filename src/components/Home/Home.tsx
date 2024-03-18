import "./Home.css";
import Header from "../Header/Header";
import { AnalizeContext } from "../../Context";
import { useAnalize } from "../../hooks/useAnalize";
import AnalyzePage from "../AnalyzePage/AnalyzePage";

function Home() {
  const props = useAnalize();
  return (
    <AnalizeContext.Provider value={{ ...props }}>
      <Header />
      <AnalyzePage />
    </AnalizeContext.Provider>
  );
}

export default Home;
