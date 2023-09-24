import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;
const app = express();

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector('[data-js="login-form"]');

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // .then((response) => response.json())
    // .then((data) => {
    //   if (data.success) {
    //     window.location.href = "/my-account"; // Redirect to My Account page
    //   } else {
    //     window.location.href = "/error"; // Redirect to Error page
    //   }
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
  });
});
