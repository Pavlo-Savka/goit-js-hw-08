 const throttle = require('lodash.throttle');
 const form = document.querySelector(".feedback-form");
function handleSubmit(event) {
    event.preventDefault();
};
form.addEventListener("input", throttle(handleInput, 500));
form.addEventListener("submit", handleSubmit);

function handleInput() { 
    localStorage.setItem("feedback-form-state", 
    JSON.stringify({email: form.email.value, message: form.message.value}));
};

function handleSubmit(e) {
    e.preventDefault();
    console.log(localStorage.getItem("feedback-form-state"));
    localStorage.removeItem("feedback-form-state");
    form.reset();
}

try {
   form.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
}
catch (e) {
    form.email.value = ""
};

try {
   form.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
}
catch (e) {
    form.message.value = ""
};

