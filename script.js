const container = document.querySelector('.word-container');
const containerBackground = document.querySelector('.word-container-background');
const word1 = document.querySelector('.word1');
const word2 = document.querySelector('.word2');
const word3 = document.querySelector('.word3');
const words = [word1, word2, word3];
const tlm = new TimelineMax({});
let animation = {
    ease: Expo.easeInOut,
    transformOrigin: '50% 0%',
    scaleY: 0,
    scaleX: 0,
};

tlm.from(container, 2.5, animation, 'animation1')
    .from(word3, 2, { y: -200, rotation: 60, transformOrigin: '50% 50%', ease: Power1.easeOut }, 'animation1')
    .from(word2, 1.5, { y: -270, rotation: -50, transformOrigin: '50% 50%', ease: Power1.easeOut }, 'animation1+=1')
    .from(word1, 2, { y: -320, rotation: 50, transformOrigin: '50% 50%', ease: Power1.easeOut }, 'animation1+=1.5')
    .to(containerBackground, 1.5, { scaleY: 0, borderRadius: '15% 15% 0 0', transformOrigin: '50% bottom' }, 'animation2')
    .to('.wordsMasked', 1.5, { y: -70 }, 'animation2')
    .to(word1, 0.15, { opacity: 0 }, 'animation2+=0.15')
    .to(word2, 0.15, { opacity: 0 }, 'animation2+=0.15')
    .to(word3, 0.15, { opacity: 0 }, 'animation2+=0.15')
    .to(words, 0.8, { y: -40, ease: Power1.easeOut }, 'animation2+=0.2')
    .to(words, 1.5, { y: 100, ease: Power1.easeInOut }, 'animation2')
    .to('.wordsMasked', 2, { y: 70, ease: Power2.easeIn }, 'animation2+=1.7')
    .to(container, 1, { scaleX: 0, scaleY: 0, ease: Power2.easeIn, transformOrigin: '50% bottom' }, 'animation2+=1.5');
