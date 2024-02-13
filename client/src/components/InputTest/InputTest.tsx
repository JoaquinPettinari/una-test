import { useState } from "react";
import { validateUrl } from "../../utils/link";
import { useNavigate } from "react-router-dom";

interface InputTestProps {
  pageUrl?: string;
}

const InputTest = ({ pageUrl }: InputTestProps) => {
  const [website, setWebsite] = useState({
    link: pageUrl || "",
    isValid: true,
  });

  const navigate = useNavigate();
  const validateWeb = () => {
    const isValid = validateUrl(website.link);
    setWebsite((prevState) => ({
      ...prevState,
      isValid,
    }));
    if (isValid) {
      navigate(`analizar?page=${encodeURIComponent(website.link)}`);
      return;
    }

    setWebsite((prevState) => ({ ...prevState, isValid: false }));
  };
  return (
    <main className="w-5/6 lg:max-w-96 m-auto mt-7">
      <label
        htmlFor="price"
        className="block text-lg font-medium leading-6 text-gray-900"
      >
        Enlace a tu web
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          defaultValue={pageUrl}
          onChange={(event) =>
            setWebsite((prevState) => ({
              ...prevState,
              link: event.target.value,
            }))
          }
          className="block w-full rounded-md border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="unahur.edu.ar"
        />
      </div>
      {!website.isValid && (
        <h3 className="text-xl text-red-600 mt-2">Url inválida</h3>
      )}
      <div className="w-full mt-6">
        <button
          className="bg-[--primary-green] border-2 duration-300 text-white p-5 rounded-md text-lg font-bold hover:bg-transparent hover:text-[--primary-green] hover:border-[--primary-green] "
          onClick={validateWeb}
        >
          Analizar
        </button>
      </div>
    </main>
  );
};

export default InputTest;
