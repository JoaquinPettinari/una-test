import "./Home.css";
import Header from "../Header/Header";
import InputTest from "../InputTest/InputTest";
import DocSection from "../DocSection/DocSection";

function Home() {
  return (
    <>
      <Header />
      <main className="p-5">
        <InputTest />
        <DocSection />
      </main>
    </>
  );
}

export default Home;
