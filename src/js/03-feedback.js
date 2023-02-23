 const throttle = require('lodash.throttle');
 const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(handleInput, 500));
form.addEventListener("submit", handleSubmit);
const STORAGE_KEY = "feedback-form-state";
const formData2 = {};

function handleInput(e) { 
    //const formData = { email: form.email.value, message: form.message.value };
    formData2[e.target.name] = e.target.value;
   // console.log(formData2);
    localStorage.setItem(STORAGE_KEY, 
        JSON.stringify(formData2)); 
};

function handleSubmit(e) {
    e.preventDefault();
    if (form.email.value === "" || 
        form.message.value === "")  {
        alert("Заповніть усі поля форми!")
        return
    };
    const stringData = localStorage.getItem(STORAGE_KEY);
    console.log(formData2);
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