const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style);


const initialColors = {
    bg: getStyle(html, "--bg"),
    topBg: getStyle(html, "--top-bg"),
    cardBg: getStyle(html, "--card-bg"),
    cardHover: getStyle(html, "--card-hover"),
    mainText: getStyle(html, "--main-text"),
    secondaryText: getStyle(html, "--secondary-text"),
    overviewColor: getStyle(html, "--overview-color"),
};

const lightMode = {
    bg: "hsl(0, 0%, 100%)",
    topBg: "hsl(225, 100%, 98%)",
    cardBg: "hsl(227, 47%, 96%)",
    cardHover: "hsl(232, 33%, 91%)",
    mainText: "hsl(230, 17%, 14%)",
    secondaryText: "hsl(228, 12%, 44%)",
    overviewColor: "hsl(228, 12%, 44%)",
};

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();


const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    );
};

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
});