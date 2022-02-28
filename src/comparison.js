function runComparison() {
    let coBarThreeEl = document.getElementById("coBarThree");
    let emissiontonnes = map.emission / 1000
    setClassValue("co", emissiontonnes.toFixed(2))
    coBarThreeEl.style = "height: calc(" + emissiontonnes + "rem * 10)"
}

function setClassValue(className, value) {
    els = document.getElementsByClassName(className)

    for (i = 0; i < els.length; i++) {
        els[i].innerText = value
    }
}

function changeOPT(e) {
    let curBarQuerySelector = "#" + e.currentTarget.id + "-bar";
    const bar = $(curBarQuerySelector);
    const emissionOffset = document.getElementById(e.currentTarget.id).value;
    $(curBarQuerySelector + " div").toggle();
    if (bar.height() === 0) {
        bar.height("calc(" + emissionOffset + "rem * 10)");
    } else {
        bar.height(0);
    }
}


$(".opt-bar div").toggle();
const opt4 = document.getElementById("opt4");
opt4.addEventListener("change", changeOPT);

const opt5 = document.getElementById("opt5");
opt5.addEventListener("change", changeOPT);

const opt6 = document.getElementById("opt6")
opt6.addEventListener("change", changeOPT);