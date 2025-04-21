document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const container = document.getElementById("channelContainer");
  const searchInput = document.getElementById("searchInput");

  function renderAllChannels() {
    container.innerHTML = "";

    for (const category in channels) {
      const section = document.createElement("div");
      section.id = category;

      const heading = document.createElement("h3");
      heading.textContent = category;

      let grid;

      if (category === "Live Now") {
        const sliderWrapper = document.createElement("div");
        sliderWrapper.className = "live-slider-wrapper";

        grid = document.createElement("div");
        grid.className = "live-slider";

        channels[category].forEach(channel => {
          const div = document.createElement("div");
          div.className = "channel small-channel";
          div.onclick = () => {
            window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}&name=${encodeURIComponent(channel.name)}&logo=${encodeURIComponent(channel.img)}`;
          };
          div.innerHTML = `
            <div class="thumbnail-container">
              <img src="${channel.img}" alt="${channel.name}" />
              ${channel.isLive ? '<span class="live-badge">LIVE</span>' : ''}
            </div>
            <span>${channel.name}</span>
          `;
          grid.appendChild(div);
        });

        sliderWrapper.appendChild(grid);
        section.appendChild(heading);
        section.appendChild(sliderWrapper);
        container.appendChild(section);
      } else {
        grid = document.createElement("div");
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
              ${channel.isLive ? '<span class="live-badge">LIVE</span>' : ''}
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

    animateLiveSlider();
  }

  function filterChannels(query) {
    container.innerHTML = "";
    const resultGrid = document.createElement("div");
    resultGrid.className = "channel-grid";

    for (const category in channels) {
      channels[category].forEach(channel => {
        if (channel.name.toLowerCase().includes(query)) {
          const div = document.createElement("div");
          div.className = "channel";
          div.onclick = () => {
            window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}&name=${encodeURIComponent(channel.name)}&logo=${encodeURIComponent(channel.img)}`;
          };
          div.innerHTML = `
            <div class="thumbnail-container">
              <img src="${channel.img}" alt="${channel.name}" />
              ${channel.isLive ? '<span class="live-badge">LIVE</span>' : ''}
            </div>
            <span>${channel.name}</span>
          `;
          resultGrid.appendChild(div);
        }
      });
    }

    if (resultGrid.children.length === 0) {
      container.innerHTML = `<p style="text-align:center; padding: 20px;">কোনো চ্যানেল পাওয়া যায়নি</p>`;
    } else {
      container.appendChild(resultGrid);
    }
  }

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    if (!query) {
      renderAllChannels();
    } else {
      filterChannels(query);
    }
  });

  if (loader) loader.style.display = "none";
  renderAllChannels();
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = (window.scrollY > 100) ? "block" : "none";
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function toggleMenu() {
  const menu = document.getElementById("dropdown");
  menu.classList.toggle("show");
}

// Animate Live Slider
function animateLiveSlider() {
  const slider = document.querySelector(".live-slider");
  if (!slider) return;

  const totalSlides = slider.children.length;
  let index = 0;

  function slideNext() {
    if (index >= totalSlides - 2) return;

    slider.style.transition = "transform 1s ease-in-out";
    slider.style.transform = `translateX(-${index * 33.33}%)`;
    index++;
    setTimeout(slideNext, 4000);
  }

  setTimeout(slideNext, 4000);
}
