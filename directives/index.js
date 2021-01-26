export default {
  install (Vue) {
    // https://webpack.js.org/guides/dependency-management/#requirecontext
    const directives = require.context('./', true, /v-\w+$/)
    directives.keys().forEach((path) => {
      const directive = path.replace(/^\.\/v-(.*)$/, '$1')
      // 动态注册该目录下的所有指令
      Vue.directive(directive, directives(path).default || directives(path))
    })
  }
}
