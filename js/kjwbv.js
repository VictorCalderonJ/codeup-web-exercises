const getFilm = async (url) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch(url, option)
    const data = await response.json();
    return data
}

(async ()=>{ // IIFE (Immediately Invoked Function Expression)
    const luke = await getFilm("https://swap1.dev/api/films/1/")
    console.log(luke)

})();