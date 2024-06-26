//Toggle on and off visibility on users password
const password = document.getElementById("password");
const eyeOpen = document.getElementById("eyeOpen");
eyeOpen.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        eyeOpen.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-6 md:h-6 w-4 h-4 text-gray-400 absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
  </svg>`;
    } else {
        password.type = "password";
        eyeOpen.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>`
    };
});

password.addEventListener("input", () => {
    if (password.value !== "") {
        eyeOpen.classList.remove("hidden");
        eyeOpen.classList.add("block");
    } else {
        eyeOpen.classList.add("hidden");
        eyeOpen.classList.remove("block");
    };
});

const Form = document.getElementById("form");
const animateSpin = document.getElementById("animateSpin");
animateSpin.style.display = "none";
Form.addEventListener("submit", (e) => {
    document.getElementById("sendForm").style.display = "none";
    animateSpin.style.display = "block";
    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.classList.replace("bg-blue-600", "bg-blue-300");
    btnSubmit.classList.add("scale-75");
});

//Create a pop up notification when user is done with creating account
const newAccountNotification = document.getElementById("newAccountNotification");
document.addEventListener("DOMContentLoaded", (e) => {
    if (!newAccountNotification) return;
    newAccountNotification.style.display = "flex";
    newAccountNotification.classList.replace("top-0", "top-20");
    setTimeout(() => {
        newAccountNotification.style.display = "none";
    }, 5000);

    //Exit the pop up notification
    document.getElementById("exitNotification").addEventListener("click", (e) => {
        newAccountNotification.style.display = "none"
    })
});