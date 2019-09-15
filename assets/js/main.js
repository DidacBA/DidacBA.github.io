const observer = new IntersectionObserver(function(entries) {
	// no intersection with screen
	if(entries[0].intersectionRatio <= 0)
		document.querySelector(".social-media-list").classList.add("header-sticky");
	// fully intersects with screen
	else if(entries[0].intersectionRatio === 1)
		document.querySelector(".social-media-list").classList.remove("header-sticky");
}, { threshold: [0,1] });

observer.observe(document.querySelector("#header-top"));