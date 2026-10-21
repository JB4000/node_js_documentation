const subjects = document.querySelectorAll(
    ".documentation-sidebar details[data-route]"
);

subjects.forEach(subject => {
    const route = subject.dataset.route;
    const savedState = localStorage.getItem(route);

    if (savedState === 'true') {
        subject.open = true;
    }
});

subjects.forEach(subject => {
    subject.addEventListener('toggle', () => {
        const route = subject.dataset.route;

        localStorage.setItem(route, subject.open);
    });
});

const sidebar = document.querySelector(".documentation-sidebar");

sidebar.addEventListener("scroll", () => {
    sessionStorage.setItem("sidebarScroll", sidebar.scrollTop);
});

const savedScroll = sessionStorage.getItem("sidebarScroll");

if (savedScroll !== null) {
    sidebar.scrollTop = Number(savedScroll);
}
