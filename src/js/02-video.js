//import throttle from 'lodash.throttle';
  const iframe = document.querySelector('iframe');
  const player = new Vimeo.Player(iframe);
  const throttle = require('lodash.throttle');
  
player.on('timeupdate', throttle(currentTimePlay, 1000));
function currentTimePlay (time) {
    localStorage.setItem("videoplayer-current-time", time.seconds);
};
 player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function() {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
