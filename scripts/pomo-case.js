/* Constants */
const NUM_SECTIONS = 7; 

/* Grab sections */
const caseSectKeys   = document.getElementById ('section-keys');
const caseSectResult = document.getElementById ('section-container');
const sectionButtons = document.getElementsByClassName ('case-section');

/* Create the individual sections that'll belong to caseSectResult */
const sectionsArr = []
for (let i = 0; i < NUM_SECTIONS; i++) {
    const rawSect = document.createElement ('section');
    sectionsArr[i] = rawSect;
}

/* when the page loads, set up default section */
init();
displaySection();

function displaySection() {
    /* for each section nav button, if one is clicked, pull up
     * its corresponding section, and append that */
    for (let btnIdx = 0; btnIdx < NUM_SECTIONS; btnIdx++) {
        sectionButtons[btnIdx].addEventListener ('click', () => {
            caseSectResult.removeChild (caseSectResult.firstElementChild);
            caseSectResult.appendChild (sectionsArr[btnIdx]);
            // only have button pressed be active
            for (let bIdx = 0; bIdx < NUM_SECTIONS; bIdx++) {
                sectionButtons[bIdx].setAttribute ('state', 'off');
            }
            sectionButtons[btnIdx].setAttribute ('state', 'on');
        });
    }
}


/* construct sections */
function init() {
    (sectionsArr[0]).innerHTML = `
        <h2>Overview</h2>
        <img src="./media/pomo-timer/timer-home.png" alt="screen with timer and work mode">
        <p>Powell’s Owls’ <b>Pomodoro Timer</b> is an online application that enables 
        engineering students to increase productivity and decrease burnout. It 
        combats procrastination and fatigue by enforcing specific periods of 
        time to just work or to not work. Users are also allowed to customize their 
        timer per their work needs and style preferences.</p>
        <br/>
        <h2>Role</h2>
        <p>Project Lead / Designer / Developer</p>
    `;

    (sectionsArr[1]).innerHTML = `
        <h2>Concept Background</h2>
        <p>We (a team of 8) were tasked with building a <b>Pomodoro Timer</b>. 
        We read up on the philosophy of the pomodoro method and its effect on 
        productivity and development. The philosophy is as follows: <br/>
        <ol>
            <li>Projects should be subdivided into tasks.</li>
            <li>Decide on the task to be done.</li>
            <li>Set the pomodoro timer (typically 25 minutes).</li>
            <li>Work on the task. This is called a <b>pomodoro</b>.</li>
            <li>End work when the timer rings.</li>
            <li>Take a short break (typically 5 minutes).</li>
            <li>Repeat for 3 more pomodoros.</li>
            <li>Take a long break (typically 15 minutes).</li>
            <li>Return to Step 3.</li>
        </ol>
        </p>
        <p>
        In theory, the <b>Pomodoro Timer</b> <i>decreases</i> procrastination by focusing
        on working for just some block of time. It <i>minimizes</i> distractions and will
        force a user to re-start a pomodoro if interrupted. Finally, it <i>decreases</i> 
        burnout by enforcing work and break times (and we often forget the importance 
        of a break).
    `;

    (sectionsArr[2]).innerHTML = `
        <h2>Research</h2>
        <p>To conduct market research, we sampled six different pomodoro timers:
        <ul>
            <li><a href="https://tomato-timer.com/">TomatoTimer</a></li>
            <li><a href="https://pomofocus.io/">PomoFocus</a></li>
            <li><a href="http://www.tomatotimers.com/">Tomato Timers</a></li>
            <li><a href="https://pomodor.app/timer?utm_source=zapier.com&utm_medium=referral&utm_campaign=zapier">Pomodor</a></li>
            <li><a href="https://www.marinaratimer.com/">Marinara Timer</a></li>
            <li><a href="https://pomodoro-tracker.com/">Pomodoro Tracker</a></li>
        </ul>
        <br/>
        <p>For each site, we did an analysis of the target market, features, pros/cons,
        as well as design related elements like affordances, signifiers, feedback, and 
        accessibility. <strong>Figures 1</strong> and <strong>2</strong> exemplify the original
        app and the annotations made in our analysis. This is similar to how the other apps 
        were critiqued.</p>
        <img src="./media/pomo-timer/pomofocus_app.png" alt="TBD">
        <p class="figure-title"><strong>Figure 1: </strong>Pomofocus app.</p>
        <br/>
        <img src="./media/pomo-timer/pomofocus_annotated.png" alt="TBD">
        <p class="figure-title"><strong>Figure 2: </strong>Annotated app with pros/cons in dark grey boxes.</p>
    `;

    (sectionsArr[3]).innerHTML = `
        <h2>Insights</h2>
    `;

    (sectionsArr[4]).innerHTML = `
        <h2>Concept Refinement</h2>
    `;

    (sectionsArr[5]).innerHTML = `
        <h2>Design</h2>
        <img src="./media/pomo-timer/pomo_home.png" alt="TBD">
        <img src="./media/pomo-timer/pomo_settings.png" alt="TBD">

    `;

    (sectionsArr[6]).innerHTML = `
        <h2>Result</h2>
        <iframe src="https://cse110team33.netlify.app/" title="Interactive Timer"></iframe>
        <p>Enjoy this interactive app. It may take a minute to load. If it does 
        not load within 5 minutes, please navigate here: 
        <a href="https://cse110team33.netlify.app/">cse110team33.netlify.app</a>.
    `;

    caseSectResult.appendChild (sectionsArr[0]);
}