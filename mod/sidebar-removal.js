window.onload = applyMod;
window.onafterupdate = applyMod;
window.ontransitionend = applyMod;
window.onclick = applyMod;
window.onmessage = applyMod;
window.onafterprint = applyMod;
window.onpageshow = applyMod;
window.onmousemove = applyMod;

var applied = false

function applyMod() {
    if (applied)
        return;

    // Skip if browser didn't load yet
    if (!document.body.contains(document.getElementById('switch')) || 
        !document.body.contains(document.getElementsByClassName('button-toolbar button-circularimage')[0]))
        return;
    
    // --- Core script ---------------------------------------------------------------------
    
    var ubar = document.getElementsByClassName('button-toolbar button-circularimage')[0];
    var sw = document.getElementById('switch');

    while (sw.childElementCount > 2) {
        var curChild = sw.children[0]
        sw.removeChild(curChild)
        ubar.appendChild(curChild)
    }

    var pan = document.getElementById('panels')
    var cont = document.getElementById('panels-container')
    var gr = document.getElementsByClassName('panel-group')[0]

    pan.removeChild(sw)
    cont.style.width = 0
    gr.style.right = 0
    
    cont.ontransitionend = function() { gr.style.right = 0 }

    // --- Core script ---------------------------------------------------------------------
    
    applied = true;
}