import Beginner from "../../assets/0-beginner.svg"
import Title from "./Title";

const DocSection = () => {
    return(
        <section className="max-w-7xl mx-auto mt-20">
            <div className="flex items-center justify-center">
                <img src={Beginner} alt="Beginner icon" className="mr-3" />
                <Title title="Guia para iniciar en Accesibilidad Web" />
            </div>
        </section>
    )
}

export default DocSection;