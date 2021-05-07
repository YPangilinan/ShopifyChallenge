# Welcome to The Shoppies 

<img width="300" alt="Screen Shot 2021-05-06 at 11 56 32 PM" src="https://user-images.githubusercontent.com/61812035/117410420-3e302680-aec7-11eb-883f-ef9f0af4fc30.png">
The Shoppies is a webpage that can search OMDB for movies, allow the user to save their nominations, and once they reach 5, they will be notified that they're done! It's a simple way to manage movie nominations for the upcoming Shoppies!<br>

### Extra Feature Added
Users can save their nomination lists if they leave the page. Once they return, they can pick up where they left off without having to select new movies!

### See it in Action!
*The Shoppies* is deployed to Github Pages. Click [here](https://ypangilinan.github.io/ShopifyChallenge) to view it! Or refer to the Gifs below.

### How was this app created?
The specific technologies used to create this app are:
- HTML
- JavaScript
- React
- Axios
- [Create-React-App](https://github.com/facebook/create-react-app)
- React-DOM
- React-Toastify
- [Material Design for Bootstrap](https://mdbootstrap.com/docs/react/)

## Want to run it locally?
To install the application follow the instructions below:

	git clone git@github.com:ypangilinan/ShopifyChallenge
	cd ShopifyChallenge
	npm install
This should install the necessary packages from the Package.JSON needed for this application. 

In the terminal,run the Node.js application with the command below.

	npm start
  
The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`. 

### Assignment Requirements
- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.


