var video = []
        video[1] = '<iframe src="https://animegloo.github.io/website/player?vid=aHR0cHM6Ly9maWxlcy5jYXRib3gubW9lL3JhcGZzci5tcDQ=" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[2] = '<iframe src="https://www.fembed.com/v/emy31i-mj3-pg8q" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[3] = '<iframe src="https://mega.nz/embed/5lRUUIgJ#OtKgQQBQp7JUT6LqZCAlr7z6i_jCnUJFByMeqWyE818" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[4] = '<iframe src="https://animegloo.github.io/website/player/solid.html?vid=5GcJzvOG7RWEHgaMZqDC0hGXD3M37fjQ4EHfGG9UdKS_w7qvj3gPedjAGBtwBbhD" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[5] = '<iframe src="https://animegloo.github.io/website/gdrive.html#1saKZ6NuJO-6u-PZfaQfCkr5dLxZIOsZE" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        video[6] = '<iframe src="https://streamtape.com/e/wDojaKd9o8sx9x" frameborder=0 scrolling=no width=100% height=100% allowfullscreen></iframe>';
        $(document).ready(function(){
          $(".capi-list-tab li:first").addClass("active");
                $('#video_box').html(video[1]);
    
                $(".capi-list-tab li").click(function () {
                    $(".capi-list-tab li").removeClass("active");
                    $(this).addClass("active");
    
                    $('#video_box').html(video[$(this).attr('data-id')]);
                    return false;
        });
      });
