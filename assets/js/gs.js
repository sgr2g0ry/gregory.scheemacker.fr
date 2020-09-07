(function($) {

	$(document).ready(function() {
		var now = new Date();
		var yearsofxp = now.getFullYear() - 2000;
		if (now.getMonth() > 5) yearsofxp += 1;
		$("#yearsofxp").html(yearsofxp);
	});
	
	$("form").submit(function(event) {
		event.preventDefault();
	});
		
	$("form input[value=Envoyer]").click(function(event) {
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var subject = $("#subject").val();
		if (name != '' && email != '' && message != '') {
			$.post("contact_form.php", {
			name: name,
			email: email,
			message: message,
			subject: subject
			}, function(data) {
				if (data == "OK") {
					$("#returnmessage").html("<span style='color:#000'>Message envoy&eacute; !</span>");
					$("form input[value=Effacer]").click(); // To reset form fields on success.
				}
				else {
					$("#returnmessage").html("<span style='color:red'>Message non envoy&eacute; !</span>");
				}
			});
		}
	});
		
	$("form input[value=Send]").click(function(event) {
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var subject = $("#subject").val();
		if (name != '' && email != '' && message != '') {
			$.post("contact_form.php", {
			name: name,
			email: email,
			message: message,
			subject: subject
			}, function(data) {
				if (data == "OK") {
					$("#returnmessage").html("<span style='color:#000'>Message sent !</span>");
					$("form input[value=Reset]").click(); // To reset form fields on success.
				}
				else {
					$("#returnmessage").html("<span style='color:red'>Message not sent !</span>");
				}
			});
		}
	});

})(jQuery);