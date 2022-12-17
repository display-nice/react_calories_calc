let ageField = document.querySelector('#age');
let heightField = document.querySelector('#height');
let weightField = document.querySelector('#weight');
let calculateButton = document.querySelector('.form__submit-button');
let resetButton = document.querySelector('.form__reset-button');
let calculationResult = document.querySelector('.counter__result');

// Функция активации кнопки "Рассчитать"
let toggleCalculateButton = function () {
    // return console.log("Функция активации кнопки сработала");
    let age = ageField.value;
    let height = heightField.value;
    let weight = weightField.value;
    if (age && height && weight) {
        calculateButton.disabled = false;
        // return console.log(age, height, weight, "Все поля заполнены");
    } else {
        calculateButton.disabled = true;
        // return console.log(age, height, weight, "Какого-то поля не хватает");        
    }
}
// Функция активации кнопки "Очистить"
let toggleResetButton = function () {
    let age = ageField.value;
    let height = heightField.value;
    let weight = weightField.value;
    if (age || height || weight) {
        resetButton.disabled = false;
    } else {
        resetButton.disabled = true;
    }
}
// Функция деактивации кнопок "Рассчитать" и "Очистить", также прячется секция с результатами расчёта
resetButton.onclick = function () {
    resetButton.disabled = true;
    calculateButton.disabled = true;
    calculationResult.classList.add('counter__result--hidden');
}

// Функция преобразования выбранного пола м\ж в числовую поправку к формуле расчёта ккал.
let getParameterForGender = function () {
    let selectedGender = document.querySelector('input[name="gender"]:checked').value;
    if (selectedGender == 'male') {
        return 5;
    } else return -161;
}

// Функция преобразования выбранного типа физ. активности в числовую поправку к формуле расчёта ккал.
let getActivityCoefficient = function () {
    let selectedActivity = document.querySelector('input[name="activity"]:checked').value;
    switch(selectedActivity) {
        case 'min':
            return 1.2;
        case 'low':
            return 1.375;
        case 'medium':
            return 1.55;
        case 'high':
            return 1.725;
        case 'max':
            return 1.9;
        default:
            return 1.2;
    }
}
// Функция расчёта ккал для поддержания веса
let weightMaintenance = function () {
    let age = ageField.value;
    let height = heightField.value;
    let weight = weightField.value;
    let N = Math.round( ((10*weight) + (6.25*height) - (5*age) + getParameterForGender()) * getActivityCoefficient() );
    return N;
}

// Итоговая функция, активирующая расчёт и запись в поле результата
calculateButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    calculationResult.classList.remove('counter__result--hidden');
    let caloriesNormal = weightMaintenance();
    let caloriesLoseWeight = Math.round(caloriesNormal - 0.15*caloriesNormal);
    let caloriesGainWeight = Math.round(caloriesNormal + 0.15*caloriesNormal);
    // return console.log(caloriesNormal, caloriesLoseWeight, caloriesGainWeight);
    document.querySelector('#calories-norm').textContent = caloriesNormal;
    document.querySelector('#calories-minimal').textContent = caloriesLoseWeight;
    document.querySelector('#calories-maximal').textContent = caloriesGainWeight;
});

ageField.onchange = function() {
    toggleCalculateButton();
    toggleResetButton();
};
heightField.onchange = function() {
    toggleCalculateButton();
    toggleResetButton();
};
weightField.onchange = function() {
    toggleCalculateButton();
    toggleResetButton();
};

