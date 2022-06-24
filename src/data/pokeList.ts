import { pokeType } from "../context/ApiContext";

type Response = {
  results: {name: string, url: string}[]
}

export const getPokes = async (url: string): Promise<Response> => {
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

export const getPokemon = async (url: string): Promise<pokeType> => {
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
