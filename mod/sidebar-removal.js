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

    var ubar = document.getElementsByClassName('button-toolbar button-circularimage')[0];
    var sw = document.getElementById('switch');

    // Skip if browser didn't load yet
    if (!document.body.contains(sw) || !document.body.contains(ubar))
        return;
    
    // --- Core script ---------------------------------------------------------------------

    while (sw.childElementCount > 2) {
        var curChild = sw.children[0]
        sw.removeChild(curChild)
        ubar.appendChild(curChild)
    }

    var pan = document.getElementById('panels')
    var cont = document.getElementById('panels-container')

    pan.removeChild(sw)
    cont.style.width = 0
    pan.children[0].style.right = 0
    // --- Core script ---------------------------------------------------------------------
    
    applied = true;
}