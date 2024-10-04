// import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import jsdom from "jsdom"
import { parseFromString } from 'dom-parser';

// const jsdom = require("jsdom");
// const treeA = new jsdom.JSDOM( `<div><span>Foo</span><p>Para</p></div>`,
//   'text/html');
//   const treeB = new jsdom.JSDOM(`<div><span>Bar</span><p>Para</p></div>`,
//     'text/html');
// const treeA = new DOMParser().parseFromString(
//     `<div><span>Foo</span><p>Para</p></div>`,
//     'text/html',
//   );
  // const treeB = new DOMParser().parseFromString(
  //   `<div><span>Bar</span><p>Para</p></div>`,
  //   'text/html',
  // );
  const html1= `<div><span>Bar</span><p>Para</p></div>`
    const html2= `<div><span>Bar</span><p>Para</p></div>`
  const treeA=  parseFromString(html1,'text/html')
  const treeB=  parseFromString(html2,'text/html')



//   /**
//  * @param {Node} nodeA
//  * @param {Node} nodeB
//  * @return {boolean}
//  */
 function identicalDOMTrees(nodeA, nodeB) {

    if (nodeA.nodeType !== nodeB.nodeType) {
      return false;
    }
  
    if (nodeA.nodeType === Node.TEXT_NODE) {
      return nodeA.textContent === nodeB.textContent;
    }
  
    // We can assume it's an element node from here on.
    if (nodeA.tagName !== nodeB.tagName) {
      return false;
    }
  
    if (nodeA.childNodes.length !== nodeB.childNodes.length) {
      return false;
    }
  
    if (nodeA.attributes.length !== nodeB.attributes.length) {
      return false;
    }
  
    const hasSameAttributes = nodeA
      .getAttributeNames()
      .every(
        (attrName) =>
          nodeA.getAttribute(attrName) === nodeB.getAttribute(attrName),
      );
  
    if (!hasSameAttributes) {
      return false;
    }
  
    return Array.prototype.every.call(nodeA.childNodes, (childA, index) =>
      identicalDOMTrees(childA, nodeB.childNodes[index]),
    );
  }
  

console.log(  identicalDOMTrees(treeA.body, treeB.body))