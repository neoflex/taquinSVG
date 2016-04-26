		var decalx=100;
		var xlinkns = 'http://www.w3.org/1999/xlink';
		var decaly=50;
		var larg,haut;
		var largeur_image=300;
		var hauteur_image=300;
		var nl,nc,nl_int,nci_int,il,ic,il_int,ic_int,cible4,cible5,cible6,cible7,cible8,limage,lid,ll,lc,ll_int,lc_int,svgdoc,letrou,cible,ecart,placetiret,placeparentg,placeparentd;
		var tabecart;
		var etatfinal,etatinitial;
		var etapesuivante=-1;
		var lesmouvements=new Array();
		var lesmouvements2=new Array();
		
		function depl(evt) {
		if(etapesuivante==-1){
		cible=evt.target;
		lid=cible.getAttributeNS(null,'clip-path');
		placetiret=lid.indexOf('-',0);
		placeparentg=lid.indexOf('c',0)+1;
		placeparentd=lid.indexOf(')',0);
	    ll=lid.substring(placeparentg,placetiret);
		
	    lc=lid.substring(placetiret+1,placeparentd);

		deplacement(ll,lc,cible)
		}
		}
			
		function deplacement(cell,celc,lacible) {
		
		ll_int=parseFloat(ll);
		lc_int=parseFloat(lc);
		limage=lacible.getAttributeNS(null,'id');
		placetiret=limage.indexOf('-',0);
		placeparentg=limage.indexOf('i',0)+1;
		il=limage.substring(placeparentg,placetiret);
		ic=limage.substr(placetiret+1)
		il_int=parseFloat(il);
		ic_int=parseFloat(ic);
	    letrou=svgdoc.getElementById('trou');
	    var depl=nl_int-ll_int;
		var depc=nc_int-lc_int;
		if(((Math.abs(depc)==1)&&(depl==0))||((Math.abs(depl)==1)&&(depc==0))){
		changeecart();
		modiftrans(lacible);
		deptrou(cell,celc);
		
		}
	
		}
		
		function deptrou(cell,celc){		
		//pour deplacer le trou
		var placex=decalx+larg*(lc_int-1);
		var placey=decaly+haut*(ll_int-1);
		letrou.setAttributeNS(null,'x',placex.toString());
		letrou.setAttributeNS(null,'y',placey.toString());
		nl_int=ll_int; nc_int=lc_int;nl=cell;nc=celc;			
		}
		
		function modiftrans(lacible){
	    //deplace une image et modifie son clip path
		var ix=lacible.getAttributeNS(null,'x');
		var iy=lacible.getAttributeNS(null,'y');
		ix=parseFloat(ix);
		iy=parseFloat(iy);
		var depl=nl_int-ll_int;
		var depc=nc_int-lc_int;
		ix=(ix+depc*(larg)).toString();
		iy=(iy+depl*(haut)).toString();
		lacible.setAttributeNS(null,'x',ix);		
		lacible.setAttributeNS(null,'y',iy);	
		var leclip='url(#c'+nl+'-'+nc+')';
		lacible.setAttributeNS(null,'clip-path',leclip);
		}
		
		function changeecart()
		{
		//calcul l'ecart entre l emplacement actuel d'une case et là ou elle devrait etre
		ecart=Math.abs(nl_int-il_int)+Math.abs(nc_int-ic_int);
		tabecart[(nc_int-1)+(nl_int-1)*nbcasec]=ecart;
		tabecart[(lc_int-1)+(ll_int-1)*nbcasec]=0;
		}
		
		function enplace() {
		//test si le puzzle est resolu
		var test=true;
		for (var i=0; i<nbcasel*nbcasec; i++) 
		 {
			if(tabecart[i]!=0){test=false;}
			
		 }	
		return test;
		}
		
		function init(evt) {
		
		//initialisation des variables et creations des elements svg
		
		var cible1,cible2,cible3,node,node2,node3,node4,node5,possx,possy;
		larg=largeur_image/nbcasec;
		haut=hauteur_image/nbcasel;
		tabecart = new Array(nbcasel*nbcasec);
		cible1=svgdoc.getElementById('lesclips');
		cible2=svgdoc.getElementById('lesimages');
		cible3=svgdoc.getElementById('letroug');
		cible4=svgdoc.getElementById('recharge');
		cible5=svgdoc.getElementById('lebouton');
		cible7=svgdoc.getElementById('lemasque');
		cible5.setAttributeNS(null,'visibility','visible');
		cible8=svgdoc.getElementById('encours');
		
		//creation des clip-path
		
		for (var i=1; i<=nbcasel ;i++) 
		 {	
			for( var j=1;j<=nbcasec;j++)
			{   possx=decalx+(j-1)*larg;
				possy=decaly+(i-1)*haut;
				node=svgdoc.createElementNS('http://www.w3.org/2000/svg','clipPath');
				node.setAttributeNS(null,'id','c'+i.toString()+'-'+j.toString())
				node2=svgdoc.createElementNS('http://www.w3.org/2000/svg','rect');
				node2.setAttributeNS(null,'width',larg.toString());
				node2.setAttributeNS(null,'height',haut.toString());
				node2.setAttributeNS(null,'x',possx.toString());
				node2.setAttributeNS(null,'y',possy.toString());
				node.appendChild(node2);
				cible1.appendChild(node);
			}
		 
		 }
		 
		 //initialisation du tableau des ecarts à 0
		
		for (var i=0; i<(nbcasel*nbcasec); i++) 
		 {		
				tabecart[i]=0;
							
		 }
		
		//placement du trou
		
		nl_int=nbcasel;
		nc_int=nbcasec;
		nc=nc_int.toString();
		nl=nl_int.toString();
		
	
		
		//creation du trou
		
		node3=svgdoc.createElementNS('http://www.w3.org/2000/svg','rect');
		node3.setAttributeNS(null,'width',larg.toString());
		node3.setAttributeNS(null,'height',haut.toString());
		node3.setAttributeNS(null,'x',(decalx+(nc_int-1)*larg).toString());
		node3.setAttributeNS(null,'y',(decaly+(nl_int-1)*haut).toString());
		node3.setAttributeNS(null,'fill','black');
		node3.setAttributeNS(null,'id','trou');
		cible3.appendChild(node3);
		
		
		
		//creation des images
		for (var i=1; i<=nbcasel ;i++) 
		 {	
			for( var j=1;j<=nbcasec;j++)
			{   if ((i!=nl_int)||(j!=nc_int)){
			
				possx=decalx+(j-1)*larg;
				possy=decaly+(i-1)*haut;
				node5=svgdoc.createElementNS('http://www.w3.org/2000/svg','image');
				node5.setAttributeNS(null,'width',largeur_image.toString());
				node5.setAttributeNS(null,'height',hauteur_image.toString());
				node5.setAttributeNS(null,'x',decalx.toString());
				node5.setAttributeNS(null,'y',decaly.toString());
				node5.setAttributeNS(null,'id','i'+i.toString()+'-'+j.toString());
				node5.setAttributeNS(null,'clip-path','url(#c'+i.toString()+'-'+j.toString()+')');
				node5.setAttributeNS(xlinkns,'xlink:href',urlimage);
				node5.setAttributeNS(null,'cursor','pointer');
				cible2.appendChild(node5);}
			}
		 
		 }
		 
		//creation des cases (contours)
		for (var i=1; i<=nbcasel ;i++) 
		 {	
			for( var j=1;j<=nbcasec;j++)
			{   
				
				possx=decalx+(j-1)*larg;
				possy=decaly+(i-1)*haut;
				node4=svgdoc.createElementNS('http://www.w3.org/2000/svg','rect');
				node4.setAttributeNS(null,'width',larg.toString());
				node4.setAttributeNS(null,'height',haut.toString());
				node4.setAttributeNS(null,'x',possx.toString());
				node4.setAttributeNS(null,'y',possy.toString());
				node4.setAttributeNS(null,'class','trace');
				cible2.appendChild(node4);
			}
		 
		 }
	
		//etatfinal		
		etatfinal=new etat();
		etatfinal.init();
		
		if(randmel==1)
		{
			etatinitial=new etat();
			etatinitial.init();
			for (var ii=0;ii<nbrmel;ii++)
			{	etatinitial.echange(directaleatoire());
				etatinitial.liste_mouv.ajout(etatinitial.troul,etatinitial.trouc);
				solcible=rechercheclip(etatinitial.liste_mouv.tabmouv[ii]);
				lid=solcible.getAttributeNS(null,'clip-path');
				placetiret=lid.indexOf('-',0);
				placeparentg=lid.indexOf('c',0)+1;
				placeparentd=lid.indexOf(')',0);
				ll=lid.substring(placeparentg,placetiret);		
				lc=lid.substring(placetiret+1,placeparentd);
				deplacement(ll,lc,solcible);
			}	
		}
}
var depprec;	
function directaleatoire() {

var altrouc=etatinitial.trouc;
var altroul=etatinitial.troul;
var altrouve=false;
var alnb;
var alrep;
while (!altrouve)
{
	alnb= Math.floor(Math.random() * 4)+1;
	if((alnb==1)&&(altrouc!=1)&&(depprec!='d')){alrep='g';altrouve=true;break;}
	if((alnb==2)&&(altrouc!=nbcasec)&&(depprec!='g')){alrep='d';altrouve=true;break;}
	if((alnb==3)&&(altroul!=1)&&(depprec!='b')){alrep='h';altrouve=true;break;}
	if((alnb==4)&&(altroul!=nbcasel)&&(depprec!='h')){alrep='b';altrouve=true;break;}
}
depprec=alrep;
return alrep;

}	
	
	
