(function() {
    var form1 = "https://www.google.com/search?q=1";
    var form2 = "https://www.google.com/search?q=2";
    var form3 = "https://www.google.com/search?q=3";

    var rand = Math.floor(Math.random() * 3) + 1;

    if (rand === 1) {
        window.location.replace(form1);
    } else if (rand === 2) {
        window.location.replace(form2);
    } else {
        window.location.replace(form3);
    }
})();