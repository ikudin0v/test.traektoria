import React from "react";
import { useData } from "../hooks/useContext";
import { IUseData, IVehicle } from "../interfaces";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const VehicleMap = () => {
  const { vehicles } = useData() as IUseData;

  return (
    <div className="mb-3 w-full overflow-hidden h-[350px]">
      <YMaps>
        <Map
          state={{ center: [59.93, 30.31], zoom: 10 }}
          width={"100%"}
          height={"100%"}
          modules={["geoObject.addon.balloon"]}
        >
          {vehicles
            ? vehicles.map((vehicle: IVehicle) => (
                <Placemark
                  defaultGeometry={[vehicle.latitude, vehicle.longitude]}
                  options={{
                    preset: "islands#blueCircleDotIcon",
                  }}
                  properties={{
                    balloonContent: [
                      "<div class='flex flex-col'>",
                      "<div class='flex flex-row justify-between'><div class='me-1 font-semibold'>id:</div><div>" +
                        vehicle.id +
                        "</div></div>",
                      "<div class='flex flex-row justify-between'><div class='me-1 font-semibold'>name:</div><div>" +
                        vehicle.name +
                        "</div></div>",
                      "<div class='flex flex-row justify-between'><div class='me-1 font-semibold'>model:</div><div>" +
                        vehicle.model +
                        "</div></div>",
                      "<div class='flex flex-row justify-between'><div class='me-1 font-semibold'>year:</div><div>" +
                        vehicle.year +
                        "</div></div>",
                      "<div class='flex flex-row justify-between'><div class='me-1 font-semibold'>color:</div><div>" +
                        vehicle.color +
                        "</div></div>",
                      "<div class='flex flex-row justify-between'><div class='me-1 font-semibold'>price:</div><div>" +
                        vehicle.price +
                        "</div></div>",
                      "<div class='flex flex-row justify-between'><div class='me-1 font-semibold'>latitude:</div><div>" +
                        vehicle.latitude +
                        "</div></div>",
                      "<div class='flex flex-row justify-between'><div class='me-1 font-semibold'>longitude:</div><div>" +
                        vehicle.longitude +
                        "</div></div>",
                      "</div>",
                    ].join(""),
                  }}
                />
              ))
            : null}
        </Map>
      </YMaps>
    </div>
  );
};

export default VehicleMap;
