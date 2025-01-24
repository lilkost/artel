const loaderAnimation = () => {
    const parent = document.querySelector(".loader__logo");

    if(!parent) return;

    const paths = parent.querySelectorAll('svg path');
    anime({
        targets: paths,
        duration: 2000,
        delay: 200,
        easing: 'easeInCubic',
        strokeDashoffset: [anime.setDashoffset, 0],
        fill: ['rgba(0,0,0,0)', 'rgba(242, 199, 145, 1)']
    });
}

export default loaderAnimation;