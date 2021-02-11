import {CityType} from "../03/03_02.test";
import {createMesssages, getStreetsTitleOfHouses, getStreetsTitlesOfGovermantsBuildings} from "./05.01";


let city:CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id:1,buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                id:2,buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                id:3,buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 2e5,
                staffCount: 2e2,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 5e5,
                staffCount: 1e3,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }],
        citizenNumber:1e6
    }

})
test('list of streets titles of govermants buildings', () => {
    let streetsNames = getStreetsTitlesOfGovermantsBuildings (city.governmentBuildings)
    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe('Central Str')
    expect(streetsNames[1]).toBe('South Str')
})
test('list of streets titles', () => {
    let houseNames = getStreetsTitleOfHouses (city.houses)
    expect(houseNames.length).toBe(3)
    expect(houseNames[0]).toBe('White street')
    expect(houseNames[1]).toBe('Happy street')
    expect(houseNames[2]).toBe('Happy street')
})
test('create greeting messages for streets', () => {
    let messages = createMesssages(city.houses)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
})