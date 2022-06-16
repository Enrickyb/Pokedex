export const getPokes = async (url: string): Promise<any> => {
  return new Promise((result, error) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        result(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export const getPokemon = async (url: string): Promise<any> => {
  return new Promise((result, error) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        result(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
