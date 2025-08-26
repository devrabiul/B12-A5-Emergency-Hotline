document.addEventListener('DOMContentLoaded', function () {

    const defaultLoveCount = 0;
    const appLoveCount = document.getElementById('app-love-count');
    if (appLoveCount) {
        appLoveCount.innerText = defaultLoveCount;
    }

    let heartIconContainers = document.getElementsByClassName('heart-icon-container');

    Array.from(heartIconContainers).forEach(function (heartIcon) {
        heartIcon.addEventListener('click', function () {
            let current = parseInt(appLoveCount.innerText, 10) || 0;
            appLoveCount.innerText = current + 1;
        });
    });

});

const defaultCopyCount = 0;
const appCopyCount = document.getElementById('app-copy-count');
if (appCopyCount) {
    appCopyCount.innerText = defaultCopyCount;
}

function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied to clipboard: " + text);
            if (appCopyCount) {
                let current = parseInt(appCopyCount.innerText, 10) || 0;
                appCopyCount.innerText = current + 1;
            }
        })
        .catch(err => {
            alert("Failed to copy: " + text);
        });
}

function generateHistory(serviceName, number) {

    
}
