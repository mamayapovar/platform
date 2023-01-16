(function(){
	document.addEventListener('DOMContentLoaded', () => {
		const imageuploader = document.querySelectorAll('.imageuploader')
		imageuploader.forEach(uploader => {
			let url = uploader.getAttribute('data-image-url')

			const fetchImage = async (url) => {
				const data = await fetch(url);
				const buffer = await data.arrayBuffer();
				const blob = new Blob([buffer], { type: "image/jpg"});
				return blob;
			}

			(async function() {
				if (url != '') {
					let nameFile = uploader.getAttribute('data-image-name');
					const image = uploader.querySelector('.imageuploader__input')
					const input = uploader.querySelector('input[type="file"]')
					const placeholder = image.querySelector('.imageuploader__placeholder')
					const delBtn = image.parentNode.querySelector('.imageuploader__btn')
					const blob = await fetchImage(url);
					const file = new File([blob], nameFile)
					const dT = new ClipboardEvent('').clipboardData || new DataTransfer();

					dT.items.add(file);
					input.files = dT.files;
					image.style.backgroundImage = `url(${url})`
					placeholder.classList.add('hidden')
					delBtn.classList.remove('hidden')
				}
			})();
		})
	})
})();
