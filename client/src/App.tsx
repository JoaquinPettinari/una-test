import "./App.css";
import Header from "./components/Header/Header";
import InputTest from "./components/InputTest/InputTest";
import DocSection from "./components/DocSection/DocSection";

function App() {
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

export default App;
