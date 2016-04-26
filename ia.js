var rangement=new Array();

//*****************
//class etat
//*****************
	var etat = function() {	
	
	this.troul=0;
	this.trouc=0;
	this.liste_mouv=new lmouv();
	this.positions=new lpos();
	this.tauxmel=0;
	this.enplace=0;
	
	}
	etat.prototype.init = function(){
	
	this.troul=nl_int;
	this.trouc=nc_int;
	this.positions.init();
	}
	etat.prototype.fixmel = function(){
	this.tauxmel=this.melange();
	
	
	}
	etat.prototype.melange = function(){
	var tempmelange=0;
	var tempecase,tempcasel,tempcasec;
	for (var i=1; i<=nbcasel ;i++) 
		 {	
			for( var j=1;j<=nbcasec;j++)
			{tempcase=this.positions.retourne(i,j);
				
				
				placetiret=tempcase.indexOf('-',0);
				tempcasel=tempcase.substring(0,placetiret+1);		
				tempcasec=tempcase.substring(placetiret+1,10);			
				tempcasel=parseFloat(tempcasel);
				tempcasec=parseFloat(tempcasec);
				tempmelange+=Math.abs(i-tempcasel)+Math.abs(j-tempcasec);
				 }
		
		}
	 return tempmelange;
	}
	etat.prototype.nbenplace = function(){
	this.enplace=this.nbplace();
	}
	
	
	
	etat.prototype.nbplace = function(){
	var tempnbenplace=0;
	var tempecase,tempcasel,tempcasec;
	for (var i=1; i<=nbcasel ;i++) 
		 {	
			for( var j=1;j<=nbcasec;j++)
			{tempcase=this.positions.retourne(i,j);
				
				
				placetiret=tempcase.indexOf('-',0);
				tempcasel=tempcase.substring(0,placetiret+1);		
				tempcasec=tempcase.substring(placetiret+1,10);			
				tempcasel=parseFloat(tempcasel);
				tempcasec=parseFloat(tempcasec);
				if((i==tempcasel)&(j==tempcasec)){tempnbenplace=tempnbenplace+1;}
			}
		
		}
	 return tempnbenplace;
	}

	etat.prototype.compare = function(autre_etat){
	var temptest=true;
	for (var i=1; i<=nbcasel ;i++) 
		 {	
			for( var j=1;j<=nbcasec;j++)
			{if(this.positions.retourne(i,j)!=autre_etat.positions.retourne(i,j)){temptest=false;break;}
			}
		}
	return temptest;
	}
	etat.prototype.egal = function(autre_etat){
	this.positions.egal(autre_etat.positions);
	this.liste_mouv.egal(autre_etat.liste_mouv);
	this.troul=autre_etat.troul;
	this.trouc=autre_etat.trouc;
	if(autre_etat.tauxmel){this.tauxmel=autre_etat.tauxmel;}
	if(autre_etat.enplace){this.enplace=autre_etat.enplace;}
	}
	
	etat.prototype.echange = function(dir){
	var aa,bb,cc,dd;
	var tempechange=this.positions.retourne(etatfinal.troul,etatfinal.trouc);
	if (dir=='h')
	{
		aa=this.troul-1;
		bb=this.trouc;
	}
	if (dir=='g')
	{
		aa=this.troul;
		bb=this.trouc-1;
	}
	if (dir=='d')
	{
		aa=this.troul;
		bb=this.trouc+1;
	}
	if (dir=='b')
	{
		aa=this.troul+1;
		bb=this.trouc;
	}
	for (var i=1; i<=nbcasel ;i++) 
		 {	
			for( var j=1;j<=nbcasec;j++)
			{if(this.positions.retourne(i,j)==aa.toString()+'-'+bb.toString()){cc=i;dd=j;}
			}
		}
	this.positions.set(etatfinal.troul,etatfinal.trouc,aa.toString()+'-'+bb.toString());
	this.positions.set(cc,dd,tempechange);
	this.troul=aa;
	this.trouc=bb;

	}
	
	//*****************
	//class des mouvements
	//*****************
	var lmouv=function(){
	this.tabmouv=new Array();
	}
	lmouv.prototype.egal = function(autre_mouv){
	this.tabmouv=new Array();
	for(var i=0;i<autre_mouv.tabmouv.length;i++)
		{this.tabmouv[i]=autre_mouv.tabmouv[i];
		}
	}
	lmouv.prototype.ajout = function(laciblel,laciblec){
	this.tabmouv.push(laciblel.toString()+'-'+laciblec.toString());
	}
	
	lmouv.prototype.affiche = function(){
	var msg='';
	for (var i=0; i<this.tabmouv.length ;i++) 
		 {	
			msg+=this.tabmouv[i]+'|';
		 }
		 alert(msg);
	}
//*****************
//class des positions
//*****************
	
	var lpos=function(){
	this.tabpos=new Array(nbcasec*nbcasel);	
	}
	lpos.prototype.egal = function(autre_pos){
	for(var i=0;i<autre_pos.tabpos.length;i++)
		{this.tabpos[i]=autre_pos.tabpos[i];
		}
	}
	lpos.prototype.retourne = function(a,b){
	return this.tabpos[(a-1)+(b-1)*nbcasec];	
	}
	lpos.prototype.set = function(a,b,val){
	this.tabpos[(a-1)+(b-1)*nbcasec]=val;;	
	}
	lpos.prototype.init = function(){
	var tempi, tempj, tempimage,tempclip,tempplacetiret,tempplaceparentg,tempplaceparentd;
	this.set(nbcasel,nbcasec,nl+'-'+nc);
	for (var i=1; i<=nbcasel ;i++) 
		 {	
			for( var j=1;j<=nbcasec;j++)
			{
			if ((i!=nbcasel)||(j!=nbcasec))
				{
				tempimage=svgdoc.getElementById('i'+i.toString()+'-'+j.toString());
				tempclip=tempimage.getAttributeNS(null,'clip-path');
				tempplacetiret=tempclip.indexOf('-',0);
				tempplaceparentg=tempclip.indexOf('c',0)+1;
				tempplaceparentd=tempclip.indexOf(')',0);
				tempi=tempclip.substring(tempplaceparentg,tempplacetiret);
				tempj=tempclip.substring(tempplacetiret+1,tempplaceparentd);
				this.set(i,j,tempi+'-'+tempj);	
				}
			}
		}
	}
	lpos.prototype.affiche = function(){
	var msg='';
	for (var i=1; i<=nbcasel ;i++) 
		 {	
			for( var j=1;j<=nbcasec;j++)
			{msg+=this.retourne(i,j)+'|';
			}
			msg+='\n';
		 }
		 alert(msg);
	}


	

//****************
//Fonction outils
//****************
	
function pasdejapresent(letat)
	{
	 var templetest=true;
	 if (letat.compare(etatfinal)){
	 return true;}
	 else{
	 for(var i=0;i<tabetats.length;i++)
		{if(letat.compare(tabetats[i]))
				{templetest=false;break;}
		}
	
	return templetest;
	}
	}

function pasdejapresentDFS(letat)
	{
	 var templetest=true;
	 if (letat.compare(etatfinal)){
	 return true;}
	 else{
	 for(var i=0;i<tabetats.length;i++)
		{if((letat.compare(tabetats[i]))&(tabetats[i].liste_mouv.tabmouv.length<letat.liste_mouv.tabmouv.length))
				{templetest=false;break;}
		}
	
	return templetest;
	}
	}
		

function plusmauvaismelange3(l1,l2,l3)
{	

rangement[0] = new Array(l1, eval('etat'+l1).melange());
rangement[1] = new Array(l2, eval('etat'+l2).melange());
rangement[2] = new Array(l3, eval('etat'+l3).melange());
rangement[3] = new Array('nop', -1);
rangement = rangement.sort(comparemel);
}
function plusmauvaismelange2(l1,l2)
{	

rangement[0] = new Array(l1, eval('etat'+l1).melange());
rangement[1] = new Array(l2, eval('etat'+l2).melange());
rangement[2] = new Array('nop', -1);
rangement[3] = new Array('nop', -1);
rangement = rangement.sort(comparemel);

}

function plusmauvaismelange4(l1,l2,l3,l4)
{	

rangement[0] = new Array(l1, eval('etat'+l1).melange());
rangement[1] = new Array(l2, eval('etat'+l2).melange());
rangement[2] = new Array(l3, eval('etat'+l3).melange());
rangement[3] = new Array(l4, eval('etat'+l4).melange());
rangement = rangement.sort(comparemel);
}




function triermel3(p1,p2) {
if(p2.tauxmel==p1.tauxmel)
	{
	if(p2.liste_mouv.tabmouv.length==p1.liste_mouv.tabmouv.length)
		{
			return p1.enplace-p2.enplace;
		}
	else
		{
			return p2.liste_mouv.tabmouv.length-p1.liste_mouv.tabmouv.length;
		}
	}
else{return p2.tauxmel-p1.tauxmel;}
}

function triermelbfs(p1,p2) {

if(p2.liste_mouv.tabmouv.length==p1.liste_mouv.tabmouv.length)
	{return p2.tauxmel-p1.tauxmel;}
else 
	{return p2.liste_mouv.tabmouv.length-p1.liste_mouv.tabmouv.length;}
}


function triermel2(p1,p2) {
if(p2.tauxmel==p1.tauxmel){
return p2.liste_mouv.tabmouv.length-p1.liste_mouv.tabmouv.length;
}
else{return p2.tauxmel-p1.tauxmel;}
}

function triermel(p1,p2) {
return p2.tauxmel-p1.tauxmel;
}

function comparemel(p1, p2) {

return p2[1] - p1[1];
}
function afficherang(nnn){

	for(var i=0;i<nnn;i++)
	{
		alert(rangement[i][0]+'-'+rangement[i][1]);
	}
	}
	
function enfiler(zeta){
	for(var i=lengthtab+1;i>0;i--)
	
		{tabrecherche[i]=tabrecherche[i-1];
		}
	tabrecherche[0]=new etat();
	tabrecherche[0].egal(zeta);

	lengthtab++;
	tabetats[tabetats.length]=new etat();
	tabetats[tabetats.length-1].egal(zeta);
	}
	
	
	function enfilerDFS(zeta){
	tabrecherche[lengthtab]=new etat();
	tabrecherche[lengthtab].egal(zeta);
	/*alert('etatajoute');
	zeta.positions.affiche();
	alert('melange : '+zeta.tauxmel);*/
	lengthtab++;
	tabetats[tabetats.length]=new etat();
	tabetats[tabetats.length-1].egal(zeta);
	}
	
	
	function rechercheclip(notreclip)
	{
	  var tempnode=svgdoc.getElementById('lesimages').firstChild;
	  var tempclip,templc,templl;
	  var trouve=false;
	  while(!trouve){
		while (tempnode.nodeType != 1) 
		{tempnode = tempnode.nextSibling;}
		tempclip=tempnode.getAttributeNS(null,'clip-path');
		placetiret=tempclip.indexOf('-',0);
		placeparentg=tempclip.indexOf('c',0)+1;
		placeparentd=tempclip.indexOf(')',0);
	    templl=tempclip.substring(placeparentg,placetiret);
		templc=tempclip.substring(placetiret+1,placeparentd);
		if(notreclip==(templl+'-'+templc)){trouve=true;}
		else{tempnode = tempnode.nextSibling;}
		}
		return tempnode;
	}
	
	//****************
	//Une fois la solution trouvée
	//****************
    var lelong;
	function solutiontrouvee(lasol){
	temps2=new Date();
	var tps=(temps2.getTime()-temps1.getTime());
	etapesuivante=0;
	lelong=lasol.liste_mouv.tabmouv.length;
	cible8.setAttributeNS(null,'visibility','hidden');
	alert('Solution trouvee en '+tps.toString()+' ms ('+cycles.toString()+' etats ont ete examines)');
	for (var i=0;i<lasol.liste_mouv.tabmouv.length;i++)
	{lesmouvements.push(lasol.liste_mouv.tabmouv[i]);}	
	suivante();}
	
	
	function suivante(){

	setInterval("suivante2()",800);


	}
	function suivante2(){
	 var solcible;
	 if(etapesuivante!=lelong){
	 solcible=rechercheclip(lesmouvements[etapesuivante]);
	 lid=solcible.getAttributeNS(null,'clip-path');
	 placetiret=lid.indexOf('-',0);
	 placeparentg=lid.indexOf('c',0)+1;
	 placeparentd=lid.indexOf(')',0);
	 ll=lid.substring(placeparentg,placetiret);		
	 lc=lid.substring(placetiret+1,placeparentd);
	 deplacement(ll,lc,solcible);
     etapesuivante++;
	}
	if(etapesuivante>=lelong){
	cible4.setAttributeNS(null,'visibility','visible');
	cible7.setAttributeNS(null,'visibility','visible');
	}
	}
var etatd=new etat();
var etatg=new etat();
var etath=new etat();
var etatb=new etat();
