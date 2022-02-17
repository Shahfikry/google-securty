let slider = tns({
    container : ".my-slider",
    "slideBy" : 1,
    "speed" : 400,
    "nav" :false,
    controlsContainer: "#controls",
    
    responsive : {
        600 : {
        items : 5,
        gutter :30
        },
    }
    
})