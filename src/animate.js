//TODO - cleanup

//event handlers

document.querySelector("#addbutton").addEventListener("mouseup", e => {
    setTimeout(hide_trans_summary.play, 100)
});

//animation
var hide_trans_summary = anime({
    opacity: '0',
    easing: 'easeInOutSine',
    duration: 500,
    begin: function() {},
    autoplay: false,
    complete: function() {
        translate_button.play();
    },
});


// only move one thing
//document.querySelector("#incomplete-tasks").lastElementChild

var translate_button = anime({
    targets: document.querySelector("#incomplete-tasks"),
    translateY: ['0', '0'],
    translateX: ['0', '0'],
    scale: 1.0,
    duation: 500,
    autoplay: false,
    easing: 'easeOutExpo',
    complete: function() {}
});