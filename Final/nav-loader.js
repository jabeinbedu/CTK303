fetch('nav.html')
    .then (response =>response.text())
    .then(html => {
        const mount =document.getElementById('nav-mount');
        if (!mount) return;
        mount.innerHTML = html;

        const path = window.location.pathname.split('/').pop() || 'index.html';

        const links = mount.querySelectorAll('.nav-link');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === path) {
                link.classList.add('is-active');
            }
        });
    });

    // Please see note on nav.html