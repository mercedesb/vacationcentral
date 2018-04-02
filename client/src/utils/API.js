import axios from "axios";

export default {
  getBusinesses: function(trip) {
    return axios.get(`/api/businesses?TripId=${trip}`);
  },
  deleteBusiness: function(id) {
    return axios.delete("/api/businesses/" + id);
  },
  saveBusiness: function(businessData) {
    return axios.post("/api/businesses", businessData);
  },
  updateBusiness: function(businessData, id) {
    return axios.put("/api/businesses/" + id, businessData);
  }, 
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  loginUser: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  getTrips: function(UserId) {
    return axios.get(`/api/trips?UserId=${UserId}`)
  },
  saveTrips: function(tripData){
    return axios.post("/api/trips", tripData);
  },
  updateTrips: function(tripData, id) {
    return axios.put("/api/trips/" + id, tripData);
  },
  getProfiles: function(UserId) {
    return axios.get(`/api/profiles?UserId=${UserId}`);
  },
  getProfilesByType: function(UserId, type){
    return axios.get(`/api/profiles?UserId=${UserId}&type=${type}`);
  },
  saveProfiles: function(profileData){
    return axios.post("/api/profiles", profileData);
  },
  updateProfiles: function(profileData, id) {
    return axios.put("/api/profiles/" + id,  profileData);
  },
  deleteProfiles: function(id) {
    return axios.delete("/api/profiles/" + id);
  },
  getFlights: function(TripId) {
    return axios.get(`/api/flights?TripId=${TripId}`)
  },
  saveFlights: function(flightData){
    return axios.post("/api/flights", flightData);
  },
  updateFlights: function(flightData, id) {
    return axios.put("/api/flights/" + id, flightData);
  },
  deleteFlights: function(id) {
    return axios.delete("/api/flights/" + id);
  },
  getPacking: function(TripId) {
    return axios.get(`/api/packing?TripId=${TripId}`)
  },
  savePacking: function(packingData){
    return axios.post("/api/packing", packingData);
  },
  updatePacking: function(packingData, id) {
    return axios.put("/api/packing/" + id, packingData);
  },
  getLogin: function (loginData) {
    return axios.get("/api/login", loginData)
  },
  saveSignUp: function(signUpData){
    return axios.post("/api/signUp", signUpData);
  }
};
