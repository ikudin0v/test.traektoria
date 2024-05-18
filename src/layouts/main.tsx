import React from "react";
import VehiclesList from "../components/vehiclesList";
import VehicleMap from "../components/map";

const Main = () => {
  return (
    <div className="flex flex-col lg:w-2/3 mx-auto p-5 bg-slate-100 w-full">
      <div className="w-full text-center text-3xl mb-2">Vehicles on map:</div>
      <VehicleMap />
      <div className="w-full text-center text-3xl mb-2">List of Vehicles:</div>
      <VehiclesList />
    </div>
  );
};

export default Main;
