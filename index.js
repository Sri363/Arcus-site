
$(document).ready(function(){
    let offset = {offset: "70%"}
    $(".founders").hide();
    $(".tech-team-cards").hide();

    $(".menu-icon").click(function(){
        $(".nav-links").toggle()
    })
    $(".title").addClass("animate__animated animate__backInDown");
    $(".heading").waypoint(function(){
        $(".heading").addClass("animate__animated animate__fadeInLeftBig");
    },offset);

    $(".para-1st").waypoint(function(){
        $(".para-1st").addClass("animate__animated animate__fadeInRight");
    },offset);

    $(".svg-1st").waypoint(function(){
        $(".svg-1st").addClass("animate__animated animate__fadeInUpBig")
    },offset)
    $(".our-promise").waypoint(function(){
        $(".our-promise").addClass("animate__animated animate__fadeInRight")
    },offset)
    
    $(".para-2nd").waypoint(function(){
        $(".para-2nd").addClass("animate__animated animate__fadeInUp")
    },{offset: "80%"});

    $(".secondsec-para").waypoint(function(){
        $(".secondsec-para").addClass("animate__animated animate__fadeInUP")
    },offset);

    $(".secondsec-para").waypoint(function(){
        $(".founders-btn").addClass("animate__animated animate__fadeInUP")
    },offset);
    $(".founders-btn").click(function(){
        $(".founders").animate({
            height: 'toggle'
        });
    })
    $(".team-view").click(function(){
        $(".tech-team-cards").animate({
            height: 'toggle'
        });
    })
});

