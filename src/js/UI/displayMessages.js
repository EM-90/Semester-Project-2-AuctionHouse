export function loginSuccess() {
  const loginMessage = document.createElement("div");
  loginMessage.className = " alert alert-success";
  loginMessage.setAttribute("role", "alert");
  loginMessage.textContent = "Login successful";

  const loginMessageContainer = document.querySelector(
    "#loginMessageContainer"
  );

  loginMessageContainer.appendChild(loginMessage);

  setTimeout(() => {
    loginMessageContainer.removeChild(loginMessage);
  }, 4000);
}
