
if(window.innerWidth<= 760) {
   document.querySelector('.image-area > img').src='assets/images/illustration-sign-up-mobile.svg'
}

window.addEventListener('resize',e => {
 if( e.target.innerWidth <= 760) {
    document.querySelector('.image-area > img').src='assets/images/illustration-sign-up-mobile.svg'
 }

 else {
    document.querySelector('.image-area > img').src='assets/images/illustration-sign-up-desktop.svg'
 }
})

const img = document.querySelector('.image-area > img')
const input = document.querySelector('input.input')
const button = document.querySelector('button[type="button"]')
const form = document.querySelector('.form > form')





let submit = false

const checkInput = () => {
   
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi
    if(pattern.test(document.querySelector('input.input').value)==true && document.querySelector('input.input').value.includes("\\")==false) {
        submit = true
        if(document.querySelector('.email-area').contains(document.querySelector('.error'))) {
            document.querySelector('.error').remove()
            input.classList.remove('input-error')
           
        }

    }
    else {
        submit = false
        if(!document.querySelector('.email-area').contains(document.querySelector('.error'))) {
        const errorMsg = 'Valid email required'
        const msgArea = document.querySelector('.email-area')
        const errorElement = document.createElement('div')
        errorElement.innerHTML = errorMsg
        errorElement.className = 'error'
        msgArea.appendChild(errorElement)
        input.classList.add('input-error')
    }

    }
    
}

form.addEventListener('submit', (e) => {

    e.preventDefault()
    
})


button.addEventListener('click', () => {
checkInput()

// Add here what you want after submitting the form.
  
if(submit==true) {
 const boxArea = document.querySelector('.box') 
 boxArea.remove()
 document.querySelector('.inner').setAttribute('style','height:100%!important')
 const info = document.createElement('div')
 info.classList.add('box')
 info.classList.add('success-box')
 info.setAttribute('style','height:auto!important')
 info.innerHTML = `
 <div class="success-icon">
 <img src="assets/images/icon-success.svg"
 </div>
 <div class="success-title"> Thanks for subscribing! </div>
<div class= "success-info">  A confirmation email has been sent to ash@loremcompany.com. 
Please open it and click the button inside to confirm your subscription. </div>

<div class="dismiss-btn"><button class="btn dismiss" type="button"> Dismiss Message </button> </div>

 `
document.querySelector('.inner').appendChild(info)
const dismissBtn = document.querySelector('.dismiss')
dismissBtn.addEventListener('click',() => {
    document.location.reload()
})

}

})

input.addEventListener('focusout',e =>{
   checkInput()

})

