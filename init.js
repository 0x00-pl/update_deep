function update_deep_inner (obj, path_f_rev) {
  if (path_f_rev.length > 1) {
    const path1 = path_f_rev.pop()
    const res = update_deep_inner(obj[path1], path_f_rev)
    const t = {}
    t[path1] = res
    return object.assign({}, obj, t)
  }
  if (path_f_rev.length == 1) {
    return path_f_rev[0](obj)
  }
  return obj
}

function update_deep (obj, path_f) {
  return update_deep_inner(obj, path_f.reverse())
}

export default update_deep
