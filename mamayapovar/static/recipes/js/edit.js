(function(){
    document.addEventListener('click', (e) => {
        const target = e.target
        if (target.classList.contains('imageuploader__input')) {
            const input = target.querySelector('input[type="file"]')
            const image = target.parentNode.querySelector('.imageuploader__input')
            image.style.backgroundImage = url(${uploadedImage})

            input.addEventListener('change', () => {
                const reader = new FileReader()
                reader.addEventListener('load', () => {
                    uploadedImage = reader.result
                    image.style.backgroundImage = url(${uploadedImage})
                })
                reader.readAsDataURL(input.files[0])
            })
        }
    })
})();