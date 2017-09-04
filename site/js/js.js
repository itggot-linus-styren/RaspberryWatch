window.onload = function(_) {
    var scrollView = document.querySelector(".scrollView");
    window.addEventListener('scroll', function(e) {
        if (window.scrollY > 50) {
            scrollView.classList.add("show");
        } else {
            scrollView.classList.remove("show");
        }
    });

    clickHandler = function(e) {
        var element = e.target;

        while (element) {
            if (element.nodeName === "BUTTON" && /scrollButton/.test(element.className)) {
				// chrome doesn't support scrollIntoViewOptions so we use a jquery plugin
				scrollintoviewOptions = {duration: "slow", direction: "y", yOffset: -$(scrollView).height()};
				$(element.dataset.section_class).scrollintoview(scrollintoviewOptions);
                break;
            }

            element = element.parentNode;
        }
    };

    document.addEventListener("click", clickHandler, false);
};
