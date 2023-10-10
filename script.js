
const fwd1 = document.getElementById("fwd1");
const bck1 = document.getElementById("bck1");
const fwd2 = document.getElementById("fwd2");
const bck2 = document.getElementById("bck2");
const fwd3 = document.getElementById("fwd3");
const bck3 = document.getElementById("bck3");

bck1.style.visibility = "hidden";
bck2.style.visibility = "hidden";
bck3.style.visibility = "hidden";

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

let photo1 = 0;
let photo2 = 0;
let photo3 = 0;


fwd1.addEventListener("click", function() {
    if(photo1 < 2){
    photo1 = photo1 + 1;}

    if(photo1 == 0){
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/4B8C83D6-D2CB-4742-8902-264824FBF120.JPG?raw=true";
        bck1.style.visibility = "hidden";
        fwd1.style.visibility = "visible";
    }else if(photo1 == 1){
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1547.jpg?raw=true";
        bck1.style.visibility = "visible";
        fwd1.style.visibility = "visible";
    } else {
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1548.jpg?raw=true";
        bck1.style.display = "visible";
        fwd1.style.display = "hidden";
    }

    if(photo1 == 2){ fwd1.style.visibility = "hidden"};

});

bck1.addEventListener("click", function() {
    if(photo1 > 0){
    photo1 = photo1 - 1;}

    if(photo1 == 0){
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/4B8C83D6-D2CB-4742-8902-264824FBF120.JPG?raw=true";
        bck1.style.visibility = "hidden";
        fwd1.style.visibility = "visible";
    }else if(photo1 == 1){
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1547.jpg?raw=true";
        bck1.style.visibility = "visible";
        fwd1.style.visibility = "visible";
    } else {
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1548.jpg?raw=true";
        bck1.style.display = "visible";
        fwd1.style.display = "hidden";
    }
});


