let str = "";
document.onkeydown = function(e){
    let pass = window.getComputedStyle(qA('div')[2]).content.substring(1,window.getComputedStyle(qA('div')[2]).content.length - 1);
    str += e.key;
    if(!pass.has(str)){
        window.close();
    } else if(pass == str){
        window.open("https://alkallabeth.github.io/browser/main.html?auth=true","_self");
    }
}
