import { useState } from "react";
import { validateUrl } from "../utils/link";
import { Pa11y, defaultResponse, fetchPa11yApi } from "../utils/api";

function useAnalize() {
  const [pa11yResults, setPa11yResults] = useState<Pa11y>(defaultResponse);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [website, setWebsite] = useState({
    link: "",
    isValid: true,
  });

  const onChangeURL = (link: string) => {
    setWebsite((prevState) => ({
      ...prevState,
      link,
    }));
  };

  const onSubmit = async () => {
    const isValid = validateUrl(website.link);
    setWebsite((prevState) => ({
      ...prevState,
      isValid,
    }));

    if (isValid) {
      setLoading(true);
      try {
        await getPa11yData(website.link);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    }
  };

  const getPa11yData = async (url: string) => {
    try {
      let text: string | ArrayBuffer | null | undefined;
      const reader = new FileReader();
      reader.onload = async (e) => {
        text = e?.target?.result;
      };
      if (selectedFile) {
        reader.readAsText(selectedFile as Blob);
      }
      const response = await fetchPa11yApi({ url, actions: text });
      setPa11yResults(response);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return {
    onChangeURL,
    onSubmit,
    website,
    loading,
    pa11yResults,
    selectedFile,
    setSelectedFile,
  };
}

export { useAnalize };
