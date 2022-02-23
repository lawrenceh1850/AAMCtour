/* Interactive Infographic */
function runInfographic() {
    let objectEmission = document.querySelector("#totalEmission");
    let objectDistance = document.querySelector("#totalDistance");
    let objectCity = document.querySelector("#totalCities");

    console.log(objectEmission.innerText);
    console.log(map.emission);

    setInfographicFontSize()
    $(window).resize(setInfographicFontSize)

    // TODO: remove
    // animateValue(objectEmission, 0, objectEmission.innerHTML, 1500);
    // animateValue(objectDistance, 0, objectDistance.innerHTML / 1.609344, 1500);
    // animateValue(objectCity, 0, objectCity.innerHTML, 500);


    runComparison();

};

function setInfographicFontSize() {
    let infoBg = $("#infographic-bg-img");
    let bgHeightPx = infoBg.height();
    let bgWidthPx = infoBg.width();
    $("#infographic-text").css({
        'font-size': `${bgHeightPx / 18}px`,
        'width': `${bgWidthPx*.85}px`,
    });
}