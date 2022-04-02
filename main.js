const jobKeysContainer = document.getElementById ('job-keys');
const microsoftBtn = document.getElementById ('msft-btn');
const ibmBtn = document.getElementById ('ibm-btn');
const ucsdBtn = document.getElementById ('ucsd-btn');

const jobResultsContainer = document.getElementById ('job-results');

const job1 = document.createElement ('section');
const job2 = document.createElement ('section');
const job3 = document.createElement ('section');

function onload() {
    microsoftBtn.setAttribute ('state', 'on');
    jobResultsContainer.appendChild (job1);
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
        <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
        <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
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
        <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
        <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
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
        <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
        <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
    </ul>
`;

onload();