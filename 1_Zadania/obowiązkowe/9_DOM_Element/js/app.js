document.addEventListener("DOMContentLoaded", function () {
    let homeElement = document.getElementById("home");
    let childElements = Array.from(document.querySelector(".oferts").children);
    let banner = document.querySelector(".ban");
    let blocks = Array.from(document.querySelectorAll(".block"));
    let links = Array.from(document.querySelector(".links").children);

    /*
        Poniżej napisz kod rozwiązujący zadania
    */

    // exc 0
    console.log('data-color attribute value: ', getDataInfo(links));

    // exc 1
    console.log('tag name: ', homeElement.tagName, '; classes, names list: ', homeElement.classList);
    childElements.forEach(element => console.log('tag name: ', element.tagName, '; classes, names list: ', element.classList));
    console.log('tag name: ', banner.tagName, '; classes, names list: ', banner.classList);
    blocks.forEach(block => console.log('tag name: ', block.tagName, '; classes, names list: ', block.classList));
    links.forEach(link => console.log('tag name: ', link.tagName, '; classes, names list: ', link.classList));

    // exc 2
    // dzieki metodzie, innerHTML mamy dostep do zawartosci po tagu otwierajacym, a przed zamykajacym, danego elementu
    // natomiast metoda, outerHTML ma dostep do tagu ktrego dotyczy oraz do samego container, po ktrym wywołuje swoje dzielanie
    blocks.forEach(block => {
        console.log('innerHTML: ', block.innerHTML);
        console.log('outerHTML: ', block.outerHTML);
    });

    // exc 3
    const mainFooterElement = document.querySelector('#mainFooter');
    console.log(getId(mainFooterElement));

    // exc 4
    console.log('exc 4', getTags(childElements));

    // exc 5
    console.log(getClassInfo(banner));

    // exc 6
    const navTagLiElement = Array.from(document.querySelectorAll('nav > ul > li'));
    setDataDirection(navTagLiElement);
});

// exc 6
function setDataDirection(elements) {
    elements.forEach(element => {
        if (!element.attributes['data-direction'])
           element.setAttribute('data-direction', 'top')
    });
}

// exc 5
function getClassInfo(element) {
    return Array.from(element.classList)
}

// exc 4
function getTags(elements) {
    return elements.map(element => element.tagName);
}

// exc 3
function getId(element) {
    return element.attributes['id'].value;
}

// exc 0
function getDataInfo(elements) {
    return elements.map(element => element.attributes['data-color'].value)
}
