window.onYouTubeIframeAPIReady = function() {
    const videosSlider = document.querySelectorAll(".video__slider-item");
    videosSlider.forEach((videoSlider)=>{
        player = new YT.Player(videoSlider.id, {
            videoId: videoSlider.dataset.videoId
        });
        console.log(videoSlider.id);
    });
};

//# sourceMappingURL=index.5d7feb4d.js.map
