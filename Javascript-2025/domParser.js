const str = `<div>
<p>hello world</p>
</div>`

console.log(new DOMParser(str))
const doc = new DOMParser().parseFromString(str, 'text/html')
console.log(doc)
console.log(doc.body.firstChild)