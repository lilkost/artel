const animationUraborosAndRunis = () => {
    const image = document.querySelector(".reliable__image-decor"),
        items = document.querySelectorAll(".reliable__item")

    if(!image) return;
    // функция для удаления всех классов 
    const itemRemoveClass = () => {
        items.forEach(itm=>itm.classList.remove("is-active"));
    }
    // функция для проверки на то какой надо подсветить элемент
    const changeStateItem = (num) => {
        console.log(num);
        itemRemoveClass();
        
        if(num > 0 && num < 50) {
            items[0].classList.add("is-active");
        }else if(num > 60 && num < 100) {
            items[1].classList.add("is-active");
        }else if(num > 110 && num < 160) {
            items[2].classList.add("is-active");
        }else if(num > 230 && num < 270) {
            items[4].classList.add("is-active");
        }else if(num > 270 && num < 310) {
            items[5].classList.add("is-active");
        }
    }

    // Функция для получения текущего значения свойства
    function getCurrentOpacity() {
        const currentSt = window.getComputedStyle(image).rotate;
        const currentStNumber = Number(
            currentSt.replaceAll("deg", "").toLocaleLowerCase().trim()
        );
        changeStateItem(currentStNumber);
    }

    // Проверка значения каждые 100 мс во время анимации
    const intervalId = setInterval(() => {
        getCurrentOpacity();
    }, 1000);

}

export default animationUraborosAndRunis;