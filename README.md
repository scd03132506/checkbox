# checkbox，radio，select 控件插件

使用方法

$(function () {
	

//单选框
   
$.myPlugin.simRadio({
	   
simTag:$('.simRadio'),			//容器
	   
simActive:'active',				//选中class名
	   
simType:'floatLeft',				//横向排列floatLeft纵向排列floatTop
	   
simSum:5,						//添加5个单选框
	   
simCheck:2,						//默认选中第二个
	   
simText:['radio1','radio2','radio3','radio4','radio5']	//单选框文本
	   
});
	

//多选框
  
 $.myPlugin.simCheck({
	   
simTag:$('.simCheck'),			//容器
	   
simActive:'active',				//选中class名
	   
simType:'floatLeft',				//横向排列floatLeft纵向排列floatTop
	   
simSum:5,						//添加5个多选框
	   
simText:['checkbox1','checkbox2','checkbox3','checkbox4','checkbox5']	//多选框文本
	   
});
	
//下拉框
   

$.myPlugin.simSelect({
	   
simTag:$('.simSelect'),			//容器
	   
simActive:'active',				//选中class名
	   
simType:'floatLeft',				//横向排列floatLeft纵向排列floatTop
	   
simSum:3,						//添加3个下拉框
	   
simBtnText:['choice11','choice12','choice13'],	//下拉框默认文本
	   
simText:[['dropdown1','dropdown12','dropdown13'],['dropdown111','dropdown122','dropdown133','dropdown144'],['dropdown1111','dropdown1222','dropdown1333']],	//下拉列表文本
	   simVal:[['1','2','3'],['11','22','33','44'],['111','222','333']]		//下拉列表值
	   
});



})