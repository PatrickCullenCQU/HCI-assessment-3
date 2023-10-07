function displayEnquiry(){
	let id = JSON.parse(localStorage.getItem('id'));
	let string = listings[id].reputation;
	switch(listings[id].reputation) {
		case 1:
			string = '★☆☆☆☆';
			break;
		case 2:
			string = '★★☆☆☆';
			break;
		case 3:
			string = '★★★☆☆';
			break;
		case 4:
			string = '★★★★☆';
			break;
		case 5:
			string = '★★★★★';
			break;
	}
	
	/// Display left side
	//Display type
	type = document.createElement('b');
	type.setAttribute('style', ' text-align: left; width: 300px; background-color: #C1D600FF; border-radius: 5px;');
	type.textContent = listings[id].type;
	document.getElementById('leftbox').append(type);
	
	//Display title
	title = document.createElement('b');
	title.setAttribute('style', '; text-align: left; width: 300px;');
	title.textContent = ' '+ listings[id].title;
	document.getElementById('leftbox').append(title);
	
	newLine = document.createElement('br');
	document.getElementById('leftbox').append(newLine);
	
	//Display image
	listingImage = document.createElement('img');
	listingImage.setAttribute('src', listings[id].imagePath);
	listingImage.setAttribute('style', "width: 300px;  display: block; margin-left: auto; margin-right: auto;");
	document.getElementById('leftbox').append(listingImage);
	
	//Display description
	description = document.createElement('p');
	description.setAttribute('style', 'text-align: left; width: 350px;');
	description.textContent = listings[id].body;
	document.getElementById('leftbox').append(description);
	
	/// Display right side
	//Display profile picture
	profilePicture = document.createElement('img');
	profilePicture.setAttribute('src', 'Images\\profile.png');
	profilePicture.setAttribute('style', "width: 150px; display: block; margin-left: auto; margin-right: auto;");
	document.getElementById('rightbox').append(profilePicture);
	
	// Create author name
	authorName = document.createElement('p');
	authorName.setAttribute('style',"text-align: center; font-weight: bold; line-height: 5px;");
	authorName.textContent = listings[id].firstName+" "+listings[id].lastName;
	document.getElementById('rightbox').append(authorName);
	
	// Create author reputation
	authorReputation = document.createElement('p');
	authorReputation.setAttribute('style',"text-align: center; font-size: 200%");
	authorReputation.textContent = string;
	document.getElementById('rightbox').append(authorReputation);
	
	// Create contacts
	contactMessage = document.createElement('b');
	contactMessage.textContent = "contact me on: ";
	document.getElementById('rightbox').append(contactMessage);
	
	email = document.createElement('p');
	email.textContent = "- "+listings[id].firstName+"."+listings[id].lastName+"@fakecqumail.com.au";
	document.getElementById('rightbox').append(email);
	
	instagram = document.createElement('p');
	instagram.textContent = "- fakeinstagram.com/"+listings[id].firstName+"."+listings[id].lastName+"/";
	document.getElementById('rightbox').append(instagram);
}