document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    const updateButtons = document.querySelectorAll(".update-btn");
    updateButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Update functionality coming soon!");
        });
    });

    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (confirm("Are you sure you want to delete this IPO?")) {
                this.closest("tr").remove();
            }
        });
    });

    const viewButtons = document.querySelectorAll(".view-btn");
    viewButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("View functionality coming soon!");
        });
    });
});
