function observeGameEnter(mutation) {
    const canvas = document.getElementById("gt-canvas");

    if (canvas) {
        canvas.image = chrome.runtime.getURL("sweter.png");
        
    }
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === "childList") {
            observeGameEnter(mutation);
        }
    }
});


export function beginObserving() {
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}