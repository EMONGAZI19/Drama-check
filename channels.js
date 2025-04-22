const channels = {
  "Live Now": [
    {
      name: "Test",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://tv.bdixtv24.co/toffee/live.php?id=7e00fee81848&e=.m3u8"
    },
    {
      name: "Live Test 2",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://raw.githubusercontent.com/EMONGAZI19/XYZ/refs/heads/main/starbd.dramaworld.m3u8"
    },
    {
      name: "Live Test 3",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://example.com/live.m3u8"
    }
  ]
};

fetch('https://m3u.in/pl/59e9a608c3dd91dae2d9ec1fc9dbf52a_0989dd3fbd4c4512315b5b25e668cbf1.m3u')
  .then(res => res.text())
  .then(text => {
    const lines = text.split('\n');
    let currentChannel = {};
    let category = "Bangladesh";
    channels[category] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith("#EXTINF")) {
        const nameMatch = line.match(/,(.*)$/);
        const logoMatch = line.match(/tvg-logo="(.*?)"/);
        currentChannel = {
          name: nameMatch ? nameMatch[1] : "Unknown",
          img: logoMatch ? logoMatch[1] : "https://i.postimg.cc/d16Y2v56/20250421-001244.png"
        };
      } else if (line && !line.startsWith("#")) {
        currentChannel.url = line;
        channels[category].push(currentChannel);
        currentChannel = {};
      }
    }

    // Call your function to render channels here
    if (typeof renderAllChannels === "function") {
      renderAllChannels();
    }
  })
  .catch(err => {
    console.error("Playlist Load Failed", err);
  });
