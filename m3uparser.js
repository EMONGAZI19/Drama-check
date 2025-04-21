async function loadChannelsFromM3U(m3uUrl) {
  const response = await fetch(m3uUrl);
  const text = await response.text();
  const lines = text.split('\n');

  const channels = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('#EXTINF')) {
      const nameMatch = lines[i].match(/,(.*)$/);
      const logoMatch = lines[i].match(/tvg-logo="(.*?)"/);
      const name = nameMatch ? nameMatch[1] : 'Unknown';
      const logo = logoMatch ? logoMatch[1] : '';
      const url = lines[i + 1];

      channels.push({
        name,
        logo,
        url
      });
    }
  }

  return channels;
}
