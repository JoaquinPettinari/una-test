export const fetchPa11yApi = async (url: string) => {
  const body = {
    url,
  };

  try {
    const response = await fetch("http://localhost:5000/analizar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const results = response.json();
    console.log(results);
    return results;
  } catch (error) {
    return error;
  }
};
