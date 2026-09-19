const header = document.querySelector("[data-site-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileNavigation = document.querySelector(
    "[data-mobile-navigation]"
);

const mobileLinks =
    mobileNavigation?.querySelectorAll("a") ?? [];


/* =========================================
   HEADER SCROLL STATE
========================================= */

const setHeaderState = () => {
    if (!header) return;

    header.classList.toggle(
        "scrolled",
        window.scrollY > 20
    );
};


setHeaderState();


window.addEventListener(
    "scroll",
    setHeaderState,
    {
        passive: true
    }
);



/* =========================================
   MOBILE MENU
========================================= */

const closeMenu = () => {
    if (
        !menuButton ||
        !mobileNavigation ||
        !header
    ) {
        return;
    }


    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );


    menuButton.setAttribute(
        "aria-label",
        "Open navigation"
    );


    mobileNavigation.hidden = true;


    header.classList.remove(
        "menu-open"
    );


    document.body.classList.remove(
        "menu-open"
    );
};



const openMenu = () => {
    if (
        !menuButton ||
        !mobileNavigation ||
        !header
    ) {
        return;
    }


    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );


    menuButton.setAttribute(
        "aria-label",
        "Close navigation"
    );


    mobileNavigation.hidden = false;


    header.classList.add(
        "menu-open"
    );


    document.body.classList.add(
        "menu-open"
    );
};



menuButton?.addEventListener(
    "click",
    () => {

        const isOpen =
            menuButton.getAttribute(
                "aria-expanded"
            ) === "true";


        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    }
);



mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMenu
    );

});



window.addEventListener(
    "resize",
    () => {

        if (window.innerWidth > 900) {
            closeMenu();
        }

    }
);



window.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    }
);



/* =========================================
   SHOWER RITUAL FINDER
========================================= */

const ritualData = {

    refresh: {
        name: "VITALITY BAR™",

        copy:
            "Fresh, green and revitalizing. " +
            "A balanced morning reset powered " +
            "by Organic Spirulina Extract.",

        href: "#vitality"
    },


    brighten: {
        name: "GLOW BAR™",

        copy:
            "A golden daily ritual for " +
            "dull-looking skin, powered by " +
            "Organic Turmeric Extract for a " +
            "radiant, revived feel.",

        href: "#glow"
    },


    purify: {
        name: "DETOX BAR™",

        copy:
            "A deep, refreshing cleanse with " +
            "Activated Charcoal for skin that " +
            "feels fresh, purified and reset.",

        href: "#detox"
    },


    smooth: {
        name: "VELVET BAR™",

        copy:
            "A gentle polishing ritual with " +
            "Blackberry Extract and Volcanic Ash " +
            "for skin that feels smooth and renewed.",

        href: "#velvet"
    },


    comfort: {
        name: "MOISTURE BAR™",

        copy:
            "A soft, soothing cleanse with Oat Milk " +
            "for a comfortable, nourished finish " +
            "and an easy evening ritual.",

        href: "#moisture"
    }

};



const ritualButtons =
    document.querySelectorAll(
        "[data-ritual]"
    );


const ritualName =
    document.querySelector(
        "[data-ritual-name]"
    );


const ritualCopy =
    document.querySelector(
        "[data-ritual-copy]"
    );


const ritualLink =
    document.querySelector(
        "[data-ritual-link]"
    );



ritualButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const ritual =
                ritualData[
                    button.dataset.ritual
                ];


            if (
                !ritual ||
                !ritualName ||
                !ritualCopy ||
                !ritualLink
            ) {
                return;
            }


            ritualButtons.forEach(
                (item) => {
                    item.classList.remove(
                        "is-active"
                    );
                }
            );


            button.classList.add(
                "is-active"
            );


            ritualName.textContent =
                ritual.name;


            ritualCopy.textContent =
                ritual.copy;


            ritualLink.href =
                ritual.href;

        }
    );

});



/* =========================================
   COPYRIGHT YEAR
========================================= */

const year =
    document.querySelector(
        "[data-year]"
    );


if (year) {
    year.textContent =
        new Date().getFullYear();
}