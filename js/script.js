
var time = new TimelineMax();
time
//.to(".one", {x:450, y:100 , scale: 1.75,duration: 2})
//.from(".two" , {opacity:0 , x:500, y: 200, duration: 2})
//.from(".th" , {opacity:0 , x:700 , y:400 , scale:3, ease: "back" , duration:2})
//.to(".th span" , {rotation:90 , x:8})
//.to(".one" , {x:-50 , opacity:0})
//.to(".two" , {opacity:0 , x:500, y: 200, duration: 2})
//.to(".th" , {opacity:0 , x:700 , y:400 , scale:3, ease: "back"})
.from(".text" , {x:500 , y: 200 ,opacity:0, ease:"bounce" , duration:2})
.from("#light img", {opacity:0, y:300 ,stagger:0.3})
.from(".line" , {opacity:0 , x:500 , ease:"back", duration:1})
.from(".line span" ,{opacity:0 , x:500 , duration:1})
.from(".fire" , {opacity:0 , duration:2} , "+=3")


$('.fire').fireworks({ 
sound: true, // sound effect
opacity: 0.9, 
width: '100%', 
height: '100%' 
});



