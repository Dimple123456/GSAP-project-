
let tl = gsap.timeline()
tl.from(".front",{
    y:1000,
    duration: 1
})
tl.from("#coffee",{
    y:800,
    duration: 1,
    scale : 2
})
tl.from(".front h1",{
    y:1000,
    duration: 1,
    scale: 2
})
tl.from("#bean1",{
    y:800,
    duration: 1,
    scale: 2

})
tl.from("#bean2",{
    y:800,
    duration: 1,
    scale: 2

})
tl.from("#bean3",{
    y:800,
    duration: 1,
    scale: 2

})
tl.from("#bean4",{
    y:800,
    duration: 1,
    scale: 2

})
tl.from("#bean5",{
    y:800,
    duration: 1,
    scale: 2
})

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
        markers:false,
        start:"0% 50%",
        end: "50% 50%"
    }
})
tl2.to("#coffee",{
    top:753,
    left:105,
    scale: 0.9,
    duration:1
},"hi")
tl2.to("#bean1",{
    top:753,
    left:253,
    scale: 0.9,
    rotate:142,
    duration:1
},"hi")

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        scrub:2,
        markers:false,
        start:"0% 50%",
        end: "50% 50%"
    }
})
tl3.to("#coffee",{
    top:1370,
    left:647,
    scale: 0.9,
    duration:1
},"hi")

tl3.from("#fanta",{
    x:-300,
    duration:1
},"hi")
tl3.from("#sprite",{
    x:300,
    duration:1
},"hi")
tl3.from("#b1",{
    x:-300,
    duration:1
},"hi")
tl3.from("#b3",{
    x:300,
    duration:1
},"hi")


let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        scrub:2,
        markers:false,
        start:"0% 50%",
        end: "50% 50%"
    }
})
tl4.to("#coffee",{
    top:2150,
    left:950,
    duration:1,
    zIndex:3,

},"hi")

tl4.to("#fanta",{
    top:758,
    left:490,
    duration:1,
    rotate:-17
},"hi")
tl4.to("#sprite",{
    top:740,
    left:180,
    duration:1,
    rotate:10
    
},"hi")