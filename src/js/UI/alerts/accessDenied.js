import { createElement } from "../../helpers/createElement.js";

export function IsUserAuthenticated() {
  const accessToken = localStorage.getItem("token");
  return !!accessToken;
}

export function accessDeniedMessage() {
  const accessDeniedModal = new bootstrap.Modal(
    document.getElementById("accessDeniedModal")
  );
  accessDeniedModal.show();
}
