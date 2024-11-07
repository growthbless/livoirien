document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display news articles dynamically
    fetchArticles();

    // Example of an important alert for breaking news
    showAlertPopup("Breaking News: Major event happening now!");
});

function fetchArticles() {
    const apiUrl = "https://api.kaoci.com"; // Replace with actual API URL

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Assume data is an array of news items, with `category` and `title`
            data.forEach(article => {
                const section = document.getElementById(article.category.toLowerCase());
                if (section) {
                    const articleElement = document.createElement("p");
                    articleElement.textContent = article.title;
                    section.appendChild(articleElement);
                }
            });
        })
        .catch(error => console.error("Error fetching articles:", error));
}

function showAlertPopup(message) {
    const alertPopup = document.getElementById("alert-popup");
    const alertText = document.getElementById("alert-text");
    
    alertText.textContent = message;
    alertPopup.style.display = "block";
}

function closePopup() {
    document.getElementById("alert-popup").style.display = "none";
}
