
function createForm() {
    // window.alert("Hello Ronin");
    var main = document.getElementsByTagName("main");

    var apa = document.createElement("button");
    var mla = document.createElement("button");

    apa.id = "apa";
    apa.onclick = formatAPA;
    apa.type = "button";
    apa.innerHTML = "Format in APA";

    mla.id = "mla";
    mla.onclick = formatMLA;
    mla.type = "button";
    mla.innerHTML = "Format in MLA";

    main[0].append(apa);
    main[0].append(mla);
}

function formatAPA() {
    var essay = document.getElementById("essay");
    // window.alert("Howdy");
    console.log(essay);
    for (let i = 0; i < essay.children.length; i++) {
        let x = essay.children[i];
        if (x.nodeType == 1) {
            var tag = x.tagName;
            if (tag == "H1") {
                x.style.textAlign = "center";
            } else if (tag == "P") {
                x.style.fontStyle = "italic";
            }
        }
    }
}

function formatMLA() {
    var essay = document.getElementById("essay");
    // window.alert("Howdy");
    console.log(essay);
    for (let i = 0; i < essay.children.length; i++) {
        let x = essay.children[i];
        if (x.nodeType == 1) {
            var tag = x.tagName;
            if (tag == "H1") {
                x.style.textAlign = "left";
            } else if (tag == "P") {
                x.style.fontStyle = "normal";
            }
        }
    }
}