WebFont.load({ google: { families: [ 'PT Sans', 'Oswald' ] } });

// to display the menu on all pages of the Weather Site
function toggleMenu() {
    document.getElementById("menu").classList.toggle("hide");
}

// to display the current date in the footer on all pages of the Budva Chamber Site
const currentdate = document.querySelector('#date');
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full" }).format(now);

currentdate.innerHTML = `<em>${fulldate}</em>`;

//to display a list of local business organizations either in a "grid view" (cards in multiple columns) or in a "list view" (a single column) - Directory Page
$('button').on('click',function(e) {
    if($(this).hasClass('list')) {
        $('#container ul').removeClass('grid').addClass('list');
    }
    else if ($(this).hasClass('grid')) {
        $('#container ul').removeClass('list').addClass('grid');
    }
});