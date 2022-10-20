// Our JSON data
var data =
{
	"lectureList": [
		{
			"listName": "HTML",
			"contentList": [
				{
					"guestion": "HTML",
					"answer": "1972"
				},
				{
					"guestion": "header",
					"answer": "999"
				}
			]
		},
		{
			"listName": "CSS",
			"contentList": [
				{
					"guestion": "css",
					"answer": "1972"
				},
				{
					"guestion": ":root",
					"answer": "1972"
				},
				{
					"guestion": "::placholder",
					"answer": "1972"
				}
			]
		}
	]
}

// Put the data into a variable and format with HTML tags
var output = "<h1>lectureList</h1>";

// Loop through the lectureList
for (var i in data.lectureList) {
	output += "<h2>" + data.lectureList[i].listName + "</h2>";
	output += "<ul>";

	// Loop through the contentList for the current artist
	for (var j in data.lectureList[i].contentList) {
		output += "<li>" + data.lectureList[i].contentList[j].guestion;
	}
	output += "</ul>";
}

// Output the data to the "artistlist" element
document.getElementById("artistlist").innerHTML = output;
