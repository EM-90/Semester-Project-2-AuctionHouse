export function loginSuccess() {
  const loginMessageContainer = document.querySelector(
    "#loginMessageContainer"
  );

  const loginMessage = document.createElement("div");
  loginMessage.className = " alert alert-success";
  loginMessage.setAttribute("role", "alert");
  loginMessage.textContent = "Login successful";

  loginMessageContainer.innerHTML = "";

  loginMessageContainer.appendChild(loginMessage);

  setTimeout(() => {
    loginMessageContainer.removeChild(loginMessage);
  }, 4000);
}

export function usernameTaken() {
  const messageContainer = document.querySelector("register-message");
  messageContainer.textContent = "Username is taken";
}
