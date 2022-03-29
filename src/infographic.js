/* Interactive Infographic */
function runInfographic() {
    let objectEmission = document.querySelector("#totalEmission");
    let objectDistance = document.querySelector("#totalDistance");

    console.log(objectEmission.innerText);
    console.log(map.emission);

    setInfographicFontSize()
    $(window).resize(setInfographicFontSize)

    runComparison();

    // code to display the text overlay on image, generate the canvas, then hide the text overlay/image after canvas generated
    if (window.Worker) {
        $("div.spanner").addClass("show");
        $("div.overlay").addClass("show");
        setTimeout(function() {
            let igContainer = document.querySelector("#infographic-container");
            let existingCanvas = $("#infographic-container canvas");
            if (existingCanvas != null) {
                // if the emission has been recalculated, delete the existing canvas and show the text/png again to prep for canvas regeneration
                $(existingCanvas).remove();
                let z = igContainer.children;
                for (let x of z) {
                    $(x).show();
                }
            }

            html2canvas(igContainer, { backgroundColor: null }).then(canvas => {
                let z = igContainer.children;
                for (let x of z) {
                    $(x).hide();
                }
                igContainer.appendChild(canvas);
                $("html, body").stop().animate({
                    scrollTop: $("#emission-data").position().top
                }, 500);
                $("div.spanner").removeClass("show");
                $("div.overlay").removeClass("show");
            });
        }, 100);
    }
};

function setInfographicFontSize() {
    let infoBg = $("#infographic-bg-img");
    let bgHeightPx = infoBg.height();
    let bgWidthPx = infoBg.width();
    $("#infographic-text").css({
        'font-size': `${bgHeightPx / 19}px`,
        'width': `${bgWidthPx*.85}px`,
    });
}