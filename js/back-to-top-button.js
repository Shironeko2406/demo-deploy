document.addEventListener("DOMContentLoaded", function () {
    var backButton = document.querySelector('.backToTop');

    window.addEventListener('scroll', function () {
        var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;

        if (scrollPercentage > 6.25) { // Khoảng 6.25% tương ứng với 1/16 trang
            backButton.classList.add('cd-top--is-visible');
        } else {
            backButton.classList.remove('cd-top--is-visible');
        }
    });

    backButton.addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollToTop();
    });

    function smoothScrollToTop() {
        var currentPosition = window.scrollY;
        var targetPosition = 0;
        var distance = targetPosition - currentPosition;
        var duration = 1000; // Điều chỉnh thời gian cuộn trang

        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;

            var progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration));

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
        // Hàm deu dần cubic - tăng tốc độ đến giữa, sau đó giảm tốc độ
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
});