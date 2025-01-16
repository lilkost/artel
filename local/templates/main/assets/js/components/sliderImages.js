const sliderImage = () => {
    const slider = document.querySelector(".project-images .slider input");
    const img = document.querySelector(".project-images .images .img2");
    const dragLine = document.querySelector(".project-images .slider .drag-line");
    slider.oninput = () => {
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
    }
}

export default sliderImage;