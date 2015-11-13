$(document).ready(function() {
        //Hide all the tab initially
        $('.tab-pane2').hide();
        //Show the first tab panel
        $('.tab-pane2:first-child').show();
        //Add active class to first li
        $("#jq-tabs li:first-child").addClass('active');

    $("#jq-tabs li a").click(function (e) {
        e.preventDefault();
        //remove active class from tab panel
        $('.tab-content2').find('.active').removeClass('active');
        //remove active class from navigation
        $("#jq-tabs").find('li.active').removeClass('active');
        //add active navigation to click element
        $(this).parent("li").addClass('active');
        //Hide existing tab panel (hide all tabs)
        $('.tab-pane2').hide();
        //Show selected tag
        var tabid = $(this).attr("href");
        $(tabid).show().addClass('active');
    });
});