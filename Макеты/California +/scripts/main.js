function navMenu() {
    let navAll = document.getElementById('navAll');
    let navSolutions = document.getElementById('navSolutions');
    let navAbout = document.getElementById('navAbout');
    let navSupport = document.getElementById('navSupport');

    let arrow1 = document.getElementById('arrow1');
    let arrow2 = document.getElementById('arrow2');
    let arrow3 = document.getElementById('arrow3');
    let arrow4 = document.getElementById('arrow4');

    navAll.onmouseover = function () {
        showArrow(arrow1);
    };
    navSolutions.onmouseover = function () {
        showArrow(arrow2);
    };
    navAbout.onmouseover = function () {
        showArrow(arrow3);
    };
    navSupport.onmouseover = function () {
        showArrow(arrow4);
    };

    navAll.onmouseout = function () {
        hiddenArrow(arrow1);
    };
    navSolutions.onmouseout = function () {
        hiddenArrow(arrow2);
    };
    navAbout.onmouseout = function () {
        hiddenArrow(arrow3);
    };
    navSupport.onmouseout = function () {
        hiddenArrow(arrow4);
    };



    function showArrow(arrow) {
        arrow.classList.add('showArrow');
    }
    function hiddenArrow(arrow) {
        arrow.classList.remove('showArrow');
    }
}
navMenu()
