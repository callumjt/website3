async function getUsercount() {
  var response = await fetch('/data/usercount.json')
  var data = await response.json()
  document.querySelector('.count').textContent = data.count
}
if (document.querySelector('.count')) {
getUsercount()
}