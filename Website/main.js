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
  new Listing("Trading", "John", "Smith", 4, "Other", "I'm looking for my balls", "Please help my find my balls", "path/to/image"),
  new Listing("Looking for", "Nutty", "Smith", 3, "Other", "I'm looking for my balls", "Please help my find my balls", "path/to/image"),
  new Listing("Looking for", "Joe", "Smith", 5, "Electronic devices", "Laptop for Word and Excel", "I'm looking for a laptop capable of running Microsoft Word and Excel. Windows 11 is preferred but Windows 10 isn't a deal breaker.\nI'm willing to trade my road bike for it or transfer money. Message to discuss further", "Images\\laptop.png"),
  new Listing("Looking for", "Slag", "Smith", 5, "Other", "I'm looking for my balls", "Please help my find my balls"),
  new Listing("Looking for", "Joe", "Smith", 5, "Clothes", "Laptop for Word and Excel", "I'm looking for a laptop capable of running Microsoft Word and Excel. Windows 11 is preferred but Windows 10 isn't a deal breaker.\nI'm willing to trade my road bike for it or transfer money. Message to discuss further", "Images\\laptop.png"),
  new Listing("Looking for", "Joe", "Smith", 5, "Books", "Laptop for Word and Excel", "I'm looking for a laptop capable of running Microsoft Word and Excel. Windows 11 is preferred but Windows 10 isn't a deal breaker.\nI'm willing to trade my road bike for it or transfer money. Message to discuss further", "Images\\laptop.png")
];

// Adds a new listing
function addNewListing(type, firstName, lastName, reputation, title, body, item){
  listings.push(new Listing(type, firstName, lastName, reputation, item,title, body, "path/to/image"));
}
console.log(listings);

let checkedItems = [];
updateCheckedItems();
console.log(checkedItems);
function updateCheckedItems(){
	if(document.getElementById('books').checked){
		checkedItems.push('Books');
	}
	if(document.getElementById('devices').checked){
		checkedItems.push('Electronic devices');
	}
	if(document.getElementById('clothes').checked){
		checkedItems.push('Clothes');
	}
	if(document.getElementById('other').checked){
		checkedItems.push('Other');
	}
}

let checkedReputation = [];
updateCheckedReputation();
console.log(checkedReputation);

function updateCheckedReputation(){
	if(document.getElementById('5star').checked){
		checkedReputation.push(5);
	}
	if(document.getElementById('4star').checked){
		checkedReputation.push(4);
	}
	if(document.getElementById('3star').checked){
		checkedReputation.push(3);
	}
	if(document.getElementById('2star').checked){
		checkedReputation.push(2);
	}
	if(document.getElementById('1star').checked){
		checkedReputation.push(1);
	}
}


    
  window.localStorage.setItem("listings", JSON.stringify(listings[2]));
  console.log(localStorage);
  
  //let newObject = window.localStorage.getItem("myObject");
  //console.log(JSON.parse(newObject));


generateResults();
	// Loop renders listings from array
function generateResults(){
	updateCheckedItems();
	updateCheckedReputation();
	
	alert("Cunt");
	for(let i = 0; i < listings.length; i++) {
		let count = 0;
		/*if(i >= 4) {
			break;
		}*/
		//Check selected item tags
		for(let k = 0; k < checkedItems.length; k++) {
			if(checkedItems[k]==listings[i].item){
				count += 1;
				break;
			}
		}
		
		//Check selected reputation tags
		for(let k = 0; k < checkedReputation.length; k++) {
			if(checkedReputation[k]==listings[i].reputation){
				count += 1;
				break;
			}
		}
		
		if(count == 2) {
			generateSearchResult(i, listings[i].imagePath, listings[i].title, listings[i].body, listings[i].reputation);
		}
		
	}
}	



function generateSearchResult(id, imagePath, titleString, descriptionString, reputationString){
	switch(reputationString) {
		case 1:
			reputationString = '★☆☆☆☆';
			break;
		case 2:
			reputationString = '★★☆☆☆';
			break;
		case 3:
			reputationString = '★★★☆☆';
			break;
		case 4:
			reputationString = '★★★★☆';
			break;
		case 5:
			reputationString = '★★★★★';
			break;
	}

	//Create div
	resultarea = document.createElement('div');
	resultarea.setAttribute('style',"border-radius: 10px; width: 750px; height: 300px; border: 2px solid rgba(200, 200, 200, 1); margin-top: 15px; margin-bottom: 15px;")
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
	title.textContent = titleString + reputationString;
	document.getElementById(id).append(title);
	
	// Creates description
	description = document.createElement('p');
	description.setAttribute('style',"margin-left: 250px;");
	description.textContent = descriptionString;
	document.getElementById(id).append(description);
}


