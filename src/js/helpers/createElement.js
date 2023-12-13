export function createElement(type, className, text, attributes, id = "") {
  const element = document.createElement(type);
  if (className) element.className = className;
  if (text) element.textContent = text;
  if (id) element.id = id;
  if (attributes && typeof attributes === "object") {
    Object.keys(attributes).forEach((key) =>
      element.setAttribute(key, attributes[key])
    );
  }
  return element;
}
