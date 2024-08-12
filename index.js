function change() {
    let a = document.querySelector('.header-main')
    let b = document.querySelector('.menu-container')
    b.classList.toggle('open')
    a.classList.toggle('open')
}
// --mouse move 
document.addEventListener('mousemove', (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;

    if (e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.parentNode.tagName === 'button'
    ) {
        circle.classList.add('big');
    }

    else {
        circle.classList.remove('big');
    }

    setTimeout(() => {
        circle.style.left = `${e.pageX - width / 2}px`;
        circle.style.top = `${e.pageY - height / 2}px`;
    }, 20);
});
// -------text reveal----
gsap.registerPlugin(ScrollTrigger);

const splittypes = document.querySelectorAll('.about-h3');
splittypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'words' });
    gsap.from(text.words, {
        ScrollTrigger: {
            trigger: char,
            start: 'top 100%',
            end: 'top 90%',
            scrub: true,
            markers: false
        },
        opacity: 0.2,
        stagger: 0.1
    });
});


// gsap.registerPlugin(ScrollTrigger);

// document.querySelectorAll('.about-h3').forEach((element) => {
//     const splitText = new SplitType(element, { types: 'chars' });
//     const chars = splitText.chars;

//     gsap.from(chars, {
//         scrollTrigger: {
//             trigger: element,
//             start: 'top 80%',
//             end: 'top 20%',
//             scrub: true,
//             markers: false
//         },
//         opacity: 0,
//         y: 10,
//         stagger: 0.05,
//         ease: 'power1.in'
//     });
// });