let airportUserInput = document.getElementById("autocomplete"); //Add a new task.
let addAirportButton = document.getElementById("addbutton"); //first button
var calculateButton = document.getElementById("calculate"); //first button
var visitedAirportsHolder = document.getElementById("visited-airport-list"); //ul of #visited-airport-list

// === Code that handles the list of airports ===

// don't allow selection of text for airports visited
$("#visited-airport-list").disableSelection();

// Enter inside the search box adds the airport
$("#autocomplete").keydown(function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        if (!$(".autocomplete-results").is(":visible")) {
            addAirportButton.click();
        }
    }
});

// create new airport item
function createNewAirportElement(taskString, flyingStatus) {
    let airportListItem = document.createElement("li");

    let airportNameLabel = document.createElement("label");
    airportNameLabel.className = "mb-0";
    airportNameLabel.innerText = taskString;
    airportNameLabel.id = taskString + flyingStatus;

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash";

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete btn";
    deleteButton.appendChild(deleteIcon);

    airportListItem.appendChild(airportNameLabel);
    airportListItem.appendChild(deleteButton);
    return airportListItem;
};

function addAirport(flyingStatus) {
    console.log(`Adding airport with flyingStatus ${flyingStatus}`);
    let airportData = JSON.parse(airportUserInput.getAttribute("data-airport"));
    if (airportData && airportData.City && airportData.LocationID) {
        let airportItem = createNewAirportElement(`${airportData.City} - ${airportData.LocationID}`, flyingStatus);
        visitedAirportsHolder.appendChild(airportItem);

        // bind deletion button
        bindDeleteAirport(airportItem);

        // clear the user input
        airportUserInput.value = "";
        addMarker($(airportItem));
    }
};

function bindDeleteAirport(airportListItem) {
    //select delete icon associated with airport
    let deleteButton = airportListItem.querySelector("button.delete");
    //Bind deleteTask to delete button.
    deleteButton.onclick = deleteAirport;
};

function deleteAirport(e) {
    let listItem = this.parentNode;
    let visitedAirportList = listItem.parentNode;
    // Remove airport from visitedAirportList
    visitedAirportList.removeChild(listItem);

    for (let i in map.markers) {
        // if found an airport
        if (map.markers[i].airport.LocationID == listItem.getAttribute("data-location")) {
            map.markers.splice(i, 1);
            map.markerDistance();
            updateLabelText();
            if ($("#visited-airport-list > li").length == 0) {
                $("#visited-airport-list").addClass("d-none");
            }
            break;
        }
    }
};

//Set the click handler to the addAiport function.
addAirportButton.addEventListener("click", function() {
    // TODO: check that the value is one of the ones in the airport list
    if (airportUserInput.getAttribute("data-airport") != "") {
        // selects which transportation method is checked
        let flyingStatus = $("#journeytype [name='journeytype']:checked").val();
        addAirport(flyingStatus);
        $("#visited-airport-list").removeClass("d-none");
        document.getElementById("autocomplete").focus();
    }
});

//add marker
function addMarker($li) {
    let airport = JSON.parse($('#autocomplete').attr("data-airport")) || {};
    $('#autocomplete').attr("data-airport", "");
    var marker = {
        airport: airport,
        x: airport.x,
        y: airport.y,
        startX: airport.x,
        startY: airport.y,
        fill: '#f47825',
        flying: $("#journeytype [name='journeytype']:checked").val() == 1,
        current: true,
        index: map.markers.length
    };
    $li.attr("data-location", airport.LocationID);

    map.markers.push(marker);
    map.currentAirport = airport;
    map.currentMarker = marker;

    map.markerDistance();
    updateLabelText();
}

// on calculate emission button click
calculateButton.addEventListener("click", function() {
    updateEmissionData();
    // drawCharts();
    updateFormData();
    runInfographic();
    updateComparison();
});

// appends the selected cities to the google form response
function updateFormData() {
    var lengthOfResponse = document.querySelector("#visited-airport-list").childElementCount;
    for (let i = 0; i < lengthOfResponse; i++) {
        document.querySelector("#city" + i).value = document.querySelector("#visited-airport-list").children[i].children[0].id;
    }

}

/*
Updates the emission data in the infographic section
*/
function updateEmissionData() {
    $("#distancebetween [data-distance]").text(map.distanceInMiles());
    map.calculateEmission();
    $("#totalEmission[data-emission]").text(map.emissionsInKg());

    document.querySelector("#totalCities").innerHTML = document.querySelector("#visited-airport-list").childElementCount;
    $("#emission-data").removeClass("d-none");

    // average person calculation
    let avgUSEmissionsPerPerson2019 = 15300;
    // setting the percentage of emissions of average american
    let percentageAmerican = $("#percentageAmerican");
    percentageAmerican.text(parseFloat(map.emission / avgUSEmissionsPerPerson2019 * 100).toFixed(2) + "%");
}

//update search label text
function updateLabelText() {
    $("#journeytype").val("1");
    if (map.markers.length <= 0) {
        $("#sort-it [for='autocomplete']").text("I'm starting my AAMC interview from");
        $("#journeytype").hide();
    } else {
        $("#sort-it [for='autocomplete']").text("I then traveled to");
        // $("#journeytype").show();
    }
    if (map.markers.length > 1) {
        $("#calculate").show();
    } else {
        $("#calculate").hide();
        $("#emission-data").addClass("d-none");
    }
}

function animateThankYouMessage() {
    $("#thankyou").show();
    // TODO: decide if we want this scroll
    // $("html, body").stop().animate({ scrollTop: $("#thankyou").position().top }, 500);
    return false;
}

// update comparisons between different lifestyle changes
function updateComparison() {
    document.getElementById("opt4").checked = false;
    document.getElementById("opt5").checked = false;
    document.getElementById("opt6").checked = false;

    document.getElementById("opt4-bar").classList.remove("on");
    document.getElementById("opt5-bar").classList.remove("on");
    document.getElementById("opt6-bar").classList.remove("on");
}