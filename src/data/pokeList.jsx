export const getPokes = async (url) => {
  return new Promise((result, error) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        result(data);
      });
  });
  
};

export const getPokemon = async (url) => {
  return new Promise((result, error) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        result(data);
      });
  });
};

