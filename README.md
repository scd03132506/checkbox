# checkbox��radio��select �ؼ����

ʹ�÷���

$(function () {
	

//��ѡ��
   
$.myPlugin.simRadio({
	   
simTag:$('.simRadio'),			//����
	   
simActive:'active',				//ѡ��class��
	   
simType:'floatLeft',				//��������floatLeft��������floatTop
	   
simSum:5,						//���5����ѡ��
	   
simCheck:2,						//Ĭ��ѡ�еڶ���
	   
simText:['radio1','radio2','radio3','radio4','radio5']	//��ѡ���ı�
	   
});
	

//��ѡ��
  
 $.myPlugin.simCheck({
	   
simTag:$('.simCheck'),			//����
	   
simActive:'active',				//ѡ��class��
	   
simType:'floatLeft',				//��������floatLeft��������floatTop
	   
simSum:5,						//���5����ѡ��
	   
simText:['checkbox1','checkbox2','checkbox3','checkbox4','checkbox5']	//��ѡ���ı�
	   
});
	
//������
   

$.myPlugin.simSelect({
	   
simTag:$('.simSelect'),			//����
	   
simActive:'active',				//ѡ��class��
	   
simType:'floatLeft',				//��������floatLeft��������floatTop
	   
simSum:3,						//���3��������
	   
simBtnText:['choice11','choice12','choice13'],	//������Ĭ���ı�
	   
simText:[['dropdown1','dropdown12','dropdown13'],['dropdown111','dropdown122','dropdown133','dropdown144'],['dropdown1111','dropdown1222','dropdown1333']],	//�����б��ı�
	   simVal:[['1','2','3'],['11','22','33','44'],['111','222','333']]		//�����б�ֵ
	   
});



})