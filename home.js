var btnUpload = $("#upload_file"),
	btnOuter = $(".button_outer");
btnUpload.on("change", function (e) {
	var ext = btnUpload.val().split(".").pop().toLowerCase();
	if ($.inArray(ext, ["gif", "png", "jpg", "jpeg"]) == -1) {
		$(".error_msg").text("Not an Image...");
		$("#uploaded_view").removeClass("show");
		$("#head").html("");
	} else {
		$(".error_msg").text("");
		btnOuter.addClass("file_uploading");
		setTimeout(function () {
			btnOuter.addClass("file_uploaded");
		}, 3000);
		setTimeout(function () {
			btnOuter.removeClass("file_uploaded");
			btnOuter.removeClass("file_uploading");
		}, 4000);
		var uploadedFile = URL.createObjectURL(e.target.files[0]);
		setTimeout(function () {
			$("#uploaded_view")
				.html(' <img height="150px" src="' + uploadedFile + '" />')
				.addClass("show");
			$("#head").html(
				"<font color='green' >Successfully Uploaded</font> <br/>"
			);
		}, 3500);
	}
});
$(".file_remove").on("click", function (e) {
	$("#uploaded_view").removeClass("show");
	$("#uploaded_view").find("img").remove();
	btnOuter.removeClass("file_uploading");
	btnOuter.removeClass("file_uploaded");
});
