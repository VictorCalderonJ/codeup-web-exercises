// const gitHubUserName = (id) => {
//     const url = `https://api.github.com/users/${id}/events`
//     const options = {
//         method: "GET",
//         headers: {
//             "Authorization": `token ${GITHUB_KEY}`
//         }
//     }
//     return fetch(url, options)
//         .then((response) => {
//             return response.json()
//         })
// }

// (()=>{
//     gitHubUserName('VictorCalderonJ').then((events) => {
//
//         console.log(events)
//         console.log(events[0].actor.display_login);
//         console.log(events[0].created_at);
//
//         // for (let i = 0; i < events.length; i++) {
//         //     console.log(events[i].created_at)
//         // }
//
//     })
//
//
//
// })();


const gitHubUserName = async(id) => {
    const url = `https://api.github.com/users/${id}/events`
    const options = {
        method: "GET",
        headers: {
            "Authorization": `token ${GITHUB_KEY}`
        }
    }
    const response = await fetch(url, options);
    const userName = await response.json()
    return userName;
}


( async ()=>{
    const username = await gitHubUserName("VictorCalderonJ")
    console.log(username)
})();

