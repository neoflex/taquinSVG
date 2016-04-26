		
	//****************
	//Le menu de configuration
	//****************
	

	var choixim=1;
	var nbcasel=3;
	var nbcasec=3;
	var limitep=4;
	var enexpert=0;
	var turbo=0;
	var lalgo=4;
	var randmel=1;
	var nbmel=3;
	var nbrmel=8;
	
	function surligne(evt,pt,sd){
	var tempcible=evt.target;
	if(choixim!=pt){
	if (sd==1){
	tempcible.setAttributeNS(null,'class','choixhover');
	}
	else {
	tempcible.setAttributeNS(null,'class','choix');
	}
	}
	}
	function surligne2(evt,pt,sd){
	var tempcible=evt.target;
	if(lalgo!=pt){
	if (sd==1){
	tempcible.setAttributeNS(null,'class','choixhover2');
	}
	else {
	tempcible.setAttributeNS(null,'class','choix2');
	}
	}
	}
	function surligne3(evt,pt,sd){
	var tempcible=evt.target;
	if(nbmel!=pt){
	if (sd==1){
	tempcible.setAttributeNS(null,'class','choixhover');
	}
	else {
	tempcible.setAttributeNS(null,'class','choix');
	}
	}
	}
	function modeturbo(evt){
	var tempcible=evt.target;

	if(turbo==1){turbo=0;tempcible.ownerDocument.getElementById('lacroix').setAttributeNS(null,'visibility','hidden');}
	else {turbo=1;tempcible.ownerDocument.getElementById('lacroix').setAttributeNS(null,'visibility','visible');}

	}
	function survoletexte(evt){
	var tempcible=evt.target;
	tempcible.setAttributeNS(null,'fill-opacity','0.6');
	}
	function survoletexteout(evt){
	var tempcible=evt.target;
	tempcible.setAttributeNS(null,'fill-opacity','1');
	}
	function modeavance(evt){
	var tempcible=evt.target;
	if(enexpert==0){
		enexpert=1;
		tempcible.ownerDocument.getElementById('menuexpert').setAttributeNS(null,'visibility','visible');
		tempcible.ownerDocument.getElementById('options').firstChild.data='< Mode basique';
		if(turbo==1){tempcible.ownerDocument.getElementById('lacroix').setAttributeNS(null,'visibility','visible');}
	
		}
	else {enexpert=0;
		tempcible.ownerDocument.getElementById('menuexpert').setAttributeNS(null,'visibility','hidden');
		tempcible.ownerDocument.getElementById('optionsbfs').setAttributeNS(null,'visibility','hidden');
		tempcible.ownerDocument.getElementById('options').firstChild.data='Mode avance >';
		tempcible.ownerDocument.getElementById('lacroix').setAttributeNS(null,'visibility','hidden');
		}
	}
	function choiximage(evt,choix)
	{
	choixim=choix;
	evt.target.setAttributeNS(null,'class','choixvalide');
	var tempch1=evt.target.ownerDocument.getElementById('choix1');
	var tempch2=evt.target.ownerDocument.getElementById('choix2');
	var tempch3=evt.target.ownerDocument.getElementById('choix3');
	var tempch4=evt.target.ownerDocument.getElementById('choix4');
	var tempch5=evt.target.ownerDocument.getElementById('choix5');
	var tempch6=evt.target.ownerDocument.getElementById('choix6');
	
	
	if(choixim==1){tempch2.setAttributeNS(null,'class','choix');
				   tempch3.setAttributeNS(null,'class','choix');
				   tempch4.setAttributeNS(null,'class','choix');
				   tempch5.setAttributeNS(null,'class','choix');
				   tempch6.setAttributeNS(null,'class','choix');}			   
	if(choixim==2){tempch1.setAttributeNS(null,'class','choix');
				   tempch3.setAttributeNS(null,'class','choix');
				   tempch4.setAttributeNS(null,'class','choix');
				   tempch5.setAttributeNS(null,'class','choix');
				   tempch6.setAttributeNS(null,'class','choix');}   
	if(choixim==3){tempch1.setAttributeNS(null,'class','choix');
				   tempch2.setAttributeNS(null,'class','choix');
				   tempch4.setAttributeNS(null,'class','choix');
				   tempch5.setAttributeNS(null,'class','choix');
				   tempch6.setAttributeNS(null,'class','choix');}
	if(choixim==4){tempch1.setAttributeNS(null,'class','choix');
				   tempch2.setAttributeNS(null,'class','choix');
				   tempch3.setAttributeNS(null,'class','choix');
				   tempch5.setAttributeNS(null,'class','choix');
				   tempch6.setAttributeNS(null,'class','choix');}
	if(choixim==5){tempch1.setAttributeNS(null,'class','choix');
				   tempch2.setAttributeNS(null,'class','choix');
				   tempch3.setAttributeNS(null,'class','choix');
				   tempch4.setAttributeNS(null,'class','choix');
				   tempch6.setAttributeNS(null,'class','choix');}
	if(choixim==6){tempch1.setAttributeNS(null,'class','choix');
				   tempch2.setAttributeNS(null,'class','choix');
				   tempch3.setAttributeNS(null,'class','choix');
				   tempch4.setAttributeNS(null,'class','choix');
				   tempch5.setAttributeNS(null,'class','choix');}
	}
	function choixalgo(evt,choix)
	{
	lalgo=choix;
	evt.target.setAttributeNS(null,'class','choixvalide2');
	var tempch1=evt.target.ownerDocument.getElementById('algo1');
	var tempch2=evt.target.ownerDocument.getElementById('algo2');
	var tempch3=evt.target.ownerDocument.getElementById('algo3');
	var tempch4=evt.target.ownerDocument.getElementById('algo4');
	var zoptions=evt.target.ownerDocument.getElementById('optionsbfs');
	
	if(lalgo==1){tempch2.setAttributeNS(null,'class','choix2');
				 tempch3.setAttributeNS(null,'class','choix2');
				 tempch4.setAttributeNS(null,'class','choix2');
				 zoptions.setAttributeNS(null,'visibility','hidden');
				 }
				   		   
	if(lalgo==2){tempch1.setAttributeNS(null,'class','choix2');
				 tempch3.setAttributeNS(null,'class','choix2');
				 tempch4.setAttributeNS(null,'class','choix2');
				 zoptions.setAttributeNS(null,'visibility','visible');
				 }  
				 
	if(lalgo==3){tempch2.setAttributeNS(null,'class','choix2');
				 tempch1.setAttributeNS(null,'class','choix2');
				 tempch4.setAttributeNS(null,'class','choix2');
				 zoptions.setAttributeNS(null,'visibility','hidden');
				 }
	if(lalgo==4){tempch2.setAttributeNS(null,'class','choix2');
				 tempch1.setAttributeNS(null,'class','choix2');
				 tempch3.setAttributeNS(null,'class','choix2');
				 zoptions.setAttributeNS(null,'visibility','hidden');
				 }  
	}
	
	function choixm(evt,choix)
	{
	nbmel=choix;
	
	evt.target.setAttributeNS(null,'class','choixvalide');
	var tempch1=evt.target.ownerDocument.getElementById('choixm1');
	var tempch2=evt.target.ownerDocument.getElementById('choixm2');
	var tempch3=evt.target.ownerDocument.getElementById('choixm3');
	var tempch4=evt.target.ownerDocument.getElementById('choixm4');
	
	if(nbmel==1){tempch2.setAttributeNS(null,'class','choix');
				 tempch3.setAttributeNS(null,'class','choix');
				 tempch4.setAttributeNS(null,'class','choix');
				 }
				   		   
	if(nbmel==2){tempch1.setAttributeNS(null,'class','choix');
				 tempch3.setAttributeNS(null,'class','choix');
				 tempch4.setAttributeNS(null,'class','choix');
				
				 }  
				 
	if(nbmel==3){tempch2.setAttributeNS(null,'class','choix');
				 tempch1.setAttributeNS(null,'class','choix');
				 tempch4.setAttributeNS(null,'class','choix');
				 
				 }
	if(nbmel==4){tempch2.setAttributeNS(null,'class','choix');
				 tempch1.setAttributeNS(null,'class','choix');
				 tempch3.setAttributeNS(null,'class','choix');
				
				 }  
	}
	function chval(evt,dir,val) {
	var temptextel=evt.target.ownerDocument.getElementById('nbl');
	var temptextec=evt.target.ownerDocument.getElementById('nbc');
	var temptextep=evt.target.ownerDocument.getElementById('nbp');
	temptextel=temptextel.firstChild;
	temptextec=temptextec.firstChild;
	temptextep=temptextep.firstChild;
	if(dir==1){nbcasel=nbcasel+1*val;}
	if(dir==2){nbcasec=nbcasec+1*val;}
	if(dir==3){limitep=limitep+1*val;}
	if(nbcasel<=1){nbcasel=2;}
	if(nbcasec<=1){nbcasec=2;}
	if(limitep<=1){limitep=1;}
	temptextel.data=nbcasel.toString();
	temptextec.data=nbcasec.toString();
	temptextep.data=limitep.toString();
	
	}
	
	
	function valider (evt){
	nbrmel=(parseFloat(nbmel)-1)*parseFloat((nbcasel-1)*(nbcasec-1)/1.4)+nbmel-1;
	svgdoc=evt.target.ownerDocument;
	svgdoc.getElementById('menuexpert').setAttributeNS(null,'visibility','hidden');
	svgdoc.getElementById('lacroix').setAttributeNS(null,'visibility','hidden');
	svgdoc.getElementById('optionsbfs').setAttributeNS(null,'visibility','hidden');
		
	cible6=svgdoc.getElementById('lemenu');
	cible6.setAttributeNS(null,'visibility','hidden');
	urlimage='im'+choixim.toString()+'.jpg';
	init();
	
	}
	function resoudre(evt){

	cible8.setAttributeNS(null,'visibility','visible');
	setTimeout("resoudre1()",100);

	}
	function resoudre1(){
	if(lalgo==1){if(turbo==1){BFSM();}else{BFS();}}
	if(lalgo==2){if(turbo==1){DFSM(limitep);}else{DFS(limitep);}}
	if(lalgo==3){if(turbo==1){IDSM();}else{IDS();}}
	if(lalgo==4){MMD();}
	}
