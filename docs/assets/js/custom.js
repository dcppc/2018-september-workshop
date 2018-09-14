window.onload = function () {
    var tables = document.getElementsByTagName("table");
    var i;
    for(i = 0; i < tables.length; i++) {
        tables[i].className += " table";
        tables[i].className += " table-striped";
        tables[i].className += " table-hover";
        tables[i].className += " table-bordered";
    }
}

