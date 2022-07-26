import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector(".feedback-form textarea");
const LOCAL_KEY = "feedback-form-state";
const formData = localStorage.getItem(LOCAL_KEY) ? JSON.parse(localStorage.getItem(LOCAL_KEY)):{};

const saveItem = localStorage.getItem(LOCAL_KEY);
        if (saveItem) {
            const itemParse = JSON.parse(saveItem);
            inputEl.value = itemParse.email;
            textareaEl.value = itemParse.message;
        }
        else {
            inputEl.value = "";
            textareaEl.value = "";
        }

formEl.addEventListener("input", throttle(handleSaveInputValue, 500));
formEl.addEventListener('submit', handleSubmitButtonClick);

function handleSaveInputValue(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function handleSubmitButtonClick(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
    localStorage.removeItem(LOCAL_KEY);
    event.currentTarget.reset();
}


