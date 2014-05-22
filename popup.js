// Paul Wilson - Emerge IT 05/2014
// Lets you log in as different customers on Eshbel's customer login page

var cookieMonster = {
	eatCookies: function() {
		chrome.cookies.remove({name:"PriorityId", url:"https://backoffice.eshbel.com/"});
	}
};

document.addEventListener('DOMContentLoaded', function () {
  cookieMonster.eatCookies();
});