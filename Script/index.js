//alert("Hi")
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const scrollYValue = window.scrollY;

    if (scrollYValue >= 0 && scrollYValue <= 450) {
        console.log("s1");
        window.screenY=777;
    } else if (scrollYValue >= 451 && scrollYValue <= 777) {
        console.log("s2");
    } else if (scrollYValue >= 778 && scrollYValue <= 1552) {
        console.log("s3");
    } else if (scrollYValue >= 1553 && scrollYValue <= 2328) {
        console.log("s4");
    }
});

//window.addEventListener("mouse")
