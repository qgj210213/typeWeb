$(function () {
    /** 读取txt文件显示到画面上*/
    $("#readtxt").click(function () {
        // alert("qgj");
        readTxTfile();
    });

});

/** 读取txt文件显示到画面上*/
function readTxTfile() {
    alert("read txt file");
    // 1. 创建一个可以将文件翻译成文件流的对象 
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    alert("xxxx");
    // 2. 创建一个textStream 对象
    var path = "F:\WorkSpaceDemo\WEBSpace\MDBFree\file\English\myName.txt";
    var ForReading = 1; 
    var ts = fso.opentextfile(path,ForReading);
    var s;
    
    // 3. ReadLine（读取一整行，但不包括换行符）
    while (!ts.AtEndOfStream) {
    	s = ts.ReadLine();
    	$("#textContent").html(s);
    }
    // 关闭textStream 对象：
    f.close();

};