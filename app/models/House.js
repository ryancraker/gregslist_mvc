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
    this.imgUrl = data.imgUrl || 'https://plus.unsplash.com/premium_vector-1697729754328-5ebdebd57ddc?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
              <button onclick="app.housesController.confirmDelete('${this.id}')" class="btn btn-outline-danger mdi mdi-trash-can">Delete</button>
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