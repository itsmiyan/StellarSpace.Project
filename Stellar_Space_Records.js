const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const prefersReducedMotion = matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const presaveCountdownDuration = 12 * 60 * 60 * 1000;

// Add src for an audio file and link for a Presave / Listen button when available.
const releases = [
  {
    title: "Rise To The Sky",
    artist: "Fonglee & 4nDr3w",
    bpm: 140,
    root: 98,
    artwork: "url('assets/image/rise%20to%20the%20sky.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/Fonglee%20%26%204nDr3w%20-%20Rise%20To%20The%20Sky.mp3",
    playFull: true,
  },

  {
    title: "Saturn",
    artist: "4sta. & MachiChunky",
    bpm: 126,
    root: 110,
    artwork: "url('assets/image/saturrn.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/Saturn.mp3",
    playFull: true,
  },
  {
    title: "Believe",
    artist: "4sta. & MachiChunky",
    bpm: 124,
    root: 123,
    artwork: "url('assets/image/belive.jpg')",
    accent: "#4fe3b6",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/Believe.mp3",
    playFull: true,
  },
  {
    title: "One More Time",
    artist: "4sta. & MachiChunky",
    bpm: 150,
    root: 104,
    artwork: "url('assets/image/one%20more%20time.jpg')",
    accent: "#b4d95a",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/One%20More%20Time.mp3",
    playFull: true,
  },
  {
    title: "Call It Love",
    artist: "4sta. & TuanNguyen & Kermel",
    bpm: 126,
    root: 110,
    artwork: "url('assets/image/Call%20it%20love.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/Call%20It%20Love.mp3",
    playFull: true,
  },
  {
    title: "Gone",
    artist: "lostinurmind & windsor boy",
    bpm: 126,
    root: 110,
    artwork: "url('assets/image/gone.jpg')",
    accent: "#b4d95a",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/Gone.mp3",
    playFull: true,
  },
  {
    title: "I Need You",
    artist: "4sta. & TuanNguyen",
    artwork: "url('assets/image/ai%20lit%20diu.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/TuanNguyen%2C%204sta.%2C%20StarlingEDM%20-%20I%20Need%20You.mp3",
    playFull: true,
  },
  {
    title: "What Do You Feel?",
    artist: "4sta.",
    artwork:
      "url('assets/image/like%20that%20and%20what%20do%20you%20feel.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/What%20Do%20You%20Feel_.mp3",
    playFull: true,
  },
  {
    title: "Like That",
    artist: "4sta.",
    artwork:
      "url('assets/image/like%20that%20and%20what%20do%20you%20feel.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/Like%20That.mp3",
    playFull: true,
  },
  {
    title: "Now I’m Hurt",
    artist: "4sta.",
    artwork: "url('assets/image/now%20im%20hurt.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/Now%20I%E2%80%99m%20Hurt.mp3",
    playFull: true,
  },
  {
    title: "Over",
    artist: "Wayzie, 4sta.",
    artwork: "url('assets/image/over.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/Over.mp3",
    playFull: true,
  },
  {
    title: "Could You Love Me",
    artist: "Peter Claymore, lostinurmind",
    artwork: "url('assets/image/could%20you%20love%20me.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/Could%20U%20Love%20Me%20-%20Radio%20Edit.mp3",
    playFull: true,
  },
  {
    title: "Alive",
    artist: "4nDr3w & Frezdlee",
    bpm: 126,
    root: 110,
    artwork: "url('assets/image/alive.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/4nDr3w%20%26%20Frezdlee%20-%20Alive.mp3",
    playFull: true,
  },
];

const popularReleases = [
  {
    title: "Alive",
    artist: "4nDr3w & Frezdlee",
    plays: "2.4M",
    artwork: releases[0].artwork,
    releaseIndex: 0,
  },
  {
    title: "Rise To The Sky",
    artist: "Fonglee & 4nDr3w",
    plays: "1.8M",
    artwork: releases[1].artwork,
    releaseIndex: 1,
  },
  {
    title: "Saturn",
    artist: "4sta. & MachiChunky",
    plays: "720K",
    artwork: releases[2].artwork,
    releaseIndex: 2,
  },
  {
    title: "Believe",
    artist: "4sta. & MachiChunky.",
    plays: "1.3M",
    artwork: releases[3].artwork,
    releaseIndex: 3,
  },
  {
    title: "One More Time",
    artist: "4sta. & MachiChunky",
    plays: "940K",
    artwork: releases[4].artwork,
    releaseIndex: 4,
  },
  {
    title: "Call It Love",
    artist: "4sta. & TuanNguyen",
    artwork: releases[5].artwork,
    releaseIndex: 5,
  },
  {
    title: "Gone",
    artist: "lostinurmind & windsor boy",
    artwork: releases[6].artwork,
    releaseIndex: 6,
  },
];

// Add an image URL to image and social URLs to socialLinks as needed.
const artists = [
  {
    name: "4nDr3w",
    genre: "House",
    releaseCount: 2,
    artwork: "linear-gradient(135deg,#6551A2,#3F5FAC)",
    image: "assets/image/avt/4ndr3w.jpg",
    socialLinks: {
      instagram: "#",
      tiktok: "#",
      x: "#",
      twitch: "",
      facebook: "",
      discord: "",
    },
  },
  {
    name: "4sta.",
    genre: "Tech",
    releaseCount: 3,
    artwork: "linear-gradient(135deg,#3F5FAC,#24D1AF)",
    image: "assets/image/avt/HaiDak.jpg",
    socialLinks: {
      instagram: "#",
      tiktok: "#",
      x: "#",
      twitch: "",
      facebook: "",
      discord: "",
    },
  },

  {
    name: "MachiChunky",
    genre: "House",
    releaseCount: 3,
    artwork: "linear-gradient(135deg,#24D1AF,#A4CE46)",
    image: "assets/image/avt/machi.jpg",
    socialLinks: {
      instagram: "#",
      tiktok: "#",
      x: "#",
      twitch: "",
      facebook: "",
      discord: "",
    },
  },

  {
    name: "Fonglee",
    genre: "House",
    releaseCount: 1,
    artwork: "linear-gradient(135deg,#24D1AF,#A4CE46)",
    image: "assets/image/avt/phonglii.webp",
    socialLinks: {
      instagram: "#",
      tiktok: "#",
      x: "#",
      twitch: "",
      facebook: "",
      discord: "",
    },
  },
  // {
  //   name: "Miyan",
  //   genre: "Kawaii",
  //   releaseCount: 0,
  //   artwork: "linear-gradient(135deg,#24D1AF,#A4CE46)",
  //   image: "",
  //   socialLinks: {
  //     instagram: "#",
  //     tiktok: "#",
  //     x: "#",
  //     twitch: "",
  //     facebook: "",
  //     discord: "",
  //   },
  // },
  {
    name: "lostinurmind",
    genre: "House",
    releaseCount: 2,
    artwork: "linear-gradient(135deg,#24D1AF,#A4CE46)",
    image: "assets/image/avt/long.webp",
    socialLinks: {
      instagram: "4sta.flp",
      facebook: "https://www.facebook.com/chd.azura",
      discord: "_quarshy.flp",
    },
  },
];

const formatReleaseDate = (date) =>
  date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

class ReleaseSlider {
  constructor(releaseList) {
    this.releases = releaseList;
    this.currentIndex = 0;
    this.onChange = null;
    this.player = null;
    this.slidesContainer = $("#sls");
    this.backgroundsContainer = $("#bgs");
    this.progressFill = $("#fill");

    this.render();
    this.bindEvents();
    this.updateCountdowns();
  }

  setPlayer(player) {
    this.player = player;
  }

  render() {
    this.slidesContainer.innerHTML = this.releases
      .map((release, index) => {
        const slideClass = index === 0 ? "on" : "r";
        const releaseContent =
          release.status === "pre" && release.releaseDate
            ? `<div class="cdp" data-t="${+release.releaseDate}">
                ${Array.from({ length: 4 }, () => "<b>00</b>")
                  .join("<span>:</span>")}
              </div>`
            : release.status === "pre"
              ? '<div class="cdp now">Pre-save</div>'
              : '<div class="cdp now"><i class="dot"></i>Out now</div>';
        const buttonLabel = release.status === "pre" ? "Presave" : "Listen now";
        const releaseLabel =
          release.status === "pre" ? "Release date" : "Released";
        const releaseDateContent = release.releaseDate
          ? `<p class="rel">${releaseLabel}: ${formatReleaseDate(release.releaseDate)}</p>`
          : "";
        const linkAttributes = release.link
          ? ' target="_blank" rel="noopener"'
          : "";

        return `
          <article
            class="sl ${slideClass}"
            style="--art:${release.artwork};--ac:${release.accent}"
            aria-label="${release.title}"
          >
            <div class="art">
              ${release.hasArtwork ? "" : '<i class="mask"></i>'}
              <button class="pp" aria-label="Play track"></button>
            </div>
            <div class="info">
              <h2>${release.title}</h2>
              <p class="artist">${release.artist}</p>
              ${releaseContent}
              <div>
                <a class="btn mag" href="${release.link || "#"}"${linkAttributes}>
                  ${buttonLabel}
                </a>
              </div>
              ${releaseDateContent}
            </div>
          </article>
        `;
      })
      .join("");

    this.backgroundsContainer.innerHTML = this.releases
      .map(
        (release, index) => `
          <div
            class="bgl ${index === 0 ? "on" : ""}"
            style="--art:${release.artwork}"
          ></div>
        `,
      )
      .join("");

    this.slides = $$(".sl", this.slidesContainer);
    this.backgrounds = $$(".bgl", this.backgroundsContainer);
  }

  bindEvents() {
    $("#prev").addEventListener("click", () => {
      this.goTo(this.currentIndex - 1, -1);
    });
    $("#next").addEventListener("click", () => {
      this.goTo(this.currentIndex + 1, 1);
    });

    addEventListener("keydown", (event) => {
      if (event.target.tagName === "INPUT") {
        return;
      }

      if (event.key === "ArrowRight") {
        this.goTo(this.currentIndex + 1, 1);
      }

      if (event.key === "ArrowLeft") {
        this.goTo(this.currentIndex - 1, -1);
      }
    });

    let pointerStartX = null;
    $(".stage").addEventListener("pointerdown", (event) => {
      pointerStartX = event.clientX;
    });
    addEventListener("pointerup", (event) => {
      if (
        pointerStartX !== null &&
        Math.abs(event.clientX - pointerStartX) > 60
      ) {
        const direction = event.clientX < pointerStartX ? 1 : -1;
        this.goTo(this.currentIndex + direction, direction);
      }

      pointerStartX = null;
    });

    $("#q").addEventListener("input", (event) => {
      const query = event.target.value.trim().toLowerCase();

      if (!query) {
        return;
      }

      const releaseIndex = this.releases.findIndex((release) =>
        `${release.title} ${release.artist}`.toLowerCase().includes(query),
      );

      if (releaseIndex >= 0 && releaseIndex !== this.currentIndex) {
        scrollTo({ top: 0, behavior: "smooth" });
        this.goTo(releaseIndex, releaseIndex > this.currentIndex ? 1 : -1);
      }
    });
  }

  updateCountdowns() {
    let hasActiveCountdown = false;

    $$(".cdp[data-t]").forEach((countdown) => {
      const remainingSeconds = Math.max(
        0,
        Math.ceil((countdown.dataset.t - Date.now()) / 1000),
      );
      const values = [
        (remainingSeconds / 86400) | 0,
        ((remainingSeconds % 86400) / 3600) | 0,
        ((remainingSeconds % 3600) / 60) | 0,
        remainingSeconds % 60,
      ];

      values.forEach((value, index) => {
        countdown.children[index * 2].firstChild.nodeValue = String(
          value,
        ).padStart(2, "0");
      });

      if (remainingSeconds > 0) {
        hasActiveCountdown = true;
      }
    });

    if (hasActiveCountdown) {
      setTimeout(() => this.updateCountdowns(), 1000);
    }
  }

  goTo(index, direction, shouldAutoplay = false) {
    const nextIndex = (index + this.releases.length) % this.releases.length;

    if (nextIndex === this.currentIndex && !shouldAutoplay) {
      return;
    }

    const currentSlide = this.slides[this.currentIndex];
    const nextSlide = this.slides[nextIndex];

    nextSlide.style.transition = "none";
    nextSlide.className = `sl ${direction > 0 ? "r" : "l"}`;
    nextSlide.offsetWidth;
    nextSlide.style.transition = "";
    currentSlide.className = `sl ${direction > 0 ? "l" : "r"}`;
    nextSlide.className = "sl on";

    this.backgrounds[this.currentIndex].classList.remove("on");
    this.backgrounds[nextIndex].classList.add("on");
    this.currentIndex = nextIndex;
    this.onChange?.(nextIndex);

    if (shouldAutoplay || this.player.isPlaying) {
      this.player.play();
    } else {
      this.player.stop();
      this.progressFill.style.width = "0%";
    }
  }
}

class AudioPreviewPlayer {
  constructor(releaseList, slider) {
    this.releases = releaseList;
    this.slider = slider;
    this.audioContext = null;
    this.analyser = null;
    this.masterGain = null;
    this.timer = null;
    this.audioElement = null;
    this.audioReleaseIndex = null;
    this.isPlaying = false;
    this.isFullTrack = false;
    this.startTime = 0;
    this.isPlaylistPlayerOpen = false;
    this.volume = 0.45;
    this.progressFill = $("#fill");
    this.miniPlayer = $("#mini-player");
    this.miniArtwork = $("#mini-art");
    this.miniState = $("#mini-state");
    this.miniTitle = $("#mini-title");
    this.miniArtist = $("#mini-artist");
    this.miniToggle = $("#mini-toggle");
    this.miniSeek = $("#mini-seek");
    this.miniTime = $("#mini-time");
    this.miniVolume = $("#mini-volume");
    this.miniVolumeControl = $("#mini-volume-control");
    this.miniVolumeToggle = $("#mini-volume-toggle");
    this.miniVolumePopover = $("#mini-volume-popover");
    this.miniVolumePopoverTimer = null;
    this.isMiniPlayerDismissed = false;
    this.miniPlayerSliceTimer = null;
    this.miniReleaseIndex = null;
    this.previewStart = 10;
    this.previewEnd = 25;
    this.scale = [0, 3, 5, 7, 10, 12, 15];
    this.frequencies = new Uint8Array(64);

    $$(".pp").forEach((button) => {
      button.addEventListener("click", () => {
        if (this.isPlaying) {
          this.pause();
        } else {
          this.play();
        }
      });
    });

    this.miniToggle.addEventListener("click", () => {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    });
    $("#mini-prev").addEventListener("click", () => {
      this.slider.goTo(this.slider.currentIndex - 1, -1, this.isPlaying);
    });
    $("#mini-next").addEventListener("click", () => {
      this.slider.goTo(this.slider.currentIndex + 1, 1, this.isPlaying);
    });
    this.miniSeek.addEventListener("input", () => {
      if (this.audioElement && Number.isFinite(this.audioElement.duration)) {
        const currentTime = Number(this.miniSeek.value);
        this.audioElement.currentTime = currentTime;
        this.updateMiniProgress(currentTime, this.audioElement.duration);
      }
    });
    this.miniVolume.style.setProperty(
      "--volume-progress",
      `${this.volume * 100}%`,
    );
    this.miniVolume.addEventListener("input", () => {
      this.volume = Number(this.miniVolume.value);
      this.miniVolume.style.setProperty(
        "--volume-progress",
        `${this.volume * 100}%`,
      );

      if (this.masterGain) {
        this.masterGain.gain.setTargetAtTime(
          this.volume,
          this.audioContext.currentTime,
          0.03,
        );
      }
    });
    this.miniVolumeToggle.addEventListener("click", () => {
      this.setVolumePopover(
        !this.miniPlayer.classList.contains("volume-open"),
      );
    });
    document.addEventListener("click", (event) => {
      if (!this.miniVolumeControl.contains(event.target)) {
        this.setVolumePopover(false);
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !this.miniVolumePopover.hidden) {
        this.setVolumePopover(false);
        this.miniVolumeToggle.focus();
      }
    });
    $("#mini-close").addEventListener("click", () => {
      this.isMiniPlayerDismissed = true;
      this.setMiniPlayerVisibility(false);
    });
    addEventListener(
      "scroll",
      () => {
        if (window.scrollY < 120) {
          this.isMiniPlayerDismissed = false;
        }

        this.updateMiniPlayerVisibility();
      },
      { passive: true },
    );
    this.updateMiniPlayer();
    this.updateMiniPlayerVisibility();
    this.animateProgress();
  }

  updateMiniPlayerVisibility() {
    this.setMiniPlayerVisibility(
      (window.scrollY > 240 && !this.isMiniPlayerDismissed) ||
        this.isPlaylistPlayerOpen,
    );
  }

  setPlaylistPlayerOpen(isOpen) {
    this.isPlaylistPlayerOpen = isOpen;
    this.miniPlayer.classList.toggle("playlist-pinned", isOpen);

    if (isOpen) {
      this.isMiniPlayerDismissed = false;
    }

    this.updateMiniPlayerVisibility();
  }

  setMiniPlayerVisibility(isVisible) {
    isVisible = isVisible || this.isPlaylistPlayerOpen;
    const shouldAnimate =
      isVisible && !this.miniPlayer.classList.contains("visible");

    if (!isVisible) {
      this.setVolumePopover(false);
    }

    this.miniPlayer.classList.toggle("visible", isVisible);
    this.miniPlayer.setAttribute("aria-hidden", String(!isVisible));
    this.miniPlayer.inert = !isVisible;

    if (shouldAnimate) {
      this.animateMiniPlayerSlices();
    }
  }

  setVolumePopover(isOpen) {
    if (isOpen) {
      clearTimeout(this.miniVolumePopoverTimer);
      this.miniVolumePopoverTimer = null;
      clearTimeout(this.miniPlayerSliceTimer);
      this.miniPlayerSliceTimer = null;
      this.miniPlayer.classList.remove("slice-in");
      this.miniPlayer.classList.remove("volume-closing");
      this.miniVolumePopover.hidden = false;
      this.miniVolumePopover.inert = false;
      this.miniVolumePopover.setAttribute("aria-hidden", "false");
    } else if (this.miniPlayer.classList.contains("volume-open")) {
      this.miniPlayer.classList.add("volume-closing");
      this.miniVolumePopover.inert = true;
      this.miniVolumePopover.setAttribute("aria-hidden", "true");
      this.miniVolumePopoverTimer = setTimeout(() => {
        this.miniVolumePopover.hidden = true;
        this.miniPlayer.classList.remove("volume-closing");
        this.miniVolumePopoverTimer = null;
      }, 280);
    }

    this.miniPlayer.classList.toggle("volume-open", isOpen);
    this.miniVolumeToggle.setAttribute("aria-expanded", String(isOpen));
  }

  animateMiniPlayerSlices() {
    clearTimeout(this.miniPlayerSliceTimer);
    this.miniPlayer.classList.remove("slice-in");
    void this.miniPlayer.offsetWidth;
    this.miniPlayer.classList.add("slice-in");
    this.miniPlayerSliceTimer = setTimeout(() => {
      this.miniPlayer.classList.remove("slice-in");
      this.miniPlayerSliceTimer = null;
    }, 500);
  }

  playOscillator(type, frequency, start, duration, volume, endFrequency) {
    const oscillator = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);

    if (endFrequency) {
      oscillator.frequency.exponentialRampToValueAtTime(
        endFrequency,
        start + duration,
      );
    }

    gain.gain.setValueAtTime(volume, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
    oscillator.connect(gain).connect(this.masterGain);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  }

  playNote(release, noteNumber, start, stepDuration) {
    const step = noteNumber % 16;
    const bar = (noteNumber >> 4) & 3;
    const semitone = 2 ** (1 / 12);

    if (step % 4 === 0) {
      this.playOscillator("sine", 150, start, 0.25, 1, 40);
    }

    if (step % 4 === 2) {
      this.playOscillator("square", 7000, start, 0.03, 0.05);
    }

    if (step % 2 === 0) {
      const bassOffsets = [0, 0, 5, 3];
      const bassFrequency = (release.root / 2) * semitone ** bassOffsets[bar];
      this.playOscillator(
        "sawtooth",
        bassFrequency,
        start,
        stepDuration * 1.8,
        0.16,
      );
    }

    const scaleIndex = (noteNumber * 3 + bar * 2) % this.scale.length;
    const melodyFrequency =
      release.root * 2 * semitone ** this.scale[scaleIndex];
    this.playOscillator(
      "triangle",
      melodyFrequency,
      start,
      stepDuration * 1.6,
      0.1,
    );
  }

  updatePlayButtons() {
    $$(".pp").forEach((button, index) => {
      const isActive = this.isPlaying && index === this.slider.currentIndex;
      button.classList.toggle("on", isActive);
      button.setAttribute(
        "aria-label",
        isActive ? "Pause track" : "Play track",
      );
    });

    $$(".pl a[data-i]").forEach((link) => {
      const isActive =
        this.isPlaying && Number(link.dataset.i) === this.slider.currentIndex;
      $(".pg", link).classList.toggle("on", isActive);
    });

    this.updateMiniPlayer();
  }

  formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
      return "0:00";
    }

    const wholeSeconds = Math.floor(seconds);
    const minutes = Math.floor(wholeSeconds / 60);
    const remainingSeconds = String(wholeSeconds % 60).padStart(2, "0");

    return `${minutes}:${remainingSeconds}`;
  }

  updateMiniPlayer() {
    const release = this.releases[this.slider.currentIndex];
    const hasReleaseChanged =
      this.miniReleaseIndex !== null &&
      this.miniReleaseIndex !== this.slider.currentIndex;

    this.miniReleaseIndex = this.slider.currentIndex;

    this.miniTitle.textContent = release.title;
    this.miniArtist.textContent = release.artist;
    this.miniState.textContent = this.isPlaying ? "" : "";
    this.miniArtwork.style.backgroundImage = release.artwork;
    this.miniArtwork.classList.toggle("has-artwork", release.hasArtwork);
    this.miniToggle.classList.toggle("playing", this.isPlaying);
    this.miniToggle.setAttribute(
      "aria-label",
      this.isPlaying ? "Pause track" : "Play track",
    );

    const duration = this.audioElement?.duration;
    const currentTime = this.audioElement?.currentTime || 0;
    const hasDuration = Number.isFinite(duration);

    this.miniSeek.max = hasDuration ? String(duration) : "0";
    this.miniSeek.value = String(hasDuration ? currentTime : 0);
    this.miniSeek.disabled = !hasDuration;
    this.miniTime.textContent = `${this.formatTime(currentTime)} / ${this.formatTime(duration)}`;
    this.miniSeek.style.setProperty(
      "--seek-progress",
      hasDuration ? `${(currentTime / duration) * 100}%` : "0%",
    );

    if (hasReleaseChanged && this.miniPlayer.classList.contains("visible")) {
      this.animateMiniPlayerSlices();
    }
  }

  stop() {
    clearInterval(this.timer);

    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(
        0,
        this.audioContext.currentTime,
        0.05,
      );
    }

    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }

    this.audioReleaseIndex = null;
    this.isPlaying = false;
    this.updatePlayButtons();
  }

  pause() {
    if (!this.audioElement) {
      this.stop();
      return;
    }

    this.audioElement.pause();
    this.isPlaying = false;
    this.updatePlayButtons();
  }

  play() {
    if (
      this.audioElement &&
      this.audioElement.paused &&
      this.audioReleaseIndex === this.slider.currentIndex
    ) {
      this.isPlaying = true;
      this.audioContext.resume();
      this.masterGain.gain.setTargetAtTime(
        this.volume,
        this.audioContext.currentTime,
        0.05,
      );
      this.audioElement.play();
      this.updatePlayButtons();
      return;
    }

    this.stop();

    const release = this.releases[this.slider.currentIndex];
    this.isFullTrack = release.playFull === true;
    this.audioContext = this.audioContext || new AudioContext();
    this.audioContext.resume();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 128;
    this.masterGain = this.audioContext.createGain();
    this.masterGain.gain.value = this.volume;
    this.masterGain.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);
    this.isPlaying = true;

    if (release.src) {
      this.audioElement = new Audio();
      this.audioReleaseIndex = this.slider.currentIndex;
      this.audioElement.src = release.src;
      this.audioContext
        .createMediaElementSource(this.audioElement)
        .connect(this.masterGain);
      this.audioElement.preload = "auto";
      this.audioElement.onloadedmetadata = () => {
        if (!this.audioElement) {
          return;
        }

        if (!this.isFullTrack) {
          this.audioElement.currentTime = this.previewStart;
        }

        this.updateMiniPlayer();
      };
      this.audioElement.onended = () => {
        this.slider.goTo(this.slider.currentIndex + 1, 1, true);
      };
      this.audioElement.play();
    } else {
      const stepDuration = 60 / release.bpm / 4;
      let noteNumber = Math.round(this.previewStart / stepDuration / 16) * 16;
      let nextNoteTime = this.audioContext.currentTime + 0.05;
      this.startTime = nextNoteTime;

      this.timer = setInterval(() => {
        while (nextNoteTime < this.audioContext.currentTime + 0.25) {
          this.playNote(release, noteNumber++, nextNoteTime, stepDuration);
          nextNoteTime += stepDuration;
        }

        if (
          this.audioContext.currentTime - this.startTime >=
          this.previewEnd - this.previewStart
        ) {
          this.slider.goTo(this.slider.currentIndex + 1, 1, true);
        }
      }, 60);
    }

    this.updatePlayButtons();
  }

  animateProgress() {
    if (this.isPlaying && this.audioElement) {
      const startTime = this.isFullTrack ? 0 : this.previewStart;
      const endTime = this.isFullTrack
        ? this.audioElement.duration
        : this.previewEnd;
      const elapsedTime = this.audioElement.currentTime;

      if (!this.isFullTrack && elapsedTime >= this.previewEnd) {
        this.slider.goTo(this.slider.currentIndex + 1, 1, true);
      }

      if (Number.isFinite(endTime) && endTime > startTime) {
        const progress = Math.max(
          0,
          Math.min(
            100,
            ((elapsedTime - startTime) / (endTime - startTime)) * 100,
          ),
        );
        this.progressFill.style.width = `${progress}%`;
      }

      this.updateMiniProgress(elapsedTime, this.audioElement.duration);
    } else if (this.isPlaying) {
      const elapsedTime =
        this.audioContext.currentTime - this.startTime + this.previewStart;
      const progress = Math.max(
        0,
        Math.min(
          100,
          ((elapsedTime - this.previewStart) /
            (this.previewEnd - this.previewStart)) *
            100,
        ),
      );
      this.progressFill.style.width = `${progress}%`;
      this.updateMiniProgress(elapsedTime, this.previewEnd);
    }

    requestAnimationFrame(() => this.animateProgress());
  }

  updateMiniProgress(currentTime, duration) {
    const hasDuration = Number.isFinite(duration);

    this.miniTime.textContent = `${this.formatTime(currentTime)} / ${this.formatTime(duration)}`;
    this.miniSeek.max = hasDuration ? String(duration) : "0";
    this.miniSeek.value = String(hasDuration ? currentTime : 0);
    this.miniSeek.disabled = !hasDuration;
    this.miniSeek.style.setProperty(
      "--seek-progress",
      hasDuration ? `${(currentTime / duration) * 100}%` : "0%",
    );
  }
}

// Initial featured releases for "Discover our latest releases" (index into `releases`).
// The covers swap positions every 10s; featured tracks and artwork randomize every 30s.
const latestFeatured = [
  { index: 1, tags: "#House" },
  { index: 5, tags: "#EDM #FutureBounce" },
];
class LandingPage {
  constructor(releaseList, popularList, artistList, slider, player) {
    this.releases = releaseList;
    this.popularReleases = popularList;
    this.artists = artistList;
    this.slider = slider;
    this.player = player;
    this.artistItems = [];
    this.artistContainer = $("#ag");
    this.touchInput = matchMedia("(hover:none)").matches;
    this.socialIcons = this.getSocialIcons();
    this.vol1OpenTimer = null;
    this.vol2OpenTimer = null;

    this.render();
    this.bindEvents();
    this.initAllReleaseArtwork();
  }

  getSocialIcons() {
    const icons = {};

    $$(".soc a").forEach((link) => {
      const name = link.getAttribute("aria-label").toLowerCase();
      icons[name] = link.innerHTML;
    });

    return icons;
  }

  render() {
    const latestReleaseIndex = this.releases
      .map((release, index) => index)
      .filter((index) => this.releases[index].status === "out")
      .sort(
        (first, second) =>
          this.releases[second].releaseDate - this.releases[first].releaseDate,
      )[0];
    const latestRelease = this.releases[latestReleaseIndex];

    this.renderLatestReleases();
    this.renderArtists();
    this.latestReleaseIndex = latestReleaseIndex;
  }

  renderLatestReleases() {
    const items = latestFeatured.map((featured) => ({
      ...featured,
      release: this.releases[featured.index],
    }));
    this.latestFeaturedIndices = items.map(({ index }) => index);
    $("#lt").innerHTML =
      items
        .map(
          ({ release, index, tags }, order) => `
        <div class="lr-item">
          <h3>${order + 1}. ${release.title}</h3>
          <p class="lr-ar">${release.artist}</p>
          <a class="lr-stream" href="${release.link || "#"}" data-i="${index}">Stream ${release.title}</a>
          <div class="plat">
            <a href="#">SoundCloud</a><a href="#">Spotify</a><a href="#">Apple Music</a>
          </div>
          <p class="lr-tag">Tag: ${tags}</p>
        </div>`,
        )
        .join("") + '<a class="more" href="#">See more</a>';
    const star = "M0-14C2-4 4-2 14 0C4 2 2 4 0 14C-2 4-4 2-14 0C-4-2-2-4 0-14Z";
    const move = (id, begin) =>
      `<animateMotion dur="18s" begin="${begin}" repeatCount="indefinite"><mpath href="#lr-path-${id}"/></animateMotion>`;
    // Saturn-style ring: the two covers are the planet. The upper half of the ellipse is drawn
    // behind the covers (layer "b"), the lower half in front of them (layer "f"). Dots and stars
    // are clipped the same way, so they slip behind / in front of the covers as they orbit.
    const orbit = (id, clipY, clipH) => `
      <svg class="lr-orbit ${id === "b" ? "back" : "front"}" viewBox="0 0 900 620" aria-hidden="true" focusable="false">
        <defs>
          <path id="lr-path-${id}" d="M110 310A340 125 0 1 1 790 310A340 125 0 1 1 110 310"/>
          <path id="lr-star-${id}" d="${star}"/>
          <clipPath id="lr-clip-${id}"><rect x="-200" y="${clipY}" width="1300" height="${clipH}"/></clipPath>
        </defs>
        <g transform="rotate(-10 450 310)">
          <g clip-path="url(#lr-clip-${id})">
            <use href="#lr-path-${id}" class="lr-ring halo"/>
            <use href="#lr-path-${id}" class="lr-ring"/>
            <circle class="lr-dot" r="9">${move(id, "-0.9s")}</circle>
            <circle class="lr-dot" r="6">${move(id, "-0.45s")}</circle>
            <circle class="lr-dot" r="4">${move(id, "0s")}</circle>
            <circle class="lr-dot" r="3">${move(id, "-6s")}</circle>
            <circle class="lr-dot" r="2">${move(id, "-13.5s")}</circle>
            <g>${move(id, "-9s")}<use href="#lr-star-${id}" class="lr-star" transform="scale(1.15)"/></g>
            <g>${move(id, "-4.5s")}<use href="#lr-star-${id}" class="lr-star" transform="scale(.7)"/></g>
            <g>${move(id, "-13.5s")}<use href="#lr-star-${id}" class="lr-star" transform="scale(.45)"/></g>
          </g>
        </g>
      </svg>`;
    $("#lv").innerHTML = `
      ${orbit("b", -300, 610)}
      ${items
        .map(
          ({ release, index }, order) => `
        <div class="lr-art a${order + 1}" role="button" tabindex="0" data-i="${index}"
          aria-label="Play track: ${release.title}" style="--art:${release.artwork}"></div>`,
        )
        .join("")}
      ${orbit("f", 310, 600)}`;
    if (prefersReducedMotion) {
      $$(".lr-orbit").forEach((svg) => svg.pauseAnimations?.());
    } else {
      setInterval(() => $("#lv").classList.toggle("swap"), 10000);
      setInterval(() => this.randomizeLatestReleases(), 30000);
    }
  }

  randomizeLatestReleases() {
    const previousIndices = new Set(this.latestFeaturedIndices);
    const previousArtworks = new Set(
      this.latestFeaturedIndices.map((index) => this.releases[index].artwork),
    );
    const candidates = this.releases
      .map((release, index) => ({ release, index }))
      .filter(
        ({ release, index }) =>
          !previousIndices.has(index) && !previousArtworks.has(release.artwork),
      );

    for (let index = candidates.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [candidates[index], candidates[randomIndex]] = [
        candidates[randomIndex],
        candidates[index],
      ];
    }

    const selected = [];
    const selectedArtworks = new Set();
    for (const candidate of candidates) {
      if (selectedArtworks.has(candidate.release.artwork)) {
        continue;
      }

      selected.push(candidate);
      selectedArtworks.add(candidate.release.artwork);
      if (selected.length === this.latestFeaturedIndices.length) {
        break;
      }
    }

    if (selected.length !== this.latestFeaturedIndices.length) {
      throw new Error("Not enough unique releases and artwork to randomize.");
    }

    this.latestFeaturedIndices = selected.map(({ index }) => index);
    const list = $("#lt");
    const visual = $("#lv");
    list.classList.add("is-randomizing");
    visual.classList.add("is-randomizing");
    setTimeout(() => {
      selected.forEach(({ release, index }, order) => {
        const item = $$(".lr-item", list)[order];
        $("h3", item).textContent = `${order + 1}. ${release.title}`;
        $(".lr-ar", item).textContent = release.artist;
        const streamLink = $(".lr-stream", item);
        streamLink.href = release.link || "#";
        streamLink.dataset.i = String(index);
        streamLink.textContent = `Stream ${release.title}`;
        $(".lr-tag", item).textContent = "Tag: #LatestRelease";

        const art = $(`.lr-art.a${order + 1}`, visual);
        art.dataset.i = String(index);
        art.setAttribute("aria-label", `Play track: ${release.title}`);
        art.style.setProperty("--art", release.artwork);
      });

      requestAnimationFrame(() => {
        list.classList.remove("is-randomizing");
        visual.classList.remove("is-randomizing");
      });
    }, 260);
  }

  initAllReleaseArtwork() {
    const tiles = $$("#playlists .pcv.mo i");
    if (prefersReducedMotion || tiles.length === 0) {
      return;
    }

    const originalArtworks = tiles.map((tile) =>
      tile.style.getPropertyValue("--a"),
    );
    const artworkPool = [
      ...new Set(this.releases.map((release) => release.artwork)),
    ];
    const shuffleArtworks = (artworks) => {
      const shuffledArtworks = [...artworks];
      for (let index = shuffledArtworks.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledArtworks[index], shuffledArtworks[randomIndex]] = [
          shuffledArtworks[randomIndex],
          shuffledArtworks[index],
        ];
      }
      return shuffledArtworks;
    };

    let currentArtworks = [...originalArtworks];
    let artworkBag = shuffleArtworks(artworkPool);
    let changesSinceReset = 0;
    const applyArtworks = (artworks) => {
      tiles.forEach((tile, index) => {
        const artwork = artworks[index];
        if (artwork === currentArtworks[index]) {
          return;
        }

        setTimeout(() => {
          tile.style.setProperty("--next-a", artwork);
          tile.classList.add("is-fading");
          setTimeout(() => {
            tile.style.setProperty("--a", artwork);
            tile.style.removeProperty("--next-a");
            tile.classList.remove("is-fading");
          }, 500);
        }, index * 600);
      });
    };
    const randomizeArtworks = () => {
      const nextArtworks = [];
      while (nextArtworks.length < tiles.length) {
        if (artworkBag.length === 0) {
          artworkBag = shuffleArtworks(
            artworkPool.filter((artwork) => !nextArtworks.includes(artwork)),
          );
        }

        const randomIndex = Math.floor(Math.random() * artworkBag.length);
        nextArtworks.push(artworkBag.splice(randomIndex, 1)[0]);
      }

      const remainingArtworks = [...nextArtworks];
      const arrangedArtworks = new Array(tiles.length).fill(null);
      currentArtworks.forEach((artwork, index) => {
        const matchingIndex = remainingArtworks.indexOf(artwork);
        if (matchingIndex !== -1) {
          arrangedArtworks[index] = artwork;
          remainingArtworks.splice(matchingIndex, 1);
        }
      });
      arrangedArtworks.forEach((artwork, index) => {
        if (artwork === null) {
          arrangedArtworks[index] = remainingArtworks.shift();
        }
      });

      applyArtworks(arrangedArtworks);
      currentArtworks = arrangedArtworks;
    };

    randomizeArtworks();
    setInterval(() => {
      changesSinceReset += 1;
      if (changesSinceReset === 3) {
        applyArtworks(originalArtworks);
        currentArtworks = [...originalArtworks];
        changesSinceReset = 0;
        return;
      }

      randomizeArtworks();
    }, 10000);
  }

  renderPopularReleases() {
    $("#pl").innerHTML = this.popularReleases
      .map(
        (release, index) => `
          <li>
            <a
              href="${release.link || "#"}"
              ${release.releaseIndex != null ? `data-i="${release.releaseIndex}"` : ""}
            >
              <span class="n">${String(index + 1).padStart(2, "0")}</span>
              <span class="t" style="--art:${release.artwork}"></span>
              <span>
                <b>${release.title}</b>
                <small>
                  ${release.artist}${release.plays ? ` · ${release.plays} plays` : ""}
                </small>
              </span>
              <span class="pg"></span>
            </a>
          </li>
        `,
      )
      .join("");
  }

  renderArtists() {
    const card = (artist, index, isCopy) => `
      <button class="ac" type="button" data-i="${index}"${
        isCopy
          ? ' tabindex="-1" aria-hidden="true"'
          : ` aria-label="${artist.name}: show info"`
      }>
        <span class="ac-ring"><span class="ac-face" style="--art:${artist.artwork}">${
          artist.image
            ? `<img src="${artist.image}" alt="${isCopy ? "" : artist.name}" loading="lazy" draggable="false">`
            : ""
        }</span></span>
        <b>${artist.name}</b>
      </button>`;
    const set = (isCopy) =>
      `<div class="ar-set">${this.artists.map((artist, index) => card(artist, index, isCopy)).join("")}</div>`;
    // 3 identical sets so the right-to-left loop never shows a gap
    this.artistContainer.innerHTML = `<div class="ar-track">${set(false)}${set(true)}${set(true)}</div>`;
    this.artistItems = $$(".ac", this.artistContainer);
    this.artistHost = $("#artists");
    this.artistBox = document.createElement("div");
    this.artistBox.className = "ab";
    this.artistBox.setAttribute("role", "dialog");
    this.artistBox.setAttribute("aria-label", "Artist info");
    this.artistHost.appendChild(this.artistBox);
  }
  renderSocialLinks(socialLinks = {}) {
    return Object.entries(socialLinks)
      .filter(([name, url]) => url && this.socialIcons[name])
      .map(
        ([name, url]) => `
          <a
            href="${url}"
            target="_blank"
            rel="noopener"
            aria-label="${name}"
          >${this.socialIcons[name]}</a>
        `,
      )
      .join("");
  }

  bindEvents() {
    this.artistItems.forEach((artistItem) => {
      artistItem.addEventListener("click", (event) => {
        event.stopPropagation();
        this.selectArtist(
          artistItem.classList.contains("open") ? null : artistItem,
        );
      });
    });
    document.addEventListener("click", (event) => {
      if (!this.artistBox.contains(event.target)) {
        this.selectArtist(null);
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && this.artistBox.classList.contains("show")) {
        const selectedArtist = this.artistItems.find((artistItem) =>
          artistItem.classList.contains("open"),
        );
        this.selectArtist(null);
        selectedArtist?.focus();
      }
    });
    addEventListener("resize", () => this.selectArtist(null));
    $("#lv").addEventListener("click", (event) => {
      const art = event.target.closest(".lr-art");
      if (art) {
        this.playReleasePreview(Number(art.dataset.i));
      }
    });
    $("#lv").addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const art = event.target.closest(".lr-art");
      if (art) {
        event.preventDefault();
        this.playReleasePreview(Number(art.dataset.i));
      }
    });
    $("#lt").addEventListener("click", (event) => {
      const link = event.target.closest(".lr-stream");
      if (link?.getAttribute("href") === "#") {
        event.preventDefault();
        this.playReleasePreview(Number(link.dataset.i));
      }
    });
    $$(".pl a[data-i]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        this.playReleasePreview(+link.dataset.i);
      });
    });

    this.vol1Card = $('.pc[data-playlist="vol1"]');
    this.vol1Overlay = $("#vol1-player");
    this.vol1Scene = $("#vol1-scene");
    this.vol1CloseButton = $("#vol1-close");
    this.positionCollectionTracks(this.vol1Scene, [0, 12, 1, 2, 3, 4, 5, 11]);

    this.vol1Card.addEventListener("click", (event) => {
      event.preventDefault();
      this.openVol1Player();
    });
    this.vol1CloseButton.addEventListener("click", () => {
      this.closeVol1Player();
    });

    this.vol2Card = $('.pc[data-playlist="vol2"]');
    this.vol2Overlay = $("#vol2-player");
    this.vol2Scene = $("#vol2-scene");
    this.vol2CloseButton = $("#vol2-close");
    this.positionCollectionTracks(this.vol2Scene, [1, 3, 2, 6, 9, 8, 10, 7]);
    this.slider.onChange = () => this.updateCollectionTrackStates();
    this.updateCollectionTrackStates();

    this.vol2Card.addEventListener("click", (event) => {
      event.preventDefault();
      this.openVol2Player();
    });
    this.vol2CloseButton.addEventListener("click", () => {
      this.closeVol2Player();
    });
    document.addEventListener("keydown", (event) => {
      if (this.vol1Overlay.classList.contains("is-visible")) {
        this.trapPlaylistFocus(event, this.vol1Scene, this.vol1CloseButton);
        return;
      }

      if (!this.vol2Overlay.classList.contains("is-visible")) {
        return;
      }

      this.trapPlaylistFocus(event, this.vol2Scene, this.vol2CloseButton);
    });
  }

  positionCollectionTracks(scene, releaseIndices) {
    const tracks = $$(".vol2-track", scene);
    const radius = 58;
    const span = 44;

    tracks.forEach((track, index) => {
      const releaseIndex = releaseIndices[index];
      const release = this.releases[releaseIndex];
      const y =
        tracks.length === 1
          ? 0
          : -span + (2 * span * index) / (tracks.length - 1);
      track.dataset.releaseIndex = String(releaseIndex);
      track.setAttribute("role", "button");
      track.setAttribute("tabindex", "0");
      track.setAttribute("aria-label", `Play ${release.title}`);
      track.addEventListener("click", () => {
        this.playReleasePreview(releaseIndex);
      });
      track.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          this.playReleasePreview(releaseIndex);
        }
      });
      track.style.setProperty(
        "--track-left",
        `${100 + Math.sqrt(radius ** 2 - y ** 2)}%`,
      );
      track.style.setProperty("--track-top", `${50 + y}%`);
      track.style.setProperty("--i", index);
    });
  }

  updateCollectionTrackStates() {
    [this.vol1Scene, this.vol2Scene].forEach((scene) => {
      $$(".vol2-track", scene).forEach((track) => {
        const isCurrent =
          Number(track.dataset.releaseIndex) === this.slider.currentIndex;
        track.classList.toggle("is-current", isCurrent);
        track.setAttribute("aria-current", String(isCurrent));
      });
    });
  }

  trapPlaylistFocus(event, scene, closeButton) {
    if (event.key !== "Tab") {
      return;
    }

    const focusable = [
      closeButton,
      ...$$(".vol2-track[role='button']", scene),
      ...$$(
        "#mini-player button:not([disabled]), #mini-player input:not([disabled])",
      ),
    ].filter((element) => element.getClientRects().length > 0);
    const currentIndex = focusable.indexOf(document.activeElement);
    const nextIndex = event.shiftKey
      ? currentIndex <= 0
        ? focusable.length - 1
        : currentIndex - 1
      : currentIndex < 0 || currentIndex === focusable.length - 1
        ? 0
        : currentIndex + 1;

    event.preventDefault();
    focusable[nextIndex].focus();
  }

  openVol1Player() {
    this.vol1Overlay.classList.add("is-visible");
    this.vol1Overlay.setAttribute("aria-hidden", "false");
    this.vol1Card.setAttribute("aria-expanded", "true");
    document.body.classList.add("playlist-player-open");
    this.player.setPlaylistPlayerOpen(true);
    this.vol1Scene.classList.remove("is-open");
    clearTimeout(this.vol1OpenTimer);
    this.vol1OpenTimer = setTimeout(
      () => {
        if (this.vol1Overlay.classList.contains("is-visible")) {
          this.vol1Scene.classList.add("is-open");
        }
      },
      prefersReducedMotion ? 0 : 420,
    );
    this.vol1CloseButton.focus({ preventScroll: true });
    this.playReleasePreview(0);
  }

  closeVol1Player() {
    clearTimeout(this.vol1OpenTimer);
    this.vol1Scene.classList.remove("is-open");
    this.vol1Overlay.classList.remove("is-visible");
    this.vol1Overlay.setAttribute("aria-hidden", "true");
    this.vol1Card.setAttribute("aria-expanded", "false");
    document.body.classList.remove("playlist-player-open");
    this.player.setPlaylistPlayerOpen(false);
    this.vol1Card.focus({ preventScroll: true });
  }

  openVol2Player() {
    this.vol2Overlay.classList.add("is-visible");
    this.vol2Overlay.setAttribute("aria-hidden", "false");
    this.vol2Card.setAttribute("aria-expanded", "true");
    document.body.classList.add("playlist-player-open");
    this.player.setPlaylistPlayerOpen(true);
    this.vol2Scene.classList.remove("is-open");
    clearTimeout(this.vol2OpenTimer);
    this.vol2OpenTimer = setTimeout(
      () => {
        if (this.vol2Overlay.classList.contains("is-visible")) {
          this.vol2Scene.classList.add("is-open");
        }
      },
      prefersReducedMotion ? 0 : 420,
    );
    this.vol2CloseButton.focus({ preventScroll: true });
    this.playReleasePreview(1);
  }

  closeVol2Player() {
    clearTimeout(this.vol2OpenTimer);
    this.vol2Scene.classList.remove("is-open");
    this.vol2Overlay.classList.remove("is-visible");
    this.vol2Overlay.setAttribute("aria-hidden", "true");
    this.vol2Card.setAttribute("aria-expanded", "false");
    document.body.classList.remove("playlist-player-open");
    this.player.setPlaylistPlayerOpen(false);
    this.vol2Card.focus({ preventScroll: true });
  }

  selectArtist(selectedItem) {
    const selectedIndex = selectedItem ? Number(selectedItem.dataset.i) : -1;
    const isSelected = selectedIndex >= 0;
    this.artistItems.forEach((artistItem) => {
      const isSame = Number(artistItem.dataset.i) === selectedIndex;
      artistItem.classList.toggle("open", artistItem === selectedItem);
      artistItem.classList.toggle("after", isSelected && !isSame);
    });
    this.artistContainer.classList.toggle("hov", isSelected);
    $(".lp").classList.toggle("dim", isSelected);
    document.body.classList.toggle("dim", isSelected);
    if (isSelected) {
      this.showArtistBox(this.artists[selectedIndex], selectedItem);
    } else {
      this.artistBox.classList.remove("show");
    }
  }
  showArtistBox(artist, item) {
    const box = this.artistBox;
    box.innerHTML = `
      <button class="ab-x" type="button" aria-label="Close">×</button>
      <div class="ab-h">
        <span class="ab-av" style="--art:${artist.artwork}">${
          artist.image ? `<img src="${artist.image}" alt="">` : ""
        }</span>
        <div>
          <h3>${artist.name}</h3>
          <p>${artist.genre} · ${artist.releaseCount} ${artist.releaseCount === 1 ? "release" : "releases"}</p>
        </div>
      </div>
      <div class="as">${this.renderSocialLinks(artist.socialLinks)}</div>
    `;
    $(".ab-x", box).addEventListener("click", () => this.selectArtist(null));
    const hostRect = this.artistHost.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const width = box.offsetWidth;
    const centre = itemRect.left - hostRect.left + itemRect.width / 2;
    const left = Math.max(
      8,
      Math.min(hostRect.width - width - 8, centre - width / 2),
    );
    box.style.left = `${left}px`;
    box.style.top = `${itemRect.bottom - hostRect.top + 16}px`;
    box.style.setProperty("--ax", `${centre - left}px`);
    box.classList.add("show");
  }
  playReleasePreview(index) {
    if (index === this.slider.currentIndex) {
      this.player.play();
    } else {
      this.slider.goTo(index, index > this.slider.currentIndex ? 1 : -1, true);
    }
  }
}

// Intro animation sequence helpers and class
const introTiming = {
  unfold: 500, // biểu tượng trượt sang trái, chữ mở ra về bên phải
  hold: 300, // giữ logo hoàn chỉnh giữa màn hình trước khi bay lên header
  dock: 700, // logo bay tới header trong lúc nền đen trượt lên
  loadTimeout: 6000, // không chờ sự kiện window.load quá thời gian này
  reducedHold: 400, // giảm chuyển động: hiện logo tĩnh rồi vào trang
  watchdog: 15000, // giới hạn dự phòng để intro không bị kẹt trên màn hình
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const easeInOutQuart = (t) =>
  t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2;

class IntroSequence {
  constructor(intro, onDone) {
    this.intro = intro;
    this.bg = $(".intro-bg", intro);
    this.symbol = $(".intro-sym", intro);
    this.lockup = $(".intro-lockup", intro);
    this.text = $(".lk-txt", intro);
    this.headerLogo = $("#nav .logo");
    this.onDone = onDone;
    this.finished = false;
  }

  async start() {
    const watchdog = setTimeout(() => this.finish(), introTiming.watchdog);

    try {
      if (prefersReducedMotion) {
        await this.playReduced();
      } else {
        await this.playFull();
      }
    } catch (error) {
      console.error(error);
    }

    clearTimeout(watchdog);
    this.finish();
  }

  // Works whether load has already fired or not, and never waits forever.
  waitForLoad() {
    return new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }

      addEventListener("load", resolve, { once: true });
      setTimeout(resolve, introTiming.loadTimeout);
    });
  }

  // Resolves once the existing spin/scale/fade-in of the symbol has completed.
  symbolReady() {
    if (typeof this.symbol.getAnimations !== "function") {
      return wait(1400);
    }

    return Promise.all(
      this.symbol
        .getAnimations()
        .map((animation) => animation.finished.catch(() => {})),
    );
  }

  async playFull() {
    const loaded = this.waitForLoad();

    await this.symbolReady();
    await this.unfold();
    await Promise.all([loaded, wait(introTiming.hold)]);
    await this.dock();
  }

  async playReduced() {
    this.intro.classList.add("static");
    await Promise.all([this.waitForLoad(), wait(introTiming.reducedHold)]);
  }

  symbolCentre() {
    const value = getComputedStyle(this.intro).getPropertyValue("--lk-sym-c");
    return parseFloat(value) || 0.5;
  }

  async unfold() {
    const { lockup, text, symbol } = this;
    // start with the symbol alone on the screen centre, then centre the whole lockup
    const shift = lockup.offsetWidth * (0.5 - this.symbolCentre());
    const options = {
      duration: introTiming.unfold,
      easing: "cubic-bezier(0.7, 0, 0.2, 1)",
      fill: "both",
    };
    const move = lockup.animate(
      [{ transform: `translateX(${shift}px)` }, { transform: "translateX(0)" }],
      options,
    );
    const slide = text.animate(
      [{ transform: "translateX(-101%)" }, { transform: "translateX(0)" }],
      options,
    );

    // swap the spinning symbol for the identical symbol inside the lockup
    lockup.style.opacity = "1";
    symbol.style.visibility = "hidden";

    await Promise.all([move.finished, slide.finished]);

    lockup.style.transform = "none";
    text.style.transform = "none";
    move.cancel();
    slide.cancel();
  }

  // Live rect of the header logo (null when it is not on screen, e.g. hidden on very small phones).
  dockTarget() {
    if (!this.headerLogo) {
      return null;
    }

    const rect = this.headerLogo.getBoundingClientRect();
    const visible =
      rect.width > 1 &&
      rect.height > 1 &&
      rect.bottom > 0 &&
      rect.top < innerHeight;

    return visible ? rect : null;
  }

  dock() {
    return new Promise((resolve) => {
      const { lockup, bg } = this;
      const startTime = performance.now();

      document.body.classList.add("go");

      const frame = (now) => {
        if (this.finished) {
          resolve();
          return;
        }

        const progress = Math.min(1, (now - startTime) / introTiming.dock);
        const eased = easeInOutQuart(progress);
        const target = this.dockTarget();

        bg.style.transform = `translateY(${-100 * eased}%)`;

        if (target) {
          // recomputed every frame so a resize mid-flight still lands exactly on the header logo
          const scale = 1 + (target.width / lockup.offsetWidth - 1) * eased;
          const x = (target.left - lockup.offsetLeft) * eased;
          const y = (target.top - lockup.offsetTop) * eased;

          lockup.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        } else {
          lockup.style.transform = `translateY(${-45 * eased}vh) scale(${1 - 0.4 * eased})`;
          lockup.style.opacity = String(1 - eased);
        }

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          resolve();
        }
      };

      requestAnimationFrame(frame);
    });
  }

  finish() {
    if (this.finished) {
      return;
    }

    this.finished = true;
    document.body.classList.add("go", "intro-done");
    this.intro.classList.add("done");
    this.onDone?.();
  }
}

class PageEffects {
  constructor() {
    this.nav = $("#nav");
    this.glow = $("#glow");
    this.lastScrollY = 0;
    this.glowX = innerWidth / 2;
    this.glowY = 300;
    this.targetGlowX = this.glowX;
    this.targetGlowY = this.glowY;
  }

  start() {
    this.bindMenu();
    this.bindIntro();
    this.bindRevealAnimations();
    this.bindNavigationEffects();
    this.bindGlow();
    this.bindMagneticButtons();
  }

  toggleMenu(shouldOpen) {
    const isOpen =
      typeof shouldOpen === "boolean"
        ? shouldOpen
        : !document.body.classList.contains("menu");

    document.body.classList.toggle("menu", isOpen);
    $("#bm").setAttribute("aria-expanded", String(isOpen));
  }

  bindMenu() {
    $("#bm").addEventListener("click", () => this.toggleMenu());
    $("#scrim").addEventListener("click", () => this.toggleMenu(false));
    $$("#menu a").forEach((link) => {
      link.addEventListener("click", () => this.toggleMenu(false));
    });
    addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.toggleMenu(false);
      }
    });
  }

  bindIntro() {
    const intro = $("#intro");

    if (!intro) {
      document.body.classList.add("go", "intro-done");
      return;
    }

    new IntroSequence(intro).start();
  }

  bindRevealAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    $$("[data-r]").forEach((element) => observer.observe(element));
  }

  bindNavigationEffects() {
    addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;

        this.nav.classList.toggle("s", scrollY > 40);
        this.nav.classList.toggle(
          "h",
          scrollY > this.lastScrollY && scrollY > 300,
        );
        this.lastScrollY = scrollY;
      },
      { passive: true },
    );
  }

  bindGlow() {
    addEventListener("pointermove", (event) => {
      this.targetGlowX = event.clientX;
      this.targetGlowY = event.clientY;
    });

    const animateGlow = () => {
      this.glowX += (this.targetGlowX - this.glowX) * 0.08;
      this.glowY += (this.targetGlowY - this.glowY) * 0.08;
      this.glow.style.transform = `translate(${this.glowX}px,${this.glowY}px)`;
      requestAnimationFrame(animateGlow);
    };

    animateGlow();
  }

  bindMagneticButtons() {
    if (prefersReducedMotion) {
      return;
    }

    $$(".mag").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const bounds = button.getBoundingClientRect();
        const offsetX = (event.clientX - bounds.left - bounds.width / 2) * 0.25;
        const offsetY = (event.clientY - bounds.top - bounds.height / 2) * 0.35;

        button.style.transform = `translate(${offsetX}px,${offsetY}px)`;
      });
      button.addEventListener("pointerleave", () => {
        button.style.transform = "";
      });
    });
  }
}

const slider = new ReleaseSlider(releases);
const player = new AudioPreviewPlayer(releases, slider);
slider.setPlayer(player);
new LandingPage(releases, popularReleases, artists, slider, player);
new PageEffects().start();

/* ===== PSD redesign additions (additive only) ===== */
$$(".lang button").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".lang button").forEach((other) => {
      const isActive = other === button;
      other.classList.toggle("on", isActive);
      other.setAttribute("aria-pressed", String(isActive));
    });
  });
});
