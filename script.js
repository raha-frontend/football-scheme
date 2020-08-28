const selectBtn = document.querySelector('.js-select-btn');
const strategyField = document.querySelector('#strategy');
const footballField = document.querySelector('.football-field');

selectBtn.addEventListener('click', function() {
    console.log('123', strategyField);
    console.log(strategyField.value);

    if (strategyField.value === '4-2-3-1') {
        footballField.classList.remove('football-field-4-3-3');
        footballField.classList.remove('football-field-4-4-2');
        footballField.classList.add('football-field-4-2-3-1');
    } else if(strategyField.value === '4-3-3') {
        footballField.classList.remove('football-field-4-2-3-1');
        footballField.classList.remove('football-field-4-4-2');
        footballField.classList.add('football-field-4-3-3');
    } else if(strategyField.value === '4-4-2') {
        footballField.classList.remove('football-field-4-2-3-1');
        footballField.classList.remove('football-field-4-3-3');
        footballField.classList.add('football-field-4-4-2');
    }
});
