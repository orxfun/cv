document.addEventListener("DOMContentLoaded", () => {
    setMoreLessButtonEvents();
    setThemeColorEvents();
});

function setThemeColorEvents() {
    function setThemeColor(color) {
        document.documentElement.style.setProperty('--theme-color', color);
    }

    const colors = document.getElementsByClassName("colors");
    const children = colors.length === 0 ? null : colors[0].children;
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

    const btnmore = document.getElementsByClassName("btnmore");
    for (let i = 0; i < btnmore.length; i++) {
        const dots = btnmore[i];
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
