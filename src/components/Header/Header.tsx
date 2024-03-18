import UnahurLogo from "../../assets/iso_unahur.png";
import InputTest from "../InputTest/InputTest";

const Header = () => {
  return (
    <header className="flex justify-center items-center flex-col h-auto p-10 bg-gray-200">
      <div className="flex items-center">
        <img src={UnahurLogo} alt="Unahur logo" className="h-16" />
        <p className="text-6xl ml-2 font-normal text-gray-600">UNAHUR</p>
      </div>
      <h1 className="mt-3 text-2xl text-gray-600">
        Herramienta para analizar accesibilidad de sitios web
      </h1>
      <InputTest />
    </header>
  );
};

export default Header;
