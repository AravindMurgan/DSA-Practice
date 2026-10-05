// import { JSDOM } from 'jsdom';
function getElementsByStyle(element, fontSize, px) {

    function traverse(element) {
        console.log(element);
        const style = window.getComputedStyle(element);
        console.log(style)

        for (let el of element.children) {

            traverse(el)
        }
    }

    for (let el of element.children) {
        traverse(el)
    }
}

const html = new DOMParser().parseFromString(
    `<div>
    <span style="font-size: 12px">Span</span>
    <p style="font-size: 12px">Paragraph</p>
    <blockquote style="font-size: 14px">Blockquote</blockquote>
  </div>`,
    'text/html',
);


// const dom = new JSDOM(html);
// const { window } = dom;
// const { document, getComputedStyle } = window;
console.log(
    getElementsByStyle(document.body, 'font-size', '12px'))