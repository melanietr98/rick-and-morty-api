import { createContext, useState, useEffect, useCallback } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState([]);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [recharge, setRecharge] = useState(false);

  const handleRecharge = useCallback(() => {
    setRecharge(prevRecharge => !prevRecharge);
  }, []);

  const getValue = useCallback((name, filters) => {
    setName(name);
    setRecharge(prevRecharge => !prevRecharge);
    setNextPage("");
    setCharacters([]);
    setFilter(filters);
  }, []);

  const linkConstructor = useCallback(() => {
    let result = "";
    if (filter.length < 0) return result;
    filter.forEach((element) => {
      result = result.concat(`&${element[0]}=${element[1]}`);
    });
    return result;
  }, [filter]);

  useEffect(() => {
    setError(false);
    async function setAllCharacters() {
      let tempCharacters = [...characters];
      let tempNextPage =
        nextPage ||
        `https://rickandmortyapi.com/api/character/?&name=${name}${linkConstructor()}`;
      for (let i = 0; i < 3; i++) {
        try {
          const promise = await fetch(tempNextPage);
          if (promise.status === 404) {
            setError(true);
            break;
          }
          const data = await promise.json();
          const result = data;
          tempNextPage = result.info.next;
          tempCharacters = [...tempCharacters, ...result.results];
          if (result.info.next === null) break;
        } catch (error) {}
      }
      setNextPage(tempNextPage);
      setCharacters(tempCharacters);
    }

    if (nextPage !== null) {
      setAllCharacters();
    }
  }, [recharge, nextPage, name, linkConstructor, characters]);

  return (
    <DataContext.Provider
      value={{
        characters,
        error,
        handleRecharge,
        getValue,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
