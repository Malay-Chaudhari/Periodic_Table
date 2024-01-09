const periodicTableContainer = document.getElementById("periodic-table-container");
const blocks = new Set([]);

axios.get('../data/elements.json')
    .then(function (response) {
        // handle success
        const allElements = response.data.elements;

        allElements.forEach(element => {
            const elementDivi = document.createElement("div");
            elementDivi.setAttribute("class", "element");
            elementDivi.classList.add(`${element.block}`);

            const firstDivi = document.createElement("div");
            firstDivi.setAttribute("class", "first");

            // Element Number
            const elementNumber = document.createElement("div");
            elementNumber.setAttribute("class", "elementNumber");
            const eleNumTextNode = document.createTextNode(`${element.number}`);
            elementNumber.append(eleNumTextNode);

            // Element Mass
            const elementMass = document.createElement("div");
            elementMass.setAttribute("class", "elementMass");
            const eleMassTextNode = document.createTextNode(`${element.atomic_mass}`);
            elementMass.append(eleMassTextNode);

            firstDivi.append(elementNumber, elementMass);
            
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
            elementDivi.append(firstDivi, elementSymbol, elementName);

            // Pushing element into the table
            periodicTableContainer.appendChild(elementDivi);

            // blocks.add(element.category);
        });

        const totalElements = document.querySelectorAll(".element");

        totalElements.forEach((element) => {
            element.addEventListener("click", () => {
                // sessionStorage.clear();
                localStorage.setItem(`name`,`${element.lastChild.textContent}`);
                window.open("elementDetails.html", '_blank');
            });
        });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
