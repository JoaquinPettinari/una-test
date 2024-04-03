import InputTest from "../InputTest/InputTest";

const Header = () => {
  return (
    <header className="flex justify-center items-center flex-col h-auto p-10 bg-gray-200">
      <div className="flex items-center">
        <p className="text-6xl ml-2 font-normal text-gray-600">AccesiWeb </p>
      </div>
      <h1 className="mt-3 text-2xl text-gray-600">
        Herramienta para analizar accesibilidad de sitios web
      </h1>
      <InputTest />
    </header>
  );
};

export default Header;
