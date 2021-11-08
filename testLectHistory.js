const surnameChoose = document.querySelector('select');
      const infoDisplay = document.querySelector('pre');

      surnameChoose.onchange = function() {
         const surname = surnameChoose.value;
        updateDisplay(surname);
      };

      function updateDisplay(surname) {
        surname = surname.replace(" ", "");
        surname = surname.toLowerCase();
        let url = surname;

      fetch(url).then(function(response) {
        response.text().then(function(text) {
          infoDisplay.textContent = text;
  });
});
        
      };

      updateDisplay('Haden');
      surnameChoose.value = 'Haden';



















/*This only works if you prompt for one thing at a time. Once add 2 or more variables to the prompt, it always returns all the values in the database. Once we get into actual databases, see about a down option for lecture name that pulls from the database.*/
/*let database = [
{
	firstname: "Russel L.",
	surname: "Haden",
	credentials: "MD",
	lecturename: "Peter T. Bohan Lecture",
	institution: "Unknown",
	titleoflecture: "Pernicious Anemia from Addison to Folic Acid",
	keyword: ["Pernicious", "Anemia", "Addison", "Folic Acid"],
	year: "1947"
}
];

This doesn't work yet
var queryPrompt = prompt("Enter a keyword");

function exist(keyword) { 
	if (database.keyword === keyword["pernicious"]) {
	console.log(database); 
	} else {
		alert ("Sorry, that keyword is not in our database");
	}
}

let queryPrompt = prompt("Enter a surname");

function exist(surname) { 
	if (database.surname == surname) {
	console.log(database); 
	} else {
		alert ("Sorry, that surname is not in our database");
	}
}
	exist(queryPrompt);*/