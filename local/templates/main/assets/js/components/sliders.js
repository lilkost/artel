const sliders = () =>{
    // массив всех слайдеров
    // для создания простых слайдеров без сложной логики
    const sliders = [
        [
            document.querySelector(".what-doing__slider"),
            {
                direction: 'horizontal',
                loop: true,
                navigation: {
                    nextEl: '.what-doing__slider-btn_next',
                    prevEl: '.what-doing__slider-btn_prev',
                },
                slidesPerView: 1.81559,
            }
        ],
        [
            document.querySelector(".result-work__slider-pagination"),
            {
                direction: 'horizontal',
                loop: false,
                spaceBetween: 13,
                slidesPerView: 12,
            }
        ],
        [
            document.querySelector(".result-work__slider"),
            {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 1,
                navigation:{
                    nextEl: '.result-work__slider-btn_next',
                    prevEl: '.result-work__slider-btn_prev'
                },
                thumbs: {
                    swiper: document.querySelector(".result-work__slider-pagination"),
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
            }
        ],
        [
            document.querySelector(".steps-construction__slider"),
            {
                direction: 'horizontal',
                loop: false,
                navigation: {
                    nextEl: '.what-doing__slider-btn_next',
                    prevEl: '.what-doing__slider-btn_prev',
                },
                slidesPerView: 1.81559,
            }
        ],
    ]
    // функция конструктор для создания сладеров
    const createSlider = (node, options) => {
        if(node && options) {
            const swiper = new Swiper(node, options);
        }
        else {
            console.error("Ошибка генерации слайдера");
        }
    }
    // вызов конструктора для слайдеров
    if(sliders && sliders.length) {
        sliders.forEach(slider=> {
            const sliderNode = slider[0];
            const sliderOptions = slider[1];

            if(sliderNode && sliderOptions) {
                createSlider(sliderNode, sliderOptions);
            }
            else {
                console.error(`Ошибка генерации, нету одной из двух частей слайдера: slider - ${sliderNode}, список опций - ${sliderOptions}`)
            }
        });
    }

    // cлайдеры с доп. функционалом
    if(document.querySelector(".stage-work__pagination") && document.querySelector(".stage-work__slider")) {
        let swiperPagination = new Swiper('.stage-work__pagination', {
            direction: 'horizontal',
            slidesPerView: 5,
            spaceBetween: 0,
            watchSlidesProgress: true,
            loop: false,
        });

        let swiperParent = new Swiper('.stage-work__slider', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            effect: "fade",

            thumbs: {
                swiper: swiperPagination,
            },
        });

    }
}

export default sliders;