export default function toggleMenu() {
    const menu = document.querySelector('menu');
    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.menu') && !menu.classList.contains('active-menu')) {
            menu.classList.add('active-menu');
        } else if (!(target.closest('.active-menu') && !(target.closest('.close-btn') ||
                target.closest('.active-menu a'))) && menu.classList.contains('active-menu')) {
            menu.classList.remove('active-menu');
        }
    });
};