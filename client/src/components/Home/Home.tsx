import "./Home.css";
import Header from "../Header/Header";
import InputTest from "../InputTest/InputTest";
import DocSection from "../DocSection/DocSection";

function Home() {
  return (
    <>
      <Header />
      <div className="p-5">
        <InputTest />
        <DocSection />
      </div>
    </>
  );
}

export default Home;
