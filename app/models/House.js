import { generateId } from "../utils/GenerateId.js";

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = parseInt(data.sqft)
    this.price = parseInt(data.price)
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.listedAt = data.listedAt == undefined ? new Date() : new Date(data.listedAt)
  }

  get listingHTMLTemplate() {
    return `
    <div class="col-md-6 mb-2">
          <div class="position-relative house-border">
            <img class="house-img" src="${this.imgUrl}" alt="${this.description}">
            <span class="house-price bg-dark text-success px-2 fs-3">$${this.priceWithCommas}</span>
            <div>
              <h3>${this.description}</h3>
              <div class="d-flex justify-content-between px-1">
                <p>constructed in ${this.year}</p>
                <p>${this.sqftWithCommas} sqft</p>
              </div>
              <div class="d-flex justify-content-between px-1">
                <p>${this.bedrooms} bedrooms</p>
                <p>${this.bathrooms} bathrooms</p>
              </div>
              <div>
              <p>
              Listed on ${this.listedAtDateString}
              </p>
              </div>
            </div>
          </div>
        </div>
        `
  }

  get listedAtDateString() {
    return this.listedAt.toLocaleDateString('en-us', {
      month: 'long', day: '2-digit', year: 'numeric'
    })
  }

  get priceWithCommas() {
    return this.price.toLocaleString()
  }

  get sqftWithCommas() {
    return this.sqft.toLocaleString()
  }
}