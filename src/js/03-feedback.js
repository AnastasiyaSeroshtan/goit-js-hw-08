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


// ===============2 variant===================

// import throttle from 'lodash.throttle';
// const formEl = document.querySelector(".feedback-form");
// const inputEl = document.querySelector(".feedback-form input");
// const textareaEl = document.querySelector(".feedback-form textarea");
// const LOCAL_KEY = "feedback-form-state";

// formEl.addEventListener('input', throttle(onInputForm, 500));
// formEl.addEventListener('submit', onSubmitButtonClick);

// function onInputForm(e) {
//     const mail = formEl.elements.email.value;
//     const message = formEl.elements.message.value;

//     const formData = {
//         email:mail,
//         message:message,
//     };

//     localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
// }

// const formValue = localStorage.getItem(LOCAL_KEY);

// if (formValue) {
//     const formDataParse = JSON.parse(formValue);
//     inputEl.value = formDataParse.email || "";
//     textareaEl.value = formDataParse.message || "";
// }

// function onSubmitButtonClick (e) {
//     e.preventDefault();
//     console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
//     localStorage.removeItem(LOCAL_KEY);
//     e.currentTarget.reset();
// }