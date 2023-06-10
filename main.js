    gsap.registerPlugin(ScrollTrigger);
 
let t1=gsap.timeline()
ScrollTrigger.create({
    animation:t1,
    toggleActions:'restart none restart reverse',
    trigger:'.box2',
    start:'top top',
    pin:true,
    end:'bottom top',
    pinSpacing:false,
    // scrub:true,

})
t1.to(".text",{visibility:'hidden'})
t1.to("#text1",{visibility:'visible'})
t1.to(".leftpanel,.round",{backgroundColor:'rgb(88, 211, 218)'})
t1.from('#nexgtv1', {  ease: "power2.out", y: -500 ,immediateRender: true},'b');
t1.to('#nexgtv1', { opacity:1 ,immediateRender: true},'b');
t1.from('#nexgtv2', {  ease: "power4.out", y: 1500 ,immediateRender: true},'b');
t1.to('#nexgtv2', { opacity:1,immediateRender: true },'b');

let t2=gsap.timeline()
ScrollTrigger.create({
    animation:t2,
    toggleActions:'restart none restart reverse',
    trigger:'.box4',
    start:'top top',
    pin:true,
    end:'bottom top',
    pinSpacing:false,
    // scrub:true,

})
t2.to(".text",{visibility:'hidden'})
t2.to("#text2",{visibility:'visible'})
t2.to(".leftpanel,.round",{backgroundColor:'rgb(54, 54, 91)'})
t2.to("#Dots2, #Opaque_Ring",{strokeDasharray:'129,1000'})
t2.from('#blockchain1', {  ease: "power4.out", y: -500,immediateRender: true,delay:0 },'b');
t2.to('#blockchain1', { opacity:1 ,immediateRender: true,delay:0},'b');
t2.from('#blockchain2', {  ease: "power4.out", y: 1500 ,immediateRender: true,delay:0},'b');
t2.to('#blockchain2', { opacity:1,immediateRender: true,delay:0 },'b');




let tl=gsap.timeline();
ScrollTrigger.create({
    animation:tl,
    toggleActions:'restart none restart reverse',
    trigger:'.box3',
    start:'top top',
    pin:true,
    end:'bottom top',
    pinSpacing:false,
    // scrub:true,
})
tl.to(".text",{visibility:'hidden'})

tl.to("#text4",{visibility:'visible'})
tl.to(".leftpanel,.round",{backgroundColor:'rgb(121, 86, 130)'})

tl.to("#Dots4, #Opaque_Ring",{strokeDasharray:'409,1000'})
tl.from('#dombox', {  ease: "power4.out", y: -500 },'a');
tl.to('#dombox', { opacity:1 },'a');
tl.from('#dommob1', {  ease: "power4.out", y: 1500 },'a');
tl.to('#dommob1', { opacity:1 },'a');
tl.from('#dommob2', {  ease: "power4.out", y: -1000 },'a');
tl.to('#dommob2', { opacity:1 },'a');
tl.from('#bun1', {  ease: "power4.out", y: -500 },'a');
tl.to('#bun1', { opacity:1 },'a');
tl.from('#bun2', {  ease: "power4.out", y: 1000 },'a');
tl.to('#bun2', { opacity:1 },'a');



let tl2=gsap.timeline();
ScrollTrigger.create({
    animation:tl2,
    toggleActions:'restart none restart reverse',
    trigger:'.box1',
    start:'top top',
    pin:true,
    end:'bottom top',
   pinSpacing:false,
    // scrub:true,

})
tl2.to(".text",{visibility:'hidden'})

tl2.to("#text3",{visibility:'visible'})
tl2.to(".leftpanel,.round",{backgroundColor:'rgb(113, 113, 201)'})

tl2.to("#Dots3, #Opaque_Ring",{strokeDasharray:'272,1000'})
tl2.to('#nasafitness1', {  ease: "power4.out", y: 10 ,opacity:1},'c');
tl2.to('#nasafitness2', {  ease: "power4.out", y: -200 ,opacity:1},'c');



let t3=gsap.timeline();
ScrollTrigger.create({
    animation:t3,
    toggleActions:'restart none restart reverse',
    trigger:'.box5',
    start:'top top',
    pin:true,
    end:'bottom top',
    pinSpacing:false,
    // scrub:true,

})
t3.to(".text",{visibility:'hidden'})

t3.to("#text5",{visibility:'visible'})
t3.to(".leftpanel,.round",{backgroundColor:'rgb(88, 88, 168)'})
t3.to("#Dots5, #Opaque_Ring",{strokeDasharray:'528,1000'})
t3.from('#galmbo1', {  ease: "power4.out", y: -500 },'a');
t3.to('#galmbo1', { opacity:1},'a');
t3.from('#galmob2', {  ease: "power4.out", y: 1500 },'a');
t3.to('#galmob2', { opacity:1 },'a');
t3.from('#galmob3', {  ease: "power4.out", y: -1000 },'a');
t3.to('#galmob3', { opacity:1 },'a');
t3.from('#galmob4', {  ease: "power4.out", y: -500 },'a');
t3.to('#galmob4', { opacity:1 },'a');
t3.from('#galmob5', { duration:1.2, ease: "power4.out", y: 1000 },'a');
t3.to('#galmob5', { opacity:1 },'a');




let t4=gsap.timeline();
ScrollTrigger.create({
    animation:t4,
    toggleActions:'restart none restart reverse',
    trigger:'.box6',
    start:'top top',
    pin:true,
    end:'bottom top',
   pinSpacing:false,
    // scrub:true,

})
t4.to(".text",{visibility:'hidden'})

t4.to("#text6",{visibility:'visible'})
t4.to(".leftpanel,.round",{backgroundColor:'rgb(137, 119, 85)'})
t4.to("#Dots6, #Opaque_Ring",{strokeDasharray:'668,1000'})

t4.to('#erp', {  ease: "power4.out", y: 10 ,opacity:1});
// t4.to('#erp', {  ease: "power4.out", y: -200 ,opacity:1});

let t5=gsap.timeline();
ScrollTrigger.create({
    animation:t5,
    toggleActions:'restart none restart reverse',
    trigger:'.box7',
    start:'top top',
    pin:true,
    end:'bottom top',
   pinSpacing:false,
    // scrub:true,

})
t5.to(".text",{visibility:'hidden'})

t5.to("#text7",{visibility:'visible'})
t5.to(".leftpanel,.round",{backgroundColor:'rgb(154, 84, 84)'})

t5.to("#Dots7, #Opaque_Ring",{strokeDasharray:'804,1000'})
t5.to('#melto1', {  ease: "power4.out", y: -200 ,opacity:1},'c');
t5.to('#melto2', {  ease: "power4.out", y: -200 ,opacity:1},'c');



