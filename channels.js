const channels = {
  "Live Now": [
    {
      name: "Test ",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "http://xtv.ooo:8080/live/danyear12/am809100/245897.m3u8",
      isLive: true
    },
    {
      name: "Live test 2",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://raw.githubusercontent.com/EMONGAZI19/XYZ/refs/heads/main/starbd.dramaworld.m3u8",
      isLive: true
    },
  
  ],
  "Bangladesh": [
    { name: "Jamuna TV", img: "https://i.postimg.cc/Jz4ny6Kj/20250421-072931.png", url: "https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1701/output/index.m3u8", isLive: false },
    { name: "Atn News ", img: "https://i.postimg.cc/gkrkpvgT/20250421-073342.png", url: "https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1706/output/index.m3u8", isLive: false },
    { name: "Channel 24", img: "https://i.postimg.cc/tRktwHcz/20250421-073644.png", url: "https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1703/output/index.m3u8", isLive: false },
    { name: "Ekattor TV", img: "https://i.postimg.cc/sDVyf5wr/20250421-073902.png", url: "https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1705/output/index.m3u8", isLive: false },
    { name: "Somoy TV", img: "https://i.postimg.cc/0NvhZsFq/20250421-074208.png", url: "https://d1e7rcqq4o2ma.cloudfront.net/bpk-tv/1702/output/index.m3u8", isLive: false },
    { name: "Independent.Tv", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "DBC News", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "BD Channel 8", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "BD Channel 9", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "BD Channel 10", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false }
  ],
  "Entertainment": [
    { name: "Entertainment 1", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Entertainment 2", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Entertainment 3", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Entertainment 4", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Entertainment 5", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Entertainment 6", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Entertainment 7", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Entertainment 8", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false }
  ],
  "Indian Bangla": [
    { name: "Star Jalsha", img: "https://i.postimg.cc/G38mGTkS/20250421-052453.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Zee Bangla", img: "https://i.postimg.cc/Mpx6Csgh/20250421-052543.png", url: "http://kst.moonplex.net:8080/CH4/index.m3u8", isLive: false },
    { name: "Colors Bangla", img: "https://i.postimg.cc/Xv1nynXb/20250421-053157.png", url: "http://38.96.178.201/live/ColorsBangla/index.m3u8", isLive: false },
    { name: "Sony Aath", img: "https://i.postimg.cc/VvnwTMgf/20250421-053825.png", url: "http://38.96.178.201/live/SonyAath/index.m3u8", isLive: false },
    { name: "Jalsha Movies", img: "https://i.postimg.cc/J7kRGVLf/20250421-054133.png", url: "http://38.96.178.201/live/JalshaMovies/index.m3u8", isLive: false },
    { name: "Ruposhi Bangla", img: "https://i.postimg.cc/fRXdKgmp/20250421-065011.png", url: "http://38.96.178.201/live/RuposhiBangla/index.m3u8", isLive: false },
 { name: "Akash Aath", img: "https://i.postimg.cc/hG1dFzC0/20250421-065356.png", url: "http://38.96.178.201/live/AkashAath/index.m3u8", isLive: false },
  { name: "Zee Bangla Cinema", img: "https://i.postimg.cc/05W72S9W/20250421-064417.png", url: "https://raw.githubusercontent.com/selimgazi999/selimgazi999/refs/heads/main/Zeebanglacinema.m3u8", isLive: false }
  ],
  "Kids": [
    { name: "Kids 1", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Kids 2", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Kids 3", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Kids 4", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false }
  ],
  "Music": [
    { name: "Music 1", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Music 2", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Music 3", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Music 4", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false }
  ],
  "Sports": [
    { name: "Sports 1", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Sports 2", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Sports 3", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Sports 4", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Sports 5", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Sports 6", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Sports 7", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Sports 8", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Sports 9", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false },
    { name: "Sports 10", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "http://kst.moonplex.net:8080/CH3/index.m3u8", isLive: false }
  ]
};
