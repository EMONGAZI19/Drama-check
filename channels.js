const channels = {
  "Live Now": [
    {
      name: "Live Test 1",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://example.com/live1.m3u8"
    },
    {
      name: "Live Test 2",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://example.com/live2.m3u8"
    },
    {
      name: "Live Test 3",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://example.com/live3.m3u8"
    }
  ]
};

// M3U লিংক এখানে বসাও
const m3uUrl = "https://m3u.ch/pl/59e9a608c3dd91dae2d9ec1fc9dbf52a_0989dd3fbd4c4512315b5b25e668cbf1.m3u";

// ডেটা ফেচ ও প্রসেসিং
fetch(m3uUrl)
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n');
    let currentGroup = "";
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('#EXTINF')) {
        const logoMatch = line.match(/tvg-logo="([^"]+)"/);
        const groupMatch = line.match(/group-title="([^"]+)"/);
        const nameMatch = line.match(/,(.+)$/);

        const logo = logoMatch ? logoMatch[1] : "";
        const group = groupMatch ? groupMatch[1] : "Others";
        const name = nameMatch ? nameMatch[1] : "Unnamed Channel";

        const url = lines[i + 1]?.startsWith("http") ? lines[i + 1] : null;

        if (url) {
          if (!channels[group]) {
            channels[group] = [];
          }

          channels[group].push({
            name: name,
            img: logo || "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
            url: url
          });
        }
      }
    }
  })
  .catch(error => {
    console.error("Failed to fetch M3U playlist:", error);
  });
