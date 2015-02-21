var d = new Date();
var n = d.getTime();
var day1;//dat is to be assesed
var time;
var current_lat;
var cuurent_long;
var settings = Windows.Storage.ApplicationData.current.localSettings;
for(var i=0;i<settings.subjects.length;i++)
{
	
				if(setting.subjects[i].day[day1]==time)
		{
				if(current_lat>setting['latitude']-100&&current_lat<setting['latitude']+100) 
					setting.subjects[i].attendance+=1;
				 else
				 	setting.subjects[i].bunks+=1;
				
			}

}


