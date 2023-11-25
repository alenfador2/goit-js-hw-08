import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);
const time = localStorage.getItem('videoplayer-current-time');
const stringTime = JSON.stringify(localStorage.getItem('videoplayer-current-time'));
window.addEventListener('DOMContentLoaded', () => {
  player.setCurrentTime(time);
});

if (time === null) {
  location.reload();
  player.setCurrentTime(stringTime);
}
