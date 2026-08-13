
const views = {

    about: () => `
<p class="prompt">about</p>
<h1>Tobias Sarosi</h1>
<p class="role">fullstack engineer / flutter dev</p>
<p class="body-text">
    Writing code since 2021, starting because online classes were boring,
    and it stuck. I mostly build tools and applications to make my life easier.
</p>
<p class="body-text dim">
    Design isn't really my thing.
</p>
    `,

    projects: () => `
<p class="prompt">projects</p>

<div class="project">
    <div class="project-head">
        <h2>BoilerGen</h2>
        <span class="stack">Python &middot; Typer</span>
    </div>

    <p>
        CLI for managing boilerplate templates. Custom template syntax and
        parsing engine, placeholders, tags, dependencies and injections,
        with templates pulled directly from a Git remote.
    </p>

    <div class="media-slot">
        <img
            src="src/Boilergen.gif"
            alt="BoilerGen CLI demonstration"
        >
    </div>

    <p class="links">
        <a
            href="https://github.com/DevTool-Superset/BoilerGen"
            target="_blank"
            rel="noopener"
        >github</a>

        <a
            href="https://pypi.org/project/boilergen/"
            target="_blank"
            rel="noopener"
        >pypi</a>
    </p>
</div>


<div class="project">
    <div class="project-head">
        <h2>gix</h2>
        <span class="stack">Python &middot; Typer</span>
    </div>

    <p>
        CLI for managing several Git repos from inside a subdirectory,
        regardless of which directory you're currently in. Keeps Git's
        native autocomplete intact and adds its own autocomplete for
        repo aliases.
    </p>

    <div class="media-slot">
        <img
            src="src/Gix.png"
            alt="GIX CLI demonstration"
        >
    </div>

    <p class="links">
        <a
            href="https://github.com/DevTool-Superset/gix"
            target="_blank"
            rel="noopener"
        >github</a>

        <a
            href="https://pypi.org/project/gix-cli/"
            target="_blank"
            rel="noopener"
        >pypi</a>
    </p>
</div>


<div class="project">
    <div class="project-head">
        <h2>Chess Engine</h2>
        <span class="stack">Python</span>
    </div>

    <p>
        School assignment doubling as an intro to writing a scientific
        paper with a practical component. Good enough that I've managed to
        beat myself with it a couple of times.
    </p>

    <div class="media-slot media-pdf">
        <a
            href="https://github.com/HumanBot000/kol_schachengine/blob/master/KoLL_2026_Computerschach_Sarosi_Tobias.pdf"
            target="_blank"
            rel="noopener"
            class="pdf-link"
        >
            <span class="pdf-icon">[PDF]</span>
            <span>KoLL_2026_Computerschach_Sarosi_Tobias.pdf</span>
        </a>
    </div>

    <p class="links">
        <a
            href="https://github.com/HumanBot000/kol_schachengine"
            target="_blank"
            rel="noopener"
        >github</a>
    </p>
</div>


<div class="project">
    <div class="project-head">
        <h2>P2P3D Backend</h2>
        <span class="stack">
          Python &middot; FastAPI &middot; Cloudflare R2 &middot; Stripe &middot; Redis &middot; Doppler
        </span>
    </div>

    <p>
        Backend for a maker-run 3D printing marketplace. Dropped it after
        the frontend dev left the project, so it's unfinished &mdash;
        user, order, and payment handling were built mostly from scratch.
    </p>

    <div class="media-slot">
        <img
            src="src/P2P3D-Swagger.png"
            alt="P2P3D Swagger"
        >
    </div>

    <p class="links">
        <span class="closed">closed source</span>
    </p>
</div>


<div class="project">
    <div class="project-head">
        <h2>Vocabulingo</h2>
        <span class="stack">Flutter &middot; Python &middot; Flask</span>
    </div>

    <p>
        My intro to writing Flutter properly. Practice Duolingo-style
        vocabulary lists in a slideshow format.
    </p>

    <div class="media-slot">
        <img
            src="src/Vocabulingo.png"
            alt="Vocabulingo screenshot"
        >
    </div>

    <p class="links">
        <a
            href="https://github.com/HumanBot000/vocabulingo"
            target="_blank"
            rel="noopener"
        >github</a>
    </p>
</div>


<div class="project">
    <div class="project-head">
        <h2>SchoolMate</h2>
        <span class="stack">Flutter &middot; Supabase</span>
    </div>

    <p>
        Cross-platform school companion app with a personalized dashboard,
        schedule, homework tracker with reminders, grade tracking that
        adapts to whatever grading system your school uses, and holidays.
    </p>

    <div class="media-slot">
        <img
            src="src/Schoolmate-Dashboard.jpg"
            alt="SchoolMate dashboard"
        >
    </div>

    <p class="links">
        <a
            href="https://github.com/HumanBot000/SchoolMate"
            target="_blank"
            rel="noopener"
        >github</a>
    </p>
</div>



<div class="project">
    <div class="project-head">
        <h2>plain.app</h2>
        <span class="stack">JavaScript &middot; HTML &middot; CSS</span>
    </div>

    <p>
        Proof of concept for a localStorage-based, extendable app launcher.
        Snippets get pasted into the browser console and saved persistently.
    </p>

    <div class="media-slot">
        <img
            src="src/plain-app.png"
            alt="plain.app dashboard"
        >
    </div>

    <p class="links">
        <a
            href="https://github.com/HumanBot000/plain.app"
            target="_blank"
            rel="noopener"
        >github</a>
    </p>
</div>


<div class="project">
    <div class="project-head">
        <h2>SkipTheCrab</h2>
        <span class="stack">Flutter &middot; FFmpeg &middot; Whisper</span>
    </div>

    <p>
        Android app that transcribes podcasts automatically and uses AI to
        detect and auto-skip ads.
    </p>

    <div class="media-slot">
        <img
            src="src/SkipTheCrab.png"
            alt="SkipTheCrab app"
        >
    </div>

    <p class="links">
        <span class="closed">closed source</span>
    </p>
</div>


<div class="project">
    <div class="project-head">
        <h2>AI Docs</h2>
        <span class="stack">Python</span>
    </div>

    <p>
        CLI tool that scans a codebase and generates documentation for it
        &mdash; built before AI coding assistants made this the obvious thing to do.
    </p>

    <div class="media-slot">
        <img
            src="src/AI-docs.png"
            alt="AI Docs CLI"
        >
    </div>

    <p class="links">
        <span class="closed">closed source</span>
    </p>
</div>
`,

interests: () => `
<p class="prompt">interests</p>

<ul class="kv-list">
    <li>
        <span class="key">rf</span>
        meshtastic, licensed ham radio operator
    </li>

    <li>
        <span class="key">electronics</span>
        smarthome, esp/arduino, pcb design
    </li>

    <li>
        <span class="key">making</span>
        3d printing
    </li>

    <li>
        <span class="key">gaming</span>
        minecraft, the finals
    </li>
</ul>
`,

contact: () => `
<p class="prompt">contact</p>

<ul class="kv-list">
    <li>
        <span class="key">mail</span>
        <a href="mailto:tobias.sarosi@gmail.com">
            tobias.sarosi@gmail.com
        </a>
    </li>

    <li>
        <span class="key">github</span>
        <a
            href="https://github.com/HumanBot000"
            target="_blank"
            rel="noopener"
        >HumanBot000</a>
    </li>

    <li>
        <span class="key">linkedin</span>
        <a
            href="https://www.linkedin.com/in/tobias-sarosi-a8aa25196/"
            target="_blank"
            rel="noopener"
        >tobias-sarosi</a>
    </li>

    <li>
        <span class="key">medium</span>
        <a
            href="https://medium.com/@tobias.sarosi"
            target="_blank"
            rel="noopener"
        >@tobias.sarosi</a>
    </li>
</ul>
`
};


function render(name) {
if (!views[name]) {
    name = "about";
}

document.getElementById("view-content").innerHTML = views[name]();

document.querySelectorAll("nav a").forEach(a => {
    a.classList.toggle(
        "active",
        a.getAttribute("href") === "#" + name
    );
});
}


window.addEventListener("hashchange", () => {
render(location.hash.slice(1));
});

render(location.hash.slice(1) || "about");



function openLightbox(src, alt = "") {
const lightbox = document.createElement("div");
lightbox.className = "lightbox";

const close = document.createElement("span");
close.className = "lightbox-close";
close.textContent = "[close]";

const image = document.createElement("img");
image.src = src;
image.alt = alt;

lightbox.appendChild(close);
lightbox.appendChild(image);

document.body.appendChild(lightbox);
document.body.style.overflow = "hidden";


function closeLightbox() {
    lightbox.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleKey);
}


function handleKey(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
}


close.addEventListener("click", event => {
    event.stopPropagation();
    closeLightbox();
});


lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});


document.addEventListener("keydown", handleKey);
}


document.addEventListener("click", event => {
const image = event.target.closest(".media-slot img");

if (!image) {
    return;
}

openLightbox(image.src, image.alt);
});

