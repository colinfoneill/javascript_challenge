// var data = [{
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//   }

// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");

//append data to table using arrow functions
tableData.forEach(record => {
    var row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });




  // grab reference to the date input field
var dateInput = d3.select("#datetime");

//grab a reference to the city input field
// var cityInput = d3.select("#city");

//get filter button tag
var button = d3.select("#filter-btn")

// create event listeners
button.on("click", function() {

// Get the value property of the input element
var inputValue = dateInput.property("value");

// get the value property of the city input element
// var cityInputValue = cityInput.property("value");


//filter data based on the user input
if (inputValue) {var filteredData = tableData.filter(data => data.datetime == inputValue);};

//clear the output
tbody.html("")

//filter the table
filteredData.forEach(record => {
    var row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



//filter the table based on city
cityFilteredData.forEach(record)


});