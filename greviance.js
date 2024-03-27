document.addEventListener("DOMContentLoaded", function () {
    const grievanceList = document.getElementById("grievance-items");

    // Sample data, you can replace this with data from your system
    const grievances = [
        "Academic Issues:Unfair grading or evaluation of assignments and exams,Inadequate teaching or unclear course material,Problems with course registration and schedulingIssues related to academic accommodations for students with disabilities",
      "Administrative Issues:Problems with administrative processes, such as admission and enrollment,Financial aid and scholarship discrepancies,Unresponsiveness or inefficiency of administrative offices,Billing and fee disputes.",
      "Campus Facilities and Services:Maintenance and cleanliness issues with campus facilities,Problems with housing and dormitory conditions,Issues with campus security and safety.",
      "Technology and IT Support:Problems with campus Wi-Fi and internet access,Technical issues with online learning platforms,Insufficient IT support and response times.",
      "Extracurricular and Student Life:Inequitable access to clubs, organizations, or extracurricular activities.Problems related to campus events or social gatherings.Inadequate support for mental health and well-being.",
    ];

    // Function to display grievances in the list
    function displayGrievances() {
        for (const grievance of grievances) {
            const listItem = document.createElement("li");
            listItem.textContent = grievance;
            grievanceList.appendChild(listItem);
        }
    }

    // Call the function to display grievances
    displayGrievances();
});
