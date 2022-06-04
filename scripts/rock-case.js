/* Constants */
const NUM_SECTIONS = 7; 

/* Grab sections */
const caseSectKeys   = document.getElementById ('section-keys');
const caseSectResult = document.getElementById ('section-container');
const sectionButtons = document.getElementsByClassName ('case-section');
const colorIcon = document.getElementById('color-scheme');

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
        <p><b>Rock</b> is a mobile app that handles all the nitty and gritty details of a 
        national park visit so users can breathe in the fresh, stress-free air. Selecting 
        a national park or a hike can be as daunting and exhausting as climbing a 
        national park. <b>Rock</b> uses matching technology to find parks that best fit a 
        user’s needs, wants, and abilities. It’s hard for beginners to know what they need 
        to know about parks or hikes so <b>Rock</b> makes all the conditions, equipment 
        requirements, and restrictions as transparent as an alpine lake. <b>Rock</b> can be 
        accessed anywhere, from the deepest cave to the most remote desert.</p>
        <img src="./media/rock/market_rock.png" alt="three screens with national parks">
        <h2>Role</h2>
        <p>Project Lead / Designer</p>
    `;

    (sectionsArr[1]).innerHTML = `
        <h2>Concept Background</h2>
        <p>National parks are one of the most beloved aspects of the United States. Millions
        flock each year to the country just for the chance to see the waterfalls, glaciers,
        peaks, deserts, and more.</p>
        <p>National park visitation has decreased from previous generations to the current 
        generation of millennials. This poses a problem to the National Park Service (NPS).
        The NPS depends on park visitation to fund the maintencance and access to these 
        natural wonders. With a dwindling audience, the NPS needs to find a way to attract 
        millennials and keep the national park system alive.</p>
        <br/>
        <p class="quote">"If we were a business and [millennials] were our clientele, then 
        over the long term, we would probably be out of business."</p>
        <p class="author">Johnathan Jarvis, NPS Director</p>
        <br/>
        <p>To address this problem, we found that the biggest obstacles were transportation, 
        amount of free time, and awareness. We can't physically provide transportation nor change 
        the amount of time millennials have. However, we can address the issue of 
        <b>awareness</b>.</p>
    `;

    (sectionsArr[2]).innerHTML = `
        <h2>Research</h2>
        <p>Our research consisted of both interviewing the backgrounds and experiences of both 
        novice millennials and park rangers as well as an analysis of competitors on the market.</p>
        <img src="./media/rock/racial_stats.png" alt="50+ millennials and 10+ park surveyed">
        <p>We saw two distinct divides in the target population across 10 competitive apps. The apps 
        developed by the park service or government were all geared towards families and older 
        persons (35+). Apps revolving around planning (e.g. HipCamp, Wanderlog) focused on younger 
        persons (18-35). The review sites (Yelp, TripAdvisor) could aim for a broad population but the 
        majority of reviews are older (35+). Apps that provide detailed information (AllTrails, NPS, CA Gov) 
        all assume users have previous knowledge of hiking as they use hiking/camping jargon, have very 
        detailed pieces of information, and may have offline functions (assuming long backpacking trips). 
        On the other hand, general search (Google Search, Apple Maps) or planning apps cater to novices 
        who are not expected to be at all familiar with hiking or national parks.</p>
        <p>We want to target novice hikers who do not know what they do not know and are overwhelmed 
        by the planning process. We want to inform without assuming background knowledge (what the NPS, 
        CA Gov, AllTrails fail to do) but also provide planning help. There is also a lack of searching 
        and filtering abilities. Our app can fill this gap by allowing users to specify their needs 
        (e.g. cost, difficulty, equipment) and then find the best matches. This will offload much of the work 
        on behalf of the user.</p>
        <img src="./media/rock/rock_market_research.png" alt="https://docs.google.com/document/d/1eKqaEfm-ZcYMHUdmKS3_RhwLTFxx08vJjQCDKVrxwAA/edit">
    `;

    (sectionsArr[3]).innerHTML = `
        <h2>Insights</h2>
    `;

    (sectionsArr[4]).innerHTML = `
        <h2>Concept Refinement</h2>
    `;

    (sectionsArr[5]).innerHTML = `
        <h2>Design</h2>
    `;

    caseSectResult.appendChild (sectionsArr[0]);
}