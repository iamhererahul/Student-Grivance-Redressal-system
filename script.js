document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Define an array of objects containing usernames and passwords
        const credentials = [
            { username: 'rahul.s.soni@slrtce.in', password: 'rahul@00' },
            { username: 'jayantkumar.r.tiwari@slrtce.in', password: 'jay@00' },
            { username: 'avnit.j.singh@slrtce.in', password: 'avnit@00' },
            { username: 'krishna.r.tiwari@slrtce.in', password: 'krishna@00' },
            // Add more usernames and passwords as needed
        ];

        // Check if the entered username and password match any in the credentials array
        const validCredentials = credentials.some(cred => cred.username === username && cred.password === password);

        if (validCredentials) {
            alert('Login successful!');
            window.location.href = 'complaint.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
