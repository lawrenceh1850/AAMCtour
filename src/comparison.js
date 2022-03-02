function getBarHeight(emissiontonnes) {
    return `calc(${emissiontonnes}rem * 5)`
}

function runComparison() {
    let coBarThreeEl = document.getElementById("coBarThree");
    let emissiontonnes = map.emissionsInKg() / 1000
    setClassValue("co", emissiontonnes.toFixed(2))
    coBarThreeEl.style = `height: ${getBarHeight(emissiontonnes)}`
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
        bar.height(`${getBarHeight(emissionOffset)}`);
    } else {
        bar.height(0);
    }
}


$(".opt-bar div").toggle();

for (let i = 0; i < 7; i++) {
    let opt = document.getElementById(`opt${i}`);
    opt.addEventListener("change", changeOPT);
}

// const opt4 = document.getElementById("opt4");
// opt4.addEventListener("change", changeOPT);

// const opt5 = document.getElementById("opt5");
// opt5.addEventListener("change", changeOPT);

// const opt6 = document.getElementById("opt6")
// opt6.addEventListener("change", changeOPT);