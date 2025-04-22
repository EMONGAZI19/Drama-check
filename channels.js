const channels = {
  "Live Now": [
    {
      name: "Live Test 1",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://example.com/stream1.m3u8"
    },
    {
      name: "Live Test 2",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://example.com/stream2.m3u8"
    },
    {
      name: "Live Test 3",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://example.com/stream3.m3u8"
    }
  ]
};

// M3U থেকে চ্যানেল লোড করার ফাংশন
async function loadChannelsFromM3U(m3uUrl) {
  try {
    const res = await fetch(m3uUrl);
    const text = await res.text();
    const lines = text.split('\n');
    let currentGroup = "Others";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith("#EXTINF")) {
        const name = line.split(',').pop().trim();
        const logoMatch = line.match(/tvg-logo="(.*?)"/);
        const groupMatch = line.match(/group-title="(.*?)"/);
        const logo = logoMatch ? logoMatch[1] : "https://i.postimg.cc/d16Y2v56/20250421-001244.png";
        currentGroup = groupMatch ? groupMatch[1] : currentGroup;
        const streamUrl = lines[i + 1]?.trim();

        if (streamUrl && streamUrl.startsWith("http")) {
          if (!channels[currentGroup]) channels[currentGroup] = [];
          channels[currentGroup].push({
            name: name,
            img: logo,
            url: streamUrl
          });
        }
      }
    }

    // চাইলে এখানে আপনি renderChannels(channels) কল করতে পারেন
    // যাতে লোড শেষে UI-তে দেখায়
  } catch (error) {
    console.error("M3U লোড করতে সমস্যা:", error);
  }
}

// এখানে আপনার প্লেলিস্ট লিংক বসান
loadChannelsFromM3U("https://m3u.ch/pl/59e9a608c3dd91dae2d9ec1fc9dbf52a_0989dd3fbd4c4512315b5b25e668cbf1.m3u");
