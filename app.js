var n1 = 6;
var n2 = 4;
var allowed = false;
var phrase = "Unknown Data Type";
function add2nums(n1, n2, allowed, phrase) {
    if (allowed) {
        console.log(n1 + n2);
    }
    else {
        console.log(phrase);
    }
}
add2nums(n1, n2, allowed, phrase);
