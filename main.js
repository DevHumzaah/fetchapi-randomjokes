
let joke = document.getElementById("joke");
let nextJoke = document.getElementById("jokeBtn");

nextJoke.addEventListener("click",async () => {

    joke.innerHTML = "Loading....";
    let requestHeader = {
        headers: {
            Accept: "application/json"
        }
    }


   const response=await fetch("https://icanhazdadjoke.com/", requestHeader)

    const data=await response.json();
  
    joke.innerHTML=`${data.joke} &#x1F923; &#x1F923;`         


})



// A fun and interactive website that fetches jokes from an
//  API with each click and displays them on the screen

