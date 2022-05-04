(function () {


    let userInput = document.querySelector('.user-input');
    let submitButton = document.querySelector('.submit');
    let trendingButton = document.querySelector('.trending');
    let showResult = document.querySelector('.show-giphy');
    let loadingDiv = document.querySelector('.loading-animation');

    userInput.addEventListener('keydown', (event) => {

        showResult.innerHTML = '';
        if (event.key == 'Enter') {
            loadingAnimation();

            fetchGiphy();
        }

    });


    submitButton.addEventListener('click', () => {
        showResult.innerHTML = '';
        loadingAnimation();
        fetchGiphy();
    });


    trendingButton.addEventListener('click', () => {
        showResult.innerHTML = '';
        loadingAnimation();
        fetchTrendingGiphy();
    });






    fetchGiphy = () => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=fIO19IP0pw7gabKLzla2VpRPpowYuI6q&q=${userInput.value}&limit=24&offset=0&rating=g&lang=en`;


        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert(response.status);
                }
            })

            .then(data => {
                loadingDiv.classList.remove('display');
                let dataArray = data.data;
                console.log(dataArray);
                loadGiphy(dataArray);
            })

    }





    fetchTrendingGiphy = () => {

        const url = `https://api.giphy.com/v1/gifs/trending?api_key=fIO19IP0pw7gabKLzla2VpRPpowYuI6q&limit=24&rating=g`;


        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert(response.status);
                }
            })

            .then(data => {
                loadingDiv.classList.remove('display');
                let dataArray = data.data;
                console.log(dataArray);
                loadGiphy(dataArray);
            })

    }







    loadGiphy = (array) => {

        let div = document.createElement('div');
        div.className = 'giphy-container';


        for (let i = 0; i < array.length; i++) {
            div.innerHTML += `<img class='images' src='${array[i].images.original.url}'/>`;
        }


        showResult.appendChild(div);
        userInput.value = '';

    }

    function loadingAnimation() {
        loadingDiv.classList.add("display");

    }



})();