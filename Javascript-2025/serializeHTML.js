// function serializeHTML(element, indent = '\t') {

//     function traverse(element, depth = 0) {

//         if (typeof element === 'string') {
//             return `${indent.repeat(depth)}${element}`
//         }


//         return [
//             `${indent.repeat(depth)}<${element.tag}>`,
//             ...element.children.flatMap(child => traverse(child, depth + 1)),
//             `${indent.repeat(depth)}</${element.tag}>`
//         ].join('\n')

//     }

//     return traverse(element)
// }


// const tree = {
//     tag: 'body',
//     children: [
//         { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
//         { tag: 'div', children: ['baz'] },
//     ],
// };

// console.log(serializeHTML(tree))
debugger;
