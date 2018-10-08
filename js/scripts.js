var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {


});

$(window).resize(function() {
    

});

$(document).ready(function() {   

    $(".tabs").each(function() {

        $(this).find(".tab-link").each(function() {

            if( $(this).hasClass("active") ) {

                indexActiveTab = $(this).index(".tab-link");

                $(this).click();

                return false;

            } else {

                indexActiveTab = 0;

            }

        });

        attrForTabLink = $(this).find(".tab-link").eq(indexActiveTab).attr("for");
        activeTabRadio = $(this).find(".radio-tab[id = '"+ attrForTabLink +"']");
        activeTabRadio.prop("checked", true);
        $(this).find(".tab-link").eq(indexActiveTab).addClass("active");
        $(".slide-2_wrapp[data-tab-id = "+ attrForTabLink +"]").addClass("active");

    });

    $(".tab-link").click(function (e) {

        if( $(this).hasClass("active") ) {

            e.preventDefault();

        } else {

            tabsParent = $(this).closest(".tabs");
            attrForTabLink = $(this).attr("for");
            activeTabRadio = tabsParent.find(".radio-tab[id = '"+ attrForTabLink +"']");
            activeTabRadio.prop("checked", true);

            tabsParent.find(".tab-link").each(function () {
                
                if( $(this).hasClass("active") ) {

                    $(this).removeClass("active");

                    $(".slide-2_wrapp").removeClass("active");

                }

            });

            $(this).addClass("active");

            $(".slide-2_wrapp[data-tab-id = "+ attrForTabLink +"]").addClass("active");

            $(".slide-2_wrapp[data-tab-id = "+ attrForTabLink +"] .slider-2").slick().refresh();
        }

    });

});