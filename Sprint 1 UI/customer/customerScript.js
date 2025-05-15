document.getElementById("updateForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const mobile = document.getElementById("mobile").value.trim();
    if (!/^\d{10}$/.test(mobile)) {
        
        document.getElementById("mobileError").textContent = "Mobile number must be 10 digits.";
        return;

    }
    else {
        document.getElementById("mobileError").textContent = "";
    }



    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
        alert("New Password must be atlease 8 characters long, conatin 1 uppercase letter, 1 number and one special character");
        return;
    }
    if (newPassword !== confirmPassword) {
        alert("Passwords don't match");
        return;
    }
    alert("Details updated successfully!");
    
});

document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("ticketTableBody");

    table.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete-btn")) {
            const row = e.target.closest("tr");
            const name = row.children[1].textContent;
            const confirmDelete = confirm(`Are you sure you want to cancel ${name}?`);
            if (confirmDelete) {
                row.remove();
                MessageChannel.textContent = `${name} has been canceled successfully.`;

                setTimeout(() => {
                    MessageChannel.textContent = "";
                }, 5000);
            }
        }
    });
});