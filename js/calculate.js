function showInfo(parameter) {
    let infoMessage;

    switch (parameter) {
        case 'secchiDepth':
            infoMessage = 'Secchi Depth is a measure of water transparency. It is the depth at which a Secchi disk disappears from view.';
            break;
        case 'totalPhosphorus':
            infoMessage = 'Total Phosphorus is a measure of the amount of phosphorus present in water. It is an important indicator of nutrient pollution.';
            break;
        case 'transparency':
            infoMessage = 'Transparency is a measure of how easily light can pass through water. It is often related to water clarity.';
            break;
        default:
            infoMessage = 'No information available.';
    }

    alert(infoMessage);
}

function calculateWQI() {
    const secchiDepth = parseFloat(document.getElementById('secchiDepth').value);
    const totalPhosphorus = parseFloat(document.getElementById('totalPhosphorus').value);
    const transparency = parseFloat(document.getElementById('transparency').value);

    if (isNaN(secchiDepth) || isNaN(totalPhosphorus) || isNaN(transparency)) {
        alert('Please enter valid numeric values for all parameters.');
        return;
    }

    const wqi = (secchiDepth + totalPhosphorus + transparency) / 3;

    displayResult(wqi);
}

function displayResult(wqi) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>The Water Quality Index (WQI) is: ${wqi.toFixed(2)}</p>`;
}
