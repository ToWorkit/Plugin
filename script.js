var funcGetSelectText = function(){
    var txt = '';
    // 处理兼容性
    // 代表了当前激活选中区，即高亮文本块，文档中用户可执行某些操作的其它元素
    if(document.selection){
        // ie
        txt = document.selection.createRange().text;//ie
    }else{
        // chrome
        txt = document.getSelection();
    }
    // 做字符串处理
    return txt.toString();
}
// 获取鼠标事件
document.onmouseup = function() {
    var txt = funcGetSelectText();
    if(txt){
        // AJAX
        var XML = new XMLHttpRequest();
        XML.onreadystatechange = function () {
          if (XML.readyState == 4 && XML.status == 200) {
            console.log(XML.responseText)
          }
        }
        XML.open('GET', 'http://localhost:3001/selection?text=' + txt, true)
        XML.send()
    }
}
