import { ChangeEvent, useContext, useState } from "react";
import { AnalizeContext } from "../../Context";

const InputTest = () => {
  const {
    onChangeURL,
    onSubmit,
    website,
    pa11yResults,
    selectedFile,
    setSelectedFile,
  } = useContext(AnalizeContext);
  const [isFileVisible, setIsFileVisible] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSubmit();
  };

  const handleCheckboxChange = () => {
    setIsFileVisible((prevState) => !prevState);
    if (isFileVisible) setSelectedFile(null);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <section className="w-5/6 lg:max-w-96 m-auto mt-7">
      <form onSubmit={handleSubmit}>
        <label className="block text-lg font-medium leading-6 text-gray-900">
          Ingrese una URL
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            data-testid="cypress-input-test"
            name="url"
            value={website.link}
            onChange={(event) => onChangeURL(event.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="http://example.com"
          />
        </div>
        {!website.isValid && <ErrorMessage label={"Url inválida"} />}
        {pa11yResults.error && <ErrorMessage label={pa11yResults.error} />}
        <section className="mt-3 flex flex-col items-start">
          <header className="mb-3">
            <input
              type="checkbox"
              id="toggleFileInput"
              className="mr-2"
              checked={isFileVisible}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="toggleFileInput" className="text-sm">
              Agregar "actions"
            </label>
          </header>
          {isFileVisible && (
            <>
              <div className="flex items-center">
                <label
                  htmlFor="uploadFile1"
                  className="bg-white hover:bg-gray-100 text-white border border-gray-400 text-sm px-4 py-2.5 outline-none rounded-full w-max cursor-pointer mx-auto flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 fill-black inline"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                      data-original="#000000"
                    />
                  </svg>
                  <input
                    type="file"
                    id="uploadFile1"
                    className="hidden"
                    accept=".txt"
                    onChange={handleFileChange}
                  />
                </label>
                <span className="ml-2">
                  {selectedFile?.name ?? "Subir archivo"}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Solo archivos .txt son válidos
              </p>
            </>
          )}
        </section>
        <div className="w-full mt-6">
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Analizar
          </button>
        </div>
      </form>
    </section>
  );
};

const ErrorMessage = ({ label }: { label: string }) => (
  <h3 className="text-xl text-red-600 mt-2">{label}</h3>
);

export default InputTest;
