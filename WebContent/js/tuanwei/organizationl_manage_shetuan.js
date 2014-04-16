/**
 * 社团管理
 */
/*$(function() {
	createTable();//创建表格
});
*/
var mydata = [
		{logo:"<img src='../../img/tuanwei/up.png'/>",name:"设计协会",time:"2014/12/12",amount:"45",
		infor:"<a href='http://www.baidu.com'>详情</a>",
		check:"<input type='button' value='通过' onclick='pass()'/>"+
		"<input  type='button' value='不通过' onclick='pass()'/>"},
		{logo:"lo",name:"吉他协会",time:"2014/12/12",amount:"45",infor:"<a href='http://www.baidu.com'>详情</a>",
		check:"<input type='button' value='通过' onclick='pass()'/>"+
		"<input  type='button' value='不通过' onclick='pass()'/>"},
		{logo:"logo",name:"团委会",time:"2014/12/12",amount:"45",infor:"<a href='http://www.baidu.com'>详情</a>",
			check:"<input type='button' value='通过' onclick='pass()'/>"+
			"<input  type='button' value='不通过' onclick='pass()'/>"},
		{logo:"logo",name:"合唱团",time:"2014/12/12",amount:"45",infor:"<a href='http://www.baidu.com'>详情</a>",
	        check:"通过"},
		{logo:"logo",name:"书法社",time:"2014/12/12",amount:"45",infor:"详情",check:"通过"},
		{logo:"logo",name:"围棋社",time:"2014/12/12",amount:"45",infor:"详情",check:"通过"},
		{logo:"logo",name:"动漫社",time:"2014/12/12",amount:"45",infor:"详情",check:"<input style='width:40px;' type='button' value='编辑'/>"}
	];
jQuery().ready(function (){
jQuery("#list1").jqGrid({
   	/*url:'',*/
	data: mydata,
	datatype: "local",
   	colNames:['LOGO','社团名称', '申请时间', '社团人数','详细信息','审核'],
   	colModel:[
   		{name:'logo',index:'logo', width:110, height:40, align:"center"},
   		{name:'name',index:'name', width:120, height:40, align:"center"},
   		{name:'time',index:'time', width:140, height:40, align:"center"},
   		{name:'amount',index:'amount', width:80, height:40, align:"center"},	
   		{name:'infor',index:'infor', width:80, height:40, align:"center"},		
   		{name:'check',index:'check', width:150, height:40, sortable:false}		
   	],
   	height:205,
   	rowNum:5,
   	autowidth: true,
   /*	rowList:[10,20,30],*/
   	pager: jQuery('#pager1'),
   	/*sortname: 'logo',*/
    viewrecords: true,
    scrollOffset:0,
    sortorder: "desc"
    /*caption:"XML Example"*/
}).navGrid('#pager1',{edit:false,add:false,del:false});
 	
});


function pass(){
	alert(1);
}