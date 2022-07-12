if (window.matchMedia("(min-width: 600px)").matches) {

    let Slider = document.querySelector("#slider_wrap")
    let innerSlider1 = document.querySelector(".slide_image1")
    let innerSlider2 = document.querySelector(".slide_image2")
    let innerSlider3 = document.querySelector(".slide_image3")
    let pressed = false;
    let startx
    let starty
    let startz
    let x

    Slider.addEventListener("mousedown", e => {
        pressed = true;
        startx = e.offsetX - innerSlider1.offsetLeft;
        starty = e.offsetX - innerSlider2.offsetLeft;
        startz = e.offsetX - innerSlider3.offsetLeft;
        Slider.style.cursor = "grabbing";
    });

    Slider.addEventListener("mouseenter", () => {
        Slider.style.cursor = "grab";
    });

    Slider.addEventListener("mouseup", () => {
        Slider.style.cursor = "grab";
    });

    window.addEventListener("mouseup", () => {
        pressed = false;
    });

    Slider.addEventListener("mousemove", e => {
        if (!pressed) return
        e.preventDefault()
        x = e.offsetX

        innerSlider1.style.left = `${x - startx}px`;
        checkboundary();
        innerSlider2.style.left = `${x - starty}px`;
        checkboundary();
        innerSlider3.style.left = `${x - startz}px`;
        checkboundary();
    });

    function checkboundary() {
        let outer = Slider.getBoundingClientRect();
        let inner = innerSlider1.getBoundingClientRect()
        let inner2 = innerSlider2.getBoundingClientRect()
        let inner3 = innerSlider3.getBoundingClientRect()

        if (parseInt(innerSlider1.style.left) > 0) {
            innerSlider1.style.left = "0px";
        } else if (inner.right < outer.right) {
            innerSlider1.style.left = `-${inner.width - outer.width}px`
        }

        if (parseInt(innerSlider2.style.left) > 0) {
            innerSlider2.style.left = "0px";
        } else if (inner2.right < outer.right) {
            innerSlider2.style.left = `-${inner2.width - outer.width}px`
        }

        if (parseInt(innerSlider3.style.left) > 0) {
            innerSlider3.style.left = "0px";
        } else if (inner3.right < outer.right) {
            innerSlider3.style.left = `-${inner.width - outer.width}px`
        }
    }
} else {




}


