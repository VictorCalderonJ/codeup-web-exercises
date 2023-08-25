$(() => {
    //Global Var
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopUp();

    //Variable
    const FavRes = [
        {
            Restaurant: "Burger",
            Description: "Burger Description",
            categories: [
                "Food"
            ]
        }, {
            Restaurant: "Pizza",
            Description: "Pizza Description",
            categories: [
                "Food"
            ]
        },
        {
            Restaurant: "Tacos",
            Description: "Tacos Description",
            categories: [
                "Food"
            ]
        }
    ]






    //Function
    // initialize map
    function initializeMap(){
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOption = {
            container: `map`,
            style: `mapbox://styles/mapbox/dark-v11`,
            zoom: 10,
            center: [-98.4916, 29.4252],
        }
        return new mapboxgl.Map(mapOption)
    }

    //Function that creates a marker
    function createMarker(){
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map)
    }

    //function that creates pops up
    function createPopUp(){
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
            <div>
                <h1>Codeup</h1>
                <p>we are here</p>            
            </div>`)
    }

    //function that bring you to paris
    function GoToParis(){
        geocode(`Paris`, MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data)
        })
    }




    //reverse geo code
    //takes the cord from center
    //print screen adr
    function findAndPrintAddress() {
        const coords = map.getCenter();
        console.log(coords)
        reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
            console.log(data)
            document.querySelector(`h1`).innerHTML = `${data}`
        })
    }


    //combines
    //Fav Restaurant

    function markAlamo() {
        geocode(`The Alamo, San Antonio`, MAPBOX_TOKEN).then((data) => {
            console.log(data)
            const alamoPopUp = new mapboxgl.Popup()
                .setHTML(`<p>Remember the Alamo!</p>`)
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(alamoPopUp)
        })
    }
    function markFav1() {
        geocode(`Illinois`, MAPBOX_TOKEN).then((data) => {
            console.log(data)
            map.setCenter(data)
            for (let i = 0; i < FavRes.length; i++) {
                if (FavRes[i].Restaurant === "Burger") {
                    // console.log(FavRes[i].Restaurant);
                    // console.log(FavRes[i].Description);
                    // console.log(FavRes[i].categories);
                    break; // Exit the loop once the desired object is found
                }
            }
            const IllinoisPopUp = new mapboxgl.Popup()
                .setHTML(`<p>This is Illinois</p>`)
            const IllinoisMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(IllinoisPopUp)

            map.flyTo({
                center: data,
                zoom: 12,
                speed: 1,
                essential: true
            })

        })
    }


    function markFav2() {
        geocode(`New York`, MAPBOX_TOKEN).then((data) => {
            console.log(data)
            map.setCenter(data)
            for (let i = 0; i < FavRes.length; i++) {
                if (FavRes[i].Restaurant === "Pizza") {
                    console.log(FavRes[i].Restaurant);
                    console.log(FavRes[i].Description);
                    console.log(FavRes[i].categories);
                    break; // Exit the loop once the desired object is found
                }
            }
            const NYPopUp = new mapboxgl.Popup()
                .setHTML(`<p>This is New York</p>`)
            const NYMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(NYPopUp)

            map.flyTo({
                center: data,
                zoom: 12,
                speed: 1,
                essential: true
            })
        })
    }

    function markFav3() {
        geocode(`Florida`, MAPBOX_TOKEN).then((data) => {
            console.log(data)
            map.setCenter(data)
            for (let i = 0; i < FavRes.length; i++) {
                if (FavRes[i].Restaurant === "Tacos") {
                    console.log(FavRes[i].Restaurant);
                    console.log(FavRes[i].Description);
                    console.log(FavRes[i].categories);
                    break; // Exit the loop once the desired object is found
                }
            }
            const FLPopUp = new mapboxgl.Popup()
                .setHTML(`<p>This is Florida</p>`)
            const FLMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(FLPopUp)

            map.flyTo({
                center: data,
                zoom: 12,
                speed: 1,
                essential: true
            })
        })
    }

    //button that zooms in

    function zoomIn() {
        let currentZoom = map.getZoom();
        let newZoom = currentZoom + 1;
        map.setZoom(newZoom)
    }

    function zoomOut() {
        let currentZoom = map.getZoom();
        let newZoom = currentZoom - 1;
        map.setZoom(newZoom)
    }
// I want this form so that everytime i type a state ill get the coordinate
    function locationSearch() {
        geocode(`keypress`, MAPBOX_TOKEN).then((data) => {
            console.log('Key pressed:', event.key)
            // map.setCenter(data)
        })
    }

    //Events
    document.querySelector(`#geocode-button`).addEventListener(`click`,GoToParis)
    document.querySelector(`#reverse-geocode-button`).addEventListener(`click`, findAndPrintAddress)
    document.querySelector(`#mark-Illinois`).addEventListener(`click`, markFav1)
    document.querySelector(`#mark-NewYork`).addEventListener(`click`, markFav2)
    document.querySelector(`#mark-Florida`).addEventListener(`click`, markFav3)
    document.querySelector(`#zoom-in`).addEventListener(`click`, zoomIn)
    document.querySelector(`#zoom-out`).addEventListener(`click`, zoomOut)
    document.querySelector(`#location-search`).addEventListener(`keypress`, locationSearch)



    // Run
    map.setZoom(1);
    marker.setPopup(popup);
})