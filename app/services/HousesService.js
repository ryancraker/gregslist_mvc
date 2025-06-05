import { AppState } from "../AppState.js";
import { House } from "../models/House.js";

class HousesService {
  createHouse(houseData) {
    const newHouse = new House(houseData)
    const houses = AppState.houses
    houses.unshift(newHouse)

    console.log(AppState.houses);
  }

  deleteHouse(houseId) {
    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => house.id == houseId)
    console.log('index to remove is ', houseIndex);

    houses.splice(houseIndex, 1)
  }
}


export const housesService = new HousesService()