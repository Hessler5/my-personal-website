
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

//control for first set of image buttoms
//Right Button
fwd1.addEventListener("click", function() {
    if(photo1 < 2){
    photo1 = photo1 + 1;}

    if(photo1 == 0){
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/4B8C83D6-D2CB-4742-8902-264824FBF120.JPG?raw=true";
        bck1.style.visibility = "hidden";
        fwd1.style.visibility = "visible";
        img1.height = 700;
    }else if(photo1 == 1){
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1547.jpg?raw=true";
        img1.height = 800;
        bck1.style.visibility = "visible";
        fwd1.style.visibility = "visible";
    } else {
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1548.jpg?raw=true";
        bck1.style.display = "visible";
        fwd1.style.display = "hidden";
        img1.height = 800;
    }

    if(photo1 == 2){ fwd1.style.visibility = "hidden"};

});
//Left Button
bck1.addEventListener("click", function() {
    if(photo1 > 0){
    photo1 = photo1 - 1;}

    if(photo1 == 0){
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/4B8C83D6-D2CB-4742-8902-264824FBF120.JPG?raw=true";
        bck1.style.visibility = "hidden";
        fwd1.style.visibility = "visible";
        img1.height = 700;
    }else if(photo1 == 1){
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1547.jpg?raw=true";
        bck1.style.visibility = "visible";
        fwd1.style.visibility = "visible";
        img1.height = 800;
    } else {
        img1.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1548.jpg?raw=true";
        bck1.style.display = "visible";
        fwd1.style.display = "hidden";
        img1.height = 800;
    }
});

//control for second set of image buttoms
//Right Button
fwd2.addEventListener("click", function() {
    if(photo2 < 2){
    photo2 = photo2 + 1;}

    if(photo2 == 0){
        img2.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1355.jpg?raw=true";
        bck2.style.visibility = "hidden";
        fwd2.style.visibility = "visible";
    }else if(photo2 == 1){
        img2.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1281.jpg?raw=true";
        bck2.style.visibility = "visible";
        fwd2.style.visibility = "visible";
    } else {
        img2.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1279.jpg?raw=true";
        bck2.style.display = "visible";
        fwd2.style.display = "hidden";
    }

    if(photo2 == 2){ fwd2.style.visibility = "hidden"};

});
//Left Button
bck2.addEventListener("click", function() {
    if(photo2 > 0){
    photo2 = photo2 - 1;}

    if(photo2 == 0){
        img2.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1355.jpg?raw=true";
        bck2.style.visibility = "hidden";
        fwd2.style.visibility = "visible";
    }else if(photo2 == 1){
        img2.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1281.jpg?raw=true";
        bck2.style.visibility = "visible";
        fwd2.style.visibility = "visible";
    } else {
        img2.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1279.jpg?raw=true";
        bck2.style.display = "visible";
        fwd2.style.display = "hidden";
    }
});

//control for third set of image buttoms
//Right Button
fwd3.addEventListener("click", function() {
    if(photo3 < 2){
    photo3 = photo3 + 1;}

    if(photo3 == 0){
        img3.src = "https://github.com/Hessler5/my-personal-website/blob/main/74BC30CE-8613-4A53-9784-68EAC933CE4F.JPG?raw=true";
        bck3.style.visibility = "hidden";
        fwd3.style.visibility = "visible";
    }else if(photo3 == 1){
        img3.src = "https://github.com/Hessler5/my-personal-website/blob/main/10752DA6-AE08-4B7E-A982-B711F5043E10.JPG?raw=true";
        bck3.style.visibility = "visible";
        fwd3.style.visibility = "visible";
    } else {
        img3.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1361.jpg?raw=true";
        bck3.style.display = "visible";
        fwd3.style.display = "hidden";
    }

    if(photo3 == 2){ fwd3.style.visibility = "hidden"};

});
//Left Button
bck3.addEventListener("click", function() {
    if(photo3 > 0){
    photo3 = photo3 - 1;}

    if(photo3 == 0){
        img3.src = "https://github.com/Hessler5/my-personal-website/blob/main/74BC30CE-8613-4A53-9784-68EAC933CE4F.JPG?raw=true";
        bck3.style.visibility = "hidden";
        fwd3.style.visibility = "visible";
    }else if(photo3 == 1){
        img3.src = "https://github.com/Hessler5/my-personal-website/blob/main/10752DA6-AE08-4B7E-A982-B711F5043E10.JPG?raw=true";
        bck3.style.visibility = "visible";
        fwd3.style.visibility = "visible";
    } else {
        img3.src = "https://github.com/Hessler5/my-personal-website/blob/main/IMG_1361.jpg?raw=true";
        bck3.style.display = "visible";
        fwd3.style.display = "hidden";
    }
});