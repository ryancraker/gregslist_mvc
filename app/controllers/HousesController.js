import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";

export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    this.drawHouses()
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
    console.log('house submitted', houseData);

    housesService.createHouse(houseData)
    formElem.reset()
  }
}