import { cart } from "./cart";

cart();

function count() {
    console.log("I'm count");
}

export function carouselSliderLeft() {
    count();
    console.log("---carousel left");
}

export function carouselSliderRight() {
    console.log("---carousel right");
}