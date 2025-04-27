document.addEventListener('DOMContentLoaded', function() {
    const missionButton = document.getElementById('missionButton');

    if (missionButton) {
        missionButton.addEventListener('click', function() {
            alert('Benvenuto nella missione ZorgoX! Presto riceverai ulteriori istruzioni.');
        });
    }
});
