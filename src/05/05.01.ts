import {buildingsType, housesType} from "../03/03_02.test";

export const getStreetsTitlesOfGovermantsBuildings = (buildings: Array<buildingsType>) => {
    return buildings.map(b => b.address.street.title)
}
export const getStreetsTitleOfHouses = (houses: Array<housesType>) => {
    return houses.map(h => h.address.street.title)
}
export const createMesssages = (houses: Array<housesType>) => {
    return  houses.map(h => `Hello guys from ${h.address.street.title}`)
}