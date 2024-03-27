document.addEventListener('DOMContentLoaded', function() {
    populateGrievances();
    populateNotifications();

    document.getElementById('logout').addEventListener('click', function() {
        // Add logout functionality here (e.g., redirect to login page)
    });

    document.getElementById('changePassword').addEventListener('click', function() {
        // Add functionality to change password here
    });
});

function populateGrievances() {
    const grievanceList = document.getElementById('grievanceList');

    // Dummy data for testing (replace with actual data from your backend)
    const grievances = [
        { 
            id: 1,
            title: 'Issue 1',
            description: 'Description of Issue 1',
            status: 'Pending',
            resolvedInDays: 5,
            assignedTo: 'Class Teacher',
            images: ['image1.jpg', 'image2.jpg']
        },
        // Add more grievances as needed
    ];

    grievances.forEach(grievance => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${grievance.title}</h3>
            <p>${grievance.description}</p>
            <p>Status: ${grievance.status}</p>
            <p>Resolved in: ${grievance.resolvedInDays} days</p>
            <p>Assigned To: ${grievance.assignedTo}</p>
            <div class="images">
                ${grievance.images.map(image => `<img src="grievanceimage.jpg" alt="greviance 3">`).join('')}
            </div>
        `;
        grievanceList.appendChild(li);
    });
}

function populateNotifications() {
    const notificationList = document.getElementById('notificationList');

    // Dummy data for testing (replace with actual data from your backend)
    const notifications = [
        { id: 1, message: 'Notification 1' },
        { id: 2, message: 'Notification 2' },
        // Add more notifications as needed
    ];

    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.innerText = notification.message;
        notificationList.appendChild(li);
    });
}

