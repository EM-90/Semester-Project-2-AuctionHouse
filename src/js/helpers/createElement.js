export function createElement(type, className, text, attributes = {}) {
  const element = document.createElement(type);
  if (className) element.className = className;
  if (text) element.textContent = text;
  Object.keys(attributes).forEach((key) =>
    element.setAttribute(key, attributes[key])
  );
  return element;
}
