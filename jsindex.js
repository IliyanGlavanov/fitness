$(document).ready(function()
{
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox(
    {
        openEffect: "none",
        closeEffect: "none"
    });
    //Navbar Link-To Slide START
	$('.dropdown-menu .link').click(function ()
  {
		$('.dropdown-menu .link').parent().removeClass('active');
		$(this).parent().addClass('active');

		var idString = $(this).attr('id');
		var id = parseInt(idString.substr(6));
		console.log(id);
		if (!isNaN(id))
    {
			$('#myCarousel').carousel(id);
		}
	});
    // Navbar Link-To Slide END

  // Carousel Caption Toggle START
      $("#whytilapia").click(function()
      {
            $(".toggletilapia").toggle();
      });
      $("#whycarp").click(function()
      {
            $(".togglecarp").toggle();
      });
      $("#whytrout").click(function()
      {
            $(".toggletrout").toggle();
      });
  // Carousel Caption Toggle END
  // Video Pause On Scroll START
    $(window).scroll(function()
    {
        var x = $(document).scrollTop();
        console.log(x);
        if ($(document).scrollTop() > 350)
            {
              $('#videobackground').get(0).pause();
            }
            else if ($(document).scrollTop() < 150 )
            {
                $('#videobackground').get(0).play();
              }
    });
    // Video Pause On Scroll END

});
