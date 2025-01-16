const animationElectricity = () => {
//     const parents = document.querySelectorAll('.parent-circle');
//  // Угол для движения по кругу
    
//     function animate(obj) {
//         let parent = obj.parent;
//         let circle = obj.circle;
//         let radius = obj.radius;
//         let angle = obj.angle;
        
//         console.log(obj);
//         angle +=1; // Увеличиваем угол для движения (можно изменить скорость)
        
//         // Преобразование угла в радианы
//         const radians = angle * (Math.PI / 180);
        
//         // Вычисление координат x и y
//         const x = radius * Math.cos(radians) + radius ; // +10 для корректировки позиции
//         const y = radius * Math.sin(radians) + radius; // +10 для корректировки позиции
        
//         // Установка новой позиции круга
//         circle.style.left = `${x}px`;
//         // circle.style.top = ` ${y}px`;
        
//         requestAnimationFrame(animate); // Запрос следующего кадра анимации
//     }

//     parents.forEach(parent=> {
//         const circle = parent.querySelector('.circle');
//         const radius = (parent.offsetWidth / 3);
//         let angle = 0;

//         let obj = {
//             parent: parent, 
//             circle:circle, 
//             radius: radius, 
//             angle: angle
//         }
//         animate(obj);
//     });
}

export default animationElectricity;