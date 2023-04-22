import Vimeo from'@vimeo/player';
import throttle from 'lodash.throttle';
import {save, load} from './storage';

const LOCALE_STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

initPage();


player.on('timeupdate',throttle(counterSeconds, 1000));


function counterSeconds() {
    player.getCurrentTime().then(function(seconds){
    save(LOCALE_STORAGE_KEY, JSON.stringify(seconds));
    })
}


function initPage(){
    const currentSeconds = load(LOCALE_STORAGE_KEY);
    if (currentSeconds) {
        player.setCurrentTime(JSON.parse(currentSeconds));
    }
    }








