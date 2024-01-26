function convertTemperature(inputId, meterId, lineId) {
    var celsiusInput = document.getElementById("celsiusInput");
    var fahrenheitInput = document.getElementById("fahrenheitInput");

    var celsiusValue = parseFloat(celsiusInput.value);
    var fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (inputId === "celsiusInput" && !isNaN(celsiusValue)) {
        fahrenheitInput.value = (celsiusValue * 9/5) + 32;
    } else if (inputId === "fahrenheitInput" && !isNaN(fahrenheitValue)) {
        celsiusInput.value = (fahrenheitValue - 32) * 5/9;
    } else {
        // Handle backspace or invalid input
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    }

    updateTemperatureMeter(celsiusValue, 'celsius-meter', 'celsius-line');
    updateTemperatureMeter(fahrenheitValue, 'fahrenheit-meter', 'fahrenheit-line');
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
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');

    celsiusInput.addEventListener('input', function() {
        convertTemperature('celsiusInput', 'celsius-meter', 'celsius-line');
    });

    fahrenheitInput.addEventListener('input', function() {
        convertTemperature('fahrenheitInput', 'fahrenheit-meter', 'fahrenheit-line');
    });
});





