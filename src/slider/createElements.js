export function createElements() {
    const leftBtn = document.createElement("span");
    const rightBtn = document.createElement("span");

    leftBtn.innerHTML = "<";
    leftBtn.className = "slide-left";

    rightBtn.innerHTML = ">";
    rightBtn.className = "slide-right";

    return {
        rightBtn,
        leftBtn
    };
}