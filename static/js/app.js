//function to display data 
function displayData(ufoReport){
    console.log(ufoReport);
    var row = tbody.append("tr")
  
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
    });
  };
  
// Complete the event handler function for the form
function runEnter() {
  
//Remove existing table
    d3.select("tbody").html("");
  
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValue = inputValue.toString().toLowerCase();
  
    console.log(inputValue);
    console.log(ufo);
  
    var filteredData = ufo.filter(ufo => ufo.datetime === inputValue 
     ); 
    console.log(filteredData);

    filteredData.forEach(displayData);
  };
  
// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log the weather data from data.js
console.log(data);
data.forEach(displayData); 
// Assign the data from `data.js` to a descriptive variable
var ufo= data;
  
// Select the button
var button = d3.select("#filter-btn");
var form = d3.select("#form");
  
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);






// // Alternative to write the same diplay function 
// tableData.forEach(display);

// function display(item){
//     var row = tbody.append("tr");
//     var ufoReport = Object.values(item);
//     ufoReport.forEach(data=>{
//         row.append('td').text(data);
//     })
// }
