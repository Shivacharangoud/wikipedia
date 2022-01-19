let searchInputE = document.getElementById("searchInput");
let searchResultsConE = document.getElementById("searchResults");
let spinnerE = document.getElementById("spinner");

function createAndAppendSearch(data) {
    spinnerE.classList.toggle("d-none");
    for (let obj of data) {
        let {
            title,
            link,
            description
        } = obj;
        let divE = document.createElement("div");
        divE.classList.add("result-item");
        searchResultsConE.appendChild(divE);
        // create title
        let titleE = document.createElement("a");
        titleE.textContent = title;
        titleE.href = link;
        titleE.classList.add("result-title");
        divE.appendChild(titleE);
        //create break element
        let breakE = document.createElement("br");
        divE.appendChild(breakE);
        //create link
        let linkE = document.createElement("a");
        linkE.textContent = link;
        linkE.textContent = link;
        linkE.classList.add("result-url");
        divE.appendChild(linkE);
        //create break element
        let breakE2 = document.createElement("br");
        divE.appendChild(breakE2);
        // create description
        let paraE = document.createElement("p");
        paraE.classList.add("link-description");
        paraE.textContent = description;
        divE.appendChild(paraE);

    }
}

function searchFunction(event) {
    if (event.key === "Enter") {
        searchResultsConE.textContent = "";

        let searchtext = searchInputE.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchtext;
        spinnerE.classList.toggle("d-none");
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let data = jsonData.search_results;

                createAndAppendSearch(data);
            });
    }

}

searchInputE.addEventListener("keydown", searchFunction);