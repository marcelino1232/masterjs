$(function()
{
    var theme = $("#tema");

    window.onload = function()
    {
      theme.attr("href",localStorage.getItem("href"));
    }

    $(".Subir").click(function(e){
     e.preventDefault();

     $("html,body").animate({
      scrollTop:0
     },800);
    });

     if(window.location.href.indexOf("Index") > -1)
     {
        $('.bxslider').bxSlider({
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            pager: true,
            slideWidth: 1200
          });
     }
     

      $(".to-verde").click(function()
      {
         theme.attr("href","css/green.css");
         localStorage.setItem("href","css/green.css");
      });
      $(".to-rojo").click(function()
      {
        theme.attr("href","css/red.css");
        localStorage.setItem("href","css/red.css");
     });
     $(".to-azul").click(function()
     {
        theme.attr("href","css/blue.css");
        localStorage.setItem("href","css/blue.css");
     });


     if(window.location.href.indexOf("about") > -1)
     {
          $("#acordeon").accodion();
     }

  });

