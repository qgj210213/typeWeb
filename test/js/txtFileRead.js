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
    var text ="";
    $("#textContent").load(path,function(responseTxt,statusTxt,xhr){
        if(statusTxt=="success")
          alert("外部内容加载成功!");
          // 获取div标签的内容
          text = responseTxt
          console.log("qgj:"+text);
        // 追加标签处理
        doTagAdd(text);
        if(statusTxt=="error")
          alert("Error: "+xhr.status+": "+xhr.statusText);
      }); 
}
/** 追加标签处理 */
function doTagAdd(textContent){
    alert("show content!"+textContent);
    var strLen = textContent.length;
    alert(strLen);
    

}
