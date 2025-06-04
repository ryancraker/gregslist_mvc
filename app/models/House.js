import { generateId } from "../utils/GenerateId.js";

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
}