var LB_DB=function(divName,dataName)
{
   	var db=Database(dataName)
	var map=Map(divName)
	
    var lbs={}
    lbs.print=function()
    {
    	console.log(db.query("!"))
    	console.log(db.data);
    }
    
   	lbs.update=function(inId,outId)
   	{
   		
   		var box=document.getElementById(inId)
   		var list=document.getElementById(outId)
   		list.innerHTML="";
   		var text=box.value;
   		if (text.length==0)return;
   		console.log(text)
   		var res=db.query(text)
   		map.setMarkers(res.slice(0,10))
   		for(var i=0;i<Math.min(res.length,10);i++)
   		{
   			list.innerHTML+="<li onClick=click_menu("+i+")>"+res[i].name+"</li>"
   		//	console.log("<li onClick=\"click("+i+")\">"+res[i].name+"</li>")
   			//console.log(res[i].name)
   		}
   	} 
   
    return lbs;
}

var lbs;
function main()
{
	//document.getElementById("select").add(new Option("123","12223"))
	lbs=LB_DB("map_canvas","data/ds.json");
}

function update()
{
	lbs.update("inputbox","List")
}
 
function click_menu(id)
{
	console.log(id)
}
  

