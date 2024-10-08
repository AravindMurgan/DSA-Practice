/**
 * @param {string} selector
 * @return {{toggleClass: Function, addClass: Function, removeClass: Function}}
 */
function classNamesTokenSet(classNames){
    return new Set(classNames.trim().split(/\s+/));
  }

export default function $(selector) {
  const element = document.querySelector(selector);

  

  return {
    /**
     * @param {string} className
     * @param {boolean} [state]
     * @return {Object|void}
     */
    toggleClass: function (className, state) {
      const classes=classNamesTokenSet(className)
      const elementClasses=classNamesTokenSet(className);

      classes.forEach((cls)=>{
        const shouldRemove = state === undefined ? elementClasses.has(cls): false;

        shouldRemove ? elementClasses.delete(cls):elementClasses.add(cls);
      })

      element.className= Array.from(elementClasses).join(' ')
      return this;
    },
    /**
     * @param {string} className
     * @return {Object}
     */
    addClass: function (className) {
      this.toggleClass(className,true);
      return this;
    },
    /**
     * @param {string} className
     * @return {Object}
     */
    removeClass: function (className) {
        this.toggleClass(className,false);
      return this;
    },
  };
}