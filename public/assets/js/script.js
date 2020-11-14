$(document).ready(function () {
	// Create new burger on submit button click
	$(".create-form").on("submit", function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();
		let newBurger = {
			name: $("#ca").val().trim(),
		};
		// Send the POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger,
		}).then(function () {
			console.log("created new burger");
			// Reload the page to get the updated list
			location.reload();
		});
	});

	// Update burger status to "devoured/annihilated" on button click
	$(".change-status").on("click", function () {
		let id = $(this).data("id");
		let newStatus = $(this).data("newstatus");
		let newDevouredState = {
			devoured: newStatus,
		};
		// send the put request to the database
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevouredState,
		}).then(function () {
			location.reload();
		});
	});

	// Delete burger on trash button click
	$(".trash").on("click", function () {
		let id = $(this).data("id");
		console.log(id);
		$.ajax("/api/burgers/" + id, {
			method: "DELETE",
		}).then(function (data) {
			console.log("deleted " + data);
			location.reload();
		});
	});
});
