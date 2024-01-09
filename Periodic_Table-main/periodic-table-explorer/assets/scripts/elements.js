const name = document.getElementById("name");
const category = document.getElementById("category");
const discovered_by = document.getElementById("discovered_by");
const atomic_mass = document.getElementById("atomic_mass");
const standard_state = document.getElementById("standard_state");
const electron_config = document.getElementById("electron_config");
const meltingPoint = document.getElementById("meltingPoint");
const boilingPoint = document.getElementById("boilingPoint");
const density = document.getElementById("density");
const summary = document.getElementById("summary");
const block = document.getElementById("block");
const model = document.querySelector(".model");

axios.get('../data/elements.json').then(function(response) {
    const allElements = response.data.elements;

    allElements.forEach(element => {
        if (localStorage.getItem("name") === element.name) {
            name.innerHTML = element.name;
            category.innerHTML = element.category;
            discovered_by.innerHTML = element.discovered_by;
            atomic_mass.innerHTML = element.atomic_mass + " u";
            standard_state.innerHTML = element.phase;
            electron_config.innerHTML = element.electron_configuration;
            meltingPoint.innerHTML = element.melt + " K";
            boilingPoint.innerHTML = element.boil + " K";
            density.innerHTML = element.density + ` kg/cm<sup>3</sup>`;
            summary.innerHTML = element.summary;
            block.innerHTML = element.block;
            
            model.innerHTML = `<model-viewer src=${element.bohr_model_3d} ar environment-image=${element.bohr_model_image} camera-orbit="-45deg 30deg 9m" overflow box style="height:700px; width:100%;" autoplay shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>`
        }
    });
});