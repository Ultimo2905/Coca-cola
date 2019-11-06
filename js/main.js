// scrollTop
	    let anchors = [];
	    let currentAnchor = -1;
	    let isAnimating = false;
	    $(function() {
	        function updateAnchors() {
	            anchors = [];
	            $('.anchor').each(function(i, element) {
	                anchors.push($(element).offset().top);
	            });
	        }
	        $('body').on('mousewheel', function(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            if (isAnimating) {
	                return false;
	            }
	            isAnimating = true;
	            if (e.originalEvent.wheelDelta >= 0) {
	                currentAnchor--;
	            } else {
	                currentAnchor++;
	            }
	            if (currentAnchor > (anchors.length - 1) ||
	                currentAnchor < 0) {
	                currentAnchor = 0;
	            }
	            isAnimating = true;
	            $('html, body').animate({
	                scrollTop: parseInt(anchors[currentAnchor])
	            }, 500, 'swing', function() {
	                isAnimating = false;
	            });
	        });
	        updateAnchors();
	    });


// Tab
    function openTab(evt, giftName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(giftName).style.display = "flex";
        evt.currentTarget.className += " active";
    }