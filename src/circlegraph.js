// function drawCharts() {
//     var circles = document.querySelectorAll(".percent-circle");
//     let avgUSEmissionsPerPerson2019 = 15300;
//     circles.forEach(function(el) {
//         //pull the percentage and turn it into a fraction
//         let percent = map.emission / avgUSEmissionsPerPerson2019;
//         let percentage = percent * 100
//         $(".percent-circle").attr("data-percent", percentage.toFixed(1).toString());
//         //work out the circumference from the width
//         var diameter = el.offsetWidth;

//         var circumference = Math.ceil(diameter * Math.PI);
//         //now we have the circumference, we know how long the ouline should be
//         var stroke = Math.ceil(circumference * percent);

//         //also workout how long the line doesn't exist for
//         var diff = circumference - stroke;

//         //now add the strok dash array for the first two values
//         //TODO : could this all be done with css?
//         el.querySelector(".percent-circle-inner").style.strokeDasharray =
//             stroke + "px " + diff + "px";
//     });

//     let avgUSEmissionsPerPerson2019 = 15300;
//     // setting the percentage of emissions of average american
//     let percentageAmerican = $("#percentageAmerican");
//     percentageAmerican.text(parseFloat(map.emission / avgUSEmissionsPerPerson2019 * 100).toFixed(2) + "%");
// }