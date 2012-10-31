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
   		//console.log(text)
   		var res=db.query(text)
   		map.setMarkers(res.slice(0,10))
   		for(var i=0;i<Math.min(res.length,10);i++)
   		{
   			//list.innerHTML+="<li onClick=click_menu("+i+")>"+res[i].name+"</li>"
   			list.innerHTML+="<li onmouseover=\"this.style.backgroundColor='#D4D4BF'\" onmouseout=\"this.style.backgroundColor=''\" onClick=click_menu("+i+")>"+res[i].name+"</li>"
   			//list.innerHTML+="<h onmouseover=\"this.style.backgroundColor='#666666'\" onmouseout=\"this.style.backgroundColor=''\" onClick=click_menu("+i+")>"+res[i].name+"</h> </br>"
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
	var s="http://166.111.139.109:8180/reverse?input=ab22c%203123%2041214%2041"
	d3.json(s,function(d){console.log(d)})

}

function update()
{
	lbs.update("inputbox","List")
}
 
function click_menu(id)
{
	console.log(id)
}
  

