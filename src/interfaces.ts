export interface IVehicle {
	color: string,
	id: number,
	latitude: number,
	longitude: number,
	model: string,
	name: string,
	price: number,
	year: number,
}

export interface IUseData {
	vehicles: IVehicle[],
	setVehicles: React.Dispatch<React.SetStateAction<IVehicle[]>>
}