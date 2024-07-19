document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    const name = document.getElementById('name').value;
    let a=name.split(' ')
    a[0][0]=a[0][0].toUpperCase();
    a[1][0]=a[1][0].toUpperCase();
    const date = document.getElementById('dob').value;
    if (date > Date(2004, 11, 25)) {
        message.textContent = 'Not possible';
        message.style.color = 'red';
    } else {
        message.textContent = 'Possible';
        message.style.color = 'green';
    }
    
    const State = document.getElementById('State').value;
    if (State === "Delhi") {
        messageTwo.textContent = "North Delhi, South Delhi, East Delhi, Central Delhi";
        messageTwo.style.color = 'red';
    } else if (State === "Maharashtra") {
        messageTwo.textContent = "Mumbai, Pune, Nagpur, Nashik";
        messageTwo.style.color = 'red';
    } else if (State === "Karnataka") {
        messageTwo.textContent = "Bengaluru, Mysuru, Hubli, Mangalore";
        messageTwo.style.color = 'red';
    } else if (State === "Tamil Nadu") {
        messageTwo.textContent = "Chennai, Coimbatore, Madurai, Tiruchirappalli";
        messageTwo.style.color = 'red';
    } else {
        messageTwo.textContent = "State not recognized. Please enter a valid state.";
        messageTwo.style.color = 'red';
    }



});