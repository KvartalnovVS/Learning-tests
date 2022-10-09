function navMenu() {
    let navAll = document.getElementById('navAll');
    let navSolutions = document.getElementById('navSolutions');
    let navAbout = document.getElementById('navAbout');
    let navSupport = document.getElementById('navSupport');

    let arrow1 = document.getElementById('arrow1');
    let arrow2 = document.getElementById('arrow2');
    let arrow3 = document.getElementById('arrow3');
    let arrow4 = document.getElementById('arrow4');

    let allList = document.getElementById('allList');
    let solutionsList = document.getElementById('solutionsList');
    let aboutList = document.getElementById('aboutList');
    let supportList = document.getElementById('supportList');

    function NavBtn(title, list) {
        this.title = title;
        this.list = list;
    };

    let allProductsObj = new NavBtn('All products', {
        first: 'Lorem',
        second: 'Lorem ipsum',
        third: 'Sit amet',
        fourth: 'Neque porro'
    });
    let solutionsObj = new NavBtn('Solutions', {
        first: 'Sit amet',
        second: 'Lorem'
    });
    let aboutObj = new NavBtn('About', {
        first: 'Lorem ipsum'
    });
    let supportObj = new NavBtn('Support', {
        first: 'Neque porro',
        second: 'Sit amet',
        third: 'Lorem'
    });

    function addListText(list, obj) {
        for (let key in obj) {
            let subtitle = document.createElement('p');
            subtitle.textContent = '• ' + obj[key];
            list.appendChild(subtitle);
        }
    }
    addListText(allList, allProductsObj.list);
    addListText(solutionsList, solutionsObj.list);
    addListText(aboutList, aboutObj.list);
    addListText(supportList, supportObj.list);


    navAll.onmouseover = function () {
        showArrow(arrow1);
        showList(allList);
    };
    navSolutions.onmouseover = function () {
        showArrow(arrow2);
        showList(solutionsList);
    };
    navAbout.onmouseover = function () {
        showArrow(arrow3);
        showList(aboutList);
    };
    navSupport.onmouseover = function () {
        showArrow(arrow4);
        showList(supportList);
    };

    navAll.onmouseout = function () {
        hiddenArrow(arrow1);
        hiddenList(allList);
    };
    navSolutions.onmouseout = function () {
        hiddenArrow(arrow2);
        hiddenList(solutionsList);
    };
    navAbout.onmouseout = function () {
        hiddenArrow(arrow3);
        hiddenList(aboutList);
    };
    navSupport.onmouseout = function () {
        hiddenArrow(arrow4);
        hiddenList(supportList);
    };


    function showArrow(arrow) {
        arrow.classList.add('showArrow');
    }
    function hiddenArrow(arrow) {
        arrow.classList.remove('showArrow');
    }

    function showList(list) {
        list.classList.add('showList');
    }
    function hiddenList(list) {
        list.classList.remove('showList');
    }
}
navMenu()
