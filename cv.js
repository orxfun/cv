document.addEventListener("DOMContentLoaded", () => {
    setMoreLessButtonEvents();
    setThemeColorEvents();
    setDarkModeEvents();
});

function setDarkModeEvents() {
    function getDarkModeDiv(className) {
        const buttons = document.getElementsByClassName(className);
        return buttons.length !== 2 ? null : buttons
    }
    const moon = getDarkModeDiv("moon");
    const sun = getDarkModeDiv("sun");

    function setModeMoon() {
        moon[0].style.display = "inherit";
        sun[0].style.display = "none";
        moon[1].style.display = "inherit";
        sun[1].style.display = "none";
        document.documentElement.style.setProperty('--bg-color', "black");
        document.documentElement.style.setProperty('--color', "white");
        setThemeColor('#ff3300');
    }

    function setModeSun() {
        moon[0].style.display = "none";
        sun[0].style.display = "inherit";
        moon[1].style.display = "none";
        sun[1].style.display = "inherit";
        document.documentElement.style.setProperty('--bg-color', "white");
        document.documentElement.style.setProperty('--color', "black");
        setThemeColor('#006bb3');
    }

    moon[0]?.addEventListener('click', function (_) { setModeSun() });
    sun[0]?.addEventListener('click', function (_) { setModeMoon() });
    moon[1]?.addEventListener('click', function (_) { setModeSun() });
    sun[1]?.addEventListener('click', function (_) { setModeMoon() });
}

function setThemeColor(color) {
    document.documentElement.style.setProperty('--theme-color', color);
}

function setThemeColorEvents() {
    const colors = document.getElementsByClassName("theme-colors");
    const children = colors.length === 0 ? [] : colors[0].children;
    for (let i = 0; i < children.length; i++) {
        const node = children[i];
        const color = node.style.backgroundColor;
        node.addEventListener('mouseover', function (_) {
            setThemeColor(color);
        });
    }
}

function setMoreLessButtonEvents() {
    function show(node) {
        node.style.display = "inline-block";
    }

    function hide(node) {
        node.style.display = "none";
    }

    const btnMore = document.getElementsByClassName("btnmore");
    for (let i = 0; i < btnMore.length; i++) {
        const dots = btnMore[i];
        dots.addEventListener('click', function (e) {
            for (let j = 0; j < e.target.parentNode.children.length; j++) {
                const child = e.target.parentNode.children[j];
                if (child.className === "more") {
                    show(child);
                } else if (child.className === "btnmore") {
                    hide(child);
                } else if (child.className === "btnless") {
                    show(child);
                }
            }
        });
    }

    const btnless = document.getElementsByClassName("btnless");
    for (let i = 0; i < btnless.length; i++) {
        const dots = btnless[i];
        dots.addEventListener('click', function (e) {
            for (let j = 0; j < e.target.parentNode.children.length; j++) {
                const child = e.target.parentNode.children[j];
                if (child.className === "more") {
                    hide(child);
                } else if (child.className === "btnmore") {
                    show(child);
                } else if (child.className === "btnless") {
                    hide(child);
                }
            }
        });
    }
}
