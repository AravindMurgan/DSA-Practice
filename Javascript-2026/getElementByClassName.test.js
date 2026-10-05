import { JSDOM } from 'jsdom';
import { strict as assert } from 'assert';
import { test } from 'node:test';
import getElementsByClassName from './getElementByClassName.js';

function makeDOM(html) {
  const dom = new JSDOM(`<body>${html}</body>`);
  return dom.window.document.body;
}

test('returns elements matching a single class', () => {
  const root = makeDOM(`
    <div class="foo">
      <span class="foo">match</span>
      <span class="bar">no match</span>
    </div>
  `);
  const result = getElementsByClassName(root, 'foo');
  assert.equal(result.length, 2);
});

test('returns elements matching multiple classes', () => {
  const root = makeDOM(`
    <div class="foo bar">match</div>
    <div class="foo">no match</div>
    <div class="bar">no match</div>
  `);
  const result = getElementsByClassName(root, 'foo bar');
  assert.equal(result.length, 1);
});

test('returns empty array when no matches', () => {
  const root = makeDOM(`<div class="baz">no match</div>`);
  const result = getElementsByClassName(root, 'foo');
  assert.deepEqual(result, []);
});

test('does not include the root element itself', () => {
  const root = makeDOM(`<div class="foo"></div>`);
  root.className = 'foo';
  const result = getElementsByClassName(root, 'foo');
  assert.equal(result.length, 1); // only the child div, not root
});

test('handles deeply nested elements', () => {
  const root = makeDOM(`
    <div>
      <div>
        <div>
          <span class="deep">match</span>
        </div>
      </div>
    </div>
  `);
  const result = getElementsByClassName(root, 'deep');
  assert.equal(result.length, 1);
  assert.equal(result[0].textContent.trim(), 'match');
});

test('handles extra spaces in classNames string', () => {
  const root = makeDOM(`<div class="foo bar">match</div>`);
  const result = getElementsByClassName(root, '  foo   bar  ');
  assert.equal(result.length, 1);
});

test('returns empty array for empty tree', () => {
  const root = makeDOM('');
  const result = getElementsByClassName(root, 'foo');
  assert.deepEqual(result, []);
});

test('returns multiple matches across siblings and nested', () => {
  const root = makeDOM(`
    <div class="item">1</div>
    <div class="item">2</div>
    <div>
      <span class="item">3</span>
    </div>
  `);
  const result = getElementsByClassName(root, 'item');
  assert.equal(result.length, 3);
});
