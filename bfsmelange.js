
	function BFSM() {
	
var ctrouve=false;
		temps1=new Date();
		tabrecherche[0]=new etat();
		tabrecherche[0].init();
		tabrecherche[0].fixmel();
		tabetats[0]=new etat();
		tabetats[0].egal(tabrecherche[0]);
		lengthtab=1;
		while (lengthtab>=1)
		
		{	tabrecherche = tabrecherche.sort(triermelbfs);
			cycles++;
			etatcourant=new etat();
			etatcourant.egal(tabrecherche[lengthtab-1]);
			lengthtab--;
			/*alert('etatcourant');
			etatcourant.positions.affiche();
			alert('melange : '+etatcourant.tauxmel);*/
			
			
			if(etatcourant.compare(etatfinal))
				{solutiontrouvee(etatcourant);ctrouve=true;break;}
			else {
					
					
						if((etatcourant.trouc==1)&(etatcourant.troul!=1)&(etatcourant.troul!=nbcasel))
						{
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);etatd.fixmel();enfilerDFS(etatd);}
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);etath.fixmel();enfilerDFS(etath);}
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);etatb.fixmel();enfilerDFS(etatb);}
						}
						if((etatcourant.trouc==nbcasec)&(etatcourant.troul!=1)&(etatcourant.troul!=nbcasel))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);etatg.fixmel();enfilerDFS(etatg);}
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);etath.fixmel();enfilerDFS(etath);}
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);etatb.fixmel();enfilerDFS(etatb);}
						}
						if((etatcourant.troul==1)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);etatg.fixmel();enfilerDFS(etatg);}
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfilerDFS(etatd);}
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);etatb.fixmel();enfilerDFS(etatb);}
						}
						if((etatcourant.troul==nbcasel)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);etatg.fixmel();enfilerDFS(etatg);}
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);etatd.fixmel();enfilerDFS(etatd);}
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);etath.fixmel();enfilerDFS(etath);}
						}
						if((etatcourant.troul!=nbcasel)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec)&(etatcourant.troul!=1))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);etatg.fixmel();enfilerDFS(etatg);}
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);etatd.fixmel();enfilerDFS(etatd);}
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);etath.fixmel();enfilerDFS(etath);}
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);etatb.fixmel();enfilerDFS(etatb);}
						}
							if((etatcourant.troul==1)&(etatcourant.trouc==1))
						{
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);etatb.fixmel();enfilerDFS(etatb);}
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);etatd.fixmel();enfilerDFS(etatd);}
						}
						if((etatcourant.troul==1)&(etatcourant.trouc==nbcasec))
						{
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresent(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);etatb.fixmel();enfilerDFS(etatb);}
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);etatg.fixmel();enfilerDFS(etatg);}
						}
						if((etatcourant.troul==nbcasel)&(etatcourant.trouc==1))
						{
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);etath.fixmel();enfilerDFS(etath);}
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresent(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);etatd.fixmel();enfilerDFS(etatd);}
						}
						if((etatcourant.troul==nbcasel)&(etatcourant.trouc==nbcasec))
						{
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresent(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);etath.fixmel();enfilerDFS(etath);}
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresent(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);etatg.fixmel();enfilerDFS(etatg);}
						}
					
					
			}
		}
			
	}
	
		