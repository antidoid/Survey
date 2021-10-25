const selects = document.querySelectorAll('select');
const form = document.querySelector('form');

form.addEventListener('submit', evt => {
    for (let select of selects) {
        if (select.value === "default") {
            evt.preventDefault();
            select.classList.add('validate-select');
            alert('Your forgot to select an option');
            break;
        }
        else {
            select.classList.remove('validate-select')
        }
    }
})

for (let select of selects) {
    select.addEventListener('change', evt => {
        select.classList.remove('validate-select');
    })
}