import Beginner from "../../assets/0-beginner.svg";
import Card from "./Card";
import Title from "./Title";

const DocSection = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20">
      <div className="flex items-center justify-center">
        <img src={Beginner} alt="Beginner icon" className="mr-3" />
        <Title title="Guia para iniciar en Accesibilidad Web" />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-10">
        <Card>
          <p>A</p>
        </Card>
        <div className="row-span-2">
          <Card>
            <p>B</p>
          </Card>
        </div>
        <Card>
          <p>C</p>
        </Card>
      </div>
    </section>
  );
};

export default DocSection;
