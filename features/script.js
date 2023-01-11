async function getFeatures() {
  var response = await fetch("https://raw.githubusercontent.com/STForScratch/ScratchTools/main/features/features.json")
  var data = await response.json()
  data.forEach(function(feature) {
    document.querySelector(".features").appendChild(createFeature(feature))
  })
  function createFeature(data) {
    var div = document.createElement("div")
    div.className = "feature"
    var img = document.createElement("img")
    img.src = "https://stforscratch.github.io/data/images/"+data.file+".png"
    img.onerror = function() {
      img.remove()
    }
    var h3 = document.createElement("h3")
    h3.textContent = data.title
    var p = document.createElement("p")
    p.textContent = data.description
    div.appendChild(img)
    div.appendChild(h3)
    div.appendChild(p)
    return div
  }
}
getFeatures()