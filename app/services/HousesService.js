import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { loadState, saveState } from "../utils/Store.js";

class HousesService {
  createHouse(houseData) {
    const newHouse = new House(houseData)
    const houses = AppState.houses
    houses.unshift(newHouse)

    console.log(AppState.houses);
    this.saveHouses()
  }

  deleteHouse(houseId) {
    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => house.id == houseId)
    console.log('index to remove is ', houseIndex);

    houses.splice(houseIndex, 1)

    this.saveHouses()
  }

  saveHouses() {
    saveState('houses', AppState.houses)
  }

  loadHouses() {
    const housesFromLocalStorage = loadState('houses', [House])
    if (housesFromLocalStorage.length == 0) {
      AppState.houses = AppState.houses
    }
    else {
      AppState.houses = housesFromLocalStorage
    }
  }
}


export const housesService = new HousesService()