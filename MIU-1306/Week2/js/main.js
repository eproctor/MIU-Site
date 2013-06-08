/* Name: Eugene Proctor :: Project 1 :: MIU 1304 */

/* ========== Waiting on Dom to be ready  ========== */

//window.addEventListener("DOMContentLoaded", function() {


var docGetId = function(x) {

	var theId = document.getElementById(x);
	return theId; 	

}



/* =================   Browse Option Home Page ==================*/



// Good Test	for     var browseCat = docGetId ("browseCategory").value;
// Good Test for 	console.log (browseCat);

/*	$("browseCategory").mouseup (function() {
		alert("Handler for .mouseup() called")
	
	}

var browseOpt = function () {
	alert ("Hello");	
	var browseCat = $("browseCategory").value;
	console.log (browseCat);
	//console.log (docGetId("browseCategory").value);

}

*/

	var browseOpt = function() {
		alert ("Hello browseOpt");
		var browseCat = docGetId ("browseCategory").value;
		console.log (browseCat);

	
	}
	

/******     Testing to work with jquery *********/
/******     removeAttribute doesnt work with jquery *********/
var browseLinks = function() {
	var muteLinks = $("browseLinksId");
	muteLinks.removeAttribute("hidden","true");


}



var browseLinks = function() {
	var muteLinks = docGetId("browseLinksId");
	muteLinks.removeAttribute("hidden","true");


}


/* ========== Define Variables ========== */

//var surveyCheckBoxes = $("checkBoxField").survey;
var surveyCheckBoxes = docGetId("checkBoxField").survey;

var  errorVal = docGetId("errorValidation");			
		
 
  
 
var validate = function () {

	var valName = docGetId("fullName");
	if (valName.value == "") {
		val();
	} else {
		saveData();
	}

}
 
 
 
 
// Validate the Form Field 
 var val = function(e) {
 	var valName = docGetId("fullName");
 	var valEmail = docGetId("email");
 	
// Clear Error Messages from screen
	valName.style.border = "1px solid black";
	
 	

// Display error messages
	var errorMsg = [];
	
// Check for error
	if (valName.value == "") {
		var nameError = "Please enter your name.";
		valName.style.border = "1px solid red";
		
		errorMsg.push(nameError);
	} 
		 
/*
// Validate email using exec method for exact match in string
var regexp = /^\w+([\.-])?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (!(regexp.exec(valEmail.value))) {
		var emailError = "Please enter a valid Email Address.";
		valEmail.style.border = "1px solid red";
		errorMsg.push(emailError);
	}	 

*/		 
// If errors exist from the Validation
	if(errorMsg.length >= 1) {
		for(var i=0, j=errorMsg.length; i<j; i++) {
			var msgLi = document.createElement("li");
			msgLi.innerHTML = errorMsg[i];
			errorVal.appendChild(msgLi);
		
		}
		 
/*		 e.preventDefault();
		 return false;
*/		 	
	}else{
		// Save Data if there are no errors using the key value from the val function
		saveData(this.key);
/*		saveData();			*/
		
		}
		
	}		 
 
 

/* ========== Edit Entry to Change Information  ========== */

// Grab the data out of local Storage;
var editContact = function() {



	
//Return Form Screen to Display	Form
		//var emptyScreen = docGetId("hide");
		var emptyScreen = docGetId("browseLinksId");
		emptyScreen.removeAttribute("hidden", "true");	
		






		

//alert ("This is the Edit Entry Function");	
	
	var editValue = localStorage.getItem(this.key);
	var contact = JSON.parse(editValue);
	
	
		
		var parentBox = docGetId("parent");
		var auntBox = docGetId("aunt");
		var guardianBox = docGetId("guardian");
		var brotherBox = docGetId("brother");
		var sisterBox = docGetId("sister");
		var carsBox = docGetId("cars");
		var baseBallCardsBox = docGetId("baseBallCards");
		var coinsBox = docGetId("coins");
		var stampsBox = docGetId("stamps");
		var artBox = docGetId("art");
		var dollsBox = docGetId("dolls");
		var toysBox = docGetId("toys");
		var militaryBox = docGetId("military");
		var scientificBox = docGetId("scientific");
		var furnitureBox = docGetId("furniture");
		
		
		/*======================================================================*/
		
				
		
		if (contact.surveyCheckBoxes[1] === "parent") {
			parentBox.setAttribute("checked", "checked")}
			
		if (contact.surveyCheckBoxes[1] === "aunt") {
			auntBox.setAttribute("checked", "checked");
			console.log (auntBox);}
		if (contact.surveyCheckBoxes[1] === "guardian") {
			guardianBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "brother") {
			brotherBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "sister") {
			sisterBox.setAttribute("checked", "checked");}				



		if (contact.surveyCheckBoxes[1] === "cars") {
			parentBox.setAttribute("checked", "checked")}
			
		if (contact.surveyCheckBoxes[1] === "baseBallCards") {
			auntBox.setAttribute("checked", "checked");
			console.log (auntBox);}
		if (contact.surveyCheckBoxes[1] === "coins") {
			guardianBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "stamps") {
			brotherBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "art") {
			sisterBox.setAttribute("checked", "checked");}				
			


		if (contact.surveyCheckBoxes[1] === "dolls") {
			parentBox.setAttribute("checked", "checked")}
			
		if (contact.surveyCheckBoxes[1] === "toys") {
			auntBox.setAttribute("checked", "checked");
			console.log (auntBox);}
		if (contact.surveyCheckBoxes[1] === "military") {
			guardianBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "scientific") {
			brotherBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "furniture") {
			sisterBox.setAttribute("checked", "checked");}				
			










			
	
// Populate Screen with saved data
	docGetId("startdate").value = contact.startdate[1];
	docGetId("fullName").value = contact.fullName[1];
	docGetId("email").value = contact.email[1];
	docGetId("collection").value = contact.collection[1];
	docGetId("description").value = contact.description[1];
	docGetId("rating").value = contact.rating[1];




 
 
/* 
 //Remove listing from bottom of main window

var clearBottom = document.getElementById("contact");
clearBottom.innerHTML="Test"; 

//Prevent continuous displays during data entry 

var clearBottom = docGetId("contact");
clearBottom.innerHTML = "test";
/*clearBottom.removeAttribute("tag","div");*/
//Prevent multiple displays occuring during display function 
/*
var clearBottom = docGetId("contact");
clearBottom.removeAttribute("id","contact");


*/






// Modify Save button to be an Update button

var editButton = docGetId("submitButton");
editButton.removeAttribute("onclick","saveData");
editButton.setAttribute("value","Update & Save New Data");

// Saves key value for the entry we are editing...
editButton.addEventListener("click",val);
editButton.key = this.key;




// Return editValue to use in updating data
//return editValue;


		
}		
		

		


var deleteContact = function() {
	var confirmDelete = confirm ("Please confirm to delete this contact");
	if (confirmDelete) {
		localStorage.removeItem(this.key);
		alert ("The contact has been deleted");
		window.location.reload();
	
	}else{
		alert ("The contact did not delete");
		}
}	
	
		
		
		/*========================================================================*/
		
		

 /* ======  Save Data to Local Storage  ====== */

//var surveyCheckBoxes = $("checkBoxField").survey; 	
var surveyCheckBoxes = docGetId("checkBoxField").survey; 	
 
var saveData = function(key) {
	//if there is no key.  This is a new item and needs a new key
	if (!key) {
	
		var newId 			= Math.random(); 
	
	}else{
		// This will keep the current key so we can update the entry
		newId = key;
	
	}


var contact 								= {};
	contact.startdate						= ["Entry Date:", docGetId("startdate").value];
	contact.fullName						= ["Collector&#39;s Name:", docGetId("fullName").value];	
	contact.email							= ["Email:", docGetId("email").value];
	contact.collection						= ["Type of Material:", docGetId("collection").value];
	contact.description						= ["Description of Item:", docGetId("description").value];
	contact.rating							= ["Condition of Item 0 - 100:", docGetId("rating").value];
	



	
	



	
	for(i=0, j=surveyCheckBoxes.length; i<j; i++) {
		if (surveyCheckBoxes[i].checked) {
			console.log(surveyCheckBoxes[i].value);
			contact.surveyCheckBoxes		= ["Collection Category:", surveyCheckBoxes[i].value];
		}
	}
	


// Save data into local storage,  Use stringify to convert object to a string
localStorage.setItem(newId, JSON.stringify(contact));
window.location.reload();
alert("JSON Data has been saved");	

}





/* ========== Extra Credit - Slide Rule Counter  ========== */



var extraCredit = function() {

	var rateBar = docGetId("ratingTape");
	rateBar.innerHTML = rating.value;
	
} 	

var slideBar = docGetId("rating");
slideBar.addEventListener("click", extraCredit);	
	




 
/* ========== Clear Data  ========== */


var clearData = function() {


	var confirmDelete = confirm("Are you sure you want to delete?");
	if (confirmDelete) {
		localStorage.clear();
		alert ("The Contacts have been Deleted");
		window.location.reload();
		}else{
			alert("The Contacts Are Not Deleted");
		}	
		
}






/* ========== Display Data from Object to Screen  ========== */	
var displayEntries = function() {



//	console.log ("Local Storage Length is " + localStorage.length);

			var newDiv = document.createElement("div");
			
			
//Prevent multiple displays occurring during display function 

var clearBottom = docGetId("contact");
clearBottom.removeAttribute("id","contact");
			
			
			
/*			newDiv.setAttribute("id", "contact"); */
			var newUl = document.createElement("ul");
			
/*			newDiv.appendChild(newUl);*/
			
			clearBottom.appendChild(newUl);
			document.body.appendChild(clearBottom);
			
		
			for (var i=0, len=localStorage.length; i<len; i++) {
			
				var newLi = document.createElement("li");
				newUl.appendChild(newLi);
					
				var anotherLi = document.createElement("li");
			
				
				var key = localStorage.key(i);
				var correctContact = localStorage.getItem(key);
				
				//Take the string from local storage and convert it back to an object by using JSON.parse()
				var contact = JSON.parse(correctContact);
				var anotherUl = document.createElement("ul");
				newLi.appendChild(anotherUl);
				
				//function to get image and right to the screen
				console.log("contact.surveyCheckBoxes[1] is" + contact.surveyCheckBoxes[1]);
				getSurveyImage(contact.surveyCheckBoxes[1],anotherUl);
				
				for (var n in contact) {
					var newSubli = document.createElement("li");
					anotherUl.appendChild(newSubli);
					
					var text = contact[n][0] + "  " +contact[n][1]
					newSubli.innerHTML = text;
					anotherUl.appendChild(anotherLi);
					
				
				}
				//Call function to Create the edit and delete links
				createLinks(localStorage.key(i), anotherLi);
				
		}

	// Function to Get the Survey Image and right to the screen for the Contact
	function getSurveyImage(picName, anotherUl) {
		var surveyImageLi = document.createElement("li");
		anotherUl.appendChild(surveyImageLi)
		var newPic = document.createElement("img");
		var setPicSource = newPic.setAttribute("src","images/" + picName + ".png");
		surveyImageLi.appendChild(newPic);
		
		
	
	
	
	}

}

// Make Items Link Function
// Will create the edit and delete links

var createLinks = function(key, anotherLi) {





	var createEditLink = document.createElement("a");
	createEditLink.href = "#";
	createEditLink.key = key;
	var changeText = "Edit Contact";
	createEditLink.addEventListener("click", editContact);
	createEditLink.innerHTML = changeText;
	anotherLi.appendChild(createEditLink);

	// line break for edit and delete links
	var brTag = document.createElement("br");
	anotherLi.appendChild(brTag);

	var createDeleteLink = document.createElement("a");
	createDeleteLink.href = "#";
	createDeleteLink.key = key;
	var removeText = "Delete Contact";
	createDeleteLink.addEventListener("click", deleteContact);
	createDeleteLink.innerHTML = removeText;
	anotherLi.appendChild(createDeleteLink);




/* ========== Display only Results  ========== */	


var emptyScreen = document.getElementById("hide");

emptyScreen.setAttribute("hidden", "true");




}


			

/* ========== Check for Empty Storage ========== */

var emptyStorage = function() {
	
	var muteLinks = docGetId("browseLinksId");
	//muteLinks.removeAttribute("hidden","false");
	muteLinks.setAttribute("hidden","true");
	
	if (localStorage.length===0) {
	
		//
		alert ("Local Storage is Empty.  Testing Data is added");
		console.log ("The storage is empty. Testing Data is added");
		fillTestData();
		
	} else {
		
		displayEntries();

		} 
}



/* ========== Fill Storage with Test Data ========== */


var fillTestData = function() {
	for (var n in json) {
		var newId 			= Math.random(); 
		localStorage.setItem(newId, JSON.stringify(json[n])); 
	}
	
}



/* ========== Reload Page ========== */
			

var addContact = function() {

	window.location.reload();

}
			
/* alert ("this is the bottom of the page");	*/		


//});









//------------------------------------------------------------		


