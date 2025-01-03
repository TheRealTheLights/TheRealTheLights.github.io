const header = document.querySelector('.header');
const title = document.querySelector('.header h1');
const subtitle = document.querySelector('.header p');

/* BACKGROUND */
const maxHeaderHeight = 310;
const minHeaderHeight = 110;


/* TEXT SIZES [REM] */
const maxFontSize_Title = 6; 
const minFontSize_Title = 4;

const maxFontSize_Subtitle = 2.2;
const minFontSize_Subtitle = 2;


/* TEXT STROKES [PX] */
const maxTextStroke_Title = 2.5;
const minTextStroke_Title = 1.5;

const maxTextStroke_Subtitle = 1;
const minTextStroke_Subtitle = 0.1;


/* SCRIPT */
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

const adjustHeaderHeight = () => {
    const scrollY = window.scrollY;
    const newHeight = Math.max(minHeaderHeight, maxHeaderHeight - scrollY);
    const scale = newHeight / maxHeaderHeight;
    const newFontSize_Title = Math.max(minFontSize_Title, maxFontSize_Title * scale);
    const newFontSize_Subtitle = Math.max(minFontSize_Subtitle, maxFontSize_Subtitle * scale);
    const newTextStroke_Title = Math.max(minTextStroke_Title, maxTextStroke_Title * scale);

    header.style.height = `${newHeight}px`;
    title.style.fontSize = `${newFontSize_Title}rem`;
    title.style.webkitTextStrokeWidth = `${newTextStroke_Title}px`;
};

window.addEventListener('scroll', () => {
    requestAnimationFrame(adjustHeaderHeight); // Ensures smooth and synchronized updates
});