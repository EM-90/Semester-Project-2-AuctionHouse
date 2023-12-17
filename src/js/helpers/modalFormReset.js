export function modalFormReset() {
  document
    .getElementById("registerModal")
    .addEventListener("show.bs.modal", function () {
      document.getElementById("registerForm").reset();
    });
}
