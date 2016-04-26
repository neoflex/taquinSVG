var tabrecherche=new Array();
	var tabetats=new Array();
	var lengthtab=0;
	var etatpost;
	var etatcourant;
	var tmelange;
	var cycles=0;
	var temps1,temps2;
	function BFS() {
	

		var ctrouve=false;
		temps1=new Date();

		
		tabrecherche[0]=new etat();
		tabrecherche[0].init();
		tabetats[0]=new etat();
		tabetats[0].egal(tabrecherche[0]);
		lengthtab=1;
		while (lengthtab>=1)
		
			{
			cycles++;
			etatcourant=new etat();
			etatcourant.egal(tabrecherche[lengthtab-1]);
			lengthtab--;
			
			if(etatcourant.compare(etatfinal))
				{solutiontrouvee(etatcourant);ctrouve=true;break;}
			else {
				if((etatcourant.trouc==1)&(etatcourant.troul!=1)&(etatcourant.troul!=nbcasel))
					{
					etatd.egal(etatcourant);
					etatd.echange('d');
					if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfiler(etatd);}
					etath.egal(etatcourant);
					etath.echange('h');
					if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfiler(etath);}
					etatb.egal(etatcourant);
					etatb.echange('b');
					if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfiler(etatb);}
					}
				if((etatcourant.trouc==nbcasec)&(etatcourant.troul!=1)&(etatcourant.troul!=nbcasel))
					{
					etatg.egal(etatcourant);
					etatg.echange('g');
					if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfiler(etatg);}
					etath.egal(etatcourant);
					etath.echange('h');
					if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfiler(etath);}
					etatb.egal(etatcourant);
					etatb.echange('b');
					if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfiler(etatb);}
					}
				if((etatcourant.troul==1)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec))
					{
					etatg.egal(etatcourant);
					etatg.echange('g');
					if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfiler(etatg);}
					etatd.egal(etatcourant);
					etatd.echange('d');
					if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfiler(etatd);}
					etatb.egal(etatcourant);
					etatb.echange('b');
					if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfiler(etatb);}
					}
				if((etatcourant.troul==nbcasel)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec))
					{
					etatg.egal(etatcourant);
					etatg.echange('g');
					if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfiler(etatg);}
					etatd.egal(etatcourant);
					etatd.echange('d');
					if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfiler(etatd);}
					etath.egal(etatcourant);
					etath.echange('h');
					if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfiler(etath);}
					}
				if((etatcourant.troul!=nbcasel)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec)&(etatcourant.troul!=1))
					{
					etatg.egal(etatcourant);
					etatg.echange('g');
					if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfiler(etatg);}
					etatd.egal(etatcourant);
					etatd.echange('d');
					if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfiler(etatd);}
					etath.egal(etatcourant);
					etath.echange('h');
					if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfiler(etath);}
					etatb.egal(etatcourant);
					etatb.echange('b');
					if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfiler(etatb);}
					}
				if((etatcourant.troul==1)&(etatcourant.trouc==1))
					{
					etatb.egal(etatcourant);
					etatb.echange('b');
					if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfiler(etatb);}
					etatd.egal(etatcourant);
					etatd.echange('d');
					if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfiler(etatd);}
					}
				if((etatcourant.troul==1)&(etatcourant.trouc==nbcasec))
					{
					etatb.egal(etatcourant);
					etatb.echange('b');
					if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfiler(etatb);}
					etatg.egal(etatcourant);
					etatg.echange('g');
					if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfiler(etatg);}
					}
				if((etatcourant.troul==nbcasel)&(etatcourant.trouc==1))
					{
					etath.egal(etatcourant);
					etath.echange('h');
					if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfiler(etath);}
					etatd.egal(etatcourant);
					etatd.echange('d');
					if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfiler(etatd);}
					}
				if((etatcourant.troul==nbcasel)&(etatcourant.trouc==nbcasec))
					{
					etath.egal(etatcourant);
					etath.echange('h');
					if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfiler(etath);}
					etatg.egal(etatcourant);
					etatg.echange('g');
					if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfiler(etatg);}
					}
				}
	
			}
			
		}
	