function dotest(){
    var x =12;
    // alert(x);
    console.log("qgj"+x);

}
/** 文字列を切り取り 処理*/
function  doTextCut(){
    var strContent = "abcdefghijklmnopqrstuvwxyz";
    var strlen = strContent.length;
    var loopCnt =0; //繰り返し数
    if (strlen%10==0){
        loopCnt = strlen/10;
    }else{
        loopCnt = parseInt(strlen/10) +1 ;
    }
    console.log("length:"+strlen+"--loop cunt"+loopCnt);
    // 十桁数ずつ、配列に格納します。
    var textArry = new Array();
    for (var i = 0; i < loopCnt; i++) {
        textArry[i] = strContent.substring(0,10);
        strContent = strContent.substring(10,strContent.length);
        console.log("array:--"+i+"--content:--"+textArry[i]+"--strContent:--"+strContent);
    }
}
/** 文字列を切り取り 処理*/
function  doTextCut2(){
    var strContent = "abcdefghijklmnopqrstuvwxyz";
    var textArry = new Array();
    var cunt = 0;
    do{
        textArry[cunt] = strContent.substring(0,10);
        strContent = strContent.substring(10,strContent.length);
        console.log("array:--"+cunt+"--content:--"+textArry[cunt]+"--strContent:--"+strContent);
        cunt++;
    }while(strContent.length > 10)
    console.log("cunts:"+cunt);
    textArry[cunt] = strContent;
    textArry.forEach(function(item,index,textArry){
        console.log("item--"+item+"--index--"+index);
    })   
}
// doTextCut();
doTextCut2();