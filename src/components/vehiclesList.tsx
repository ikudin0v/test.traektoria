import React from "react";
import { IVehicle } from "../interfaces";
import VehicleCard from "./vehicleCard";
import { IUseData } from "../interfaces";
import { useData } from "../hooks/useContext";
import { sorter } from "../utils/sorter";

const VehiclesList = () => {
  const { vehicles, setVehicles } = useData() as IUseData;

  const sort = (order: string) => {
    switch (order) {
      case "ID":
        setVehicles(sorter(vehicles, "id", "asc"));
        break;
      case "Ascending price":
        setVehicles(sorter(vehicles, "price", "asc"));
        break;
      case "Descending price":
        setVehicles(sorter(vehicles, "price", "desc"));
        break;
      case "Ascending year":
        setVehicles(sorter(vehicles, "year", "asc"));
        break;
      case "Descending year":
        setVehicles(sorter(vehicles, "year", "asc"));
        break;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-center">
        <label htmlFor="sort" className="m-2">
          Sort by:
        </label>
        <select
          name="sort"
          id="sort"
          className="me-5 my-2"
          onChange={(e) => sort(e.target.value)}
        >
          <option value="ID">Id</option>
          <option value="Ascending price">Ascending price</option>
          <option value="Descending price">Descending price</option>
          <option value="Ascending year">Ascending year</option>
          <option value="Descending year">Descending year</option>
        </select>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {vehicles
          ? vehicles.map((vehicle: IVehicle) => (
              <VehicleCard vehicle={vehicle} />
            ))
          : null}
      </div>
    </div>
  );
};

export default VehiclesList;
