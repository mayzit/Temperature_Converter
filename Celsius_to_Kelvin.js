function convertTemperature(inputId, meterId, lineId) {
    var celsiusInput = document.getElementById("celsiusInput");
    var kelvinInput = document.getElementById("kelvinInput");

    var celsiusValue = parseFloat(celsiusInput.value);
    var kelvinValue = parseFloat(kelvinInput.value);

    if (inputId === "celsiusInput" && !isNaN(celsiusValue)) {
        kelvinInput.value = (celsiusValue + 273.15);
    } else if (inputId === "kelvinInput" && !isNaN(kelvinValue)) {
        celsiusInput.value = (kelvinValue - 273.15);
    } else {
        // Handle backspace or invalid input
        celsiusInput.value = "";
        kelvinInput.value = "";
    }

    updateTemperatureMeter(celsiusValue, 'celsius-meter', 'celsius-line');
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
    const celsiusInput = document.getElementById('celsiusInput');
    const kelvinInput = document.getElementById('kelvinInput');

    celsiusInput.addEventListener('input', function() {
        convertTemperature('celsiusInput', 'celsius-meter', 'celsius-line');
    });

    kelvinInput.addEventListener('input', function() {
        convertTemperature('kelvinInput', 'kelvin-meter', 'kelvin-line');
    });
});





