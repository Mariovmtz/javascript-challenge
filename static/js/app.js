// from data.js
var tableData = data;

// YOUR CODE HERE!
var filterButton = d3.select("#filter-btn");


displayTable(tableData);

  function displayTable(sightingList) {
    let tableBody = d3.select("tbody");    
    sightingList.forEach((sighting) => {
        var tblrow = tableBody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tblrow.append("td");   
          cell.text(value);   
        });
      });
  }

  function cleanTable(){
    d3.select("tbody").selectAll("td").remove();
  }


  filterButton.on("click", function() {
    let filterDate = d3.select("#datetime").property("value")
    let filteredData = tableData.filter(sighting => sighting.datetime === filterDate);

    cleanTable();
    displayTable(filteredData);
  
  });

