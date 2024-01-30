// popup.js
document.getElementById('cleanButton').addEventListener('click', cleanList);

function cleanList() {
    var inputText = document.getElementById('inputText').value;
    var inputArray = inputText.split('\n');
    var trimmedArray = inputArray.map(item => item.trim());
    var outputArray = [...new Set(trimmedArray)];
    document.getElementById('outputText').value = outputArray.join('\n');
}
