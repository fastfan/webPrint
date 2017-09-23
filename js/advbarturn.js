/**
 * Created by 2ndframe on 2017/8/19.
 */
var advbarturn = function(dom,time=3000)
{
    var $_dom = dom,
        _id = null,
        _time = time,
        _nowId = 0,
        _isTweening = false,
        _total = $_dom.children('.navadvator').length;

    var turnbyDir = function(id=_nowId,dir='right',nextId){
        if(_isTweening) return;
        _isTweening = true;
        var _turnId = muletId(id),_nextId, _to, _start;
        if(dir=='right'){
            _nextId = muletId(id+1);
            _to = '100%';
            _start = '-100%';
        }else {
            _nextId = muletId(id-1);
            _to = '-100%';
            _start = '100%';
        }
        if(nextId!=undefined) _nextId = nextId;
        $(".selectbtn.on").removeClass('on');
        $(".selectbtn").eq(_nextId).addClass('on');
        doanimate($('.navadvator').eq(_turnId),0,_to);
        doanimate($('.navadvator').eq(_nextId),_start,0,function(){
            $('.navadvator').eq(_turnId).hide();
            _isTweening = false;
            clearTimeout(_id);
            _nowId=_nextId;
            _id = setTimeout(turnbyDir,_time);
        });
    }

    var muletId = function(id=_nowId){
        return id%_total;
    }

    var doanimate = function(dom,start,to,callback){
        dom.css("left",start).show();
        dom.animate({
            left:to
        },"fast","linear",callback);
    }

    var init = function(){
        if(_total<2){
            $('.control_bar').hide();
            return;
        }else {
            var _html = '';
            for(var i = 1;i<=_total;i++){
                _html +=  ('<span class="selectbtn">'+i+'</span>');
            }
            $('.selectbtnbar').html(_html);
            $(".selectbtn:eq(0)").addClass('on');
            $(".selectbtn").click(function(){
                if(_isTweening||$(this).hasClass('on')||$(this).index()==muletId()) return;
                if($(this).index()>muletId()){
                    turnbyDir(_nowId,"right",$(this).index());
                }else{
                    turnbyDir(_nowId,"left",$(this).index());
                }
            })
        }
        _id = setTimeout(turnbyDir,_time);
        $(".control_bar").on("click","span",function(){
            switch($(this)[0].className){
                case "turnleft":
                    turnbyDir(_nowId,"left");
                    break;
                case "turnright":
                    turnbyDir();
                    break;
                default:
                    turnbyDir();
                    break;
            }
        })

        $(".navadvator:gt(0)").hide();
    }

    init();
}

