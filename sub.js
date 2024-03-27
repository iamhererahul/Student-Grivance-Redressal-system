document.addEventListener("DOMContentLoaded", function () {
    const grievanceForm = document.getElementById("grievance-form");
    const grievanceList = document.getElementById("grievance-list");

    grievanceForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const studentName = document.getElementById("student-name").value;
        const grievanceType = document.getElementById("grievance-type").value;
        const grievanceDetails = document.getElementById("grievance-details").value;

        const grievanceEntry = document.createElement("div");
        grievanceEntry.classList.add("grievance-entry");
        grievanceEntry.innerHTML = `
            <strong>Name:</strong> ${studentName}<br>
            <strong>Grievance Type:</strong> ${grievanceType}<br>
            <strong>Details:</strong> ${grievanceDetails}
        `;

        grievanceList.appendChild(grievanceEntry);

        // You would typically send this data to a server for storage here.
        // For simplicity, we're just displaying it on the page.

        // Clear the form fields
        grievanceForm.reset();
    });
});