function update_deep_inner (obj, path_f_rev) {
    if (path_f_rev.length == 1) {
        var fv = path_f_rev[0]
        if (fv instanceof Function) {
            return fv(obj)
        } else {
            return fv
        }
    }
    if (path_f_rev.length > 1) {
        const path1 = path_f_rev.pop()
        if (obj === undefined) {
            obj = Number.isInteger(path1)? []: {}
        }
        const res = update_deep_inner(obj[path1], path_f_rev)

        if (obj.toString() === '[object Object]') {
            const t = {}
            t[path1] = res
            return Object.assign({}, obj, t)
        } else if (obj instanceof Array) {
            let ret = obj.slice()
            ret[path1] = res
            return ret
        } else {
            throw 'ValueError'
        }
    }
    return obj
}

function update_deep (obj, path_f) {
    return update_deep_inner(obj, path_f.reverse())
}

module.exports =  update_deep
