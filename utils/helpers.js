/**
 * DOM Helpers
 */

export function getEl(selector) {
    return document.querySelector(selector);
}

export function getAllEl(selector) {
    return document.querySelectorAll(selector);
}

export function mountComponent(id, htmlString) {
    const el = document.getElementById(id);
    if (el) {
        el.innerHTML = htmlString;
    }
}
