document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;

            document.querySelectorAll(".accordion-item").forEach(item => {
                item.style.flex = "1";
                item.querySelector(".accordion-content").style.display = "none";
            });

            item.style.flex = "4";
            content.style.display = "block";
        });
    });
});