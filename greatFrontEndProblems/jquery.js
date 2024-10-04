/**
 * @param {string} className
 * @return {Set<string>}
 */
function classNameTokenSet(className) {
    return new Set(className.trim().split(/\s+/));
  }
  
  /**
   * @param {string} selector
   * @return {{toggleClass: Function, addClass: Function, removeClass: Function}}
   */
function $(selector) {
    const element = document.querySelector(selector);
  
    return {
      /**
       * @param {string} className
       * @param {boolean} state
       * @return {Object|void}
       */
      toggleClass: function (className, state) {
        debugger;
        // No-op if there is no matching element.
        if (element == null) {
          return this;
        }
  
        const classes = classNameTokenSet(className);
        const elementClasses = classNameTokenSet(element.className);
  
        classes.forEach((cls) => {
          const shouldRemove =
            state === undefined ? elementClasses.has(cls) : !state;
          
            shouldRemove
            ? elementClasses.delete(cls) // Remove if state is not defined and element contains the class or state is false.
            : elementClasses.add(cls);
        });
  
        element.className = Array.from(elementClasses).join(' ');
        return this;
      },
      /**
       * @param {string} className
       * @return {Object}
       */
      addClass: function (className) {
        this.toggleClass(className, true);
        return this;
      },
      /**
       * @param {string} className
       * @return {Object}
       */
      removeClass: function (className) {
        this.toggleClass(className, false);
        return this;
      },
    };
  }

  console.log(document)
  
  const element1 = $('#test1');

//   // Initial state: class="foo bar"
//   console.assert(element1.toggleClass('foo').toggleClass('bar').toggleClass('baz').toggleClass('foo').toggleClass('baz'), 'Test Case 1 Failed');

  console.log(element1.addClass('hello-world').addClass('nosense'))

let myVal=undefined
console.log(!myVal)