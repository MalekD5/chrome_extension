
document.body.style.backgroundColor = "#000";

const logos = document.querySelectorAll(".logo");

if (logos) {
  let i = 0;
  for (const logo of logos) {
    logo.innerHTML = "";
    logo.style.display = "flex";
    logo.style.justifyContent = "center";
    logo.style.alignItems = "center";
    const element = document.createElement("img");

    element.src = chrome.runtime.getURL(i === 0 ? "assets/sweter.png" : "assets/SWETERPNG.png");
    element.style.width = i === 0 ? "10rem" : "40rem";

    logo.appendChild(element);
    i++;
  }
}

let displayLogo = false;


const splash = document.getElementById("gt-splash");
if (splash) {
  splash.style.background = "#000";
}

const pause = document.getElementById("gt-pause");
if (pause) {
  console.log("adding something")
  pause.addEventListener("mousedown", () => {
    displayLogo = true;
  }, false);
}

function observeGameEnter() {
    if (displayLogo) {
      setTimeout(() => {
        const element = document.createElement("img");

    element.src = chrome.runtime.getURL("assets/SWETERPNG.png");
    element.style.width = "15rem";
    element.style.position = "relative";

    const div = document.createElement("div");

    div.style.position = "absolute";
    div.style.top = "5%";
    div.style.left = "3%";
    div.style.width = "fit-content";
    div.style.height = "100%";
    div.style.zIndex = "1000000";

    div.appendChild(element);

    document.body.appendChild(div);
      }, 100);
      displayLogo = false;
    }
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      console.log("Mutation detected")
        if (mutation.type === "childList" || mutation.type === "attributes") {
            observeGameEnter(mutation);
        }
    }
});


observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
    });