const specializationHover = () => {
    const items = document.querySelectorAll(".specialization-links__item"),
        // parents = document.querySelector(".specialization-links"),
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
            const parent = item.closest('.specialization-links');

            item.addEventListener("mouseover", ()=> {
                const bg = item.getAttribute("data-bg"),
                    bgBtn = item.getAttribute("data-btn-bg"),
                    strokeBtn = item.getAttribute("data-btn-stroke");
                
                    if(parent) parent.style = `--bg: ${bg}; --bg-btn: ${bgBtn}; --btn-icon-color: ${strokeBtn};`;
            });

            item.addEventListener("mouseout", ()=> {
                if(parent) parent.style = `--bg: ${defaultColor.bg}; --bg-btn: ${defaultColor.bgBtn}; --btn-icon-color: ${defaultColor.strokeBtn };`;
            });
        });
    }

    // if(document.querySelector(".hidden-block")) {
    //     const items = document.querySelectorAll(".hidden-block");
    //     // Функция для проверки видимости элемента
    //     function isElementInViewport(el) {
    //         const rect = el.getBoundingClientRect();
    //         return (
    //             rect.top >= 0 &&
    //             rect.left >= 0 &&
    //             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //         );
    //     }

    //     // Функция для отслеживания видимости элемента
    //     function trackVisibility(element) {
    //         let wasInView = false;

    //         const checkVisibility = () => {
    //             const isInView = isElementInViewport(element);

    //             if (isInView && !wasInView) {
    //                 element.classList.add("is-visible")
    //                 wasInView = true;
    //             } else if (!isInView && wasInView) {
    //                 element.classList.remove("is-visible")
    //                 wasInView = false;
    //             }
    //         };

    //         // Проверяем видимость при прокрутке и изменении размера окна
    //         window.addEventListener('scroll', checkVisibility);
    //         window.addEventListener('resize', checkVisibility);

    //         // Начальная проверка
    //         checkVisibility();
    //     }

    //     // Пример использования: передайте элемент, который хотите отслеживать
    //     const myElement = document.getElementById('myBlock'); // Замените 'myBlock' на ваш ID

    //     items.forEach(item=>trackVisibility(item));
    //     window.addEventListener("scroll", ()=> items.forEach(item=>trackVisibility(item)));
    // }

    if(document.querySelector(".hero-changing-text-div")) {
        
        class TextScramble {
            constructor(el) {
              this.el = el;
              this.chars = "абвгдежзийклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
              this.update = this.update.bind(this);
            }
            setText(newText) {
              const oldText = this.el.innerText;
              const length = Math.max(oldText.length, newText.length);
              const promise = new Promise((resolve) => (this.resolve = resolve));
              this.queue = [];
              for (let i = 0; i < length; i++) {
                const from = oldText[i] || "";
                const to = newText[i] || "";
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({
                  from,
                  to,
                  start,
                  end
                });
              }
              cancelAnimationFrame(this.frameRequest);
              this.frame = 0;
              this.update();
              return promise;
            }
            update() {
              let output = "";
              let complete = 0;
              for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                  complete++;
                  output += to;
                } else if (this.frame >= start) {
                  if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                  }
                  output += `<span class="dud">${char}</span>`;
                } else {
                  output += from;
                }
              }
              this.el.innerHTML = output;
              if (complete === this.queue.length) {
                this.resolve();
              } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
              }
            }
            randomChar() {
              return this.chars[Math.floor(Math.random() * this.chars.length)];
            }
        }

        const phrases = [
            "Наша специализация-<br> дизайн коммерческих объектов"
        ];

        const el = document.querySelector(".glitchtext");
        const fx = new TextScramble(el);

        let counter = 0;
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
            //   setTimeout(next, 2200);
            });
            counter = (counter + 1) % phrases.length;
        };
        next();
    }
}

export default specializationHover;