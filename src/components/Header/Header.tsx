import UnahurLogo from "../../assets/iso_unahur.png";

const Header = () => {
  return (
    <header className="flex justify-center items-center flex-col h-52 bg-gray-200">
      <div className="flex items-center">
        <img src={UnahurLogo} alt="Unahur logo" className="h-16" />
        <p className="text-6xl ml-2 font-normal text-gray-600">UNAHUR</p>
      </div>
      <p className="mt-3 text-xl text-gray-600">
        Herramienta de accesibilidad web
      </p>
    </header>
  );
};

export default Header;
