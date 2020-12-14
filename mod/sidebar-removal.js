window.onload = applyMod;
window.onafterupdate = applyMod;
window.ontransitionend = applyMod;
window.onclick = applyMod;
window.onmessage = applyMod;
window.onafterprint = applyMod;
window.onpageshow = applyMod;
window.onmousemove = applyMod;

var applied = false
var clonedChildren = []

function applyMod() {
    
    var ubar = document.getElementsByClassName('button-toolbar button-circularimage')[0]
    if (!document.body.contains(ubar) || ubar.children.length !== 1)
        return;
    
    // --- Core script ---------------------------------------------------------------------
    
    var sw = document.getElementById('switch')
    
    if (sw !== null) {
        while (sw.childElementCount > 2) {
            var curChild = sw.children[0]
            
            clonedChildren.push(curChild.cloneNode(true))
            //clonedChildren[clonedChildren.length - 1].
            
            sw.removeChild(curChild)
            ubar.appendChild(curChild)
        }
    } else {
        clonedChildren.forEach(x => ubar.appendChild(x))
    }

    var pan = document.getElementById('panels')
    var cont = document.getElementById('panels-container')
    var gr = document.getElementsByClassName('panel-group')[0]

    if (sw !== null) pan.removeChild(sw)
    cont.style.width = 0
    if (gr !== undefined) gr.style.right = 0
        
    cont.ontransitionend = function() {
        gr = document.getElementsByClassName('panel-group')[0]
        cont.style.width = 0
        if (gr !== undefined) gr.style.right = 0
        if (cont.children[1] !== undefined) {
            var left = parseInt(cont.children[1].style.left,10)
            cont.children[1].style.left = left + 34
        }
    }

    // --- Core script ---------------------------------------------------------------------
    
    applied = true
}