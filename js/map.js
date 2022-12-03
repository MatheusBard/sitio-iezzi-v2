$(document).ready(function () {
  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: -22.290644057300355, lng: 42.5316905576713 },
      zoom: 8,
    });
  }

  window.initMap = initMap;
})