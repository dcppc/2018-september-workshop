window.onload = function () {
    console.log("Modifying tables");
    var tables = document.getElementsByTagName("table");
    var i;
    for(i = 0; i < tables.length; i++) {
        console.log(i);
        tables[i].className += " table";
    }
    console.log("Done");
}

