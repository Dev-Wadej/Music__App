const prevBtn = document.querySelector('#prev');
const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const holdSong = document.querySelector('.play');
const songName = document.querySelector('.song__name');
const songArtist = document.querySelector('.song__artist');
const progress = document.getElementById('progress');
// console.log(holdSong);

const songTitles = ['asa', 'asake'];
// console.log(index);
let index = Math.floor(Math.random() * songTitles.length);

////Event  Listeners
playBtn.addEventListener('click', (e) => {
    // console.log(e.target);
    if (holdSong.classList.contains('fa-pause')) {
        holdSong.classList.add('fa-play');
        holdSong.classList.remove('fa-pause');
        pauseSong();
    } else if (holdSong.classList.contains('fa-play')) {
        holdSong.classList.add('fa-pause');
        holdSong.classList.remove('fa-play');
        loadSong(songTitles[index]);
    }
});
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
};
audio.addEventListener('timeupdate', updateProgress);

const loadSong = (song) => {
    audio.src = `./music/${song}.mp3`;
    songName.textContent = song.toUpperCase();
    songArtist.textContent = `Sang by ${song}`;

    audio.play();
    // console.log(audio);
};
const pauseSong = () => {
    audio.pause();
};

function prevSong() {
    index--;

    if (index < 0) {
        index = songTitles.length - 1;
    }

    loadSong(songTitles[index]);
}

// Next song
function nextSong() {
    index++;

    if (index > songTitles.length - 1) {
        index = 0;
    }

    loadSong(songTitles[index]);
}