var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++
    if (counter > 4) {
        counter = 1;
    }
}, 5000)





let sliderData = [
    {
        id:1, 
        img:{
            width:"",
            height:"",
            url:"",
            alt:""
        },
        name:"",
        desc:""
    },
    {
        id:1, 
        img:{
            width:"",
            height:"",
            url:"",
            alt:""
        },
        desc:"",
        name:""
    },
    {
        id:1, 
        img:{
            width:"",
            height:"",
            url:"",
            alt:""
        },
        desc:"",
        name:""
    },
    {
        id:1, 
        img:{
            width:"",
            height:"",
            url:"",
            alt:""
        },
        desc:"",
        name:""
    },
]

// #333



const sliderWidth = 1020;
const sliderHeight = 560;