window.onload = function(){
    var temp = document.getElementById("sub");

    temp.onclick = function(){
	
        var n = document.getElementById("nameofsubject").value;
        var mon = document.getElementById("mon").value;
        var tue = document.getElementById("tue").value;
        var wed = document.getElementById("wed").value;
        var thu = document.getElementById("thu").value;
        var fri = document.getElementById("fri").value;
        var d = [mon, tue, wed, thu, fri];

        function Subject(nos, day){
            var settings = Windows.Storage.ApplicationData.current.localSettings;
            document.getElementById("data").innerHTML = nos;
            if (!settings.subject) {
                settings.subject=[];
            }
            settings.subject.push({
            name : nos ,
            day : day,
            attendance : 0,
            bunk : 0	

        })
	}

    var e = new Subject(n, d);
};
};