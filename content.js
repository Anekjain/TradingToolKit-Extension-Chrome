// Here we need to modify the web page was per our requirements.
// alert("Testing")

function refresh(){
    document.getElementById("refresh").click();
    }     
  
if (window.location.href == "https://tradingtick.com/options/callvsput.php") {
	document.getElementById("symbol").selectedIndex = "1";
    	document.getElementById("type").selectedIndex = "2";
    	document.getElementById("submit").click();          
	setInterval(refresh, 1000);
    }




