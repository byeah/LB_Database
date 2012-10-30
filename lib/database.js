var Database=function(filename)
{
	var db={}
	var dataOk=false;
	var data=[]
	
	db.query=function(text)
	{
		if (!dataOk)return [];
		var res=[];
		console.log(text,data[0].addr)
		for(var i=0;i<data.length;i++)
			if (data[i].addr.indexOf(text)>=0||data[i].name.indexOf(text)>=0)
				res.push(data[i])
		return res;
	}
	
	d3.json(filename,function(dat)
	{
		console.log("Ok!")
		data=dat;
		dataOk=true
	});
	return db;
}


