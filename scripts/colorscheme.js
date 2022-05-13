const colorSchemeIconContainer = document.getElementById ('color-scheme');
const lightModeIcon = document.createElement ('button');
const darkModeIcon = document.createElement ('button');
const indexPageStyle = document.getElementById ('base-style');

lightModeIcon.setAttribute ('id', 'light-mode-btn');
lightModeIcon.setAttribute ('aria-label', 'Switch to Light Mode');
darkModeIcon.setAttribute ('id', 'dark-mode-btn');
darkModeIcon.setAttribute ('aria-label', 'Switch to Dark Mode');
lightModeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"/></svg>`;
darkModeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/></svg>`;

function onload() {
    colorSchemeIconContainer.appendChild (lightModeIcon);
    /* set the base, index.html page to use dark style by default */
    indexPageStyle.setAttribute ('href', '../styles/style.css');
}

/* if user clicks sun (light mode), switch to light css */
lightModeIcon.addEventListener ('click', () => {
    colorSchemeIconContainer.removeChild (lightModeIcon);
    colorSchemeIconContainer.appendChild (darkModeIcon);
    indexPageStyle.setAttribute ('href', '../styles/light.css');
});

/* if user clicks moon (dark mode), switch to dark css */
darkModeIcon.addEventListener ('click', () => {
    colorSchemeIconContainer.removeChild (darkModeIcon);
    colorSchemeIconContainer.appendChild (lightModeIcon);
    indexPageStyle.setAttribute ('href', '../styles/style.css');
});

onload();