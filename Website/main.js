function contact(){
	alert("There is no contact page yet. It should probably redirect to the CQU website's contact page");
}

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
const listings = [
  new Listing("Looking for", "Joe", "Smith", 5, "Electronic devices", "Laptop for Word and Excel", "I'm looking for a laptop capable of running Microsoft Word and Excel. Windows 11 is preferred but Windows 10 isn't a deal breaker.\nI'm willing to trade my road bike for it or transfer money. Message to discuss further", "Images\\laptop.png"),
  new Listing("Trading", "Heather", "Langtree", 4, "Other", "Acoustic guitar", "I'm looking to get rid of this guitar but don't want to just throw it out, so if anyone wants to trade some ps4 games or something for it dm me.", "Images\\guitar.png"),
  new Listing("Looking for", "Logan", "Freud", 4, "Books", "Notebooks with grid paper", "Looking for notebooks with grid paper for my technical drawing unit starting next week. I can give trade some extra pencils or just give you like $10. Dm me if you have any.", "Images\\gridpaper.png"),
  new Listing("Trading", "Trent", "Banner", 5, "Electronic devices", "Brand new ps4 controller", "I have a spare, brand new ps4 controller that I don't need and will trade it for a used xbox controller. Usb-c is preferred but the old mini-usb controllers are fine too.", "Images\\controller.png"),
  new Listing("Looking for", "Jesse", "Pinkman", 1, "Other", "Volumetric flask", "Yo I'm looking for a volumetric flask. Need it really badly. Message me as soon as possible", "Images\\flask.jpg"),
  new Listing("Trading", "Brent", "Morgan", 3, "Clothes", "Size small high vis shirt", "I accidentally ordered the wrong size and they won't take it back so if someone wants it, just message me. Don't want anything for it.", "Images\\shirt.png"),
  new Listing("Looking for", "Joe", "Smith", 5, "Books", "Laptop for Word and Excel", "I'm looking for a laptop capable of running Microsoft Word and Excel. Windows 11 is preferred but Windows 10 isn't a deal breaker.\nI'm willing to trade my road bike for it or transfer money. Message to discuss further", "Images\\laptop.png")
];

// Adds a new listing
function addNewListing(type, firstName, lastName, reputation, title, body, item){
  listings.push(new Listing(type, firstName, lastName, reputation, item,title, body, "path/to/image"));
}

let checkedItems = [];

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
	console.log(checkedItems);
}

let checkedReputation = [];

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
	console.log(checkedReputation);
}

let checkedType = [];

function updateCheckedType(){
	if(document.getElementById('lookingforitem').checked){
		checkedType.push('Looking for');
	}
	if(document.getElementById('tradingitem').checked){
		checkedType.push('Trading');
	}
	console.log(checkedType);
}

// Saves search query to localStorage
function saveQuery(){
	let queryString = (document.getElementById('query').value).toUpperCase();
	localStorage.setItem("searchString", queryString);
}

// Loop renders listings from array, checking each listing against checked tags and search query
function generateResults(){
	loadCheckBoxes();
	updateCheckedItems();
	updateCheckedReputation();
	updateCheckedType();
	
	let searchString = '';
	
	if(localStorage.getItem("books") !== null) {
	searchString = localStorage.getItem("searchString");
	//alert("retrieved "+searchString);
	}
	
	// Checks if listing matches selected item categories
	for(let i = 0; i < listings.length; i++) {
		let count = 0;
		
		for(let k = 0; k < checkedItems.length; k++) {
			if(checkedItems[k]==listings[i].item){
				count += 1;
				break;
			}
		}
		
		//Checks if listing matches selected user reputations
		for(let k = 0; k < checkedReputation.length; k++) {
			if(checkedReputation[k]==listings[i].reputation){
				count += 1;
				break;
			}
		}
		
		// Checks if listing matches selected trade types
		for(let k = 0; k < checkedType.length; k++) {
			if(checkedType[k]==listings[i].type){
				count += 1;
				break;
			}
		}
		
		//Check if listings match search
		if(searchString == ''){
			count += 1;
		}
		else{
			for(let k = 0; k < checkedType.length; k++) {
				let combinedString = (listings[i].firstName+listings[i].lastName+listings[i].item+listings[i].title+listings[i].body+listings[i].type).toUpperCase();
				
				if(combinedString.includes(searchString)){
				count +=1;
				break;
				}
			}
		}
		
		// Generates a search result if the listing meets all requirements
		if(count == 4) {
			generateSearchResult(i, listings[i].imagePath, listings[i].title, listings[i].body, listings[i].reputation, listings[i].type, listings[i].firstName, listings[i].lastName);
		}
		
	}
}

// Renders a single search result
function generateSearchResult(id, imagePath, titleString, descriptionString, reputationString, tradeString, fNameString, lNameString){
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
	
	var myId = id;
	
	let authorAreaId = 'authorAreaId'+ id;
	//Create div
	resultarea = document.createElement('div');
	resultarea.setAttribute('style',"border-radius: 10px; width: 750px; height: 250px; border: 2px solid rgba(200, 200, 200, 1); margin-top: 15px; margin-bottom: 15px;")
	resultarea.setAttribute('id', id)
	document.getElementById('searchresults').append(resultarea);
	
	//Creates listing author div
	authorArea = document.createElement('div');
	authorArea.setAttribute('id', authorAreaId);
	authorArea.setAttribute('style',"position:absolute; margin-left: 552px; border-radius: 10px; width: 200px; height: 250px; background-color: rgba(200, 200, 200, 1);")
	document.getElementById(id).append(authorArea);
	
	// Creates image element
	imageElement = document.createElement('img');
	imageElement.setAttribute('src', imagePath);
	imageElement.setAttribute('style',"border-radius: 10px; position: absolute; margin-top: 25px; width: 250px; height: 225px;");
	document.getElementById(id).append(imageElement);
	
	// Creates trade type
	tradeType = document.createElement('span');
	tradeType.setAttribute('style', "background-color: #C1D600FF; position: absolute; border-radius: 5px;");
	tradeType.textContent = tradeString + ':';
	document.getElementById(id).append(tradeType);

	// Creates title
	title = document.createElement('b');
	title.setAttribute('style',"margin-left: 150px; Width: 300px");
	title.textContent = titleString;
	document.getElementById(id).append(title);
	
	// Creates description
	description = document.createElement('p');
	description.setAttribute('style',"margin-left: 275px; width: 250px");
	description.textContent = descriptionString;
	document.getElementById(id).append(description);
	
	// Creates profile picture
	profilePicture = document.createElement('img');
	profilePicture.setAttribute('src', 'images\\profile.png');
	profilePicture.setAttribute('style',"margin-top: 25px; margin-left: 50px; width: 100px;");
	document.getElementById(authorAreaId).append(profilePicture);
	
	// Create author name
	authorName = document.createElement('p');
	authorName.setAttribute('style',"text-align: center;");
	authorName.textContent = fNameString+" "+lNameString;
	document.getElementById(authorAreaId).append(authorName);
	
	// Create author reputation
	authorReputation = document.createElement('p');
	authorReputation.setAttribute('style',"text-align: center;");
	authorReputation.textContent = reputationString;
	document.getElementById(authorAreaId).append(authorReputation);
	
	
	
	// Create enquire Button
	enquireButton = document.createElement('BUTTON');
	enquireButton.setAttribute('id', 'button'+id);
	enquireButton.setAttribute('style', "margin: auto; display: block;");
	enquireButton.setAttribute ('onclick', "saveSelectedEnquiry(this.id), window.location.href='enquiry.html'");
	enquireButton.textContent = 'Enquire';
	document.getElementById(authorAreaId).append(enquireButton);
	
}

function saveSelectedEnquiry(enquiryId){
	var id = enquiryId.replace(/^\D+/g, '');
	localStorage.setItem("id", id);
}

function amogus(){
	id = localStorage.getItem("id");
	alert("Enquiry page: "+id);

}

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
	
	// Automatically checks all checkboxes if no checkbox data is found in local storage
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