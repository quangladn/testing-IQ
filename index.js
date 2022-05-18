function getValue(value) {
    var value1 = document.getElementById(value)
    return value1.value
}

// function sendResult(item) {
//     window.open(`mailto:laquang468135@gmail.com?subject=testing&body=${item}}`);
// }

document.write(getValue('pet-select'))