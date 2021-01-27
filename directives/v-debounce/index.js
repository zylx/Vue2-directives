const debounce = {
  inserted: function (el, { value }) {
    let timer
    el.addEventListener('click', () => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        value()
      }, 1000)
    })
  },
}

export default debounce