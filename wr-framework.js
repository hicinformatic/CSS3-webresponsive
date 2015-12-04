function wr_m_click_roll(tag)
{
	var tag = tag.next()
	var a = tag.attr("class")
	if(typeof(a) == "undefined")
		return true
	if(a.indexOf("wr-list") > -1)
	{
		if(tag.hasClass("wr-m-hide"))
			tag.removeClass("wr-m-hide")
		else
			tag.addClass("wr-m-hide")
	}
	return wr_m_click_roll(tag)
}

$(".wr-roll").click(function(){
	wr_m_click_roll($(this))
})