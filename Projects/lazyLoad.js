const imgLazyLoad = (images) => {
    let options = {
        threshold: 0.2
    };
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src;
                imgObserver.unobserve(img);
            }
        });
    }, options);

    images.forEach((v) => {
        imageObserver.observe(v);
    });
};

const customImgLazyLoad = (function () {
    var lazyloadThrottleTimeout;
    return function lazyload(images) {
       console.warn("Your browser do not have IntersectionObserver, executing custom lazyload");
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            images.forEach(function (img) {
                if (img.offsetTop < window.innerHeight + scrollTop) {
                    img.src = img.dataset.src
                    img.classList.remove("lazy");
                }
            });
            if (images.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 200);
    }
})();


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('img[data-src]');
    if ("IntersectionObserver" in window) {
        imgLazyLoad(images);
    }else {
        customImgLazyLoad(images);
        document.addEventListener("scroll", () => customImgLazyLoad(images));
    }
});
