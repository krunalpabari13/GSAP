    gsap.registerPlugin(ScrollTrigger);
  
    // gsap.from('.box1', {
         
    //   scrollTrigger: {
    //     trigger: '.box3',
    //     start: 'top top', // Adjust the start position as needed
    //     end: 'bottom 20%', // Adjust the end position as needed
    //     scrub: true, 
    //     markers: {startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
    //   },x: 400,
      
    //   duration:3,
    // }).to('.box1',{rotation:300});
  
// let tl=gsap.timeline({
//     scrollTrigger:{
//         trigger:'.maincontainer',
//         start:'top top',
//         end:"bottom top",
//         scrub:true,
//         pin:true,
//         pinSpacing:false,
//         markers:  {startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
//      }
// })

// // tl.to('.box2',{top:'100%'},'a');
// // tl.to('.box3',{top:'0%'},'');
// // tl.to('.box1',{top:'-70%'},'c');
// tl.from('.box2',{y:0,opacity:1},'a');
// tl.to('.box2',{y:-600,opacity:1},'a');
// tl.from('.box3',{y:50,opacity:1},'a');
// tl.to('.box3',{y:-600,opacity:1},'a');
// tl.from('.box1',{y:1000,opacity:1},'a');
// tl.to('.box1',{y:-600,opacity:1},'a');


//page slidding working
// let tl=gsap.timeline()

// gsap.utils.toArray(".box").forEach((box,i)=>{
//     ScrollTrigger.create({
//         animation:tl,
//         trigger: box,
//         start:'top top',
//         end:"+=2000",
//         pin :true,
//         scrub:true,
//         pinSpacing:false,
//         markers:{startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
//     }
//     )
// })
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
    markers:{startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
})
t1.from('#nexgtv1', { duration: 1.2, ease: "power4.out", y: -500 },'b');
t1.to('#nexgtv1', { opacity:1 },'b');
t1.from('#nexgtv2', { duration: 1.2, ease: "power4.out", y: 1500 },'b');
t1.to('#nexgtv2', { opacity:1 },'b');

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
    markers:{startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
})
t2.from('#blockchain1', { duration: 1.2, ease: "power4.out", y: -500 },'b');
t2.to('#blockchain1', { opacity:1 },'b');
t2.from('#blockchain2', { duration: 1.2, ease: "power4.out", y: 1500 },'b');
t2.to('#blockchain2', { opacity:1 },'b');




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
    markers:{startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
})
tl.from('#dombox', { duration: 1.2, ease: "power4.out", y: -500 },'a');
tl.to('#dombox', { opacity:1 },'a');
tl.from('#dommob1', { duration: 1.2, ease: "power4.out", y: 1500 },'a');
tl.to('#dommob1', { opacity:1 },'a');
tl.from('#dommob2', { duration: 1.2, ease: "power4.out", y: -1000 },'a');
tl.to('#dommob2', { opacity:1 },'a');
tl.from('#bun1', { duration: 1.2, ease: "power4.out", y: -500 },'a');
tl.to('#bun1', { opacity:1 },'a');
tl.from('#bun2', { duration: 1.2, ease: "power4.out", y: 1000 },'a');
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
    markers:{startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
})
tl2.to('#nasafitness1', { duration: 2.2, ease: "power4.out", y: 10 ,opacity:1},'c');
tl2.to('#nasafitness2', { duration: 2.2, ease: "power4.out", y: -200 ,opacity:1},'c');



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
    markers:{startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
})
t3.from('#galmbo1', { duration: 1.2, ease: "power4.out", y: -500 },'a');
t3.to('#galmbo1', { opacity:1},'a');
t3.from('#galmob2', { duration: 1.2, ease: "power4.out", y: 1500 },'a');
t3.to('#galmob2', { opacity:1 },'a');
t3.from('#galmob3', { duration: 1.2, ease: "power4.out", y: -1000 },'a');
t3.to('#galmob3', { opacity:1 },'a');
t3.from('#galmob4', { duration: 1.2, ease: "power4.out", y: -500 },'a');
t3.to('#galmob4', { opacity:1 },'a');
t3.from('#galmob5', { duration: 1.2, ease: "power4.out", y: 1000 },'a');
t3.to('#galmob5', { opacity:1,y:-1300 },'a');




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
    markers:{startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
})
t4.to('#erp', { duration: 2.2, ease: "power4.out", y: 10 ,opacity:1},'c');
t4.to('#erp', { duration: 2.2, ease: "power4.out", y: -200 ,opacity:1},'c');

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
    markers:{startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20}
})
t5.to('#melto1', { duration: 2.2, ease: "power4.out", y: -200 ,opacity:1},'c');
t5.to('#melto2', { duration: 2.2, ease: "power4.out", y: -200 ,opacity:1},'c');

// Animation for the first page
// gsap.from('.box3', {
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     animation:tl,
//     toggleActions:'restart reset restart none',
//     trigger: '.box3',
//     start: 'top top',
//     end: 'bottom top',
//     scrub: true
//   }
// });

// // Animation for the second page
// gsap.from('.box1', {
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     animation:tl2,
//     toggleActions:'restart none restart reset',
//     trigger: '.box1',
//     start: 'top top',
//     end: 'top bottom',
//     // scrub: true
//   }
// });
