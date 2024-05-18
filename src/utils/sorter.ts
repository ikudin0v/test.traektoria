import { IVehicle } from "../interfaces";

export function sorter (array:IVehicle[], key:string, order:string) {
	return [...array].sort(function(a, b)
	{
		if (order === "asc") {
			var x = a[key as keyof IVehicle]; var y = b[key as keyof IVehicle];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		} else {
			var x = a[key as keyof IVehicle]; var y = b[key as keyof IVehicle];
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		}
	});
}