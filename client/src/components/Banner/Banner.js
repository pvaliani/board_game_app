//use function result not url

import './Banner.css';

class Banner extends HTMLElement {

connectedCallback() {
this.classList.add("banner--show-close");

let button = this.getButton();
if(button) {
button.addEventListener("click", () => {
this.savePreference();
this.close();
});
}
}

getButton() {
return this.querySelector("[data-banner-close]");
}

savePreference() {
let bannerResult = this.querySelector("a[href]");
if(bannerResult) {
let bannerResultUrl = bannerResult.getAttribute("href");
localStorage.setItem("banner--bannerResult-url", bannerResultUrl);
}
}

close() {
this.setAttribute("hidden", true);
}
}

window.customElements.define("announcement-banner", Banner);

export default Button;