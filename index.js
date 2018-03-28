const flat = (arr, res) => {
  let cur
  let len = arr.length
  for (let i = 0; i < len; i++) {
    cur = arr[i]
    Array.isArray(cur) ? flat(cur, res) : res.push(cur)
  }
  return res
}

module.exports = function (arr) {
  return flat(arr, [])
}
