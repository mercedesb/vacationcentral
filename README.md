# VACATION CENTRAL

<https://vacationcentral.herokuapp.com/> \
Version 1.0 \
Original Deployment Date - April 4, 2018

# Original Contributors:

Mina Slater - <https://github.com/minaslater> \
Susan Lippa - <https://github.com/slippa91>

# The Idea:

When talking with friends about vacation, I am frequently asked for thoughts about where we stayed, the restaurants we enjoyed and the activities in which we participated. 

Vacationist is a place to store all of that information so that it is easily accessible from anywhere. 

# Getting Started:

Software Installation - \

If you are linking to Vacationist through Heroku <https://vacationcentral.herokuapp.com/>, it does not require any software installation to use. \

If you want to download the code via Github <https://github.com/slippa91/vacationcentral> , you will need to:

1) Copy the repository on Github by clicking the green "Clone or Download" button

Now using the terminal on your computer...

2) "git clone" the Github file onto your desktop
3) From the terminal, execute a "yarn install" from the "vacationcentral" root directory
4) From the terminal, execute a "yarn install" from the "client" directory
5) Again in the the terminal, go back to the "vacationcentral" root directory and execute "yarn start"

Prerequisites - Loving your vacations past, present and future. 

# Users Guide:

Using Vacationist is easy. 

Once you have either signed up or logged in, you will be taken to the member page.

![Wire Frame](/client/public/images/MemberPage.png)

From here, it all starts with a trip. 

Enter your destination, a start date, an end date and click 'Submit'. When the trip appears click on the radio button to select it. 

![Wire Frame](/client/public/images/MemberPageTrip.png)


Once a trip has been selected, clicking the 'Categories' button opens up the world of Vacationist. Clicking each of the buttons takes you to a separate page in Vacationist. 

![Wire Frame](/client/public/images/CategoryButtons.png)

Each of these buttons behaves in the same way. 

For example, if you click on "Places", a screen appears that will allow you input information associated with a tourist attraction. When the appropriate fields have been completed, click submit and a new div will appear with that information displayed. If you want to edit that information, just click edit. Delete is self explanatory.

![Wire Frame](/client/public/images/PlacesInput.png)


![Wire Frame](/client/public/images/PlacesRender.png)


You can do the same thing for Flights, Car Rental, Hotel, Dining and Packing.

The only category that is a bit different is "Rewards". Although input works the same way, Rewards is not tied to a trip but to a user. This is a place to input you travel rewards numbers for airlines, hotels, and car rental services. The category is available no matter which trip has been selected. 

That is all there is to it. Enjoy using Vacationist to easily access the information from all of your trips. 


                
# Built Utilizing:

The primary impetus behind this project was learning React.js.

React.js - <https://reactjs.org/> \
Bootstrap v3 - <http://getbootstrap.com/docs/3.3/> \
Moment.js - <https://momentjs.com/> \
FlightAware API - <https://flightaware.com/commercial/flightxml/> 

#Future Development:

The initial focus for future development will center around making the phone numbers and url's functional on mobile devices. 


# Ideas for Improvement:

Have an idea for improving this site? Please first submit the change you wish to make via email with the owners of this repository. Email addresses can be found on the contributor's gitHub pages (links above).


# Vacation Central in Development:

UserStories:

As a user - I would like one place to reference all of the details for my vacation.

As a user - I would like to be able to edit and update the vacation information should it change. 

As a user - I would like to be able to access information from past vacations. 

As a user - I would like to be able to take notes on hotels, restaurants and attractions so I can share those thoughts when asked. 

As a user - I would like to be able to access real-time flight information.

As a user - I would like to be able to access some of my social media pictures from inside the application. 


Original WireFrame sketch:

![Wire Frame](/client/public/images/OriginalWireFrame.jpg)

Original Database structure sketch:

![Database](/client/public/images/DatabaseStructure.jpg)

Original File Structure sketch:

![OriginalFileStructure](/client/public/images/Filestructure.jpg)










