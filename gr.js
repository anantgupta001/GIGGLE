function sendEmail(event) {
	event.preventDefault();

	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const message = document.getElementById("message").value.trim();

	// Validate form fields
	const errors = [];
	if (name === "") {
		errors.push("Name is required");
	}
	if (email === "") {
		errors.push("Email is required");
	} else if (!isValidEmail(email)) {
		errors.push("Email is invalid");
	}
	if (phone === "") {
		errors.push("Phone is required");
	} else if (!isValidPhone(phone)) {
		errors.push("Phone is invalid");
	}
	if (message === "") {
		errors.push("Message is required");
	}

	// Display errors or send email
	if (errors.length > 0) {
		// Display errors
		const errorDiv = document.createElement("div");
		errorDiv.classList.add("error");
		const errorMessage = document.createElement("p");
		errorMessage.innerText = "Please fix the following errors:";
		errorDiv.appendChild(errorMessage);

		const errorList = document.createElement("li");
		errors.forEach((error) => {
			const errorItem = document.createElement("li");
			errorItem.innerText = error;
			errorList.appendChild(errorItem);
		});

		const form = document.querySelector("form");
		form.appendChild(errorDiv);
		errorDiv.appendChild(errorList);

		return;
	}

	// Create email body
	const body = `
		Name: ${name}
		Email: ${email}
		Phone: ${phone}
		Message: ${message}
	`;

	// Send email
	const subject = "Grievances Form Submission";
	const mailto = "mailto:yashjainstudy@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
	window.location.href = mailto;

	// Reset form
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("message").value = "";
}
function isValidEmail(email) {
	// Regular expression for email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function isValidPhone(phone) {
	// Regular expression for phone validation
	const phoneRegex = /^\d{10}$/;
	return phoneRegex.test(phone);
}