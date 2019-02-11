$(function () {
    //获取url中的参数
    var arrayUrl = new Array("language", "article", "time");
    var arrayContent = new Array();
    for (let i = 0; i < arrayUrl.length; i++) {
        arrayContent[i] = getUrlParam(arrayUrl[i]);
    }
    
    // 文章题目
    $("#span_article_id").text(arrayContent[1]);
    // 时间
    $("#span_time_id").text(arrayContent[2]+"分钟");
    // 语言
    $("#span_language_id").text(arrayContent[0])

    // 读取文件
    readTxTfile(arrayContent[1], arrayContent[0], ".txt");
});

/**  获取url中的参数*/
function getUrlParam(param) {
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null; //返回参数值
}

/** read txt file */
function readTxTfile(article, language, suffix) {
    // file path
    var strUrl = language + "/" + article + suffix// 文件路径
    // var path = "F:\WorkSpaceDemo\WEBSpace\typeWeb\file\English\myName.txt";
    var path = "../file/" + strUrl;
    var text = "";

    $("#content_hidden").load(path, function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success")
            // alert("外部内容加载成功!");
            // 获取div标签的内容
            text = responseTxt
        //   console.log("qgj:"+text);
        // 追加标签处理
        addTagFunc(text);
        if (statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
}
/**
 * Js 添加tag标签
 */
function addTagFunc(strText) {
    // 文字列设定
    // var strText = "Today is my firtst day.Today is a nice day.Tomorrow I want go to your home.";
    var textArry = doTextCut(strText);

    for (let index = 0; index < textArry.length; index++) {
        addTagDom(textArry[index], index + 1);
    }


}
/** 截取文字列 处理*/
function doTextCut(strContent) {
    var textArry = new Array();
    var cunt = 0;
    do {
        textArry[cunt] = strContent.substring(0, 100);
        strContent = strContent.substring(100, strContent.length);
        cunt++;
    } while (strContent.length > 100)
    textArry[cunt] = strContent;
    console.log("cunts:" + cunt);
    return textArry;
}
/**
 * 标签追加
 */
function addTagDom(str, index) {

    sub_div_id_key = "sub_div_id_0" + index;
    var sub1_divTag = document.createElement("div"); // 创建子div 标签
    sub1_divTag.setAttribute("id", sub_div_id_key); //创建属性ID 并设值
    sub1_divTag.className = "typing typing_on";

    var span_divTag = document.createElement("div"); //创建span的div
    span_divTag.className = "text";

    var span_id_key = "span_text_0" + index;
    var spanTag = document.createElement("span"); // 创建标签span
    spanTag.setAttribute("id", span_id_key);//创建属性ID 并设值

    var id_key = "id_text_0" + index;
    var inputTag = document.createElement("input"); //创建标签input
    inputTag.setAttribute("id", id_key); //创建属性ID 并设值
    inputTag.setAttribute("type", "text");
    inputTag.setAttribute("autocomplete", "off");

    // 标签整合
    span_divTag.appendChild(spanTag);
    sub1_divTag.appendChild(span_divTag);
    sub1_divTag.appendChild(inputTag);
    document.getElementById('content').appendChild(sub1_divTag);

    // 标签内容设定
    $("#" + span_id_key).text(str);
    console.log("add tag OK");

}