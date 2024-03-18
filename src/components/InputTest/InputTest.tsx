import { useContext } from "react";
import { AnalizeContext } from "../../Context";

const InputTest = () => {
  const { onChangeURL, onSubmit, website, pa11yResults } =
    useContext(AnalizeContext);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <section className="w-5/6 lg:max-w-96 m-auto mt-7">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="url"
          className="block text-lg font-medium leading-6 text-gray-900"
        >
          Ingrese una URL
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="url"
            id="url"
            value={website.link}
            onChange={(event) => onChangeURL(event.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="http://example.com"
          />
        </div>
        {!website.isValid && <ErrorMessage label={"Url inválida"} />}
        {pa11yResults.error && <ErrorMessage label={pa11yResults.error} />}
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
