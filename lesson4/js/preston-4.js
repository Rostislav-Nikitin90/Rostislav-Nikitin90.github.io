function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// select the element to manipulate (output to)
const datefield = document.querySelector("date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;