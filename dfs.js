//*****************
//fonction DFS
//*****************
function DFS(profmax) {
	

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
					if(etatcourant.liste_mouv.tabmouv.length<profmax)
					{
					
						if((etatcourant.trouc==1)&(etatcourant.troul!=1)&(etatcourant.troul!=nbcasel))
						{
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresentDFS(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfilerDFS(etatd);}
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresentDFS(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfilerDFS(etath);}
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresentDFS(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfilerDFS(etatb);}
						}
						if((etatcourant.trouc==nbcasec)&(etatcourant.troul!=1)&(etatcourant.troul!=nbcasel))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresentDFS(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfilerDFS(etatg);}
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresentDFS(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfilerDFS(etath);}
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresentDFS(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfilerDFS(etatb);}
						}
						if((etatcourant.troul==1)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresentDFS(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfilerDFS(etatg);}
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresentDFS(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfilerDFS(etatd);}
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresentDFS(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfilerDFS(etatb);}
						}
						if((etatcourant.troul==nbcasel)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresentDFS(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfilerDFS(etatg);}
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresentDFS(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfilerDFS(etatd);}
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresentDFS(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfilerDFS(etath);}
						}
						if((etatcourant.troul!=nbcasel)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec)&(etatcourant.troul!=1))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresentDFS(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfilerDFS(etatg);}
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresentDFS(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfilerDFS(etatd);}
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresentDFS(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfilerDFS(etath);}
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresentDFS(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfilerDFS(etatb);}
						}
							if((etatcourant.troul==1)&(etatcourant.trouc==1))
						{
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresentDFS(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfilerDFS(etatb);}
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresentDFS(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfilerDFS(etatd);}
						}
						if((etatcourant.troul==1)&(etatcourant.trouc==nbcasec))
						{
							etatb.egal(etatcourant);
							etatb.echange('b');
							if(pasdejapresentDFS(etatb)){etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);enfilerDFS(etatb);}
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresentDFS(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfilerDFS(etatg);}
						}
						if((etatcourant.troul==nbcasel)&(etatcourant.trouc==1))
						{
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresentDFS(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfilerDFS(etath);}
							etatd.egal(etatcourant);
							etatd.echange('d');
							if(pasdejapresentDFS(etatd)){etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);enfilerDFS(etatd);}
						}
						if((etatcourant.troul==nbcasel)&(etatcourant.trouc==nbcasec))
						{
							etath.egal(etatcourant);
							etath.echange('h');
							if(pasdejapresentDFS(etath)){etath.liste_mouv.ajout(etath.troul,etath.trouc);enfilerDFS(etath);}
							etatg.egal(etatcourant);
							etatg.echange('g');
							if(pasdejapresentDFS(etatg)){etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);enfilerDFS(etatg);}
						}
					}
					
				}
			}
			
			if(!ctrouve){
			cible8.setAttributeNS(null,'visibility','hidden');
			alert('Pas de solution trouvee avec ces options');
			}
	}