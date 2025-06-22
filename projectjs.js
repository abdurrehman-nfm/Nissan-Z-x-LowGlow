var check = true;

function head1click(){
    let contbox = document.getElementById("contentbox");
    if (check) {
            contbox.textContent = "The 2025 Nissan Z is a striking fusion of retro charm and modern aggression, flaunting a long sculpted hood, signature LED lighting, and a sleek fastback silhouette that nods to its legendary lineage. Its bold front grille and 19-inch forged alloy wheels by RAYS® give it a muscular, track-ready stance. The rear design pays homage to the classic 300ZX with sharp, horizontal taillights that complete its nostalgic yet futuristic vibe. Enhancing its street presence, a custom underglow kit from LowGlow bathes the chassis in vibrant LED light, adding a dramatic flair to nighttime drives. The LowGlow system features a cabin-mounted on/off switch to prevent battery drain and ensure safe operation. Altogether, its a head-turning blend of heritage, performance, and show-stopping style."
            contbox.style.fontFamily = "CustomFont";
            contbox.style.paddingTop="50px";    
            contbox.style.fontSize="17px";    
            contbox.style.color="rgb(212, 200, 174)";    


              const textElement = document.getElementById('contentbox');
        let opacity = 0;
        const fadeInterval = 50; // Milliseconds between opacity updates
        const opacityIncrement = 0.05; // How much to increase opacity each step

            const intervalId = setInterval(() => {
                if (opacity < 1) {
                    opacity += opacityIncrement;
                    textElement.style.opacity = opacity;
                } else {
                    clearInterval(intervalId); // Stop the animation when fully visible
                }
            }, fadeInterval);



            check = false;
    } else {
        contbox.textContent = "";
        check = true;
    }
}

function head2click(){
     let contbox = document.getElementById("contentbox");
    if (check) {
            contbox.innerHTML = "- Engine: 3.0L twin-turbo V6 with 420 hp<br><br>"+
"- Transmission: 6-speed manual or 9-speed automatic<br><br>"+
"- 0 to 60 mph: Approx. 4.3 seconds<br><br>"+
"- Drivetrain: Rear wheel drive with LSD (Performance & NISMO)<br><br>"+
"- Brakes: Akebono® performance calipers with vented discs<br><br>"+
"- Infotainment: 9-inch touchscreen, Bose® 8-speaker audio, Apple CarPlay® & Android Auto<br>";

            contbox.style.fontFamily = "CustomFont";
            contbox.style.paddingTop="50px";    
            contbox.style.fontSize="17px";    
            contbox.style.color="rgb(212, 200, 174)";    


              const textElement = document.getElementById('contentbox');
        let opacity = 0;
        const fadeInterval = 50; // Milliseconds between opacity updates
        const opacityIncrement = 0.05; // How much to increase opacity each step

            const intervalId = setInterval(() => {
                if (opacity < 1) {
                    opacity += opacityIncrement;
                    textElement.style.opacity = opacity;
                } else {
                    clearInterval(intervalId); // Stop the animation when fully visible
                }
            }, fadeInterval);



            check = false;
    } else {
        contbox.textContent = "";
        check = true;
    }
}

function head3click(){
     let contbox = document.getElementById("contentbox");
    if (check) {
            contbox.innerHTML = "- Base engine: 3.0L twin-turbo V6<br><br>"+
"- Standard output: 400 hp @ 6,400 rpm<br><br>"+
"- Standard torque: 350 lb-ft @ 1,600 rpm<br><br>"+
"- NISMO output: 420 hp @ 6,400 rpm<br><br>"+
"- NISMO torque: 384 lb-ft @ 2,000 rpm<br><br>";
            contbox.style.fontFamily = "CustomFont";   
            contbox.style.paddingTop="50px";    
            contbox.style.fontSize="17px";    
            contbox.style.color="rgb(212, 200, 174)";    


              const textElement = document.getElementById('contentbox');
        let opacity = 0;
        const fadeInterval = 50; // Milliseconds between opacity updates
        const opacityIncrement = 0.05; // How much to increase opacity each step

            const intervalId = setInterval(() => {
                if (opacity < 1) {
                    opacity += opacityIncrement;
                    textElement.style.opacity = opacity;
                } else {
                    clearInterval(intervalId); // Stop the animation when fully visible
                }
            }, fadeInterval);



            check = false;
    } else {
        contbox.textContent = "";
        check = true;
    }
}


function playaudio(){
    let audio= document.getElementById('audio-bg');
    audio.play();
}

function pauseaudio(){
    let audio= document.getElementById('audio-bg');
    audio.pause();
}


function showdetails(){
    let content = document.getElementById('absodivcont');
    content.style.opacity='1';
}


function hidedetails(){
    let content = document.getElementById('absodivcont');
    content.style.opacity='0';
}