(() => {
    const getNewJoke =()=>{
    const api = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
    fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(joke => {
            console.log(joke);
            console.log(joke.setup)
            console.log(joke.delivery)
            const setup = document.querySelector("#setup");
            const delivery = document.querySelector("#delivery");
            setup.innerHTML=joke.setup;
            delivery.innerHTML=joke.delivery;
        })
        .catch(error => {
            console.error('Error:', error);
        });
        }
        const hideshow =()=>{
        document.querySelector("#left").style.display="none";
        document.querySelector("#right").style.display="block";
        }
        const buttonClickHandler =()=>{
        if (window.innerWidth < 900) {
            hideshow();
            getNewJoke();
        }else{
            document.querySelector("#left").style.display="block";
            getNewJoke();
        }
        }
        getNewJoke();
        document.querySelector("#button").addEventListener("click", buttonClickHandler);
})()
