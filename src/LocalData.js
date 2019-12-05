/**
 * The local data that the Firebase data originated from
 * @type {{journeysHeadings: *[], journeys: *[], servicesHeadings: *[], vehicles: *[], bookingsDefaultRecord: {bookingStartDate: string, dateCreated: string, dateLastUpdated: string, bookingType: string, bookingEndDate: string, VIN: string, vehicleID: string, bookingID: string, odometerAtStart: number}, refuelsHeadings: *[], services: *[], journeysDefaultRecord: {journeyEndDateTime: string, dateCreated: string, dateLastUpdated: string, journeyStartDateTime: string, VIN: string, vehicleID: string, odometerAtEnd: number, journeyID: string, journeyEndLocation: string, bookingID: string, journeyStartLocation: string, odometerAtStart: number}, refuelsDefaultRecord: {dateCreated: string, dateLastUpdated: string, fuelPrice: number, fuelQuantity: number, VIN: string, vehicleID: string, refuelID: string, bookingID: string}, _pages: [string, string, string, string, string], vehiclesHeadings: *[], refuels: *[], vehiclesDefaultRecord: {odometer: number, fuelCapacity: number, kilometersPerService: number, dateManufactured: number, weight: number, manufacturer: string, dateLastServiced: number, fuelEconomy: number, registrationNumber: string, datePurchased: string, VIN: string, model: string, vehicleID: string, requiresServicing: string}, servicesDefaultRecord: {date: string, serviceLocation: string, odometer: number, VIN: string, vehicleID: string, serviceID: string}, bookings: *[], bookingsHeadings: *[]}}
 */
export const localData = {
  pages: [ "contacts" ],
  // searchStr: "",
  dark: false,
  lastSortedArrayAndField: "",

  contacts:[
    {
      givenName:"Steve",
      familyName:"Johnson",
      company:"",
      contactType:"Friend",
      email:"steve.johnson@gmail.com",
      mobile:"1111222233",
      homePhone:"",
      contactID: "1",
    },
    {
      givenName:"Hilary",
      familyName:"Kirk",
      company:"Hilary's Fish 'n' Chips",
      contactType:"Work",
      email:"hilary.kirk@gmail.com",
      mobile:"2222333344",
      homePhone:"",
      contactID: "2",
    },
    {
      givenName:"Jeffery",
      familyName:"Yota",
      company:"JeffLifts",
      contactType:"Sport",
      email:"jeff.yota@gmail.com",
      mobile:"3333444455",
      homePhone:"",
      contactID: "3",
    },
  ],
  contactsHeadings:[
    {
      label:"Given Name",
      field:"givenName",
    },
    {
      label:"Family Name",
      field:"familyName",
    },
    {
      label:"Company",
      field:"company",
    },
    {
      label:"Contact Type",
      field:"contactType",
    },
    {
      label:"Email",
      field:"email",
    },
    {
      label:"Mobile",
      field:"mobile",
    },
    {
      label:"Home Number",
      field:"homePhone",
    },
  ],
  contactsDefaultRecord:{
    givenName:"Amy",
    familyName:"Bjorne",
    company:"OfficeWorks",
    contactType:"Work",
    email:"amy.bjorne@gmail.com",
    mobile:"0000111122",
    homePhone:"44448888",
    contactID: "0",
  },
};