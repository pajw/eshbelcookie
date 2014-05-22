// Paul Wilson - Emerge IT 05/2014
// Lets you log in as different customers on Eshbel's customer login page

var cookieMonster = {
	eatCookies: function() {
		chrome.cookies.remove({name:"PriorityId", url:"https://backoffice.eshbel.com/"});
	},

	goHomeCookieMonster: function() {
		chrome.tabs.getSelected(null, function(tab) {
    		chrome.tabs.update(tab.id, {url: "https://backoffice.eshbel.com/javascript/PriHtml.dll/ESH_WWWCUSTAREA&_tabulaini=tabceseng.ini"});
			});
	},
};

document.addEventListener('DOMContentLoaded', function () {
	cookieMonster.eatCookies();
	cookieMonster.goHomeCookieMonster();
});