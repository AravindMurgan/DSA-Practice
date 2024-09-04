const doc = new DOMParser().parseFromString(
    `<div id="foo">
      <span>Span</span>
      <p>Paragraph</p>
      <div id="bar">Div</div>
    </div>`,
    'text/html',
  );
  
for(let child of doc.body.children){
    console.log(child)
}