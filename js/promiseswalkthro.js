const getPerson = (id) => {
    const url = `https://swapi.dev/api/people/${id}/`
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
   return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        // .then((data) =>{
        //     console.log(data)
        // })
}




const getFilm = (url) => {
    const filmUrl = url
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, options).then((response) => {
        return response.json()
    })
    // how to see what failed
        .catch(error => {

        })
}

(()=>{ // IIFE (Immediately Invoked Function Expression)
    //gets information fetch.
    //creat variables for your fetch.
    // URL ur getting the URL, options will always remain the same.
    //Fetch is getting my data from whatever I requested.
    //(more insight in .then)
    //functions always go first
    //creating a function will allow you to not rewrite code :)
    //whenever you make a .then always make a .catch to see which function failed for other reasons.

    // const luke = getPerson(1).then((data) => {
    //     console.log(data)
    //     //getting films info
    //     const url = data.films[0]
    //     const options = {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }
    //     fetch(url, options).then((response) => {
    //         return response.json()
    //     })
    //         .then((film) => {
    //             console.log(data)
    //         })
    // })
    //
    // // console.log(luke)

    //created a Variable

    getPerson(1).then((person) => {
        console.log(person);
        getFilm(person.films[0]).then(film => {
            console.log(film)
        })
    })
})();