document.addEventListener('DOMContentLoaded', () => {
    // Fetch banner title from GitHub
    fetch('https://raw.githubusercontent.com/AlejandroCasco1/fractal/main/BannerSup.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('banner-title').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching banner title:', error);
            document.getElementById('banner-title').innerText = 'Error al cargar el título';
        });

    // Add event listeners to menu items
    const menuItems = document.querySelectorAll('.sidebar nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the target section ID from the href
            const targetId = this.getAttribute('href').substring(1);

            // Hide all content sections
            const contentSections = document.querySelectorAll('.content-section');
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the target content section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');

                 // Smooth scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Align the top of the element to the top of the visible area
                });
            }
        });
    });

    // Menu icon functionality
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.querySelector('.sidebar');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});