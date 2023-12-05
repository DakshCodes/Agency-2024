import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const Animation = () => {

    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger if used

    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".featured-main",
            start: '18% 50%',
            end: '60% 50%',
            scrub: 1,
            // pin: true,
        },
    });

    tl.to("#featured-top", {
        top: "-50%",
    }, 'a').to("#bottom", {
        bottom: "-150%",
    }, 'a').to("#featured-top", {
        top: "-50%",
    }, 'a').to("#bottom", {
        bottom: "-150%",
    }, 'a').to("#top-h1", {
        top: "60%"
    }, 'a').to("#bottom-h1", {
        bottom: "-30%"
    }, 'a').to(".featured-content", {
        marginTop: "0%"
    },'a');
}