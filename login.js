const createJobButton = document.getElementById("createJobButton");

viewJobButton.addEventListener('click', (event) => {
    viewJob();
    viewJobForm.focus();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    var userType = document.getElementById("userType").value;
    if (userType === "user" || userType === "admin") {
        window.location.href = "https://je-sales.github.io/Case-Project-1-Tool-and-Die-Shop/"; // Replace with your add page URL
        event.preventDefault(); // Prevent default form submission
    }
});
