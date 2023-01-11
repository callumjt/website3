document.querySelector('button.testIt').onclick = async function() {
            document.querySelectorAll('div.message').forEach(function(el) {
              el.style.display = 'none'
            })
            if (document.querySelector('textarea').value === '' || document.querySelector('input').value === '') {
              document.querySelector('div.empty').style.display = 'block'
            } else {
        var response = await fetch("https://scratchtools-feedback.vercel.app/feedback/", {
  method: 'post',
  body: JSON.stringify({"username":document.querySelector('input').value,"description":document.querySelector('textarea').value}),
  mode: 'cors',
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
            var data = await response.json()
            if (data.error) {
document.querySelector('.empty').style.display = 'block'
            } else {
              document.querySelector('div.success').style.display = 'block'
              document.querySelector('input').value = ''
              document.querySelector('textarea').value = ''
            }
            }
            
      }