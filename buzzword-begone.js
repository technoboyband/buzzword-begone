
function textReplace(childNode, parentNode) {
    let text = childNode.nodeValue;
    //text = text.replace('/ai/gi', 'artificial dumbtelligence');
    let replacedText = text.replace('/AI/', 'stinky ai');
    parentNode.replaceChild(document.createTextNode(replacedText), childNode);
}

function main() {
    var pageElements = [...document.getElementsByTagName('*')];

    pageElements.forEach(element => {
        element.childNodes.forEach(child => {
                if (child.nodeType === 3) {
                    textReplace(child, element);
                }
            })
    })
}

window.onload = main();