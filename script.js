const form = document.querySelector(".form");
const lastName = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const agree = document.querySelector("#agree");
const sendBtn = document.querySelector("#button");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: Valerka-6'
            },
            body: JSON.stringify({
                "name": lastName.value,
                "secondName": secondName.value,
                "phone": phone.value,
                "email": email.value,
                "agree": agree.checked,
            })
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            alert("Анкета успешно отправлена");
        })
        .catch((error) => {
            console.log(error);
            aler("Произошла ошибка")
        })
        .finally(() => {
            event.target.reset();
        })
});