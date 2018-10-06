if( document.getElementsByClassName("map-wrapp")[0] ) {

	var map;
	var marker;
	var image = "img/map_marker.png";
	var styles;

	function initMap() {

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.733239, lng: 37.563709},
			scrollwheel: false,
			scaleControl: false,
			zoom: 16,
			disableDefaultUI: true
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 55.733239, lng: 37.563709},
			icon: image,
			title: 'Shtykov Clinik'
		});

		marker.addListener('click', toggleBounce);

	}

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}

}