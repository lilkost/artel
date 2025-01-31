const specializationHover = () => {
    const items = document.querySelectorAll(".specialization-links__item"),
        parents = document.querySelector(".specialization-links"),
        link = document.querySelector(".specialization-links__link");
    
    const setSizeItem = (item) => {
        const textNode = item.querySelector(".specialization-links__item-text");
        const size = textNode.offsetWidth;

        // задать размеры родителя
        item.style.maxWidth = `${size}px`;
    }

    const defaultColor = {
        bg: '#203C99',
        bgBtn: '#2A48AD',
        strokeBtn: '#5A70FF'
    };

    if(items) {
        items.forEach(item=> {
            // setSizeItem(item);

            item.addEventListener("mouseover", ()=> {
                const bg = item.getAttribute("data-bg"),
                    bgBtn = item.getAttribute("data-btn-bg"),
                    strokeBtn = item.getAttribute("data-btn-stroke");

                parents.style = `--bg: ${bg}; --bg-btn: ${bgBtn}; --btn-icon-color: ${strokeBtn};`;
            });

            item.addEventListener("mouseout", ()=> {
                parents.style = `--bg: ${defaultColor.bg}; --bg-btn: ${defaultColor.bgBtn}; --btn-icon-color: ${defaultColor.strokeBtn};`;
            });
        });
    }
}

export default specializationHover;