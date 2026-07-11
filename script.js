// ---------------- Loading Screen ----------------

setTimeout(() => {

    document.getElementById("loading-screen").style.opacity = "0";
    document.getElementById("loading-screen").style.visibility = "hidden";

    document.getElementById("passcode-screen").style.opacity = "1";
    document.getElementById("passcode-screen").style.visibility = "visible";

}, 4000);


// ---------------- Passcode ----------------

const correctPass = "140704";
let entered = "";

function press(num){

    if(entered.length >= 6) return;

    entered += num;

    updateDots();

    if(entered.length === 6){

        if(entered === correctPass){

            document.getElementById("passcode-screen").style.opacity = "0";
            document.getElementById("passcode-screen").style.visibility = "hidden";

            document.getElementById("unlock-screen").style.opacity = "1";
            document.getElementById("unlock-screen").style.visibility = "visible";

            setTimeout(()=>{

                document.getElementById("unlock-screen").style.opacity = "0";
                document.getElementById("unlock-screen").style.visibility = "hidden";

                document.getElementById("envelope-screen").style.opacity = "1";
                document.getElementById("envelope-screen").style.visibility = "visible";

            },1500);

        }else{

            entered = "";

            updateDots();

            document.getElementById("passcode-screen").classList.add("shake");

            setTimeout(()=>{

                document.getElementById("passcode-screen").classList.remove("shake");

            },400);

        }

    }

}

function updateDots(){

    const dots=document.querySelectorAll(".dot");

    dots.forEach((dot,index)=>{

        if(index<entered.length){

            dot.classList.add("filled");

        }else{

            dot.classList.remove("filled");

        }

    });

}

function clearPass(){

    entered="";

    updateDots();

}

function backspace(){

    entered=entered.slice(0,-1);

    updateDots();

}


// ---------------- Envelope ----------------

function openEnvelope(){

    const flap=document.querySelector(".flap");
    const letter=document.querySelector(".letter");

    flap.style.transform="rotateX(180deg)";

    setTimeout(()=>{

        letter.style.transform="translateY(-140px)";

    },400);

    setTimeout(()=>{

        document.getElementById("envelope-screen").style.opacity="0";
        document.getElementById("envelope-screen").style.visibility="hidden";

        document.getElementById("letter-screen").style.opacity="1";
        document.getElementById("letter-screen").style.visibility="visible";

        typeLetter();

    },2500);

}


// ---------------- Letter ----------------

function showGallery(){

    document.getElementById("letter-screen").style.opacity="0";
    document.getElementById("letter-screen").style.visibility="hidden";

    setTimeout(()=>{

        document.getElementById("gallery-screen").style.opacity="1";
        document.getElementById("gallery-screen").style.visibility="visible";

        current=0;

        updateGallery();

    },500);

}


// ---------------- Gallery ----------------

const photos=[

    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg"

];

let current=0;

function updateGallery(){

    const img = document.getElementById("gallery-image");

    img.src = photos[current];

    // Remove special class first
    img.classList.remove("special-photo");

    // Apply special style only for photo5.jpg
    if(current === 4){
        img.classList.add("special-photo");
    }

    document.getElementById("counter").innerHTML =
        (current + 1) + " / " + photos.length;

}

function nextPhoto(){

    current++;

    if(current>=photos.length){

        current=0;

    }

    updateGallery();

}

function previousPhoto(){

    current--;

    if(current<0){

        current=photos.length-1;

    }

    updateGallery();

}