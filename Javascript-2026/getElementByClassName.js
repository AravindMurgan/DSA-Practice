export default function getElementsByClassName(elementParam, classNames) {

    const result = []
    function traverse(element) {
        if (!element) return;

        const hasAllClassNames = classNames.split(' ').filter(Boolean).every(cls => element.classList.contains(cls));
        if (hasAllClassNames) {
            result.push(element)
        }


        for (let el of element.children) {
            traverse(el);
        }
    }

    for (let el of elementParam.children) {
        traverse(el);
    }

    return result;
}

const doc = new DOMParser().parseFromString(
    `<div class="foo bar baz">
    <span class="bar baz">Span</span>
    <p class="foo baz">Paragraph</p>
    <div class="foo bar"></div>
  </div>`,
    'text/html',
);

getElementsByClassName(doc.body, 'foo bar');
// [div.foo.bar.baz, div.foo.bar] <-- This is an array of elements.
