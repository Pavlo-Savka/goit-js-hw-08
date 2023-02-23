//import throttle from 'lodash.throttle';
  const iframe = document.querySelector('iframe');
  const player = new Vimeo.Player(iframe);
  const throttle = require('lodash.throttle');
const STORAGE_TIME_KEY = "videoplayer-current-time";
player.on('timeupdate', throttle(currentTimePlay, 1000));
function currentTimePlay (time) {
    localStorage.setItem(STORAGE_TIME_KEY, time.seconds);
};

try {
    player.setCurrentTime(localStorage.getItem(STORAGE_TIME_KEY));
}
catch (e) {
    player.setCurrentTime(0);
};
