(function ($) {
  // Begin jQuery
  $(function () { 
    // DOM ready  
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation(); 
    }); 
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide(); 
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery

// $(function ($) {

//   $("hash").click(function () {
//     console.log("hi");
//     $("#extra").toggle();
//   });
// });
$(document).ready(function () {
  $("#hash").change(function () {
    if ($(this).val() == "blank") {
      $("#blank").show();
      $("#hashtag").hide();
      $("#profile").hide();
      $("#stories").hide();
      $("#reels").hide();
      $("#highlights").hide();
      $("#post").hide();
      $("#pictures").hide();
      $("#igtv ").hide();
      $("#test").hide();
    } else if ($(this).val() == "hashtag") {
      $("#hashtag").show();
      $("#blank").hide();
      $("#profile").hide();
      $("#stories").hide();
      $("#reels").hide();
      $("#highlights").hide();
      $("#post").hide();
      $("#pictures").hide();
      $("#igtv ").hide();
      $("#test").hide();
    } else if ($(this).val() == "profile") {
      $("#profile").show();
      $("#blank").hide();
      $("#stories").hide();
      $("#reels").hide();
      $("#hashtag").hide();
      $("#highlights").hide();
      $("#post").hide();
      $("#pictures").hide();
      $("#igtv ").hide();
      $("#test").hide();
    } else if ($(this).val() == "stories") {
      $("#stories").show();
      $("#blank").hide();
      $("#profile").hide();
      $("#reels").hide();
      $("#hashtag").hide();
      $("#highlights").hide();
      $("#post").hide();
      $("#pictures").hide();
      $("#igtv ").hide();
      $("#test").hide();
    } else if ($(this).val() == "reels") {
      $("#reels").show();
      $("#blank").hide();
      $("#stories").hide();
      $("#profile").hide();
      $("#hashtag").hide();
      $("#highlights").hide();
      $("#post").hide();
      $("#pictures").hide();
      $("#igtv ").hide();
      $("#test").hide();
    } else if ($(this).val() == "highlights") {
      $("#highlights").show();
      $("#blank").hide();
      $("#stories").hide();
      $("#reels").hide();
      $("#hashtag").hide();
      $("#profile").hide();
      $("#post").hide();
      $("#pictures").hide();
      $("#igtv ").hide();
      $("#test").hide();
    } else if ($(this).val() == "post") {
      $("#post").show();
      $("#blank").hide();
      $("#stories").hide();
      $("#reels").hide();
      $("#hashtag").hide();
      $("#highlights").hide();
      $("#profile").hide();
      $("#pictures").hide();
      $("#igtv ").hide();
      $("#test").hide();
    } else if ($(this).val() == "pictures") {
      $("#pictures").show();
      $("#blank").hide();
      $("#stories").hide();
      $("#reels").hide();
      $("#hashtag").hide();
      $("#highlights").hide();
      $("#post").hide();
      $("#profile").hide();
      $("#igtv ").hide();
      $("#test").hide();
    } else if ($(this).val() == "igtv") {
      $("#igtv").show();
      $("#blank").hide();
      $("#stories").hide();
      $("#reels").hide();
      $("#hashtag").hide();
      $("#highlights").hide();
      $("#post").hide();
      $("#pictures").hide();
      $("#profile").hide(); 
      $("#test").hide();
    } else if ($(this).val() == "test") {
      $("#test").show();
      $("#blank").hide();
      $("#stories").hide();
      $("#reels").hide();
      $("#profile").hide();
      $("#highlights").hide();
      $("#post").hide();
      $("#pictures").hide();
      $("#igtv ").hide();
      $("#hashtag").hide();
    } 
  });
});
// $(document).ready(function () {
//   $("option").click(function () {
//     alert("The paragraph was clicked.");
//   });
// });
