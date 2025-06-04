import { AppState } from "../AppState.js";

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
}