async function getContributors() {
  var response = await fetch("/data/contributors.json")
  var data = await response.json()
  Object.keys(data).forEach(function(feature) {
    var newData = data[feature]
    newData.username = feature
    document.querySelector(".contributors").appendChild(createContributor(newData))
  })
  function createContributor(data) {
    var div = document.createElement("div")
    div.className = "contributor"
    var img = document.createElement("img")
    img.src = data.picture
    img.onerror = function() {
      img.remove()
    }
    var h3 = document.createElement("h3")
    h3.textContent = data.username
    var p = document.createElement("p")
    div.appendChild(img)
    div.appendChild(h3)
    div.appendChild(p)
    var a = document.createElement("a")
    a.href = data.link
    a.appendChild(div)
    return a
  }
}
getContributors()