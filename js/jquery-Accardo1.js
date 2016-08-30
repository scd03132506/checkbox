$.myPlugin={
    simRadio:function(obj) { //单选按钮
        var defaults = {
            simTag    : $('.simRadio'),                       //容器
            simActive : 'active',							  //选中class名
			simType   : 'floatLeft',						  //横向排列floatLeft纵向排列floatTop
			simSum	  : 3,									  //添加3个单选框
			simCheck  : 1,								      //默认选中第一个
			simText   : ['radio1','radio2','radio3']		  //默认文本	
           }; //默认数据
        var obj =  $.extend(defaults, obj);					  //获取自定义属性
		obj.simCheck = obj.simCheck-1;						  //选中的序号-1，eq是从0开始
		for(i=0;i<obj.simSum;i++){							  //循环添加标签结构
			var list_li = '<li class='+obj.simType+'><input type="radio" name="radio" /><i></i><span>'+obj.simText[i]+'</span></li>'; //声明结构
			obj.simTag.append(list_li);						  //添加进容器
			obj.simTag.find('li:eq('+obj.simCheck+') i,li:eq('+obj.simCheck+') input[type="radio"]').addClass(obj.simActive);  //增加选中样式
		}
        obj.simTag.find('li').click(function () {
            var _this = $(this);
            _this.find('i').addClass(obj.simActive).parent().siblings().find('i').removeClass(obj.simActive); //当前点击radio增加选中类并移除其他radio class
            _this.find('input').attr('checked','true').parent().siblings().find('input').removeAttr('checked');  //给隐藏的checkbox控件增加选中属性并移除其他checkbox选中属性
        })
    },
    simCheck:function(obj) { //复选框
        var defaults = {
            simTag    : $('.simCheck'),						  //容器
            simActive : 'active',							  //选中class名
			simType   : 'floatLeft',						  //横向排列floatLeft纵向排列floatTop
			simSum	  : 3,									  //添加3个多选框
			simText   : ['checkbox1','checkbox2','checkbox3'] //默认文本
        }; //默认数据
        var obj =  $.extend(defaults, obj);					  //获取自定义属性
		for(i=0;i<obj.simSum;i++){							  //循环添加标签结构
			var list_li = '<li class='+obj.simType+'><input type="checkbox" name="checkbox" /><i></i><span>'+obj.simText[i]+'</span></li>';  //声明结构
			obj.simTag.append(list_li);						  //添加进容器
		}
        obj.simTag.find('li').click(function () { 			  //选中样式添加和取消
            var _this=$(this);
            if (_this.find('input[type=checkbox]')[0].checked) {
                _this.find('i').removeClass(obj.simActive);
                $(this).find('input[type=checkbox]').removeProp('checked');
            } else {
                _this.find('i').addClass(obj.simActive);
                $(this).find('input[type=checkbox]').prop('checked','true');
            }
        })
    },
    simSelect:function(obj) {//下拉框
        var defaults = {
            simTag    : $('.simSelect'),					  //容器
            simActive : 'active',							  //选中class名
			simType   : 'floatLeft',						  //横向排列floatLeft纵向排列floatTop
			simSum	  : 3,									  //添加3个下拉框
			simBtnText: ['choice1','choice12','choice13'],	  //下拉框默认文本	
			simText   : [['dropdown1','dropdown12','dropdown13'],['dropdown111','dropdown122','dropdown133','dropdown144'],['dropdown1111','dropdown1222','dropdown1333']],  //各下拉框文本
			simVal    : [['1','2','3'],['11','22','33','44'],['111','222','333']]	//各下拉框值
        }; //默认数据
        var obj =  $.extend(defaults, obj);					  //获取自定义属性
		for(i=0;i<obj.simSum;i++){							  //循环添加标签结构
			var list_li = '<div class='+obj.simType+'><p><input type="hidden" name="select" /><span>'+obj.simBtnText[i]+'</span><i></i></p><ul></ul></div>';//声明结构
			obj.simTag.append(list_li);						  //添加进容器
			for(s=0;s<obj.simText[i].length;s++){			  //循环添加下拉列表结构
			var list_select = '<li><span data-value='+obj.simVal[i][s]+'>'+obj.simText[i][s]+'</span></li>';   //声明结构
			obj.simTag.find('ul:eq('+i+')').append(list_select);   //添加进下拉框
			}
			
			
		}
        obj.simTag.find('p span').click(function () {
            var _this=$(this);
                _this.siblings('i').addClass(obj.simActive).parent().addClass(obj.simActive).parent().find('ul').addClass(obj.simActive).parent().siblings().find('ul,p').removeClass(obj.simActive).find('i').removeClass(obj.simActive); //显示下拉框
        })
		this.simSelectSpan(obj);
        this.simSelectDocument(obj);
    },
	simSelectSpan:function(obj){ //下拉框选择span
        var objSpan=obj.simTag.find('div ul li span');
        objSpan.click(function(){
            var _this    = $(this);
            var thisText = _this.text();                        //span text 数据
            var thisVal  = _this.attr('data-value');            //span data-value 数据
            _this.parent().parent().removeClass(obj.simActive);      //隐藏下拉框
            _this.parents('div').find('p.'+obj.simActive).children('span').text(thisText);    //文本 数据赋值
            _this.parents('div').find('p.'+obj.simActive).children('input').val(thisVal);     //value 数据赋值
            obj.simTag.find('p,i').removeClass(obj.simActive);       //移除选中样式
        })

    },
    simSelectDocument:function(obj){  //全局取消select
        $(document).on('click', function (e) {
            if(!$(e.target).parents(obj.simTag).hasClass(obj.simActive)){
                    obj.simTag.find('ul,p,i').removeClass(obj.simActive);      //移除选中样式
                    e.stopPropagation();
            }
        })
    }
};