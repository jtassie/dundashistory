<script type="text/javascript">
var navMenuURLs = new Array();
var navMenuTitles = new Array();

var currentPage='<!--#echo var="DOCUMENT_URI"-->';

navMenuURLs[0] = "/dundashistory/index.shtml";
navMenuURLs[1] = "/dundashistory/calendar.shtml";
navMenuURLs[2] = "/dundashistory/news.shtml";
navMenuURLs[3] = "/dundashistory/projects.shtml";
navMenuURLs[4] = "/dundashistory/membership.shtml";
navMenuURLs[5] = "/dundashistory/business.shtml";
navMenuURLs[6] = "/dundashistory/contact.shtml";
navMenuURLs[7] = "/dundashistory/articles.shtml";
navMenuURLs[8] = "/dundashistory/links.shtml";

navMenuTitles[0] = "Home";
navMenuTitles[1] = "Events";
navMenuTitles[2] = "News";
navMenuTitles[3] = "Projects";
navMenuTitles[4] = "Membership";
navMenuTitles[5] = "Society&#160;Business";
navMenuTitles[6] = "Contact&#160;Us";
navMenuTitles[7] = "Dundas History";
navMenuTitles[8] = "Links";

for (i=0; i < navMenuURLs.length; i++)
{
	if (navMenuURLs[i] != currentPage && i < (navMenuURLs.length -1)) {
	document.write ("<a href='" + navMenuURLs[i] + "'>" + navMenuTitles[i] + "</a> | ");
	}

	else if (navMenuURLs[i] != currentPage && i < (navMenuURLs.length)) {
	document.write ("<a href='" + navMenuURLs[i] + "'>" + navMenuTitles[i] + "</a>");
	}

	else if (i < (navMenuURLs.length -1)) {
	document.write ("<font color='#8B4513'>" +navMenuTitles[i] + "</font> | ");
	}

	else {
	document.write ("<font color='#8B4513'>" +navMenuTitles[i] + "</font>");
	}
}

</script>