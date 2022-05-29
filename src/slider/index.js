import { colors } from "./colors";
import { createElements } from "./createElements";

import './style.css';

export function Slider() {
    let index = 0;

    const slider = document.querySelector("#slider");

    slider.style.backgroundColor = colors[index];

    const { leftBtn, rightBtn } = createElements();

    rightBtn.onclick = () => {
        ++index;

        if( index === colors.length ) {
            index = 0;
        }

        slider.style.backgroundColor = colors[index];
    }

    leftBtn.onclick = () => {
        --index;

        if( index === -1 ) {
            index = colors.length - 1;
        }

        slider.style.backgroundColor = colors[index];
    }

    slider.append(leftBtn, rightBtn);
}