function Listing(type, firstName, lastName, reputation, item, title, body, imagePath){
	  this.type = type;
	  this.firstName = firstName;
	  this.lastName = lastName;
	  this.reputation = reputation;
	  this.item = item;
	  this.title = title;
	  this.body = body;
	  this.imagePath = imagePath;
	}
	
	let listings = [
	  new Listing("Looking for", "Joe", "Smith", 5, "Electronic devices", "Laptop for Word and Excel", "I'm looking for a laptop capable of running Microsoft Word and Excel. Windows 11 is preferred but Windows 10 isn't a deal breaker.\nI'm willing to trade my road bike for it or transfer money. Message to discuss further", "Images\\laptop.png"),
	  new Listing("Trading", "John", "Smith", 5, "Other", "I'm looking for my balls", "Please help my find my balls", "path/to/image"),
	  new Listing("Looking for", "Nutty", "Smith", 5, "Other", "I'm looking for my balls", "Please help my find my balls", "path/to/image")
	];
	
	addNewListing("Looking for", "Slag", "Smith", 5, "Other", "I'm looking for my balls", "Please help my find my balls");
	 
	function addNewListing(type, firstName, lastName, reputation, title, body, item){
	  listings.push(new Listing(type, firstName, lastName, reputation, item,title, body, "path/to/image"));
	}
	console.log(listings);
  
    function myFunction(){
	  alert("listings", JSON.stringify(listings[2]));
	}
  
    function showListings(){
	  const myObject = {
		name : "john doe",
	    age : 32,
	    gender : "male",
	    profession : "optician" 

	  }
	  
	  
	  window.localStorage.setItem("listings", JSON.stringify(listings[2]));
	  console.log(localStorage);
	  
	  //let newObject = window.localStorage.getItem("myObject");
	  //console.log(JSON.parse(newObject));
	}
	
	alert(listings[0].firstName);
	
	// Loop renders listings from array
	for(let i = 0; i < listings.length; i++) {
		generateSearchResult(i, listings[i].imagePath, listings[i].title, listings[i].body);
	}
	

function generateSearchResult(id, imagePath, titleString, descriptionString){
	
	
	//Create div
	resultarea = document.createElement('div');
	resultarea.setAttribute('style',"border-radius: 10px; width: 750px; height: 300px; border: 2px solid rgba(200, 200, 200, 1); margin-top: 50px; margin-bottom: 50px;")
	resultarea.setAttribute('id', id)
	document.getElementById('searchresults').append(resultarea);
	
	// Creates image element
	imageElement = document.createElement('img');
	imageElement.setAttribute('src', imagePath);
	imageElement.setAttribute('style',"border-radius: 10px; position: absolute; width: 200px; height: 200px;");
	document.getElementById(id).append(imageElement);

	// Creates title
	title = document.createElement('b');
	title.setAttribute('style',"margin-left: 250px;");
	title.textContent = titleString;
	document.getElementById(id).append(title);
	
	// Creates description
	description = document.createElement('p');
	description.setAttribute('style',"margin-left: 250px;");
	description.textContent = descriptionString;
	document.getElementById(id).append(description);
}


