async function fetchM3UChannels(m3uUrl) {
  const response = await fetch(m3uUrl);
  const m3uText = await response.text();
  
  const lines = m3uText.split('\n');
  const channels = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('#EXTINF')) {
      const nameMatch = lines[i].match(/,(.*)/);
      const name = nameMatch ? nameMatch[1].trim() : 'Unknown';
      const url = lines[i + 1]?.trim();
      if (url && url.startsWith('http')) {
        channels.push({
          name: name,
          img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
          url: url,
          isLive: false
        });
      }
    }
  }

  return channels;
}
