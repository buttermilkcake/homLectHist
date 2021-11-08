/*Don't use this one, use testLectHistory instead*/
var database = [
{
	firstname: "Russel L.",
	surname: "Haden",
	credentials: "MD",
	lecturename: "Peter T. Bohan Lecture",
	institution: "Unknown",
	titleoflecture: "Pernicious Anemia from Addison to Folic Acid",
	keyword: ["Pernicious", "Anemia", "Addison", "Folic Acid"],
	year: 1947
},
{
	firstname: "Walter",
	surname: "Alverez",
	credentials: "MD",
	lecturename: "Peter T. Bohan Lecture",
	institution: "Unknown",
	titleoflecture: "Some Functional Distresses in the Abdomen",
	keyword: ["Functional", "Distresses", "Abdomen"],
	year: 1948
},
{
	firstname: "John Farquhar",
	surname: "Fulton",
	credentials: "MD, LLD",
	lecturename: "Clendening Lectureship in the History and Philosophy of Medicine",
	institution: "Yale University",
	titleoflecture: "Vesalius Four Centuries Later English Medicine in the Eighteenth Century",
	keyword: ["Vesalius", "English", "Medicine", "Eighteenth", "Century"],
	year: 1948,
	notes: "Inaugural Lecture"
}
];

var queryPrompt = prompt("Enter a surname, year, lecturename, keyword, or institution");

function exist(surname, lecturename, institution, keyword, year) {
	if (surname === database[0].surname || lecturename === database[0].lecturename || institution === database[0].institution || keyword === database[0].keyword["Pernicious" || "Anemia" || "Addison" || "Folic Acid"] || year === database[0].year)
	{
		console.log(database[0]);
	} else {
		alert("Sorry, none of those exist in our database.");
	}
}

exist(queryPrompt);