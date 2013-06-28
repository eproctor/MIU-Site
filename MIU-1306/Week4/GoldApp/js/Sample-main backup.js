 
 
 
 
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
alert ("Click Display to View Entries");
//$("#contact").html("Hello World 2");
//var page1 = document.GetElementById("contact")
//page1.innerHTML = "Hello"

/*

//var test = $("contact");
//test.inner.html("Hello");


//	console.log ("Local Storage Length is " + localStorage.length);

			var newDiv = document.createElement("div");
			
			
//Prevent multiple displays occurring during display function 

//var clearBottom = docGetId("contact");
var clearBottom = document.getElementById("contact");
//clearBottom.removeAttribute("id","contact");
			
			
			
			newDiv.setAttribute("id", "contact"); 
		
			var newUl = document.createElement("ul");
		/*	
			newDiv.appendChild(newUl);
			
			clearBottom.appendChild(newUl);
			document.body.appendChild(clearBottom);
		*/	
			
			//newDiv.append(newUl);
	/*	
			clearBottom.appendChild(newUl);
			/*document.body.div.clearBottom.append(clearBottom);
			document.body.div.clearBottom.append("Yes");*/
		/*	document.body.appendChild(clearBottom); */
	/*		
			$("#contact").html(clearBottom);
			document.getElementById.inner
		$("#contact").html("Hello World");
			
*/		








//	console.log ("Local Storage Length is " + localStorage.length);

			var newDiv = document.createElement("div");
			
			
//Prevent multiple displays occurring during display function 

var clearBottom = docGetId("contact");
//clearBottom.removeAttribute("id","contact");
			
			
			
/*			newDiv.setAttribute("id", "contact"); */
			var newUl = document.createElement("ul");
			
/*			newDiv.appendChild(newUl);*/
			
			clearBottom.appendChild(newUl);
			document.body.appendChild(clearBottom);
		//	$("#contact").html(clearBottom);
		var displayPage1 = document.getElementById(contact);
	//	displayPage1.innerHtml = "clearBottom"
		// displayPage1.innerHtml = clearBottom















		
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

// (1) emptyScreen.setAttribute("hidden", "true");




}



//=== 4:18pm   Sunday June 23rd ================================================================================




 

/* ========== Edit Entry to Change Information  ========== */

// Grab the data out of local Storage;
var editContact = function() {



	
//Return Form Screen to Display	Form
		var emptyScreen = docGetId("hide");
		emptyScreen.removeAttribute("hidden", "true");	
		






		

//alert ("This is the Edit Entry Function");	
	
	var editValue = localStorage.getItem(this.key);
	var contact = JSON.parse(editValue);
	
	
		
		/*
		var parentBox = docGetId("parent");
		var auntBox = docGetId("aunt");
		var guardianBox = docGetId("guardian");
		var brotherBox = docGetId("brother");
		var sisterBox = docGetId("sister");
		*/
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
		
				
		/*
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
*/


		if (contact.surveyCheckBoxes[1] === "cars") {
			carsBox.setAttribute("checked", "checked")}
			
		if (contact.surveyCheckBoxes[1] === "baseBallCards") {
			baseBallCardsBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "coins") {
			coinsBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "stamps") {
			stampsBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "art") {
			artBox.setAttribute("checked", "checked");}				
			


		if (contact.surveyCheckBoxes[1] === "dolls") {
			dollsBox.setAttribute("checked", "checked")}
			
		if (contact.surveyCheckBoxes[1] === "toys") {
			toysBox.setAttribute("checked", "checked");
			console.log (auntBox);}
		if (contact.surveyCheckBoxes[1] === "military") {
			militaryBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "scientific") {
			scientificBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "furniture") {
			furnitureBox.setAttribute("checked", "checked");}				
			



	
// Populate Screen with saved data
	docGetId("startdate").value = contact.startdate[1];
	docGetId("fullName").value = contact.fullName[1];
	docGetId("email").value = contact.email[1];
	docGetId("city").value = contact.city[1];
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
		





















//==================================================== 
 			

/* ========== Check for Empty Storage ========== */

var emptyStorage = function() {
	
	
	
	if (localStorage.length===0) {
	
		//
		alert ("Local Storage is Empty.  Testing Data is added");
		console.log ("The storage is empty. Testing Data is added");
		fillTestData();
		displayEntries();
		
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
		
 
 
 
 
 
 
 
 
 //  ===========================  Validation Function for Save Function ==========

 
 
 
 
 
 
// Validate the Form Field 
 var val = function(e) {
 	var valName = docGetId("fullName");
 	var valEmail = docGetId("email");
 	
// Clear Error Messages from screen
	//valName.style.border = "1px solid black";
	
 	

// Display error messages
	var errorMsg = [];
	
// Check for error
	if (valName.value == "") {
		var nameError = "Please enter your name.";
		//valName.style.border = "1px solid red";
		
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
/*2
// If errors exist from the Validation
	if(errorMsg.length >= 1) {
		for(var i=0, j=errorMsg.length; i<j; i++) {
			var msgLi = document.createElement("li");
			msgLi.innerHTML = errorMsg[i];
			errorVal.appendChild(msgLi);
		
		}

*/
		 
							/*		 e.preventDefault();
									 return false;
							*/		 	
	/*2
	}else{
		// Save Data if there are no errors using the key value from the val function
		saveData(this.key);
	*/
	
							/*		saveData();			*/
		
	/*2	} */
		
	}		 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/* ========== Define Variables ========== */

var surveyCheckBoxes = document.getElementById("checkBoxField").survey;

//var  errorVal = docGetId("errorValidation");		
var  errorVal = document.getElementById("errorValidation");	

 
 
 
 
 
 
 
 
var validateSaveForm = function () {
	alert ("This is the Validation Save Form");
	var valName = docGetId("fullName");
	if (valName.value == "") {
		val();
	} else {
		saveData();
	}

}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //  ===========================  Bottom is new Sample Main JS needs to be fixed ==========




// Submit Handler function 
var parseContactList = function(datafromform) {
	// uses form data here;
	//console.log(dataFromForm);
	
};

$(document).ready(function() {
	console.log("Hello.  Document is Ready for valform");
	var valform = $("#contactsform"),
		errorslink = $("#errorsLink");
	
	
	
	// to turn on plugin
	valform.validate({
		
		invalidHandler: function(form, validator) {
			errorslink.click();
			
			
		},
		submitHandler: function() {
			/* var dataFromForm = valform.serialize();  // Used to pass data via ajax */
			var datafromform = valform.serializeArray();  // Used to pass data internally using Arrays and Objects
			parseContactList(datafromform);
			
		
		}
	
	
	});





/*
var waitbutton = $("waitbutton");
console.log(waitbutton.value);
*/

// end of function for document.ready
});














//  ===========================  Bottom is new Sample Main JS needs to be fixed ==========




 

// Submit Handler function 
//storeData(data)
var parseContactList = function(datafromform) {
	// uses form data here;
	console.log(datafromform);
	
};


 
// --------------------------------------


// Validation for Home Page

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	




// Validation for Form Page
		
$('#collectData').on('pageinit', function(){
		console.log("Hello.  Document is Ready for myForm");
		var myForm = $('#collectDataForm');
		var errorslink = $("#errorsLink");
		
		
		// to turn on plugin
		    myForm.validate({
			invalidHandler: function(form, validator) {
				alert ("Function Call for Invalid Handler");
				errorslink.click();
				var html = "";
				//console.log(validator.submitted);
				
				// loop through validator.submitted object
				for(var key in validator.submitted) {
					var label = $('label[for^="'+ key +'"]').not('[generated]');
					//console.log(label.text());
					var legend =  label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.txt();
					html += '<li>'+ fieldName + '</li>';
				};
				$("#dialogboxErrors ul").html(html);
			},
			submitHandler: function() {
				var datafromform = myForm.serializeArray();  // Used to pass data internally by converting data into Arrays and Objects
				//storeData(data);
				//storeData(datafromform);
				parseContactList(datafromform);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};










/*  =================  Save Data to Local Storage Function  ====================  */



//  Remove //  var surveyCheckBoxes = document.getElementById("checkBoxField").survey; 	
 
var saveData = function(key) {
	//if there is no key.  This is a new item and needs a new key
	if (!key) {
	
		var newId 			= Math.random(); 
	
	}else{
		// This will keep the current key so we can update the entry
		newId = key;
	
	}



var contact 								= {};
	contact.startdate						= ["Todays Date:", docGetId("startdate").value];
	contact.fullName						= ["Collector Name:", docGetId("fullName").value];	
	contact.email							= ["Email:", docGetId("email").value];
	contact.city							= ["Type of Material:", docGetId("city").value];
	contact.description						= ["Leave a Comment:", docGetId("description").value];
	contact.rating							= ["Condition of Item 0 Poor - 100 Mint:", docGetId("rating").value];
	



	
	



	
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

};













	
//}; 

















var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


var docGetId = function(x) {

	var theId = document.getElementById(x);
	return theId; 	

}



/*
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
	
}
 		
			

// Display error messages
	var errorMsg = [];
	
	


	
// Check for error
var valName = docGetId("fullName");
var errorMsg = [];
	if (valName.value == "") {
		var nameError = "Please enter your name.";
		valName.style.border = "1px solid red";
		
		errorMsg.push(nameError);
	} 
	

*/