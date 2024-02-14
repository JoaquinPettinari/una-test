import UnahurLogo from "../../assets/iso_unahur.png";

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

      <div className="max-w-2xl">
        <h3 className="font-medium text-xl my-1">Objectivo</h3>
        <p>
          Permite identificar problemas de Accesibilidad Web en forma automática
          de acuerdo con la normativa vigente en la Argentina desde septiembre
          de 2019.
        </p>
        <h3 className="font-medium text-xl my-1">Alcance</h3>
        <p>
          Se toma como referencia la norma vigente en Argentina en materia de
          Accesibilidad Web la Disposición Nº 6/2019 de la ONTI (Oficina
          Nacional de Tecnología de la Información). Esta norma establece los
          requisitos de accesibilidad para contenidos web basados en las Pautas
          de Accesibilidad para el Contenido Web (WCAG) en su version 2.0.
        </p>
      </div>
    </header>
  );
};

export default Header;
