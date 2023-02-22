 const throttle = require('lodash.throttle');
 const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(handleInput, 500));
form.addEventListener("submit", handleSubmit);
const STORAGE_KEY = "feedback-form-state";


function handleInput() { 
    const formData = { email: form.email.value, message: form.message.value };
    localStorage.setItem(STORAGE_KEY, 
        JSON.stringify(formData));
    
    // console.log(JSON.parse(storage).email);
    // console.log(JSON.parse(storage).message);
};

function handleSubmit(e) {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem(STORAGE_KEY)).email === "" || 
        JSON.parse(localStorage.getItem(STORAGE_KEY)).message === "")  {
        alert("Заповніть усі поля форми!")
        return
    };
    const stringData = localStorage.getItem(STORAGE_KEY);
    console.log(stringData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
};
try {
   form.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
}
catch (e) {
    form.email.value = ""
};

try {
   form.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
}
catch (e) {
    form.message.value = ""
};