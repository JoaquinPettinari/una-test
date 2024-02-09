import { useState } from "react";
import { validateUrl } from "../../utils/link";

const InputTest = () => {
  const [website, setWebsite] = useState({ link: "", isValid: true });

  const validateWeb = () => {
    const isValid = validateUrl(website.link);
    setWebsite((prevState) => ({
      ...prevState,
      isValid,
    }));
    if (isValid) {
      console.log("redirect");
      return;
    }
    console.log("not valid");
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
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">https://</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          value={website.link}
          onChange={(event) =>
            setWebsite((prevState) => ({
              ...prevState,
              link: event.target.value,
            }))
          }
          className="block w-full rounded-md border-0 py-1.5 pl-20 md:pl-16 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="unahur.edu.ar"
        />
      </div>
      <div className="w-full mt-10">
        <button
          className="bg-[--primary-green] border-2 duration-300 text-white p-5 rounded-md text-lg font-bold hover:bg-transparent hover:text-[--primary-green] hover:border-[--primary-green] "
          onClick={validateWeb}
        >
          Evaluar
        </button>
      </div>
    </main>
  );
};

export default InputTest;
