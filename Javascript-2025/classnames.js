function classNames(...args) {
  const classes = []

  args.forEach(item => {
    if (!item) return;

    if (typeof item === 'string') {
      classes.push(item)
      return;
    }

    if (Array.isArray(item) && item.length) {
      classes.push(classNames(...item))
      return;
    }

    if (typeof item === 'object') {
      for (let key in item) {
        if (Object.hasOwn(key, item)) {
          if (item[key]) {
            classes.push(key)
          }
        }
      }
    }
  })

  return classes.join(' ')
}
console.log(classNames({ 'foo-bar': true }))