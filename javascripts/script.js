$("document").ready(function() {

	if (getParameterByName("error_reason") == "user_denied") {
		$("#error-block").removeClass("hidden");
	}

	if (getParameterByName("code")) {
		$("#auth-block").removeClass("hidden");
		$("#code-text").html(getParameterByName("code"));
	}
	


});

function getParameterByName(name)
{
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}