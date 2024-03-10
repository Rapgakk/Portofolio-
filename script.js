const textBio = document.querySelector('.text-bio p');
        const translateButton = document.getElementById('translateButton');
        let isTranslated = false;

        translateButton.addEventListener('click', function() {
            if (isTranslated) {
                textBio.textContent = "Halo saya Rafga, saya laki-laki dan saya berasal dari Surabaya. Saya suka membuat website pada tanggal 1 Januari 2024. Umur saya 15 tahun.";
                translateButton.textContent = "English";
            } else {
                textBio.textContent = "Hello, I'm Rafga, I'm a male and I'm from Surabaya. I like to create websites on January 1st, 2024. I am 15 years old.";
                translateButton.textContent = "indonesia";
            }
            isTranslated = !isTranslated;
        });