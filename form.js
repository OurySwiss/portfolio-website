const scriptURL = 'https://script.google.com/macros/s/AKfycbxx7rflujabbTyoK_cfIHRK5WyK_OGTx_JoU_yvle8rnTbdptOMSN4_GoxM__OpP4WxLQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent sucessfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })