// main.js

async function renderChannels() {
  const m3uUrl = 'https://m3u.ch/pl/59e9a608c3dd91dae2d9ec1fc9dbf52a_0989dd3fbd4c4512315b5b25e668cbf1.m3u'; // আপনার m3u.in লিংক দিন
  const channels = await loadChannelsFromM3U(m3uUrl);

  const container = document.getElementById('channel-container');
  channels.forEach(channel => {
    const div = document.createElement('div');
    div.className = 'channel';
    div.innerHTML = `
      <img src="${channel.logo}" alt="${channel.name}" onclick="playStream('${channel.url}')">
      <p>${channel.name}</p>
    `;
    container.appendChild(div);
  });
}

function playStream(url) {
  const video = document.getElementById('video-player');

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
  } else {
    video.src = url;
  }

  video.play();
}

// পেজ লোড হলে চ্যানেল রেন্ডার করো
window.onload = renderChannels;
