const styleSheet = document.getElementById ('style');

const jobKeysContainer = document.getElementById ('job-keys');
const microsoftBtn = document.getElementById ('msft-btn');
const ibmBtn = document.getElementById ('ibm-btn');
const ucsdBtn = document.getElementById ('ucsd-btn');

const jobResultsContainer = document.getElementById ('job-results');

const job1 = document.createElement ('section');
const job2 = document.createElement ('section');
const job3 = document.createElement ('section');

const linkColItems = document.getElementById ('link-col-items');
const gitHubIcon = document.getElementById ('github-icon');
const iconArr = document.getElementsByClassName ('icon');
console.log (iconArr);
console.log (iconArr[1]);

const colorSchemeIconContainer = document.getElementById ('color-scheme');
const lightModeIcon = document.createElement ('button');
const darkModeIcon = document.createElement ('button');
lightModeIcon.setAttribute ('id', 'light-mode-btn');
lightModeIcon.setAttribute ('aria-label', 'Switch to Light Mode');
darkModeIcon.setAttribute ('id', 'dark-mode-btn');
darkModeIcon.setAttribute ('aria-label', 'Switch to Dark Mode');
lightModeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"/></svg>`;
darkModeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/></svg>`;

function onload() {
    microsoftBtn.setAttribute ('state', 'on');
    jobResultsContainer.appendChild (job1);
    colorSchemeIconContainer.appendChild (lightModeIcon);
    styleSheet.setAttribute ('href', './style.css');
}

lightModeIcon.addEventListener ('click', () => {
    colorSchemeIconContainer.removeChild (lightModeIcon);
    colorSchemeIconContainer.appendChild (darkModeIcon);
    styleSheet.setAttribute ('href', './light.css');
});

darkModeIcon.addEventListener ('click', () => {
    colorSchemeIconContainer.removeChild (darkModeIcon);
    colorSchemeIconContainer.appendChild (lightModeIcon);
    styleSheet.setAttribute ('href', './style.css');
});

// for each icon (img html element), when mouse hover
// replace default image with lighter one then revert
// to default after 1 second
for (const icon of iconArr) {
    const defaultSrc = icon.getAttribute ('src');
    const lightSrc = defaultSrc.replace ('.png', '-light.png');
    console.log (lightSrc);

    icon.addEventListener ('mouseover', () => {
        console.log ('mouse over icon');
        icon.setAttribute ('src', lightSrc);
        setTimeout(() => {
            icon.setAttribute ('src', defaultSrc);
        }, 1000);
    });
}

microsoftBtn.addEventListener ('click', () => {
    console.log ('show microsoft');
    console.log (microsoftBtn.getAttribute ('state'));
    console.log (ibmBtn.getAttribute ('state'));console.log (microsoftBtn.getAttribute ('state', 'off'));
    if (microsoftBtn.getAttribute ('state') == 'off') {
        if (ibmBtn.getAttribute ('state') == 'on')
            jobResultsContainer.removeChild (job2);
        else
            jobResultsContainer.removeChild (job3);

        jobResultsContainer.appendChild (job1);
        microsoftBtn.setAttribute ('state', 'on');
        ibmBtn.setAttribute ('state', 'off');
        ucsdBtn.setAttribute ('state', 'off');
    }
    console.log ('dont change anything still microsoft');
});

ibmBtn.addEventListener ('click', () => {
    console.log ('show ibm');
    if (ibmBtn.getAttribute ('state') == 'off') {
        if (ucsdBtn.getAttribute ('state') == 'on')
            jobResultsContainer.removeChild (job3);
        else
            jobResultsContainer.removeChild (job1);

        jobResultsContainer.appendChild (job2);
        ibmBtn.setAttribute ('state', 'on');
        microsoftBtn.setAttribute ('state', 'off');
        ucsdBtn.setAttribute ('state', 'off');
    }
});

ucsdBtn.addEventListener ('click', () => {
    if (ucsdBtn.getAttribute ('state') == 'off') {
        if (microsoftBtn.getAttribute ('state') == 'on')
            jobResultsContainer.removeChild (job1);
        else
            jobResultsContainer.removeChild (job2);

        jobResultsContainer.appendChild (job3);
        ucsdBtn.setAttribute ('state', 'on');
        ibmBtn.setAttribute ('state', 'off');
        microsoftBtn.setAttribute ('state', 'off');
    }
});

job1.setAttribute ('class', 'job-description');
job1.setAttribute ('aria-hidden', 'false');
job1.setAttribute ('aria-labelledby', 'work tab 1');

job2.setAttribute ('class', 'job-description');
job2.setAttribute ('aria-hidden', 'true');
job2.setAttribute ('aria-labelledby', 'work tab 2');

job3.setAttribute ('class', 'job-description');
job3.setAttribute ('aria-hidden', 'true');
job3.setAttribute ('aria-labelledby', 'work tab 3');

job1.innerHTML = `
    <h3>
        <span>Software Engineer Intern</span>
        <span class="company">@
            <a class="inline-link" href="https://microsoft.com">Microsoft</a>
        </span>
    </h3>
    <p class="range">June - September 2021</p>
    <ul>
        <li>Implemented an ACPI translation layer to be released in the Windows kernel</li>
        <li>Authored the design spec and project schedule with deliverables</li>
        <li>Implemented the translation layer in C/C++ and designed the API to expose this information</li>
        <li>Wrote a testing framework to support debugging in and out of the kernel</li>
    </ul>
`;

job2.innerHTML = `
    <h3>
        <span>Machine Learning Intern</span>
        <span class="company">@
            <a class="inline-link" href="https://ibm.com">IBM</a>
        </span>
    </h3>
    <p class="range">June - September 2019</p>
    <ul>
        <li>Selected, implemented, and evaluated machine learning models to mimic the olfactory circuit of the fruit fly—to create an artificial nose</li>
        <li>Wrote Python code for supervised classification models</li>
        <li>Responsible for pre-processing gas-sensing data used to train the models and unit testing of predictions</li>
    </ul>
`;

job3.innerHTML = `
    <h3>
        <span>Undergraduate Researcher</span>
        <span class="company">@
            <a class="inline-link" href="https://ucsdnews.ucsd.edu/feature/using_artificial_intelligence_for_healthy_living">AI for Healthy Living / UCSD</a>
        </span>
    </h3>
    <p class="range">June - September 2021</p>
    <ul>
        <li>Focused on gathering sensor data to measure cognitive function in the elderly</li>
        <li>Identified appropriate metrics of cognitive ability, daily habits, and interaction</li>
        <li>Selected physical sensors & correlated subsequent measurements to cognitive decline</li>
    </ul>
`;

onload();