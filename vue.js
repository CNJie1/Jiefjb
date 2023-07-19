function checkbox5Function(){
    var checkbox = document.getElementById("checkbox5");
    if (checkbox.checked) {
h5gg.require(7.9); 
var h5frida=h5gg.loadPlugin("h5frida", "h5frida-15.1.24.dylib");
if(!h5frida) throw "Failed to load h5frida plugin";

function ActiveCodePatch(fpath, vaddr, bytes) {
    if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
        var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);
        alert(fpath+":0x"+vaddr.toString(16)+"-修改失败!\n" + fpath+":0x"+vaddr.toString(16)+"-PatchFailed!\n" + result);return false;
    } return true;
}
function DeactiveCodePatch(fpath, vaddr, bytes) {
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
}

/*这是我们的偏移修补代码*/

//public bool get_CanJump() -> 0x1B39598
//Enable a hack at 0x1B39598 with HEX : 200080D2C0035FD6
ActiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x2CF8ADC, "E07C8052C0035FD6");//子弹容量
    }else{
h5gg.require(7.9); 
var h5frida=h5gg.loadPlugin("h5frida", "h5frida-15.1.24.dylib");
if(!h5frida) throw "Failed to load h5frida plugin";

function ActiveCodePatch(fpath, vaddr, bytes) {
    if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
        var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);
        alert(fpath+":0x"+vaddr.toString(16)+"-修改失败!\n" + fpath+":0x"+vaddr.toString(16)+"-PatchFailed!\n" + result);return false;
    } return true;
}
function DeactiveCodePatch(fpath, vaddr, bytes) {
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
}

/*这是我们的偏移修补代码*/

//public bool get_CanJump() -> 0x1B39598
//Enable a hack at 0x1B39598 with HEX : 200080D2C0035FD6
DeactiveCodePatch("Frameworks/UnityFramework.framework/UnityFramework", 0x2CF8ADC, "E07C8052C0035FD6");//子弹容量
    }
}

