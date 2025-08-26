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

let totalCoin = 100;
const appCoinCount = document.getElementById('app-coin-count');

function generateHistory(serviceName, number) {

    if (totalCoin >= 20) {
        
        alert('Calling: ' + serviceName + ' - ' + number);

        totalCoin -= 20;
     
        if (appCoinCount) {
            appCoinCount.innerText = totalCoin;
        }
        
        let time = new Date().toLocaleTimeString();
        let container = document.getElementById('history-card-container');
        if (container) {
            let html = `<div class="history-card-item">
                        <div class="content">
                            <h6>${serviceName}</h6>
                            <p>${number}</p>
                        </div>
                        <div class="time">${time}</div>
                    </div>`;

            container.innerHTML += html;
        }

    } else {
        alert('Low amount of coin');
        return 0;
    }
}

function clearHistory() {
    let container = document.getElementById('history-card-container');
    if (container) {
        container.innerHTML = '';
    }
}