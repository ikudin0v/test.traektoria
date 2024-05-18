import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { IVehicle } from "../interfaces";

interface IContextProvider {
  children: React.ReactNode;
}

const Context = React.createContext({});

export const useData = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }: IContextProvider) => {
  const [vehicles, setVehicles] = useState<IVehicle[] | undefined>();

  async function getData() {
    const { data } = await axios.get("https://test.tspb.su/test-task/vehicles");

    setVehicles(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Context.Provider
      value={{
        vehicles,
        setVehicles,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
