const periodicTableContainer = document.getElementById("periodic-table-container");
const blocks = new Set([]);
const search = document.getElementById("search");

window.addEventListener("load", () => {
    getData();
});

async function getData() {
    try {
        axios.get("../data/elements.json").then(
            function (response) {
                displayData(response.data.elements);
                searchData(response.data.elements);
            }, function (reject) {
                console.log(reject);
            }
        );
    } catch (error) {
        console.log(error);
    }
}

function displayData(allElements) {
    allElements.forEach(element => {
        // Element Div
        const elementDivi = document.createElement("div");
        elementDivi.setAttribute("class", "element");
        elementDivi.classList.add(`${element.block}`);

        // Element Number
        const elementNumber = document.createElement("div");
        elementNumber.setAttribute("class", "elementNumber");
        const eleNumTextNode = document.createTextNode(`${element.number}`);
        elementNumber.append(eleNumTextNode);

        // Element Symbol
        const elementSymbol = document.createElement("div");
        elementSymbol.setAttribute("class", "elementSymbol");
        const eleSymTextNode = document.createTextNode(`${element.symbol}`);
        elementSymbol.append(eleSymTextNode);

        // Element Name
        const elementName = document.createElement("div");
        elementName.setAttribute("class", "elementName");
        const eleNameTextNode = document.createTextNode(`${element.name}`);
        elementName.append(eleNameTextNode);

        // Setting the Position of an element in Periodic Table
        elementDivi.style.gridColumn = element.xpos;
        elementDivi.style.gridRow = element.ypos;

        // Pushing the details of an element
        elementDivi.append(elementNumber, elementSymbol, elementName);

        // Pushing element into the table
        periodicTableContainer.appendChild(elementDivi);

        // blocks.add(element.category);
    });

    const totalElements = document.querySelectorAll(".element");

    totalElements.forEach((element) => {
        element.addEventListener("click", () => {
            localStorage.setItem(`name`, `${element.lastChild.textContent}`);
            window.open("elementDetails.html", '_blank');
        });
    });
}

function searchData(allElements) {
    search.addEventListener("input", () => {
        let matches = allElements.filter(element => {
            // Returns the names which starts with the search value
            if (element.name.toLowerCase().startsWith(search.value.toLowerCase())) {
                return element.name;
            }

            // Returns the names which includes the search value
            // if (element.name.toLowerCase().includes(search.value.toLowerCase())) {
            //     return element.name;
            // }

            // Returns the names which includes the search value
            // gi = global and case insensitive
            // const regex = new RegExp(`${search.value}`, "gi");
            // return element.name.match(regex);
        });
    
        if (search.value.length < 1) {
            matches = allElements;
        }
    
        periodicTableContainer.innerHTML = "";
    
        displayData(matches);
    });
} 