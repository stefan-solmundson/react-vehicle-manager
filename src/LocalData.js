/**
 * The local data that the Firebase data originated from
 * @type {{journeysHeadings: *[], journeys: *[], servicesHeadings: *[], vehicles: *[], bookingsDefaultRecord: {bookingStartDate: string, dateCreated: string, dateLastUpdated: string, bookingType: string, bookingEndDate: string, VIN: string, vehicleID: string, bookingID: string, odometerAtStart: number}, refuelsHeadings: *[], services: *[], journeysDefaultRecord: {journeyEndDateTime: string, dateCreated: string, dateLastUpdated: string, journeyStartDateTime: string, VIN: string, vehicleID: string, odometerAtEnd: number, journeyID: string, journeyEndLocation: string, bookingID: string, journeyStartLocation: string, odometerAtStart: number}, refuelsDefaultRecord: {dateCreated: string, dateLastUpdated: string, fuelPrice: number, fuelQuantity: number, VIN: string, vehicleID: string, refuelID: string, bookingID: string}, _pages: [string, string, string, string, string], vehiclesHeadings: *[], refuels: *[], vehiclesDefaultRecord: {odometer: number, fuelCapacity: number, kilometersPerService: number, dateManufactured: number, weight: number, manufacturer: string, dateLastServiced: number, fuelEconomy: number, registrationNumber: string, datePurchased: string, VIN: string, model: string, vehicleID: string, requiresServicing: string}, servicesDefaultRecord: {date: string, serviceLocation: string, odometer: number, VIN: string, vehicleID: string, serviceID: string}, bookings: *[], bookingsHeadings: *[]}}
 */
export const localData = {
  pages: [ "vehicles", "services", "bookings", "journeys", "refuels" ],
  // searchStr: "",
  dark: false,
  lastSortedArrayAndField: "",

  vehicles: [
    {
      vehicleID: "Jeff's Jeep",
      VIN: "ExampleVIN",
      manufacturer: "Jeep",
      model: "Wrangler (JK)",
      odometer: 142000,
      requiresServicing: "Yes",
      dateManufactured: 2017,
      datePurchased: "2017/05/20",
      dateLastServiced: -1,
      // kilometersSinceServiced: 2800000,
      kilometersPerService: 90000,
      fuelEconomy: -1,
      fuelCapacity: 104,
      weight: 1.45,
      registrationNumber: "1ABC-123",
    },
    {
      vehicleID: "Carol's Corolla",
      VIN: "ExampleVIN",
      manufacturer: "Toyota",
      model: "Corolla (E160)",
      odometer: 20000,
      requiresServicing: "No",
      dateManufactured: 2014,
      datePurchased: "2018/05/10",
      dateLastServiced: -1,
      // kilometersSinceServiced: 2000,
      kilometersPerService: 110000,
      fuelEconomy: -1,
      fuelCapacity: 82.5,
      weight: 1.08,
      registrationNumber: "1ABC-123",
    },
    {
      vehicleID: "Carol's 2nd Corolla",
      VIN: "ExampleVIN",
      manufacturer: "Toyota",
      model: "Corolla (E160)",
      odometer: 20000,
      requiresServicing: "No",
      dateManufactured: 2014,
      datePurchased: "2018/06/04",
      dateLastServiced: -1,
      // kilometersSinceServiced: 2000,
      kilometersPerService: 110000,
      fuelEconomy: -1,
      fuelCapacity: 82.5,
      weight: 1.08,
      registrationNumber: "1ABC-123",
    }
  ],
  vehiclesHeadings: [
    {
      label: "Vehicle ID",
      field: "vehicleID",
    },
    {
      label: "VIN",
      field: "VIN",
    },
    {
      label: "Model",
      field: `model`,
    },
    {
      label: "Make",
      field: "manufacturer",
    },
    {
      label: "Odometer (km)",
      field: "odometer",
    },
    {
      label: "Requires Servicing",
      field: "requiresServicing",
    },
    {
      label: "Date Manufactured",
      field: "dateManufactured",
    },
    {
      label: "Date Purchased",
      field: "datePurchased",
    },
    {
      label: "Last Service",
      field: "dateLastServiced",
    },
    // {
    //   label: "kms since Last Service",
    //   field: "kilometersSinceServiced",
    // },
    {
      label: "kms per Service",
      field: "kilometersPerService",
    },
    {
      label: "Fuel Economy",
      field: "fuelEconomy",
    },
    {
      label: "Fuel Capacity (L)",
      field: "fuelCapacity",
    },
    {
      label: "Weight (T)",
      field: "weight",
    },
    {
      label: "Reg. No.",
      field: "registrationNumber",
    },
  ],
  vehiclesDefaultRecord: {
    vehicleID: "Jimbo's Jeep",
    VIN: "ExampleVIN",
    manufacturer: "Jeep",
    model: "Wrangler (JK)",
    odometer: 280000,
    requiresServicing: "Yes",
    dateManufactured: 2017,
    datePurchased: "2017/05/20",
    dateLastServiced: -1,
    // kilometersSinceServiced: 2800000,
    kilometersPerService: 90000,
    fuelEconomy: -1,
    fuelCapacity: 104,
    weight: 1.45,
    registrationNumber: "1ABC-123",
  },

  services: [
    {
      vehicleID: "Jeff's Jeep",
      VIN: "ExampleVIN",
      serviceID: "001-IJ454",
      odometer: 142000,
      date: "2019/04/03",
      serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
    },
    {
      vehicleID: "Jeff's Jeep",
      VIN: "ExampleVIN",
      serviceID: "002-FE654",
      odometer: 74000,
      date: "2015/06/01",
      serviceLocation: "Autobahn Mechanical and Electrical Services Victoria Park",
    },
    {
      vehicleID: "Carol's Corolla",
      VIN: "ExampleVIN",
      serviceID: "001-AA000",
      odometer: 14000,
      date: "2018/08/22",
      serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
    },
    {
      vehicleID: "Carol's 2nd Corolla",
      VIN: "ExampleVIN",
      serviceID: "001-AA000",
      odometer: 1300,
      date: "2018/08/23",
      serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
    },
  ],
  servicesHeadings: [
    {
      label: "Vehicle ID",
      field: "vehicleID",
    },
    {
      label: "VIN",
      field: "VIN",
    },
    {
      label: "Service ID",
      field: "serviceID",
    },
    {
      label: "Odometer Reading",
      field: "odometer",
    },
    {
      label: "Date Last Serviced",
      field: "date",
    },
    {
      label: "Location of Last Service",
      field: "serviceLocation",
    },
  ],
  servicesDefaultRecord: {
    vehicleID: "Jimbo's Jeep",
    VIN: "ExampleVIN",
    serviceID: "051-IJ454",
    odometer: 142000,
    date: "2019/04/03",
    serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
  },

  bookings: [
    {
      vehicleID: "Jeff's Jeep",
      VIN: "ExampleVIN",
      bookingID: "002-EE037",
      bookingStartDate: "2019/04/06",
      bookingEndDate: "2019/04/09",
      odometerAtStart: 74000,
      bookingType: "Per Day",
      dateCreated: "2019/04/06",
      dateLastUpdated: "2019/04/06",
    },
    {
      vehicleID: "Jeff's Jeep",
      VIN: "ExampleVIN",
      bookingID: "001-KD037",
      bookingStartDate: "2019/02/06",
      bookingEndDate: "2019/03/09",
      odometerAtStart: 62333,
      bookingType: "Per Day",
      dateCreated: "2019/02/06",
      dateLastUpdated: "2019/03/09",
    },
    {
      vehicleID: "Carol's Corolla",
      VIN: "ExampleVIN",
      bookingID: "001-II030",
      bookingStartDate: "2019/05/06",
      bookingEndDate: "2019/05/11",
      odometerAtStart: 91000,
      bookingType: "Per km",
      dateCreated: "2019/05/06",
      dateLastUpdated: "2019/05/06",
    },
    {
      vehicleID: "Carol's 2nd Corolla",
      VIN: "ExampleVIN",
      bookingID: "001-KJ022",
      bookingStartDate: "2019/05/06",
      bookingEndDate: "2019/05/11",
      odometerAtStart: 91000,
      bookingType: "Per Day",
      dateCreated: "2019/05/06",
      dateLastUpdated: "2019/05/06",
    },
  ],
  bookingsHeadings: [
    {
      label: "Vehicle ID",
      field: "vehicleID",
    },
    {
      label: "VIN",
      field: "VIN",
    },
    {
      label: "Booking ID",
      field: "bookingID",
    },
    {
      label: "Last Booking Start Date",
      field: "bookingStartDate",
    },
    {
      label: "Last Booking End Date",
      field: "bookingEndDate",
    },
    {
      label: "Odometer When Last Booked (km)",
      field: "odometerAtStart",
    },
    {
      label: "Type",
      field: "bookingType",
    },
    {
      label: "Date Last Booking was Created",
      field: "dateCreated",
    },
    {
      label: "Date Last Booking was Updated",
      field: "dateLastUpdated",
    },
  ],
  bookingsDefaultRecord: {
    vehicleID: "Jimbo's Jeep",
    VIN: "ExampleVIN",
    bookingID: "055-EE037",
    bookingStartDate: "2019/04/06",
    bookingEndDate: "2019/04/09",
    odometerAtStart: 74000,
    bookingType: "Per Day",
    dateCreated: "2019/04/06",
    dateLastUpdated: "2019/04/06",
  },

  journeys: [
    {
      vehicleID: "Jeff's Jeep",
      VIN: "ExampleVIN",
      bookingID: "002-EE037",
      journeyID: "0003-XXI7",
      journeyStartDateTime: "2019/04/06 08:22",
      journeyEndDateTime: "2019/04/09 08:47",
      odometerAtStart: 74018,
      odometerAtEnd: 74033,
      journeyStartLocation: "89080-789777",
      journeyEndLocation: "89080-789889",
      dateCreated: "2019/04/06",
      dateLastUpdated: "2019/04/06",
    },
    {
      vehicleID: "Jeff's Jeep",
      VIN: "ExampleVIN",
      bookingID: "002-EE037",
      journeyID: "0002-XXI7",
      journeyStartDateTime: "2019/04/06 08:22",
      journeyEndDateTime: "2019/04/09 08:47",
      odometerAtStart: 74000,
      odometerAtEnd: 74018,
      journeyStartLocation: "89080-789777",
      journeyEndLocation: "89080-789889",
      dateCreated: "2019/04/06",
      dateLastUpdated: "2019/04/06",
    },
    {
      vehicleID: "Carol's Corolla",
      VIN: "ExampleVIN",
      bookingID: "002-EE037",
      journeyID: "0002-XXI7",
      journeyStartDateTime: "2019/04/06 08:22",
      journeyEndDateTime: "2019/04/09 08:47",
      odometerAtStart: 74000,
      odometerAtEnd: 74018, journeyStartLocation: "89080-789777",
      journeyEndLocation: "89080-789889",
      dateCreated: "2019/04/06",
      dateLastUpdated: "2019/04/06",
    },
    {
      vehicleID: "Carol's 2nd Corolla",
      VIN: "ExampleVIN",
      bookingID: "002-EE037",
      journeyID: "0002-XXI7",
      journeyStartDateTime: "2019/04/06 08:22",
      journeyEndDateTime: "2019/04/09 08:47",
      odometerAtStart: 74000,
      odometerAtEnd: 74018, journeyStartLocation: "89080-789777",
      journeyEndLocation: "89080-789889",
      dateCreated: "2019/04/06",
      dateLastUpdated: "2019/04/06",
    },
  ],
  journeysHeadings: [
    {
      label: "Vehicle ID",
      field: "vehicleID",
    },
    {
      label: "VIN",
      field: "VIN",
    },
    {
      label: "Booking ID",
      field: "bookingID",
    },
    {
      label: "Journey ID",
      field: "journeyID",
    },
    {
      label: "Start Date-Time",
      field: "journeyStartDateTime",
    },
    {
      label: "End Date-Time",
      field: "journeyEndDateTime",
    },
    {
      label: "Odometer At Start (km)",
      field: "odometerAtStart",
    },
    {
      label: "Odometer At End (km)",
      field: "odometerAtEnd",
    },
    {
      label: "Starting Location",
      field: "journeyStartLocation",
    },
    {
      label: "Ending Location",
      field: "journeyEndLocation",
    },
    {
      label: "Date Created",
      field: "dateCreated",
    },
    {
      label: "Date Last Updated",
      field: "dateLastUpdated",
    },
  ],
  journeysDefaultRecord: {
    vehicleID: "Jimbo's Jeep",
    VIN: "ExampleVIN",
    bookingID: "055-EE037",
    journeyID: "0057-XXI7",
    journeyStartDateTime: "2019/04/06 08:22",
    journeyEndDateTime: "2019/04/09 08:47",
    odometerAtStart: 74000,
    odometerAtEnd: 74018,
    journeyStartLocation: "89080-789777",
    journeyEndLocation: "89080-789889",
    dateCreated: "2019/04/06",
    dateLastUpdated: "2019/04/06",
  },

  refuels: [
    {
      vehicleID: "Jeff's Jeep",
      VIN: "ExampleVIN",
      bookingID: "002-EE037",
      refuelID: "0001-XX00",
      fuelQuantity: 65.2,
      fuelPrice: 1.55,
      dateCreated: "2019/04/06",
      dateLastUpdated: "2019/04/06",
    },
    {
      vehicleID: "Jeff's Jeep",
      VIN: "ExampleVIN",
      bookingID: "001-JJI037",
      refuelID: "0001-XX00",
      fuelQuantity: 33.2,
      fuelPrice: 1.52,
      dateCreated: "2019/04/06",
      dateLastUpdated: "2019/04/06",
    },
    {
      vehicleID: "Carol's Corolla",
      VIN: "ExampleVIN",
      bookingID: "001-JJI037",
      refuelID: "0001-XX00",
      fuelQuantity: 33.2,
      fuelPrice: 1.52,
      dateCreated: "2019/04/06",
      dateLastUpdated: "2019/04/06",
    },
    {
      vehicleID: "Carol's 2nd Corolla",
      VIN: "ExampleVIN",
      bookingID: "001-JJI037",
      refuelID: "0001-XX00",
      fuelQuantity: 33.2,
      fuelPrice: 1.52,
      dateCreated: "2019/04/06",
      dateLastUpdated: "2019/04/06",
    },
  ],
  refuelsHeadings: [
    {
      label: "Vehicle ID",
      field: "vehicleID",
    },
    {
      label: "VIN",
      field: "VIN",
    },
    {
      label: "Booking ID",
      field: "bookingID",
    },
    {
      label: "Refuel ID",
      field: "refuelID",
    },
    {
      label: "Fuel Purchased (L)",
      field: "fuelQuantity",
    },
    {
      label: "Fuel Price ($/L)",
      field: "fuelPrice",
    },
    {
      label: "Date Created",
      field: "dateCreated",
    },
    {
      label: "Date Last Updated",
      field: "dateLastUpdated",
    },
  ],
  refuelsDefaultRecord: {
    vehicleID: "Jimbo's Jeep",
    VIN: "ExampleVIN",
    bookingID: "055-EE037",
    refuelID: "0191-XX00",
    fuelQuantity: 33.2,
    fuelPrice: 1.52,
    dateCreated: "2019/04/06",
    dateLastUpdated: "2019/04/06",
  },
};