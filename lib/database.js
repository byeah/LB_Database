var Database=function(filename)
{
	var db={}
	var dataOk=false;
	var data=[]
	
	function fc(str,token)
	{
		var tot=0;
		for(var i=0;i<token.length;i++)
			if (str.toLowerCase().indexOf(token[i].toLowerCase())>=0)
				tot++;
		return tot;
	}
	
	db.query=function(text)
	{
		if (!dataOk)return [];
		var res=[];
		var token=text.split(" ").filter(function(d){return d.length>0})
		console.log(token)
		//console.log(text,data[0].addr)
		for(var i=0;i<data.length;i++)
		{
			var tot=fc(data[i].name,token)//fc(data[i].addr,token)
			if (tot>0)
				res.push({data:data[i],num:tot})
		}
		
		res=res.sort(function(a,b){return b.num-a.num})
		console.log(res.slice(0,10))
		return res.map(function(d){return d.data})
	}
	
	d3.json(filename,function(dat)
	{
		console.log("Ok!")
		data=dat;
		dataOk=true
	});
	return db;
}


