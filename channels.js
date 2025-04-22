// M3U প্লেলিস্টের URL
const m3u8Url = 'https://m3u.ch/pl/a920ec72a4490f9105323c833625ae62_810974b647cd5a35c556bd346bb3402e.m3u';

// ফাংশন যা M3U ফাইলকে পার্স করে চ্যানেল লোড করবে
async function loadChannelsFromM3U8() {
  const response = await fetch(m3u8Url);
  const m3u8Text = await response.text();

  const channels = {};
  
  // M3U ফাইলের টেক্সট থেকে প্রয়োজনীয় তথ্য বের করতে রেগুলার এক্সপ্রেশন ব্যবহার করা হচ্ছে
  const pattern = /#EXTINF:-1\s+tvg-logo="([^"]+)"\s+group-title="([^"]+)",([^\n\r]+)\s+([^\n\r]+)/g;
  let match;

  while ((match = pattern.exec(m3u8Text)) !== null) {
    const logo = match[1];
    const category = match[2];
    const name = match[3].trim();
    const url = match[4].trim();

    // ক্যাটাগরি না থাকলে নতুন ক্যাটাগরি তৈরি করা
    if (!channels[category]) {
      channels[category] = [];
    }

    // চ্যানেল ডেটা অ্যাড করা
    channels[category].push({
      name: name,
      img: logo,
      url: url
    });
  }

  console.log(channels); // চ্যানেলগুলো কনসোলে দেখা যাবে
  return channels;
}

// ফাংশন কল করা
loadChannelsFromM3U8().then(channels => {
  renderChannels(channels); // এই ফাংশনটিকে চ্যানেল রেন্ডার করার জন্য কল করা হবে
});

// চ্যানেল রেন্ডার করার ফাংশন
function renderChannels(channels) {
  const container = document.getElementById("channelContainer");
  container.innerHTML = '';

  for (const category in channels) {
    const section = document.createElement("div");
    section.id = category;

    const heading = document.createElement("h3");
    heading.textContent = category;

    const grid = document.createElement("div");
    grid.className = "channel-grid";

    channels[category].forEach(channel => {
      const div = document.createElement("div");
      div.className = "channel";
      div.onclick = () => {
        window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}&name=${encodeURIComponent(channel.name)}&logo=${encodeURIComponent(channel.img)}`;
      };
      div.innerHTML = `
        <div class="thumbnail-container">
          <img src="${channel.img}" alt="${channel.name}" />
        </div>
        <span>${channel.name}</span>
      `;
      grid.appendChild(div);
    });

    section.appendChild(heading);
    section.appendChild(grid);
    container.appendChild(section);
  }
}
