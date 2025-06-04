import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  houses = [
    new House({
      year: 1995,
      bedrooms: 3,
      bathrooms: 1,
      sqft: 900,
      price: 500000,
      description: 'Yellow Mid-century modern home with gravel walkways',
      imgUrl: 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D'
    }),
    new House({
      year: 2010,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1200,
      price: 2500000,
      description: 'Striking Black and white single family home with abstract architecture',
      imgUrl: 'https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D'
    }),
    new House({
      year: 1885,
      bedrooms: 1,
      bathrooms: 0,
      sqft: 500,
      price: 850000,
      description: 'Lovely studio home with plenty of space to raise a family',
      imgUrl: 'https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDI%3D'
    }),
  ]

  cars = [
    new Car(
      {
        make: 'mazda',
        model: 'miata',
        year: 1996,
        color: 'red',
        mileage: 200000,
        imgUrl: 'https://images.unsplash.com/photo-1725199583250-9f59567ba965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pYXRhfGVufDB8fDB8fHwy',
        isManualTransmission: true,
        cylinders: 4,
        price: 2000,
        fuelType: 'gas',
        listedAt: '12/12/2020',
        titleStatus: 'clean'
      }
    ),
    new Car(
      {
        make: 'vw',
        model: 'beetle',
        year: 1960,
        color: 'blue',
        mileage: 300000,
        imgUrl: 'https://images.unsplash.com/photo-1531850959096-cfbb6f26c5a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dnclMjBiZWV0bGV8ZW58MHx8MHx8fDI%3D',
        isManualTransmission: true,
        cylinders: 4,
        price: 40000,
        fuelType: 'gas',
        listedAt: '12/12/2010',
        titleStatus: 'rebuilt'
      }
    ),
    new Car(
      {
        make: 'bat',
        model: 'mobile',
        year: 1968,
        color: 'black',
        mileage: 2000,
        imgUrl: 'https://images.unsplash.com/photo-1671877077293-ae670e67f2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bW9iaWxlfGVufDB8fDB8fHwy',
        isManualTransmission: false,
        cylinders: 10,
        price: 4200000,
        fuelType: 'batfuel',
        listedAt: '6/8/2024'
      }
    ),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())