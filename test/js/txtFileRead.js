$(function () {
    /** Ajax 读取txt文件显示到画面上*/
    $("#readtxt").click(function () {
        alert("qgj");
        readTxTfile();
    });

});

/** read txt file */
function readTxTfile(){
    // file path
    // var path = "F:\WorkSpaceDemo\WEBSpace\typeWeb\file\English\myName.txt";
    var path = "../../file/English/myName.txt";
    $("#textContent").load(path);
    console.log("ok");
}
