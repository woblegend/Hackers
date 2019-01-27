/*#############################################################

	        COPYRIGHT NOTICE
	        -----------------------------------------------------
	        All text, graphics and logos are Copyright of 1999 Hackers.Com, 
                Graphics, design and concept by Anasazi <anasazi@hackers.com>. 
                All rights reserved. You may freely use the codes below. 

                ##############################################################*/

                var screen_height = window.screen.height;
                var screen_width = window.screen.width;
                var layerRef="null",layerStyleRef="null",styleSwitch="null";
	       	var visibleVar="null";
		var totalTime=10;
		var currTime=0;
	        var pxSwitch="null";
		var widthClipSwitch="null";
		var heightClipSwitch="null";
		var totalNews=3;
		var currentNews=1;
		var quit="no";

		function init(){
                   if (navigator.appName == "Netscape") {
                     nav = true;
		      layerStyleRef="layer.";
	                 layerRef="document.layers";
	             styleSwitch="";
                   visibleVar="show";
	        pxSwitch="";
                  widthClipSwitch=".clip.right";
		    heightClipSwitch=".clip.bottom";
                      txt = ".document";
        }else{     
                  nav = false;
                   layerStyleRef="layer.style.";
		       layerRef="document.all";
		          styleSwitch=".style";
			visibleVar="visible";
                     pxSwitch="px";
                        widthClipSwitch=".posWidth";
		           heightClipSwitch=".posHeight";
	                     txt = "";
               } 
    hideLayer('window');
    loadHDCNews();
}

	function showLayer(layerName){
		eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="visible"');
	}

          
	function hideLayer(layerName){
		eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
	}


	function showNextNews(){
		var NewstoShow=currentNews+1;
		if (NewstoShow > totalNews){NewstoShow=1;}
		hideLayer(eval('"news' + currentNews+'"'));
		showLayer(eval('"news' + NewstoShow+'"'));
		hideLayer(eval('"news' + currentNews + 'Text"'));
		showLayer(eval('"news' + NewstoShow + 'Text"'));
		currentNews=NewstoShow;
                loadHDCNews();
	}

	function showPreviousNews(){
		var NewstoShow=currentNews-1;
		if (NewstoShow < 1){NewstoShow=totalNews;}
		hideLayer(eval('"news' + currentNews+'"'));
		showLayer(eval('"news' + NewstoShow+'"'));
		hideLayer(eval('"news' + currentNews + 'Text"'));
		showLayer(eval('"news' + NewstoShow + 'Text"'));
		currentNews=NewstoShow;
                loadHDCNews();
      
	}

	function showNewsNumber(number){
		var NewstoShow=number;
		hideLayer(eval('"news' + currentNews+'"'));
		showLayer(eval('"news' + NewstoShow+'"'));
		hideLayer(eval('"news' + currentNews + 'Text"'));
		showLayer(eval('"news' + NewstoShow + 'Text"'));
		currentNews=NewstoShow;	
	}
 
	function terminate(){
		if (confirm('Are you sure you want to quit HDC?\nClick OK to engage...')){
                        showLayer('terminated');
			eval(layerRef+'["terminated"]'+styleSwitch+widthClipSwitch+'=1000');
			quit="yes";
			runWipeDown('terminated');
		}

	}

        function runWipeDown(layerName){
	var layerHeight=eval(layerRef+'["'+layerName+'"]'+styleSwitch+ heightClipSwitch);
	eval(layerRef+'["'+layerName+'"]'+styleSwitch+heightClipSwitch+'=0');
	wipeDown(layerName,layerHeight);
}

        function wipeDown(layerName,stopPoint){
	if (eval(layerRef+'["'+layerName+'"]'+styleSwitch+ heightClipSwitch +'<' + stopPoint)){
		eval(layerRef+'["'+layerName+'"]'+styleSwitch+heightClipSwitch+'+=20');
		setTimeout('wipeDown("'+layerName+'",'+stopPoint+')',1);
	}else{
		if (quit == "yes"){
			window.close();
		}
                         connection();
        }
    
}
        function displayStatus(txt) {
              status=txt;
                document.norm = true;
}
        function displayText(header,text,fieldName){
		if (navigator.appName == "Netscape") {
			document.layers[fieldName].document.write('<font face="Verdana" color="#8080FF" size="-1"><B>'+header+'<B></font><BR><font face="Arial" color="#FFFFFF" size="-2">'+text+'</font>');
			document.layers[fieldName].document.close();
		}else{
			document.all[fieldName].innerHTML='<font face="Verdana" color="#8080FF" size="-1"><B>'+header+'<B></font><BR><font face="Arial" color="#FFFFFF" size="-2">'+text+'</font>'
		}
	}
        
       function textBoxOne(){   
               bName = navigator.appName;
               bVer = parseInt(navigator.appVersion); 
                    if      (bName == "Netscape" && bVer == 4) ver = "n4";
                    else if (bName == "Microsoft Internet Explorer" && bVer == 4) ver = "e4";
	            if (ver == "n4") {
                    showLayer('newsone');
                 }
                    if (ver == "e4") {
                    teletype(newsone);
                 }
        }

       function connection(){   
              bName = navigator.appName;
              bVer = parseInt(navigator.appVersion); 
                    if      (bName == "Netscape" && bVer == 4) ver = "n4";
                    else if (bName == "Microsoft Internet Explorer" && bVer == 4) ver = "e4";
	            if (ver == "n4") {
                    showLayer('disengage');
                 }
                    if (ver == "e4") {
                    teletype(disengage);
                 }
        }

       function initHelp(){ 
              bName = navigator.appName;
              bVer = parseInt(navigator.appVersion); 
                    if      (bName == "Netscape" && bVer == 4) ver = "n4";
                    else if (bName == "Microsoft Internet Explorer" && bVer == 4) ver = "e4";
	            if (ver == "n4") {
                    showLayer('helpmsg');
                 }
                    if (ver == "e4") {
                    teletype(helpmsg);
                 }
                    hideLayer('newsone');
        }
                 totalTime=10;
                 currTime=0;
                 var timeline=new Array ();
                 timeline[1]='hideLayer("newsone"); hideLayer("window"); hideLayer("helpmsg");';
                 timeline[3]='showLayer("webmasters"); showLayer("newsRelay");';
                 timeline[4]='showLayer("news1Text"); showLayer("berhenti");';
                 timeline[5]='textBoxOne();';

       function stopTimeline(){
            currTime=totalTime+1;
}
       function startTimeline(){
            currTime=0;
            anasaziTimeSlave();
}
       function anasaziTimeSlave(){ 
            if (currTime <= totalTime){
	      currTime++;
	    if (timeline[currTime] != null){
	       eval(timeline[currTime]);}
                  setTimeout("anasaziTimeSlave()",1000);
	}
}

       function teletype(textLayer) {
            if (textLayer.i == null) {
                textLayer.i = -1;
                textLayer.chri = 0;
                textLayer.txt = textLayer.innerHTML;
                textLayer.lng = textLayer.txt.length;
                textLayer.innerHTML = "";
                textLayer.style.visibility = "visible";
                textLayer.msg = "";
        }

            if (textLayer.i < textLayer.lng) {
                for (textLayer.i = 0; textLayer.i < textLayer.lng; textLayer.i++) {
                   chr = textLayer.txt.charAt(textLayer.i)
            if (chr == "<") {
                 aTag = "<";
                   while (chr != ">") {
                     textLayer.i++;
                    chr = textLayer.txt.charAt(textLayer.i);
                  aTag = aTag + chr;
       }
                aTag = aTag;
              textLayer.msg = textLayer.msg + aTag;
       }                            
            if (chr != ">") {
                textLayer.msg = textLayer.msg + "<span style='display: none' id=" + textLayer.id + "_" + textLayer.chri + ">" + chr + "</span>";
                textLayer.chri++;} 
       }
}
            if (textLayer.i == textLayer.lng) {
                if (textLayer.cmpl == null) {
                textLayer.innerHTML = textLayer.msg;                     
                textLayer.cmpl = textLayer.chri;
                textLayer.chri = 0;
       }
            if (textLayer.chri < textLayer.cmpl) {
                t = eval(textLayer.id + "_" + textLayer.chri);
                t.style.display = "";
                textLayer.chri++;
                ab1 = window.setTimeout("teletype(" + textLayer.id + ")", 20);
               }
       }
}
            master = new Array();     
            dx = new Array();         
            dy = new Array();         
            var max_jump = 95;        
            var steps = 10;           
            var delay = 1;            

        function initSpeeds() {
           for (var ctr = 0; ctr < master.length; ctr++) {

               dx[ctr] = Math.ceil(Math.random() * max_jump);
           if (Math.random() > .6) { 
               dx[ctr] *= -1;
                              }
               dy[ctr] = Math.ceil(Math.random() * max_jump);
           if (Math.random() > .6) { 
               dy[ctr] *= -1;
       }
   }
}

        function MSinitPositions() {
           for (var ctr = 0; ctr < master.length; ctr++) {
              document.all.tags("div")[ctr].style.posLeft += (-steps * dx[ctr]);    
              document.all.tags("div")[ctr].style.posTop += (-steps * dy[ctr]);
              document.all.tags("div")[ctr].style.visibility = "visible";
           }

        loading.style.visibility = "hidden";
}

       function NSinitPositions() {
           for (var ctr = 0; ctr < master.length; ctr++) {
              eval("document." + master[ctr] + ".left += (-steps * dx[ctr])");
              eval("document." + master[ctr] + ".top += (-steps * dy[ctr])");
              eval("document." + master[ctr] + ".visibility = 'visible'");
           }

        document.loading.visibility = "hidden";
}

       function MSfixPositions() {
           for (var ctr = 0; ctr < master.length; ctr++) {
               document.all.tags("div")[ctr].style.posLeft += dx[ctr]
               document.all.tags("div")[ctr].style.posTop += dy[ctr]
}
           if (steps > 1) {
               steps--;
           setTimeout("MSfixPositions()", delay);
    }
}

       function NSfixPositions() {
           for (var ctr = 0; ctr < master.length; ctr++) {
               eval("document." + master[ctr] + ".left += dx[ctr]");
               eval("document." + master[ctr] + ".top +=  dy[ctr]");
}
           if (steps > 1) {
               steps--;
           setTimeout("NSfixPositions()", delay);
    }
}

       function initAnimator() {
           initSpeeds();
           if (window.navigator.userAgent.indexOf("MSIE") > 0) {
               MSinitPositions();
               MSfixPositions();
    } else {
               NSinitPositions();
               NSfixPositions();
    }

         startTimeline();
}
               master[0] = "topleft";
               master[1] = "botleft";
               master[2] = "topright";
               master[3] = "botright";
               master[4] = "window";
               master[5] = "berhenti";


        if(navigator.appName == "Netscape") {
	  nav = true;
                 } else {
            nav = false;

}

        function loadHDCNews() {

        var HdcNews=currentNews;

	newsObj = eval(layerRef + '["news' + HdcNews + 'Text"]' + styleSwitch);
	newsObj.left = 571;
	newsObj.top = 70;
	newsTxt = eval(layerRef + '["news' + HdcNews + 'Text"]' + txt);
}

var loop = true;
var direction = "up";
var speed = 1;
var timer1 = null;

function newsScroll(dir,spd) {
	direction = dir;
	speed = spd;
	var top = parseInt(newsObj.top);
	if(nav) {
		var cBottom = newsObj.clip.bottom;
	} else {
		var cTop = 0;
		var cRight = screen_width-205;
		var cBottom = parseInt(newsObj.clip.substring(15, 21));
		var cLeft = 0;
	}
	switch(direction) {
		case "up" :
			newsObj.top = (top-(speed));
			if(nav) {
				newsObj.clip.bottom = cBottom+(speed);
			} else {
				var ccBottom = cBottom+(speed);
				newsObj.clip = "rect(" + cTop + " " + cRight + " " + ccBottom + " " + cLeft + ")";
			}
			break;
		case "dn" :
			if(top >= 0) {
				newsObj.top = 70;
			} else {
				newsObj.top = (top+(speed));
				if(nav) {
					newsObj.clip.bottom = cBottom-(speed);
				} else {
					var ccBottom = cBottom-(speed);
					newsObj.clip = "rect(" + cTop + " " + cRight + " " + ccBottom + " " + cLeft + ")";
				}
			}
			break;
		case "tp" :
			newsObj.top = 70;
			if(nav) {
				newsObj.clip.top = 0;
				newsObj.clip.right = (screen_width-205);
				newsObj.clip.bottom = (screen_height-90);
				newsObj.clip.left = 0;
			} else {
				var cTop = 0;
				var cRight = screen_width-205;
				var cBottom = screen_height-90;
				var cLeft = 0;
				newsObj.clip = "rect(" + cTop + " " + cRight + " " + cBottom + " " + cLeft + ")";
			}
			break;
	}
	if(loop == true) {
		timer1 = setTimeout("newsScroll(direction,speed)", 1);
	}
}


function keyDown(e) {
	var key_press = (nav) ? e.which : window.event.keyCode;
	if(key_press == 112 || key_press == 70) {
		loop=false;
		newsScroll('up',5);
	}

	else if(key_press == 107 || key_press == 86) {
		loop=false;
		newsScroll('dn',5);

	} else if(key_press == 115 || key_press == 83) {
		loop=false;
		newsScroll('tp');

	}

}