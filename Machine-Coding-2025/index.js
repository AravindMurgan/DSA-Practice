const domParser = new DOMParser()
console.log(typeof domParser)
console.log(domParser)

const doc = new DOMParser().parseFromString(
    `<!DOCTYPE html>
    <body>
      <h1>Heading1</h1>
      <h2>Heading2a</h2>
      <h2>Heading2b</h2>
      <h3>Heading3a</h3>
      <h3>Heading3b</h3>
      <h4>Heading4</h4>
      <h2>Heading2c</h2>
    </body>`,
    'text/html',
  );

  console.log(doc)