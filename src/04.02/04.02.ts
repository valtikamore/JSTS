import {buildingsType, CityType} from "../03/03_02.test";

export function demolishHousesOnTheStreet(city: CityType, happyStreet: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== happyStreet)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<buildingsType>, number: number) {
    return buildings.filter(b => b.staffCount > number)
}
