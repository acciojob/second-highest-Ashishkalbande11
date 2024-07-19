//your JS code here. If required.
function main() {
    var n = prompt("Enter the number of elements ");
    var arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Enter element " + (i + 1));
    }
    alert(secondHighest(arr));
}

function secondHighest(arr) {
    if (arr.length < 2) return -Infinity;

    let high = -Infinity;
    let secHigh = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = parseInt(arr[i]);

        if (num > high) {
            secHigh = high;
            high = num;
        } else if (num > secHigh && num < high) {
            secHigh = num;
        }
    }
    if (secHigh === -Infinity) {
        return -Infinity;
    }
    return secHigh;
}

// Call the main function to start the program
main();
