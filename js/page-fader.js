// Fade In Page
function fadeInPage() {
	var fader = document.getElementById('page-fader');
	fader.classList.add('fade-in-page');
}

// Fade Out Page
document.addEventListener('DOMContentLoaded', function() {
	var links = document.getElementsByClassName('link');
	
	for (i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function(event) {
			var fader = document.getElementById('page-fader');
			links = event.currentTarget;
			
			var listener = function() {
				window.location = links.href;
				fader.removeEventListener('animationend', listener);
			};
			
			fader.addEventListener('animationend', listener);
			
			event.preventDefault();
			
			fader.classList.add('fade-out-page');
		});
	}
});

// The below is for the page not to be shown in the fade out transition if loaded from cache.
window.addEventListener('pageshow', function(event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-out-page');
});