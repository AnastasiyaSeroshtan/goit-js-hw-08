import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_KEY = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPausedVideo, 1000));

function onPausedVideo (event) {
    const currentTime = event.seconds;
    localStorage.setItem(LOCAL_KEY, currentTime);
}

if (localStorage.getItem(LOCAL_KEY)) {player.setCurrentTime(localStorage.getItem(LOCAL_KEY))};

