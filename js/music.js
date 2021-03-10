let list_audio = ['1.mp3', '2.mp3', '3.mp3', '4.mp3'];
let list_audio_thump = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

function random(lists) {
    return lists[Math.floor(Math.random()*lists.length)]
}

audio_background = new Audio("../music/" + random(list_audio));
let isPlaying = false;

function getImageThump(){
    return "images/music/" + random(list_audio_thump);
}

function playAudio() {
    if (!isPlaying)
        playTrack();
    else
        pauseTrack();
}

let css_html_old = `

`;

let css_html_new = `
    animation: brightness_animation 0.2s infinite linear;
`;

let css_layer_1_old = `
    
`;


let css_layer_1_new = `
    animation: rotate_animation 2s infinite linear;
`;

let css_img_main_old = `
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: transform 1s ease;
`;

let css_img_main_new = `
    width: 230px;
    height: 230px;
    border-radius: 50%;
    animation: zoom_animation 0.5s infinite linear alternate;
`;

function playTrack() {
    audio_background.play();
    isPlaying = true;  
    document.getElementById('img_main').src = getImageThump();
    document.getElementById('layer_1').style.cssText = css_layer_1_new;
    document.getElementById('img_main').style.cssText = css_img_main_new;
    document.getElementsByTagName('html')[0].style.cssText = css_html_new;
    
}
  
function pauseTrack() {
    audio_background.pause();
    isPlaying = false;
    document.getElementById('img_main').src = "images/play_button.png";
    document.getElementById('layer_1').style.cssText = css_layer_1_old;
    document.getElementById('img_main').style.cssText = css_img_main_old;
    document.getElementsByTagName('html')[0].style.cssText = css_html_old;
}