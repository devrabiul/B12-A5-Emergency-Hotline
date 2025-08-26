document.addEventListener('DOMContentLoaded', function () {

    const defaultCount = 100;
    const appCopyCount = document.getElementById('app-copy-count');
    if (appCopyCount) {
        appCopyCount.innerText = defaultCount;
    }

});