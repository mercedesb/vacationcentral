import axios from "axios";

export default {
  // Gets all books
  getBusinesses: function(trip) {
    return axios.get("/api/businesses?" + `TripId=${trip}`);
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


  getTrips: function(UserId) {
    console.log("in getTrips API", UserId);
    return axios.get("/api/trips?" + `UserId=${UserId}`)
  },

  saveTrips: function(tripData){
    console.log("in save trips", tripData);
    return axios.post("/api/trips", tripData);
  },
  // updateTrips: function(tripData) {
  //   return axios.put("api/trips" + id, tripData);
  // },



  getProfiles: function(UserId) {
    console.log("in profile API", UserId);
    return axios.get("/api/profiles?" + `UserId=${UserId}`)
  },

  saveProfiles: function(profileData){
    console.log("in profile API", profileData);
    return axios.post("/api/profiles", profileData);
  },
  // updateProfile: function(tripData) {
  //   return axios.put("api/profile" + id,  profileData);
  // }

  getFlights: function (tripId) {
    return axios.get("api/flights?" + `TripId=${tripId}`)
  },

  saveFlights: function(flightData){
    console.log("in flight API", flightData);
    return axios.post("api/flights", flightData);
  },
  // updateFlights: function(flightData) {
  //   return axios.put("api/flights" + id, flightsData);
  // },
  getLogin: function (loginData) {
    return axios.get("api/login", loginData)
  },


  saveSignUp: function(signUpData){
    console.log("in signUyp API", signUpData);
    return axios.post("api/signUp", signUpData);
  },



  updateBusiness: function(businessData, id) {
    return axios.put("api/businesses/" + id, businessData);
  }
};
