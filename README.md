# Mywines
Run "npm install"
Then go to project folder and "ng serve"
Site runs on http://localhost:4200

I have used more than 2-4 hours on this. I would guess 10 hours, on/off

Solution
- The project is build on Angular cli. This runs a setup of Angular 2 and webpack. 
- I have included bootstrap scss, for grid and basic components
- I use BEM for naming convention
- background is made with css
- Top navigation was added, to switch between sections
- Two sections are created
  - data from wine.com REST api
  - Own wine section
- Routing is used to handle SPA

My own wine section
  - consist of a form, where the user can add their own wine
  - data between form and list of own wines are handled with a service
  
Wine.com section
  - data from REST api
  - user can click on an item, and see some details

Improvements
 - It would be nice to add a button on the items from wine.com, where the user can just click, and the item is added to own list
 - form validation would be good to have
 - details get from the REST api again. There is no need for that. Could be handled with my data service instead
 - adding a loader, would give the user a better experience
 
