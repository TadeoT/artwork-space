
imgSelector = document.getElementById('avatar')

imgSelector.addEventListener("change",() => {
    if(imgSelector != ''){
        document.getElementById('img1').setAttribute("src",imgSelector.files[0].name)
        imgSelector.style.display = 'none'
    }
})

