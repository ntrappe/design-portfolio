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
        <ul class="link-list">
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
        <p>For the design of our app, we knew that the single most important aspect was 
        the timer. That would have to be prominent and viewable regardless of the browser 
        window size or device. Similarly, we wanted the user to follow the pomodoro method 
        so we included just one button that would toggle between <strong>Start</strong> 
        and <strong>Reset</strong>. The pomodoro method doesn't allow you to pause the 
        timer (it's not a successful pomodoro) so, while the timer is running, they are only 
        allowed to restart it. </p>
        <p>Given that our target audience consisted of young software engineers, we knew that 
        the following customizations (located in <strong>Settings</strong>) would be necessary:
        <ul>
            <li>Customize length of a work session (defaults to 25 min)</li>
            <li>Customize length of a short break (defaults to 5 min)</li>
            <li>Customize length of a long break (defaults to 15 min)</li>
            <li>Turn on calm mode if seconds are distracting</li>
            <li>Turn on dark mode (common for devs)</li>
            <li>Turn on accessibility to use keystrokes if precise clicking is hard</li>
            <li>Use sounds to indicate the status of the timer (if away from the window and cannot visibly see changes)</li>
        </ul>
        </p>
        <br/>
        <img src="./media/pomo-timer/ADR_set.png" alt="TBD">
        <p class="figure-title"><strong>Figure 1:</strong> highlights a few of the design decisions we made. You can 
        see the full list and all the Architectural Design Decisions (ADRs) that were made 
        <a href="https://github.com/ntrappe/cse110-w21-group33/wiki">here</a>.</p>
        <br/>
        <br/>
        <p>For aesthetics, the purpose of the pomodoro technique is to minimize distractions and maximize 
        productivity so we knew that a minimal interface was the only route to take. The timer is the most prominent 
        feature and has the brightest text color.</p>
        <img src="./media/pomo-timer/timer-home.png" alt="TBD">
        <p>The mode (e.g. 'work', 'short break', 'long break') is shown above the timer with each different mode having 
        a different color so the user can, at a quick glance, know what they should be doing. Right below the mode, there 
        are 4 squares that represent the 4 pomodoros in a set (this is based on the technique). After each successful 
        pomodoro, a square will be filled in with green.</p>
        <iframe src="./media/pomo-timer/go_through_pomo_set.mov" title="Interactive Timer"></iframe>
        <p>Settings:</p>
        <img src="./media/pomo-timer/pomo_settings.png" alt="TBD">
        <p class="figure-title"><strong>Figure 2:</strong> settings with the customization options (like length of 
        a work session, volume, and keyboard shortcuts).</p> 
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