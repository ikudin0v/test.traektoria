import React from "react";
import { useData } from "../hooks/useContext";
import { IUseData, IVehicle } from "../interfaces";

interface ITransformVehicleModal {
  vehicle: IVehicle;
  cancel(): any;
}

const TransformVehicleModal = ({ vehicle, cancel }: ITransformVehicleModal) => {
  const { vehicles, setVehicles } = useData() as IUseData;

  const editVehicle = () => {
    let newVehicles: IVehicle[] = vehicles;
    newVehicles.forEach((vh: IVehicle) => {
      if (
        vh.id === vehicle.id &&
        (document.getElementById("name") as HTMLInputElement).value !== "" &&
        (document.getElementById("name") as HTMLInputElement).value !== "" &&
        !isNaN(
          Number((document.getElementById("price") as HTMLInputElement).value)
        )
      ) {
        vh.name = (document.getElementById("name") as HTMLInputElement).value;
        vh.model = (document.getElementById("model") as HTMLInputElement).value;
        vh.price = Number(
          (document.getElementById("price") as HTMLInputElement).value
        );
        setVehicles(newVehicles);
        cancel();
      }
    });
  };

  return (
    <div className="w-fit">
      <div className="flex flex-row justify-between p-1">
        <div className=" font-semibold mx-1 mt-1">{"id:"}</div>
        <div>{vehicle.id}</div>
      </div>
      <div className="flex flex-row justify-between p-1">
        <div className=" font-semibold mx-1 mt-1">{"name:"}</div>
        <input
          id="name"
          type="text"
          placeholder={vehicle.name}
          className="border mt-1 me-1 p-1 rounded-md"
        />
      </div>
      <div className="flex flex-row justify-between p-1">
        <div className=" font-semibold mx-1 mt-1">{"model:"}</div>
        <input
          id="model"
          type="text"
          placeholder={vehicle.model}
          className="border mt-1 me-1 p-1 rounded-md"
        />
      </div>
      <div className="flex flex-row justify-between p-1">
        <div className=" font-semibold mx-1 mt-1">{"year:"}</div>
        <div>{vehicle.year}</div>
      </div>
      <div className="flex flex-row justify-between p-1">
        <div className=" font-semibold mx-1 mt-1">{"color:"}</div>
        <div>{vehicle.color}</div>
      </div>
      <div className="flex flex-row justify-between p-1">
        <div className=" font-semibold mx-1 mt-1">{"price:"}</div>
        <input
          id="price"
          type="text"
          placeholder={vehicle.price.toString()}
          className="border mt-1 me-1 p-1 rounded-md"
        />
      </div>
      <div className="flex flex-row justify-between p-1">
        <div className=" font-semibold mx-1 mt-1">{"latitude:"}</div>
        <div>{vehicle.latitude}</div>
      </div>
      <div className="flex flex-row justify-between p-1">
        <div className=" font-semibold mx-1 mt-1">{"longitude:"}</div>
        <div>{vehicle.longitude}</div>
      </div>

      <div className="flex flex-row justify-around">
        <button
          className="border rounded-lg w-1/4 m-2 hover:bg-slate-200"
          onClick={() => editVehicle()}
        >
          ОК
        </button>
        <button
          className="border rounded-lg w-1/4 m-2 hover:bg-slate-200"
          onClick={() => cancel()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TransformVehicleModal;
