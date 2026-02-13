const envelopeScreenEl = document.querySelector("#envelopeScreen");
const letter = document.querySelector(".letter-window");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "../resources/cat-heart.gif",
  "../resources/rusure.gif",
  "../resources/3shocked-1.gif",
  "../resources/4.crying.gif",
  "../resources/5.crying.gif",
  "../resources/idc.gif"
];
   
let afterYes = false;
        let yesScale = 1;

        const emojisBefore = ["💖", "✨", "💝", "🌸", "💌"];
        const emojisAfter = ["🥳", "🎉", "💗", "🧸", "😻"];

        function createRandomEmoji() {
            const emoji = document.createElement("div");
            emoji.className = "emoji";

            emoji.textContent = afterYes
                ? emojisAfter[Math.floor(Math.random() * emojisAfter.length)]
                : emojisBefore[Math.floor(Math.random() * emojisBefore.length)];

            emoji.style.left = `${Math.random() * window.innerWidth}px`;
            emoji.style.top = `${Math.random() * window.innerHeight}px`;

            emoji.style.animationDuration = `${5 + Math.random() * 5}s`;

            document.body.appendChild(emoji);

            setTimeout(() => emoji.remove(), 10000);
        }

        // Spawn emojis every 0.8s
        setInterval(createRandomEmoji, 800);
// Click Envelope to open letter
        envelopeScreenEl.addEventListener("click", () => {
            envelopeScreenEl.style.display = "none";
            letter.style.display = "flex";

            setTimeout(() => {
                document.querySelector(".letter-window").classList.add("open");
            }, 50);
        });


// to load the gifs faster
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// changes for when NO button is clicked
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "./resources/rusure.gif";
    text.innerHTML = '<span class="option-text">သေချာလို့လား 🤨</span>';
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "./resources/3shocked-1.gif";// gif credit: https://tenor.com/view/tkthao219-peach-goma-gif-25008901
    text.innerHTML = '<span class="option-text">ထပ်ရွေးပြန်ပြီ 🥹</span>';
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "./resources/4.crying.gif";// gif credit: https://tenor.com/view/cat-kitty-gif-25340141
    text.innerHTML = '<span class="option-text">ငိုလိုက်တော့မှာနော်..ဗြဲ 😭</span>';
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "./resources/5.crying.gif";// gif credit: https://tenor.com/view/cat-gif-10173437195524493032
    text.innerHTML = '<span class="option-text">တစ်ခါလောက်လေးပဲလေ..နော် ကိုကြီး 🥺😘</span>';
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  const textBox = document.querySelector(".text-one");
  const yesNoBox = document.querySelector(".yes-no");
  vid.style.display = "block";
  gif.src = "./resources/idc.gif";// gif credit: https://tenor.com/view/peach-cat-kiss-animated-love-mwah-gif-25743978
  text.innerHTML = '<span class="option-text final-option-text">သိသားပဲ ကိုကြီး<br> ကျနော့်ဆီက ရုန်းမထွက်နိုင်ဘူးဆိုတာ 😝</span>';
  if (textBox) {
    textBox.classList.add("final-text-box");
  }
  yes.innerHTML = '<a href="https://t.me/SlT_TlS/" target="_blank">Message me</a>';// inside the " " put your social media profile link
  yes.style.height = "90%";
  yes.style.width = "96%";
  if (yesNoBox) {
    yesNoBox.style.alignItems = "flex-end";
    yesNoBox.style.paddingBottom = "12px";
  }
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});