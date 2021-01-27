const permission = {
  inserted: function (el, { value }, vnode) {
    const permission = value
    if (permission) {
      const permissionArr = vnode.context.$route.meta.btnPermissions || []
      const hasPermission = checkPermission(permission, permissionArr)
      // meta: { btnPermissions: ['admin'] } 路由配置页面需要的权限，没有设置则不检查权限
      if (permissionArr.length > 0 && !hasPermission) {
        // 没有权限，移除 Dom 元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}

function checkPermission (key, permissionArr) {
  return permissionArr.indexOf(key) > -1
}

export default permission