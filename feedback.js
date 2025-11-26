// LOAD PREVIOUS FEEDBACK
let feedbacks = JSON.parse(localStorage.getItem("feedbackStore")) || [];

// DISPLAY FEEDBACK
function showFeedback() {
    const list = document.getElementById("feedbackList");
    list.innerHTML = "";

    feedbacks.forEach(fb => {
        const item = document.createElement("div");
        item.classList.add("feedback-card");
        item.innerHTML = `
            <h3>${fb.name}</h3>
            <p>Rating: ⭐ ${fb.rating}</p>
            <p>${fb.message}</p>
            <small>${fb.date}</small>
            <hr>
        `;
        list.appendChild(item);
    });
}

showFeedback();

// SUBMIT FEEDBACK
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const feedback = {
        name: document.getElementById("name").value,
        rating: document.getElementById("rating").value,
        message: document.getElementById("message").value,
        date: new Date().toLocaleString()
    };

    feedbacks.push(feedback);

    localStorage.setItem("feedbackStore", JSON.stringify(feedbacks));

    alert("Thank you for your feedback!");

    showFeedback();

    document.getElementById("feedbackForm").reset();
});
