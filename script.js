const songs = [
    {
        title: "Despacito",
        artist: "Luis Fonsi Ft. Puerto Rican",
        audioSource: "media/music/despacito.mp3",
        image: "media/images/1.jpeg"
    },
    {
        title: "Chaleya",
        artist: "Arjit Singh",
        audioSource: "media/music/chaleya.mp3",
        image: "media/images/5.jpg"
    },
    {
        title: "Believer",
        artist: "Imagin Dragons",
        audioSource: "media/music/Believer.mp3",
        image: "media/images/10.jpg"
    },
    {
        title: "Chand Sifarish",
        artist: "Fanaa",
        audioSource: "media/music/Chand.mp3",
        image: "media/images/3.jpg"
    },
    {
        title: "Dope Shope",
        artist: "Yo Yo Honey Singh",
        audioSource: "media/music/Dope.mp3",
        image: "media/images/7.jpg"
    },
    {
        title: "Har Fun Maula",
        artist: "Vishal Dadlani",
        audioSource: "media/music/Harfun.mp3",
        image: "media/images/9.jpg"
    },
    {
        title: "On the Floor",
        artist: "Jennifer Lopez",
        audioSource: "media/music/Onthefloor.mp3",
        image: "media/images/11.png"
    },
    {
        title: "Unholy",
        artist: "Kim Petras",
        audioSource: "media/music/Unholy.mp3",
        image: "media/images/8.jpg"
    },
    {
        title: "Heeriye Heeriye",
        artist: "Arjit Singh",
        audioSource: "media/music/Heeriye.mp3",
        image: "media/images/6.jpg"
    },
    {
        title: "Way Down we Go",
        artist: " KALEO",
        audioSource: "media/music/Waydownwego.mp3",
        image: "media/images/2.jpg"
    },
    {
        title: "With You",
        artist: "Shinda Kahlon",
        audioSource: "media/music/Withyou.mp3",
        image: "media/images/4.jpg"
    },

]

let currentSongIndex = 0;

const songInfo = document.querySelector(".song-info");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songImage = document.querySelector(".song-img");
const songAudio = document.getElementById("song-audio");

function setCurrentSong() {
    const currentSong = songs[currentSongIndex];
    songTitle.textContent = currentSong.title;
    songArtist.textContent = currentSong.artist;
    songImage.src = currentSong.image;
    songAudio.src = currentSong.audioSource;
}
setCurrentSong();

function playPause() {
    if (songAudio.paused) {
        songAudio.play();
        songImage.classList.add('rotate');
        document.getElementById("ctrlIcon").classList.replace("fa-play", "fa-pause");
    } else {
        songAudio.pause();
        songImage.classList.remove('rotate'); // Change 'musicImg' to 'songImage'
        document.getElementById("ctrlIcon").classList.replace("fa-pause", "fa-play");
    }
}


function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSong();
    playPause();
}


function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSong();
    playPause();
}

document.getElementById("forward").addEventListener("click", playNextSong);
document.getElementById("backward").addEventListener("click", playPreviousSong);

songAudio.addEventListener("ended", playNextSong);

document.getElementById("progress").addEventListener("input", () => {
    const seekTime = (document.getElementById("progress").value / 100) * songAudio.duration;
    songAudio.currentTime = seekTime;
});

songAudio.addEventListener("timeupdate", () => {
    const currentTime = songAudio.currentTime;
    const duration = songAudio.duration;
    const progressPercentage = (currentTime / duration) * 100;
    document.getElementById("progress").value = progressPercentage;
});