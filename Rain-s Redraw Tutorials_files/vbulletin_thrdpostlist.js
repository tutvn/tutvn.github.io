




/*
     FILE ARCHIVED ON 21:43:05 thg 3 28, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:53:55 thg 1 5, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*======================================================================*\
|| #################################################################### ||
|| # vBulletin 4.2.2 Patch Level 1
|| # ---------------------------------------------------------------- # ||
|| # Copyright �2000-2014 vBulletin Solutions Inc. All Rights Reserved. ||
|| # This file may not be redistributed in whole or significant part. # ||
|| # ---------------- VBULLETIN IS NOT FREE SOFTWARE ---------------- # ||
|| # /web/20150328214305/http://www.vbulletin.com | /web/20150328214305/http://www.vbulletin.com/license.html # ||
|| #################################################################### ||
\*======================================================================*/
var ie5;if(document.all&&navigator.appVersion.charAt(navigator.appVersion.indexOf("MSIE")+5)>=5&&navigator.userAgent.toLowerCase().indexOf("opera")==-1){ie5=true}else{ie5=false}var pd=new Array();var pn=new Array();var pu=new Array();var imgStringCache=new Array();var imgCache=new Array();if(document.documentElement.dir=="rtl"){imgCache={I:'<img src="'+imgdir_misc+'/tree_ir.gif" alt="" />',L:'<img src="'+imgdir_misc+'/tree_rtl.gif" alt="" />',T:'<img src="'+imgdir_misc+'/tree_tr.gif" alt="" />'}}else{imgCache={I:'<img src="'+imgdir_misc+'/tree_i.gif" alt="" />',L:'<img src="'+imgdir_misc+'/tree_ltr.gif" alt="" />',T:'<img src="'+imgdir_misc+'/tree_t.gif" alt="" />'}}function showPrevNextPost(A){info=pn[curpostid].split(",");showPost(info[A])}function setQRpostid(A){if(quickreply){YAHOO.util.Dom.get("qr_postid").value=A}}function navToPost(B,A){if(B!=0&&!A){window.location="showthread.php?"+SESSIONURL+"p="+B+"#poststop"}}function showPost(C,A){if(typeof (vB_QuickEditor)=="object"&&vB_QuickEditor.editstate){vB_QuickEditor.abort()}if(typeof pd[C]!="undefined"){try{if(quickreply){YAHOO.util.Dom.get("qr_postid").value=C}YAHOO.util.Dom.setStyle("link"+curpostid,"fontWeight","normal");YAHOO.util.Dom.addClass("div"+curpostid,"postoff");YAHOO.util.Dom.removeClass("div"+curpostid,"poston");YAHOO.util.Dom.setStyle("link"+C,"fontWeight","bold");YAHOO.util.Dom.addClass("div"+C,"poston");YAHOO.util.Dom.removeClass("div"+C,"postoff");try{YAHOO.util.Dom.get("posttree").scrollIntoView(true)}catch(B){}YAHOO.util.Dom.get("posts").innerHTML=pd[C];PostBit_Init(YAHOO.util.Dom.get("post_"+C),C);FIRSTPOSTID=C;LASTPOSTID=C}catch(B){navToPost(C,A)}}else{navToPost(C,A)}curpostid=C;return false}function writeLink(A,G,F,E,C,J,I,K,H,B){if(A==curpostid||H){bgclass="poston"}else{bgclass="postoff"}document.write('<div class="'+bgclass+'" id="div'+A+'">');if(!imgStringCache[C]){imgStringCache[C]="";imgArray=C.split(",");for(var D in imgArray){if(!YAHOO.lang.hasOwnProperty(imgArray,D)){continue}curType=imgArray[D];if(isNaN(curType)){imgStringCache[C]+=imgCache[curType]}else{imgStringCache[C]+='<img src="'+cleargifurl+'" width="'+(curType*20)+'" height="20" alt="" />'}}}document.write(imgStringCache[C]);if(G==1){statusicon="new"}else{statusicon="old"}document.write('<img src="'+imgdir_statusicon+"/post_"+statusicon+'.png" alt="" /> ');if(I=="more"){document.write('<a href="'+B+'" id="link'+A+'"><i>'+morephrase+"</i></a></div>\n")}else{if(F==1){document.write('<img src="'+imgdir_misc+'/paperclip.png" alt="PaperClip" title="Attachment" /> ')}if(typeof pu[E]!="undefined"){document.write(pu[E].bold()+" ")}else{document.write(guestphrase+" ")}if(A==curpostid){titlestyle=' style="font-weight:bold;"'}else{titlestyle=""}document.write('<a href="'+B+'" onclick="return showPost('+A+')" id="link'+A+'"'+titlestyle+">"+J+"</a> ");if(ie5&&typeof pd[A]!="undefined"){iscached="."}else{iscached=""}document.write(I+', <span class="time">'+K+iscached+"</span>");document.write("</div>\n")}};