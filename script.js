const views = {

    about: () => `
<p class="prompt">about</p>
<h1>Tobias Sarosi</h1>
<p class="role">fullstack engineer</p>
<p class="body-text">
    Writing code since 2021. I mostly build tools and applications to make my life easier.
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
        <h2>AudioRelayX</h2>
        <span class="stack">Flutter &middot; Kotlin &middot; C++ &middot; OPUS &middot; PCM &middot; UDP</span>
    </div>

    <p>
        Open-source, cross-platform audio streaming application that transmits system audio between devices over a local network. Pipeline handles audio capture, PCM framing, Opus encoding/decoding, UDP transmission, jitter buffering, and playback through separate components.
    </p>

    <div class="media-slot">
        <img
            src="src/AudioRelayX.png"
            alt="AudioRelayX screenshot"
        >
    </div>

    <p class="links">
        <a
            href="https://github.com/AudioRelayXX"
            target="_blank"
            rel="noopener"
        >github</a>
    </p>
</div>

<div class="project">
    <div class="project-head">
        <h2>Windows Bluetooth Profile Isolation</h2>
        <span class="stack">Python</span>
    </div>

    <p>
        Quick Autostart tool to disable specific Bluetooth devices on specific Windows accounts/profiles
    </p>

    <div class="media-slot">
        <img
            src="src/WindowsBluetoothProfileIsolation.png"
            alt="WindowsBluetoothProfileIsolation CLI"
        >
    </div>

    <p class="links">
        <a
            href="https://github.com/HumanBot000/WindowsBluetoothProfileIsolation"
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
        <span class="closed">closed source, sunset</span>
    </p>
</div>

<hr class="gradient">

<div class="other-projects-grid">

    <article class="other-project">
        <div class="other-project-top">
            <span class="other-project-category">personal</span>
            <span class="other-project-number">01</span>
        </div>

        <h2>Minecraft Server Administration</h2>

        <p>
            Managed a Minecraft server for 45 active players from my school.
            From delegating tasks to teams bigger than the usual three-person
            groups I work with in software development to utilizing AI to
            create custom plugins within just a few hours despite having
            almost no experience with them, this project taught me a lot,
            not just technical but also how to manage people.
        </p>

        <div class="media-slot">
            <img
                src="src/Minecraft-Server.png"
                alt="Minecraft server"
            >
        </div>

        <div class="other-project-footer">
            <span>2026</span>
        </div>
    </article>


    <article class="other-project">
        <div class="other-project-top">
            <span class="other-project-category">creative</span>
            <span class="other-project-number">02</span>
        </div>

        <h2>Project Deep Storage</h2>

        <p>
            Currently planning and building the best storage ever seen in
            technical Minecraft and documenting every step along the way.
        </p>

        <div class="other-project-document">
            <a
                href="https://docs.google.com/document/d/1nTKL2VBhUo-Ms4L-yPJauLkp6IiGAAtz/edit?usp=sharing&ouid=109129008044831371809&rtpof=true&sd=true"
                target="_blank"
                rel="noopener"
            >
                <span class="document-icon">[DOC]</span>

                <span class="document-info">
                    <strong>Project Deep Storage</strong>
                    <small>Google Docs · Documentation</small>
                </span>

                <span class="document-arrow">↗</span>
            </a>
        </div>

        <div class="other-project-footer">
            <span>2025 — ongoing</span>
        </div>
    </article>


    <article class="other-project">
        <div class="other-project-top">
            <span class="other-project-category">hobby</span>
            <span class="other-project-number">03</span>
        </div>

        <h2>Something Else</h2>

        <p>
            Not everything needs to be a technical project.
            Document whatever you find interesting.
        </p>

        <div class="media-slot">
            <img
                src="src/Other-Project.png"
                alt="Other project"
            >
        </div>

        <div class="other-project-footer">
            <span>2026</span>
            <span class="no-link">personal</span>
        </div>
    </article>

</div>
`,

    interests: () => `
<p class="prompt">interests</p>

<ul class="kv-list">
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
        a.classList.toggle("active", a.getAttribute("href") === "#" + name);
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

