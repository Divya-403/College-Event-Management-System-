
function registerEvent(eventName) {
    const name = prompt("Enter your full name:");
    
    if (name === null || name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    const email = prompt("Enter your email address:");

    if (email === null || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    const registrations = JSON.parse(
        localStorage.getItem("eventRegistrations") || "[]"
    );

    registrations.push({
        name: name.trim(),
        email: email.trim(),
        event: eventName,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem(
        "eventRegistrations",
        JSON.stringify(registrations)
    );

    alert("Registration successful for " + eventName + "!");
}

function searchEvents() {
    const searchValue = document
        .getElementById("search")
        .value.toLowerCase();

    const cards = document.querySelectorAll(".event-card");

    cards.forEach(function(card) {
        const eventName = card.querySelector("h3")
            .textContent.toLowerCase();

        card.style.display = eventName.includes(searchValue)
            ? ""
            : "none";
    });
}
