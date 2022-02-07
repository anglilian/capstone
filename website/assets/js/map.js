var zoom = 12;

var mymap = L.map('map', { zoomControl: false }).setView(
	[3.188, 101.69106],
	zoom
);
L.tileLayer(
	'https://api.mapbox.com/styles/v1/jeffeverhart383/cjgo34i5100202srogwdfs2mn/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVmZmV2ZXJoYXJ0MzgzIiwiYSI6IjIwNzVlOTA3ODI2MTY0MjM3OTgxMTJlODgzNjg5MzM4In0.QA1GsfWZccIB8u0FbhJmRg',
	{
		attribution:
			'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken:
			'pk.eyJ1IjoiamVmZmV2ZXJoYXJ0MzgzIiwiYSI6ImNqOXI2aDg5ejZhYncyd3M0bHd6cWYxc2oifQ.fzcb7maGkQhAxRZTotB4tg',
	}
).addTo(mymap);

mymap.scrollWheelZoom.disable();

var mapMarkers = [
	{
		id: 1,
		type: 'Point',
		coordinates: [3.16815, 101.70995],
		label: "Dato Harun's House",
	},
	{
		id: 2,
		type: 'Point',
		coordinates: [3.188, 101.70497],
		label: 'Alhambra Theatre',
	},
	{ id: 4, type: 'Point', coordinates: [3.16894, 101.69106], label: 'UMNO HQ' },
	{
		id: 3,
		type: 'Polygon',
		coordinates: [3.16305, 101.70618],
		coordinatePoints: [
			[3.1634102, 101.7167239],
			[3.1653894, 101.7149644],
			[3.1675399, 101.7133765],
			[3.1694414, 101.7110591],
			[3.1687022, 101.7058234],
			[3.1679952, 101.7054801],
			[3.1679523, 101.7028193],
			[3.1624675, 101.702991],
			[3.1586967, 101.7016177],
			[3.1579683, 101.7037206],
			[3.1565542, 101.7046647],
			[3.1595537, 101.7107158],
			[3.1587396, 101.7135911],
			[3.1599822, 101.715694],
			[3.1608606, 101.7149858],
			[3.1634102, 101.7167239],
		],
		label: 'Kampung Baru',
	},
];

var markerHarun = L.marker(mapMarkers[0].coordinates)
	.addTo(mymap)
	.bindPopup(mapMarkers[0].label)
	.openPopup();

var markerVar = L.marker(mapMarkers[1].coordinates)
	.addTo(mymap)
	.bindPopup(mapMarkers[1].label);

const stepDivOptions = {
	root: null,
	rootMargin: '50%',
};

var stepDivObserver = new IntersectionObserver(
	observerCallback,
	stepDivOptions
);

function observerCallback(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			var id = parseInt(entry.target.getAttribute('data-step'));
			var lat = mapMarkers[id]['coordinates'][0];
			var lng = mapMarkers[id]['coordinates'][1];
			if (id == 1) {
				markerVar.setLatLng(mapMarkers[id]['coordinates']);
				markerVar.setPopupContent(mapMarkers[id]['label']).openPopup();
			} else if (id == 2) {
				markerVar.setLatLng(mapMarkers[id]['coordinates']);
				markerVar.setPopupContent(mapMarkers[id]['label']).openPopup();
			} else if (id == 3) {
				console.log(mapMarkers[id]['coordinatePoints']);
				var markerPoly = L.polygon([mapMarkers[id]['coordinatePoints']]).addTo(
					mymap
				);
				markerPoly.bindPopup(mapMarkers[id]['label']).openPopup();
			}
			mymap.setView([lat, lng * 0.9993], zoom);
		}
	});
}

document.querySelectorAll('.step').forEach((i) => {
	if (i) {
		stepDivObserver.observe(i);
	}
});

const triggerOn = document.querySelector('.triggerOn');
const triggerOff = document.querySelector('.triggerOff');
let triggerOnEnabled = false;
// let triggerOffEnabled = false;

const mapOptions = {
	// root: null,
	// rootMargin: "-50%"
};

function setMapFixed() {
	$('#map').css('position', 'fixed');
	$('#map').css('width', '50%');
}

function setMapAbsolute() {
	$('#map').css('position', 'absolute');
	$('#map').css('width', '100%');

	// $('#map').css('top', null);
	// $('#map').css('bottom', '0px');
}

const triggerOnObserver = new IntersectionObserver(function (
	entries,
	mapObserver
) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			triggerOnEnabled = true;
		} else {
			if (triggerOnEnabled) {
				setMapFixed();
				triggerOnEnabled = false;
			}
		}
	});
},
mapOptions);
triggerOnObserver.observe(triggerOn);
