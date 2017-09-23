/**
 * Created by 2ndframe on 2017/9/16.
 */
var scaleitem = function(dom){
    this.dom = dom;
    var _isEdit = false;
    this.dom.ondblclick = function(ev){
        if(!_isEdit){
            $(this).addClass('on');
            $(this).children('.infowrite').show().focus();
            $(this).children('p').hide();
            _isEdit = true;
        }
    }
    $(this.dom).mouseleave(function(){
        _isEdit = false;
        $(this).removeClass('on');
        $(this).children('.infowrite').hide();
        $(this).children('p').show().text( $(this).children('.infowrite').val());
        var data = {};
        if(localStorage.getItem('modelinfo')!=undefined) data = localStorage.getItem('modelinfo');
        data[this.id] = {id:this.id,cssText:this.style.cssText,text:this.children[1].innerText}
        localStorage.setItem('modelinfo',data);
    });
}