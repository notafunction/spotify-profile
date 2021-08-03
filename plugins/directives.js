import Vue from 'vue'

Vue.directive('click-outside', {
  inserted: (el, binding, vnode) => {
    // assign event to the element
    el.clickOutsideEvent = function (event) {
      // here we check if the click event is outside the element and it's children
      if (!(el === event.target || el.contains(event.target))) {
        // if clicked outside, call the provided method
        vnode.context[binding.expression](event)
      }
    }
    // register click and touch events
    document.body.addEventListener('click', el.clickOutsideEvent)
    document.body.addEventListener('touchstart', el.clickOutsideEvent)
  },
  unbind(el) {
    // unregister click and touch events before the element is unmounted
    document.body.removeEventListener('click', el.clickOutsideEvent)
    document.body.removeEventListener('touchstart', el.clickOutsideEvent)
  },
  stopProp(event) {
    event.stopPropagation()
  },
})
