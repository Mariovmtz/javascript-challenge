// from data.js
var tableData = data;

// YOUR CODE HERE!
var filterButton = d3.select("#filter-btn");

// initialize the webpage displaying all the objects in the table
displayTable(tableData);



// Function to display an array of js objects for this project
  function displayTable(sightingList) {
    let tableBody = d3.select("tbody");    
    sightingList.forEach((sighting) => {
        var tblrow = tableBody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tblrow.append("td");   
            cell.text(value);   
        });
      });
  };

  // Clean all the table cells in the page
  function cleanTable(){
    d3.select("tbody").selectAll("td").remove();
  
  };

// handler of the filter button: 1) filters our arrayy of data, 2) cleans the table of any row, 3) displays again the table based on the filtered data
  filterButton.on("click", function() {
    let filteredData = tableData.filter(filterTable(getParams()));
    
    cleanTable()
    displayTable(filteredData)
  });

  /* function to get a js object with all the values of our input forms where key = html tag id, if the value of the input control is empty the key/value
    won't be added to our dictionary

    if we ever need additional filters we can add it using the same tags in our html and this function will capture them.
  */
  function getParams(){
    let inputs = d3.select(".list-group-item").selectAll(".form-control")
    let params = {}

    inputs.each(function() {
      if (this.value){
        params[this.id] = this.value
      }
    });
    return params
  };


  function filterTable(filterParams){
    return function(el){      
      let result = true
      Object.entries(filterParams).forEach(([key, value]) => {
        if (key in el){
          if (el[key] != value)
            result = false
        };
      });
    return result  
    };
  };
