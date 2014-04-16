/**
 * 社团管理
 */
$(function() {
	createTable();//创建表格
});

function createTable(){
	jQuery("#list").jqGrid({
		
		    url:'<%=basePath%>createGrid.action',
		
		    datatype: "json",
		
		    mtype: 'POST',
		
		    height: 240,
		
		    autowidth: true,
		
		    altRows:true,//隔行变色
		
		    altclass:'ui-widget-content-altclass',//隔行变色样式
		
		    colNames:['id','name','operation'],
		
		    colModel:[
		
		        {name:'id',key:true,index:'id',hidden:true},//如果需要对行操作,则选择一个主键 key:true
		
		        {name:'name',index:'name',sortable:false},//如果需要点击表头排序 则sortable:false
		
		        {name:'act',index:'act',width:200,sortable:false,title:false,align:"center" ,sortable:false} 
	
		    ],
		
		      
		
		    gridComplete: function(){ //列表生成后,给某一列绑定操作 例如删除操作
		
		            var ids = $("#list").jqGrid('getDataIDs');
		
		            for(var i=0;i < ids.length;i++){
		
		                showInfo = "<a href='##' onclick=\"showInfo('"+ids[i]+"');\">"+$("#list").jqGrid('getRowData',ids[i]).id+"</a>";
		
		                $("#list").jqGrid('setRowData',ids[i],{act:showInfo});
	
		            }
		
		    },
		
		     
	
		    postData: { //传递的数据，定义在form中
		
		        //查询所用
	
		            'searchId': function() { return $("#searchId").val(); },
	
		            'searchName': function() { return $("#searchName").val(); }
		
		    },
	
		    shrinkToFit:true,
		
		    rowNum:10,//初始化时每一页显示的个数
	
		    rowList:[10,20,30],//每一页能显示的个数
	
		    jsonReader:{ 

		        root:"listJson", // 从服务端返回的实际数据，名字随意起，但是在Action类中必须有与之匹配的属性
	
		        repeatitems : false            
		
		    },
		
		    rownumbers: true,
		
		    pager: '#pager_List',//如果不需要左下角的 自带的查询 刷新功能  就不用添加在最后一行的 jqGrid('navGrid','#pager_List'...
		
		    sortname: 'id',
		
		    viewrecords: true,
	
		    sortorder: "desc",
		
		    multiselect: true
		
		    caption: "jQGrid列表"
		
		});
		
		jQuery("#list").jqGrid('navGrid','#',{add:false,edit:false,del:false});

}