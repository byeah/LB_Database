var Map=function(divName)
{
	var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 11,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(divName),myOptions);
    var cur=[]
    
    
    var map_={}
    map_.setMarkers=function(d)
    {
    	for(var i=0;i<cur.length;i++)
    		cur[i].setVisible(false);
    	cur=[];
    	for(var i=0;i<d.length;i++)
    	{
    		var marker=new google.maps.Marker(
    			{
					position:new google.maps.LatLng(d[i].latlng[0],d[i].latlng[1])
				});
			marker.setMap(map)
			map.setCenter(marker.getPosition())
			cur.push(marker)
    	}
    		
    		
    }
    
    
    
    return map_
}
