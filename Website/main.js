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
	
// Hard coded listings
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

let checkedType = [];
updateCheckedType();
console.log(checkedType);

function updateCheckedType(){
	if(document.getElementById('lookingforitem').checked){
		checkedType.push('Looking for');
	}
	if(document.getElementById('tradingitem').checked){
		checkedType.push('Trading');
	}
}


  console.log(localStorage);
  
  //let newObject = window.localStorage.getItem("myObject");
  //console.log(JSON.parse(newObject));

loadCheckBoxes();
generateResults();
	// Loop renders listings from array
function generateResults(){
	loadCheckBoxes();
	updateCheckedItems();
	updateCheckedReputation();
	updateCheckedType();
	
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
		
		//Check selected trade type tags
		for(let k = 0; k < checkedType.length; k++) {
			if(checkedType[k]==listings[i].type){
				count += 1;
				break;
			}
		}
		
		if(count == 3) {
			generateSearchResult(i, listings[i].imagePath, listings[i].title, listings[i].body, listings[i].reputation, listings[i].type);
		}
		
	}
}	


// Renders a single search result
function generateSearchResult(id, imagePath, titleString, descriptionString, reputationString, tradeString){
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
	resultarea.setAttribute('style',"border-radius: 10px; width: 750px; height: 250px; border: 2px solid rgba(200, 200, 200, 1); margin-top: 15px; margin-bottom: 15px;")
	resultarea.setAttribute('id', id)
	document.getElementById('searchresults').append(resultarea);
	
	// Creates image element
	imageElement = document.createElement('img');
	imageElement.setAttribute('src', imagePath);
	imageElement.setAttribute('style',"border-radius: 10px; position: absolute; margin-top: 25px; width: 250px; height: 225px;");
	document.getElementById(id).append(imageElement);
	
	// Ctreates trade type
	tradeType = document.createElement('span');
	tradeType.setAttribute('style', "background-color: lime; position: absolute; border-radius: 10px;");
	tradeType.textContent = tradeString + ':';
	document.getElementById(id).append(tradeType);

	// Creates title
	title = document.createElement('b');
	title.setAttribute('style',"margin-left: 150px; Width: 300px");
	title.textContent = titleString + reputationString;
	document.getElementById(id).append(title);
	
	// Creates description
	description = document.createElement('p');
	description.setAttribute('style',"margin-left: 275px; width: 300px");
	description.textContent = descriptionString;
	document.getElementById(id).append(description);
	
	/*//Creates listing author div
	authorArea = document.createElement('div');
	authorArea.setAttribute('style',"display:block; border-radius: 10px; width: 750px; height: 250px; border: 2px solid rgba(200, 200, 200, 1); background-color: red; margin-left: 200px; margin-top: 100px;")
	document.getElementById(id).append(authorArea);*/
}

// Saves and loads checkbox states
function saveCheckBoxes(){
	var checkbox = document.getElementById('lookingforitem');
    localStorage.setItem('lookingforitem', checkbox.checked);
	var checkbox = document.getElementById('tradingitem');
    localStorage.setItem('tradingitem', checkbox.checked);

	
	var checkbox = document.getElementById('books');
    localStorage.setItem('books', checkbox.checked);
	var checkbox = document.getElementById('devices');
    localStorage.setItem('devices', checkbox.checked);
	var checkbox = document.getElementById('clothes');
    localStorage.setItem('clothes', checkbox.checked);
	var checkbox = document.getElementById('other');
    localStorage.setItem('other', checkbox.checked);
	
	var checkbox = document.getElementById('5star');
    localStorage.setItem('5star', checkbox.checked);
	var checkbox = document.getElementById('4star');
    localStorage.setItem('4star', checkbox.checked);
	var checkbox = document.getElementById('3star');
    localStorage.setItem('3star', checkbox.checked);
	var checkbox = document.getElementById('2star');
    localStorage.setItem('2star', checkbox.checked);
	var checkbox = document.getElementById('1star');
    localStorage.setItem('1star', checkbox.checked);
}

function loadCheckBoxes(){
	var checked = JSON.parse(localStorage.getItem('lookingforitem'));
	document.getElementById('lookingforitem').checked = checked;
	var checked = JSON.parse(localStorage.getItem('tradingitem'));
	document.getElementById('tradingitem').checked = checked;
	
	var checked = JSON.parse(localStorage.getItem('books'));
	document.getElementById('books').checked = checked;
	var checked = JSON.parse(localStorage.getItem('devices'));
	document.getElementById('devices').checked = checked;
	var checked = JSON.parse(localStorage.getItem('clothes'));
	document.getElementById('clothes').checked = checked;
	var checked = JSON.parse(localStorage.getItem('other'));
	document.getElementById('other').checked = checked;
	
	var checked = JSON.parse(localStorage.getItem('5star'));
	document.getElementById('5star').checked = checked;
	var checked = JSON.parse(localStorage.getItem('4star'));
	document.getElementById('4star').checked = checked;
	var checked = JSON.parse(localStorage.getItem('3star'));
	document.getElementById('3star').checked = checked;
	var checked = JSON.parse(localStorage.getItem('2star'));
	document.getElementById('2star').checked = checked;
	var checked = JSON.parse(localStorage.getItem('1star'));
	document.getElementById('1star').checked = checked;
	
	// Automatically sets all checks all checkboxes if no checkbox data is found in local storage
	if(localStorage.getItem("books") === null) {
		var checked = JSON.parse(localStorage.getItem('lookingforitem'));
		document.getElementById('lookingforitem').checked = true;
		var checked = JSON.parse(localStorage.getItem('tradingitem'));
		document.getElementById('tradingitem').checked = true;
		
		var checked = JSON.parse(localStorage.getItem('books'));
		document.getElementById('books').checked = true;
		var checked = JSON.parse(localStorage.getItem('devices'));
		document.getElementById('devices').checked = true;
		var checked = JSON.parse(localStorage.getItem('clothes'));
		document.getElementById('clothes').checked = true;
		var checked = JSON.parse(localStorage.getItem('other'));
		document.getElementById('other').checked = true;
		
		var checked = JSON.parse(localStorage.getItem('5star'));
		document.getElementById('5star').checked = true;
		var checked = JSON.parse(localStorage.getItem('4star'));
		document.getElementById('4star').checked = true;
		var checked = JSON.parse(localStorage.getItem('3star'));
		document.getElementById('3star').checked = true;
		var checked = JSON.parse(localStorage.getItem('2star'));
		document.getElementById('2star').checked = true;
		var checked = JSON.parse(localStorage.getItem('1star'));
		document.getElementById('1star').checked = true;
	}
}