(() => {
    //Declaring a variable for the Joke API
    const getNewJoke =()=>{
    const api = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
    fetch(api)
        .then(response => {
            //if there is an error and the promise is not fulfilled
            if (!response.ok) {
                //Throwing the exception error
                throw new Error('Network response was not ok');
            }
            //if everything is ok load the response in json format
            return response.json();
        })
        //fulfilling the promise and identifying the necessary parameters
        .then(joke => {
            //logging to the console, mainly for testing purposes
            console.log(joke);
            console.log(joke.setup)
            console.log(joke.delivery)
            //assigning the variables for the setup and delivery HTML components.
            const setup = document.querySelector("#setup");
            const delivery = document.querySelector("#delivery");
            //displaying the setup and joke on the HTML
            setup.innerHTML=joke.setup;
            delivery.innerHTML=joke.delivery;
        })
        //catching the error in case of failure
        .catch(error => {
            console.error('Error:', error);
        });
        }
        //for responsiveness purposes I gave the page some functions to reorganize the content at the same width of the media query
        const hideshow =()=>{
            //function that changes the display properties of the left and right container so it can be displayed on smaller screens
        document.querySelector("#left").style.display="none";
        document.querySelector("#right").style.display="block";
        }
        const buttonClickHandler =()=>{
            //if the window width is less than 900px, both the hideshow and getNewJoke functions will be called.
        if (window.innerWidth < 900) {
            hideshow();
            getNewJoke();
        }else{
            //If the window width is larger than 900, we call the getNewJoke function when the button is pressed.
            getNewJoke();
        }
        }
        /*
        Here, we ensure that the left container is always displayed while the window width is larger than 900 px, i had
        this on the button function, but it did not change the display property until the button was clicked, this way it is automatic
        */
        if(window.innerWidth > 900){
            document.querySelector("#left").style.display="block";
        }
        //This is the initial call for the getNewJoke function, ensuring that when the page loads, there is a joke displayed on screen.
        getNewJoke();
        //finally, this button takes care of the buttonClickHandler function
        document.querySelector("#button").addEventListener("click", buttonClickHandler);
})()
