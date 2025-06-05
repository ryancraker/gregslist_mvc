import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";

export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    housesService.loadHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    const houseListingElem = document.getElementById('house-listings')
    let housesHTML = ''
    houses.forEach(house => housesHTML += house.listingHTMLTemplate)
    houseListingElem.innerHTML = housesHTML
  }

  submitHouse() {
    event.preventDefault()
    const formElem = event.target
    const houseData = getFormData(formElem)

    housesService.createHouse(houseData)
    formElem.reset()
  }

  confirmDelete(houseId) {
    const confirmed = window.confirm('Are you sure you want to permanently delete this home?')
    if (!confirmed) { return }

    console.log('deleting house with the id of ', houseId);
    housesService.deleteHouse(houseId)
  }
}