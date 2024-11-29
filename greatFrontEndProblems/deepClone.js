function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)])
  );
}

const obj1 = { user: { role: 'admin' } };
deepClone(obj1)

// console.log(Object.entries({a:1,b:2}))