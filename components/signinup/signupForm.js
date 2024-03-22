import { signInWithEmailAndPassword, createUserWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from "./firebase.js";

const emailSignin = document.querySelector("#email-input-signin")
const passwordSignin = document.querySelector("#password-input-signin")
const submitBtnSignin = document.querySelector("#submit-signin")

const emailSignup = document.querySelector("#email-input-signup")
const passwordSignup = document.querySelector("#password-input-signup")
const submitBtnSignup = document.querySelector("#submit-signup")

// https://firebase.google.com/docs/auth/web/start?hl=es#web-modular-api
// https://firebase.google.com/docs/auth/admin/manage-users?hl=es
submitBtnSignup.addEventListener("click", ()=>{
    createUserWithEmailAndPassword(auth, emailSignup.value, passwordSignup.value).then((userCredencial)=>{
        alert("User created")
    }).catch((error) => {
        console.log(error.message);
    });
})

submitBtnSignin.addEventListener("click", ()=>{
    signInWithEmailAndPassword(auth, emailSignin.value, passwordSignin.value).then((userCredencial)=>{
        location.href = "/startbootstrap-grayscale-gh-pages/components/dashboard/dashboard.html"
    }).catch((error) => {
        console.log(error.message);
      });
})