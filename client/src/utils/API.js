import axios from "axios";

export default {
  // Gets all books
  getBusinesses: function(businessType, trip) {
    return axios.get("/api/businesses?" + `type=${businessType}&TripId=${trip}`);
  },

  // Gets the book with the given id
  // getBusiness: function(id) {
  //   return axios.get("/api/businesses/" + id);
  // },
  // Deletes the book with the given id
  // deleteBusiness: function(id) {
  //   return axios.delete("/api/businesses/" + id);
  // },
  // Saves a book to the database
  saveBusiness: function(businessData) {
    return axios.post("/api/businesses/", businessData);
  },
  // updateBusiness: function(businessData) {
  //   return axios.put("api/businesses/" + id, businessData);
  // }, 


  getTrips: function(user) {
    return axios.get("api/trips?" + `UserId=${user}`)
  },
  saveTrips: function(tripData){
    return axios.post("api/trips", tripData);
  },
  // updateTrips: function(tripData) {
  //   return axios.put("api/trips" + id, tripData);
  // },



  getProfile: function(user) {
    return axios.get("api/profile?" + `UserId=${user}`)
  },
  saveProfile: function(profileData){
    return axios.post("api/profile", profileData);
  },
  // updateProfile: function(tripData) {
  //   return axios.put("api/profile" + id,  profileData);
  // }

  getFlights: function (tripId) {
    return axios.get("api/flights?" + `TripId=${tripId}`)
  },
  saveFlights: function(flightData){
    return axios.post("api/flights", flightData);
  },
  // updateFlights: function(flightData) {
  //   return axios.put("api/flights" + id, flightsData);
  // },



  updateBusiness: function(businessData, id) {
    return axios.put("api/businesses/" + id, businessData);
  }
};
