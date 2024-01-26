function convertTemperature(inputId, meterId, lineId) {
    var fahrenheitInput = document.getElementById("fahrenheitInput");
    var kelvinInput = document.getElementById("kelvinInput");

    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    var kelvinValue = parseFloat(kelvinInput.value);

    if (inputId === "fahrenheitInput" && !isNaN(fahrenheitValue)) {
        kelvinInput.value = ((fahrenheitValue - 32) * 5/9) + 273.15;
    } else if (inputId === "kelvinInput" && !isNaN(kelvinValue)) {
        fahrenheitInput.value = ((kelvinValue - 273.15) * 1.8) + 32;
    } else {
        // Handle backspace or invalid input
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    }

    updateTemperatureMeter(fahrenheitValue, 'fahrenheit-meter', 'fahrenheit-line');
    updateTemperatureMeter(kelvinValue, 'kelvin-meter', 'kelvin-line');
}

function updateTemperatureMeter(temperature, meterId, lineId) {
    temperature = parseFloat(temperature);
    if (isNaN(temperature)) {
        temperature = 0;
    }

    if (temperature < 0) {
        temperature = 0;
    } else if (temperature > 1000) {
        temperature = 1000;
    }

    const percentage = (temperature / 1000) * 100;
    document.getElementById(lineId).style.height = percentage + '%';
}

document.addEventListener('DOMContentLoaded', function() {
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const kelvinInput = document.getElementById('kelvinInput');

    fahrenheitInput.addEventListener('input', function() {
        convertTemperature('fahrenheitInput', 'fahrenheit-meter', 'fahrenheit-line');
    });

    kelvinInput.addEventListener('input', function() {
        convertTemperature('kelvinInput', 'kelvin-meter', 'kelvin-line');
    });
});





