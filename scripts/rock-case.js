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
        <p>To address this problem, we found that the biggest obstacles were transportation, 
        amount of free time, and awareness. We can't physically provide transportation nor change 
        the amount of time millennials have. However, we can address the issue of 
        <b>awareness</b>.</p>
    `;

    (sectionsArr[2]).innerHTML = `
        <h2>Research</h2>
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