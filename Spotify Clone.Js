let play = document.querySelector('.Play-Icon ');
let next = document.querySelector('.Next-Icon');
let current_title = document.querySelector('.Song-Title');
let current_artist = document.querySelector('.Song-Artist');
let current_image = document.querySelector('.Current-Image');
let slider = document.querySelector('.Slider');
let time = document.querySelector('.Song-Start');
let remaining_time = document.querySelector('.Song-Finish');
let volume = document.querySelector('.Volume-Slider');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//const playIconClassName = 'fa-circle-play'
//const pauseIconClassName = 'fa-circle-pause'

//Audio Element
let track = document.createElement('audio');

//Song List 
let All_song = [
    {
      name: "No Ceilings",
      path: "Playlist /Track/No Ceilings.mp3",
      img: "Image/image1.jpg",
      artist: "Tony Shhnow",
    }
]

//All Functions

//Load the track
function load_track(index_no){
    track.src = All_song[index_no].path;
    current_title.innerHTML =  'No Ceilings'; //All_song[index_no].name
    current_artist.innerHTML = 'Tony Shhnow';
    current_image = All_song[index_no].img;
    track.load();
    console.log('Current artist is ' + current_artist.innerHTML);
    console.log('Current title is ' + current_title.innerHTML );
}

load_track(index_no);

//Checker for current song / If else 
function justplay(){
    if(playing_song==false) {
        playsong();
    } else {
        pausesong();
       
    }
}

//Function for playing/pausing sample song
function playsong(){
    track.play();
    playing_song = true

    if(playing_song==true)  {
        document.querySelector('.fa-circle-play').classList.replace('fa-circle-play', 'fa-circle-pause');
    }
   };
 


function pausesong(){
    track.pause();
    playing_song = false
    document.querySelector('.fa-circle-pause').classList.replace('fa-circle-pause', 'fa-circle-play');
}




track.addEventListener('timeupdate', ()=>{
    let track_current = track.currentTime;
    let track_duration = track.duration;
    let progressWidth = (track_current / track_duration) * 100;

    document.querySelector('.Slider').style.width = `${progressWidth}%`;
    document.querySelector('.Slider').value = `${progressWidth}%`;

    let currentMin = Math.floor(track_current / 60);
    let currentSec = Math.floor(track_current % 60);

    if(currentSec < 10){
        currentSec = `0${currentSec}`
     };

      
    let totalMin = Math.floor(track_duration / 60);
    let totalSec = Math.floor(track_duration % 60);
    
    if(totalSec < 10){
        totalSec = `0${totalSec}`
     };

  
    
    time.innerText = `${currentMin}:${currentSec}`;
    remaining_time.innerText = `${totalMin}:${totalSec}`;



})
