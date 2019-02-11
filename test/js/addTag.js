$(document).ready(function () {
    $("#addTag_01").click(function () {
        // alert("ok");
        addTagFunc();

    });
});

/**
 * Js 添加tag标签
 */
function addTagFunc() {
    // 文字列设定
    var strText = "Today is my firtst day.Today is a nice day.Tomorrow I want go to your home.";
    var textArry = doTextCut(strText);
    // textArry.forEach(function (item,index,textArry) {
    //     console.log("item--"+item+"--index--"+index);  
    // })
    // console.log("cunt--"+textArry.length);
    for (let index = 0; index < textArry.length; index++) {
        addTagDom(textArry[index], index + 1);
    }


}
/** 截取文字列 处理*/
function doTextCut(strContent) {
    var textArry = new Array();
    var cunt = 0;
    do {
        textArry[cunt] = strContent.substring(0, 20);
        strContent = strContent.substring(20, strContent.length);
        cunt++;
    } while (strContent.length > 20)
    textArry[cunt] = strContent;
    console.log("cunts:" + cunt);
    return textArry;
}
/**
 * 标签追加
 */
function addTagDom(str, index) {
    var divTag = document.createElement("div"); // 创建标签div
    divTag.className = "input_class"; //创建属性class 并设值

    var divSubTag = document.createElement("div"); // 创建标签div

    var span_id_key = "span_text_0" + index;
    var spanTag = document.createElement("span"); // 创建标签span
    spanTag.setAttribute("id", span_id_key);//创建属性ID 并设值
    divSubTag.appendChild(spanTag);

    var inputTag = document.createElement("input"); //创建标签input
    var id_key = "id_text_0" + index;
    inputTag.setAttribute("id", id_key); //创建属性ID 并设值

    divTag.appendChild(divSubTag);
    divTag.appendChild(inputTag);

    document.getElementById('id_body').appendChild(divTag);
    $("#" + span_id_key).text(str);
    console.log("add tag OK");

}
// addTagFunc();