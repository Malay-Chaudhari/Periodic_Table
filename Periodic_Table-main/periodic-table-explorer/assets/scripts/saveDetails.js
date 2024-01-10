const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const btn = document.getElementById("contact-submit");

const people = [];

btn.addEventListener("click", saveDetails);

function saveDetails() {
    const person = {name: name.value, email: email.value, message: message.value};
    people.push(person);

    localStorage.setItem("people", JSON.stringify(people));
}