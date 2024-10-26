// This function updates the profile with the user's input
function updateProfile() {
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('job-title').value;
    const about = document.getElementById('about').value;

    // Update the display on the profile section
    document.getElementById('name-display').innerText = name;
    document.getElementById('job-title-display').innerText = jobTitle;
    document.getElementById('about-display').innerText = about;
}
// Save the profile data to localStorage
function updateProfile() {
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('job-title').value;
    const about = document.getElementById('about').value;

    // Store data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('jobTitle', jobTitle);
    localStorage.setItem('about', about);

    // Update the display on the profile section
    document.getElementById('name-display').innerText = name;
    document.getElementById('job-title-display').innerText = jobTitle;
    document.getElementById('about-display').innerText = about;
}

// Load data when the page loads
window.onload = function() {
    if (localStorage.getItem('name')) {
        document.getElementById('name-display').innerText = localStorage.getItem('name');
    }
    if (localStorage.getItem('jobTitle')) {
        document.getElementById('job-title-display').innerText = localStorage.getItem('jobTitle');
    }
    if (localStorage.getItem('about')) {
        document.getElementById('about-display').innerText = localStorage.getItem('about');
    }
}
