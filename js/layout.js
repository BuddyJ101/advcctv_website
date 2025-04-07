document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // Update colors
            document.querySelector('.navbar').style.backgroundColor = data.background.color;
            document.querySelector('footer').style.backgroundColor = data.background.color;
            document.body.style.backgroundColor = data.background.border;

            document.querySelector('footer').style.color = data.background.text;

            // Update head section
            document.title = data.head.title;
            document.getElementById("favicon").href = data.head.favicon;

            // Update navbar/Header
            document.getElementById("app_name").innerText = data.header.appTitle;

            // Update Home
            var home = document.getElementById("opening-section");
            home.style.backgroundColor = data.home.color;
            home.style.backgroundImage = "url('" + data.home.imgPath + "')";
            home.style.backgroundSize = "cover";

            home.innerHTML = `
                <h1>${data.home.title}</h1>
                <hr class="custom-line" style="background-color:${data.background.lineColor};">
                <div style="max-width:60vw;">${data.home.body}</div>
                <a href="#contact-section" class="scroll-button">Contact Us</a>
            `;

            // Update About
            var about = document.getElementById("about-section");
            about.style.backgroundColor = data.about.color;
            about.style.backgroundImage = "url('" + data.about.imgPath + "')";
            about.style.backgroundSize = "cover";

            about.innerHTML = `
                <h1>${data.about.title}</h1>
                <hr class="custom-line" style="background-color:${data.background.lineColor};">
                <div style="max-width:60vw;">${data.about.body}</div>
            `;

            // Update Services
            var services = document.getElementById("services-section");
            services.style.backgroundColor = data.services.color;
            services.style.backgroundImage = "url('" + data.services.imgPath + "')";
            services.style.backgroundSize = "cover";

            let services_html = `
                <h1>${data.services.title}</h1>
                <hr class="custom-line" style="background-color:${data.background.lineColor};">
                <div style="max-width:60vw;margin-bottom:20px;">${data.services.body}</div>
                <div class="row-flex" style="padding:0px;">
            `;

            const serviceObjs = Object.entries(data.services.services);
            serviceObjs.forEach(([k, s]) => {
                const widget = `
                    <div class="service-card col-12 col-md-4" style="background-color:#AEC6CF;">
                        <div class="roll-icon-box">
                            <div class="service-thumb">
                                <!-- Image for the service -->
                                <img decoding="async" class="service-img" src="${s.img}" alt="${s.title}" loading="eager">
                            </div>
                            <div class="content">
                                <!-- Title for the service -->
                                <h2 class="service-title">${s.title}</h2>
                                <!-- Description of the service -->
                                <p class="service-description">${s.body}</p>
                            </div>
                        </div>
                    </div>
                `;
                services_html += widget;
            });

            services.innerHTML = services_html + `</div>`;

            // Update Contact
            var contact = document.getElementById("contact-section");
            contact.style.backgroundColor = data.contact.color;
            contact.style.backgroundImage = "url('" + data.contact.imgPath + "')";
            contact.style.backgroundSize = "cover";

            contact.innerHTML = `
                <h1>${data.contact.title}</h1>
                <hr class="custom-line" style="background-color:${data.background.lineColor};">
                <div style="max-width:80vw;margin-bottom:20px;">${data.contact.body}</div>

                <div class="button-container" style="margin-top: 50px;">
                    <a href="mailto:${data.contact.email}" class="button">
                        <i class="bi bi-envelope"></i> Email
                    </a>
                    <a href="tel:${data.contact.number}" class="button">
                        <i class="fas fa-phone"></i> Call
                    </a>
                </div>
            `;

            // Update footer
            document.getElementById("contact-info").innerHTML = `
                <div class="row d-flex align-items-center">
                    <div class="col-sm-8 col-12 text-center full-width-sm" style="font-size:30px;">
                        <strong>${data.footer.outro}</strong> <br>
                    </div>

                    <div class="col-sm-4 col-12">
                        <h3>Contact us</h3>
                        <i class="fas fa-phone"></i> ${data.footer.number1} <br>
                        <i class="fas fa-fax"></i> ${data.footer.number2} <br>
                        <i class="fas fa-envelope"></i> <a href="mailto:${data.footer.email}">${data.footer.email}</a> <br>
                    </div>
                </div>

                <div class="col-12 text-center" style="background-color: ${data.background.border};margin-top:20px;padding-top:15px;">
                    <strong>Powered By:</strong> <a href="${data.maker.website}">${data.maker.poweredBy}</a> <br>
                </div>
            `;
            document.getElementById("submitEmail").addEventListener('click', function (event) {
                event.preventDefault();
                sendMsg();
            });
        })
        .catch(error => console.error("Error fetching website data:", error));
});

//highlight current section
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".scr-container");
    const navLinks = document.querySelectorAll(".navbar a");

    function highlightNav() {
        let currentSection = null;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section;
            }
        });

        navLinks.forEach(link => link.classList.remove("active"));

        if (currentSection) {
            const currentId = currentSection.getAttribute("id");
            let activeLink;

            if (currentId === 'opening-section') {
                activeLink = document.querySelector(".navbar a[href='#opening-section']:not(.navbar-brand)");
            } else {
                activeLink = document.querySelector(`.navbar a[href="#${currentId}"]`);
            }

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", highlightNav);
    window.addEventListener("load", highlightNav); 

    highlightNav();
});
