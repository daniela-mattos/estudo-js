console.log('About to fetch a rainbow');
        const filenames = [
            'rainbow.jpg',
            'licor.jpg'
        ];

        catchRainbow(filenames)
            .then(response => {
                console.log('yay');
            })
            .catch(error => {
                console.log('error!');
                console.error(error);
            });

        async function catchRainbow(filenames) {
            for (let filename of filenames) {
                const response = await fetch(filename);
                const blob = await response.blob();
                const img = document.createElement('img');
                img.src = URL.createObjectURL(blob);
                img.height = '400';
                document.body.append(img);
            }
    
        }

        catchText()
        .then(quote => {
            document.getElementById('quote').innerText = quote;
            console.log('beautiful');
        })
        .catch(Error => {
            console.log('error"');
            console.error(error);
        })

        async function catchText() {
            const responseTxt = await fetch('licor.txt');
            return await responseTxt.text();
        
        }
