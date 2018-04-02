import axios from "axios";

export default {
  // Gets all books
  getBusinesses: function(trip) {
    return axios.get(`/api/businesses?TripId=${trip}`);
  },
  // Gets the book with the given id
  // getBusiness: function(id) {
  //   return axios.get("/api/businesses/" + id);
  // },
  // Deletes the book with the given id
  deleteBusiness: function(id) {
    return axios.delete("/api/businesses/" + id);
  },
  // Saves a book to the database
  saveBusiness: function(businessData) {
    console.log("in biz post API", businessData);   
    return axios.post("/api/businesses", businessData);
  },
  updateBusiness: function(businessData, id) {
    return axios.put("/api/businesses/" + id, businessData);
  }, 

  // Users routing
  saveUser: function(userData) {
    console.log("api post");
    return axios.post("/api/users", userData);
  },
  loginUser: function(userData) {
    console.log("api login");
    return axios.post("/api/users/login", userData);
  },
  


  getTrips: function(UserId) {
    console.log("in Trips get API", UserId);
    return axios.get(`/api/trips?UserId=${UserId}`)
  },

  saveTrips: function(tripData){
    console.log("in trips post API", tripData);
    return axios.post("/api/trips", tripData);
  },

  updateTrips: function(tripData, id) {
    console.log("in trip put API", tripData); 
    return axios.put("/api/trips/" + id, tripData);
  },


  getProfiles: function(UserId) {
    console.log("in profile get API", UserId);
    return axios.get(`/api/profiles?UserId=${UserId}`);
  },

  getProfilesByType: function(UserId, type){
    console.log("in get profile by Type API", UserId, type);
    return axios.get(`/api/profiles?UserId=${UserId}&type=${type}`);
  },
  
  saveProfiles: function(profileData){
    console.log("in profile post API", profileData);
    return axios.post("/api/profiles", profileData);
  },

  updateProfiles: function(profileData, id) {
    console.log("in profile put API", profileData); 
    return axios.put("/api/profiles/" + id,  profileData);
  },
  deleteProfiles: function(id) {
    return axios.delete("/api/profiles/" + id);
  },


  getFlights: function(TripId) {
    console.log("in flight get API", TripId);
    return axios.get(`/api/flights?TripId=${TripId}`)
  },

  saveFlights: function(flightData){
    console.log("in flight postAPI", flightData);
    return axios.post("/api/flights", flightData);
  },

  updateFlights: function(flightData, id) {
    console.log("in flight put API", flightData); 
    return axios.put("/api/flights/" + id, flightData);
  },
  deleteFlights: function(id) {
    console.log("in flight delete API", id); 
    return axios.delete("/api/flights/" + id);
  },

  getPacking: function(TripId) {
    console.log("in packing get API", TripId);
    return axios.get(`/api/packing?TripId=${TripId}`)
  },

  savePacking: function(packingData){
    console.log("in packing postAPI", packingData);
    return axios.post("/api/packing", packingData);
  },

  updatePacking: function(packingData, id) {
    console.log("in packing put API", packingData); 
    return axios.put("/api/packing/" + id, packingData);
  },


  getLogin: function (loginData) {
    return axios.get("/api/login", loginData)
  },


  saveSignUp: function(signUpData){
    console.log("in signUp API", signUpData);
    return axios.post("/api/signUp", signUpData);
  },
  
};
