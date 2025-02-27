document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        document.querySelectorAll("section").forEach(section => {
            if (
                section.offsetTop <= scrollPosition + 100 &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
                let activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    });

    const emailInput = document.querySelector("#email-input");
    const sendButton = document.querySelector("#send-app-link");

    sendButton.addEventListener("click", function () {
        const email = emailInput.value.trim();
        if (validateEmail(email)) {
            sendButton.textContent = "Sent!";
            sendButton.style.backgroundColor = "#28a745"; 
            setTimeout(() => {
                sendButton.textContent = "Send App Link";
                sendButton.style.backgroundColor = "#007bff"; 
            }, 3000);
            alert("App link sent to " + email);
        } else {
            alert("Please enter a valid email address!");
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
