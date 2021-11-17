import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

gsap.to('.logo svg', {
    duration: 1,
    x: 0,
    delay: 0.8
})

gsap.to('.menu-text', {
    duration: 1,
    x: 0,
    delay: 0.8
})

gsap.to('.menu-btn', {
    duration: 1,
    scale: 1,
    delay: 0.8
})

gsap.to('.mid-container ul li', {
    duration: 1,
    y: 0,
    stagger: 0.25,
    delay: 0.9,
    ease: 'sine'
})

gsap.to('.icons-container .solana svg, .discord, .telegram svg, .twitter svg, .youtube svg', {
    duration: 0.5,
    scale: 1,
    stagger: 0.2,
    delay: 1.9,
    ease: 'back'
})

gsap.to('.hero-header', {
    duration: 1,
    y: 0,
    delay: 1,
    ease: true
})

gsap.to('.hero-details', {
    duration: 1,
    y: 0,
    delay: 1.1
})

gsap.to('.svg-container svg', {
    duration: 1.5,
    scale: 1,
    delay: 2,
    ease: 'elastic'
})

/* Scroll triggers */


// gsap.to('.redefining-nft-header', {
//     scrollTrigger: {
//         trigger: '.redefining-nft-header',
//         start: 'top 99%',
//         toggleActions: 'play none none reset',
//         markers: false,
//     },
//     duration: 0.5,
//     scale: 1,
//     ease: 'back'
// })

gsap.to('.ownership-of-land-header-text-small', {
    scrollTrigger: {
        trigger: '.ownership-of-land-header-text-small',
        toggleActions: 'play none none reset',
        markers: false,
    },
    duration: 0.5,
    scale: 1
})

// gsap.to('.ownership-of-land-header-text', {
//     scrollTrigger: {
//         trigger: '.ownership-of-land-header-text',
//         toggleActions: 'play none none reset',
//         markers: false,
//     },
//     duration: 0.5,
//     scale: 1
// })

gsap.to('.image-one img', {
    scrollTrigger: {
        trigger: '.ownership-of-land-header-text-small',
        start: 'bottom 90%',
        end: 'bottom 90%',
        toggleActions: 'play none none reset',
        markers: false,
    },
    duration: 1,
    y: 0
})

gsap.to('.image-two img', {
    scrollTrigger: {
        trigger: '.image-one img',
        start: 'bottom 90%',
        end: 'bottom 90%',
        toggleActions: 'play none none reset',
        markers: false,
    },
    duration: 1,
    y: 0
})

gsap.to('.footer-icons .solana a svg,.footer-icons .discord,.footer-icons .telegram a svg,.footer-icons .twitter a svg,.footer-icons .youtube a svg', {
    scrollTrigger: {
        trigger: '.footer-container',
        start: 'top bottom',
        toggleActions: 'play none none reset',
        markers: false,
    },
    duration: 0.6,
    scale: 1,
    stagger: true
})