// 入口函数的方式
$(function () {
    /** main.html js */
    // when click the id of linkTypeStart then link the typeStart.html
    $("#linkTypeStart").click(function () {
        // window.location.href= "../html/typeStart.html";
        $(window).attr('location', '../html/typeStart.html');
    });
    // when click the id  linkArticleImport then open the articleImport.html
    $("#linkArticleImport").click(function(){
        $(window).attr('location','../html/articleImport.html');
    });
    
    /** selectbox language type */
    // language English
    $("#language_Eng").click(function(){
        $("#languageType").text($("#language_Eng").text());
    });

    // language Japanese
    $("#language_Jp").click(function(){
        $("#languageType").text($("#language_Jp").text());
    });

    // language Chinese
    $("#language_Ch").click(function(){
        $("#languageType").text($("#language_Ch").text());
    });


    /** selectbox minute */
    $("#minute_5").click(function(){
        $("#durationMinute").text($("#minute_5").text());
    });
    $("#minute_10").click(function(){
        $("#durationMinute").text($("#minute_10").text());
    });
    $("#minute_15").click(function(){
        $("#durationMinute").text($("#minute_15").text());
    });


    /** typeStart.html js */



    /** articleImport.html js */

});