function serializeHTML(root) {
    function traverse(root) {
        return root.children
            ? [`<${root.tag}>`, ...root.children.flatMap(traverse), `</${root.tag}>`]
            : root;
    }

    return traverse(root).join('\n');
}

const tree = {
    tag: 'body',
    children: [
        { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
        { tag: 'div', children: ['baz'] },
    ],
};
serializeHTML(tree)