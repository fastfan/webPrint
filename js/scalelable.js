/**
 * Created by 2ndframe on 2017/9/16.
 */
scalelable = (function(dom){
    var _scalelable = function(dom){
        this.dom = dom;
    }
    _scalelable.prototype = {
        saveInfo:function(){
            scalelable.data[this.dom.id] = {id:this.dom.id,cssText:this.dom.style.cssText,className:this.dom.className}
        //    localStorage.setItem('modelinfo',data);
        }
    }

    return _scalelable;
}());
scalelable.data = {};
scalelable.getNowData = function(){
    return scalelable.data;
}
scalelable.saveInfo = function(){
    localStorage.setItem('modelinfo',JSON.stringify(scalelable.getNowData()));
}
scalelable.getInfo = function(){
    return JSON.parse(localStorage.getItem("modelinfo"));
}
scalelable.lablename = {
id0:{lableid:0,lablename: '收货人-姓名'},
id1:{lableid:1,lablename: '收货人-地址'},
id2:{lableid:2,lablename: '收货人-电话'},
id3:{lableid:3,lablename: '收货人-地区1级'},
id4:{lableid:4,lablename: '收货人-地区2级'},
id5:{lableid:5,lablename: '收货人-地区3级'},
id6:{lableid:6,lablename: '发货人-姓名'},
id7:{lableid:7,lablename: '发货人-地区1级'},
id8:{lableid:8,lablename: '发货人-地区2级'},
id9:{lableid:9,lablename: '发货人-地区3级'},
id10:{lableid:10,lablename: '发货人-地址'},
id11:{lableid:11,lablename: '发货人-电话'},
id12:{lableid:12,lablename: '订单-订单号'},
id13:{lableid:13,lablename: '订单-总金额'},
id14:{lableid:14,lablename: '订单-物品总重量'},
id15:{lableid:15,lablename: '网店名称'},
id16:{lableid:16,lablename: '对号-√'}
}
scalelable.render=function(lable,getlable){
    if(getlable==undefined) getlable = {cssText:'',className:'item'}
    var stylehtml = ' style="'+getlable.cssText+'"';
    return '<div class="'+getlable.className+'"'+stylehtml+' draggable="true" ondragstart="drag(event)" id="id'+lable.lableid+'" onmousedown="mousedownhandle(event)">\
                <p class="content_text">'+lable.lablename+'</p>\
                <div class="rebackthis">×</div>\
            </div>'
}
scalelable.listArr = [];

