var pathList = path.split('/')
var first = '/' === path[0] ? '/' : ''
var result = []
for (var i = 0, l = pathList.length; i < l; ++i) {
  if (pathList[i].length !== 0 && pathList[i] !== '.') {
    if ('..' === pathList[i]) result.pop()
    else result.push(pathList[i])
  }
}
return first + result.join('/')
