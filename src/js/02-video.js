import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTimeData, 1000));

function saveTimeData(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

const timeData = localStorage.getItem('videoplayer-current-time') || '0';

player.setCurrentTime(timeData);
