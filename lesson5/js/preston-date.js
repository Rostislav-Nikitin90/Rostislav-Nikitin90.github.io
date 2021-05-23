const currentdate = document.querySelector('#date');
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full" }).format(now);

currentdate.innerHTML = `<em>${fulldate}</em>`;