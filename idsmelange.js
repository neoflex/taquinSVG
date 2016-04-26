//*****************
//fonction IDS heuristique
//*****************

function IDSM() {

		var ctrouve=false;
		temps1=new Date();
		var limite=0;
		while (!ctrouve){
		tabrecherche=new Array();
		tabetats=new Array();
		lengthtab=0;
		limite++;
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
				{ctrouve=true;break;}
			else {
					if(etatcourant.liste_mouv.tabmouv.length<limite)
					{
					
						if((etatcourant.trouc==1)&(etatcourant.troul!=1)&(etatcourant.troul!=nbcasel))
						{
							etatd.egal(etatcourant);
							etatd.echange('d');
							etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);
							etath.egal(etatcourant);
							etath.echange('h');
							etath.liste_mouv.ajout(etath.troul,etath.trouc);
							etatb.egal(etatcourant);
							etatb.echange('b');
							etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);
							plusmauvaismelange3('b','h','d')
						
							for(i=0;i<3;i++)
							{
								if(pasdejapresent(eval('etat'+rangement[i][0]))){enfilerDFS(eval('etat'+rangement[i][0]));}
							}
						}	
						if((etatcourant.trouc==nbcasec)&(etatcourant.troul!=1)&(etatcourant.troul!=nbcasel))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);
							etath.egal(etatcourant);
							etath.echange('h');
							etath.liste_mouv.ajout(etath.troul,etath.trouc);
							etatb.egal(etatcourant);
							etatb.echange('b');
							etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);
							plusmauvaismelange3('h','g','b')
							for(i=0;i<3;i++)
							{
								if(pasdejapresent(eval('etat'+rangement[i][0]))){enfilerDFS(eval('etat'+rangement[i][0]));}
							}
						}	
						if((etatcourant.troul==1)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);
							etatd.egal(etatcourant);
							etatd.echange('d');
							etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);
							etatb.egal(etatcourant);
							etatb.echange('b');
							etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);
							plusmauvaismelange3('d','b','g')
							for(i=0;i<3;i++)
							{
								if(pasdejapresent(eval('etat'+rangement[i][0]))){enfilerDFS(eval('etat'+rangement[i][0]));}
							}
						}	
						if((etatcourant.troul==nbcasel)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);
							etatd.egal(etatcourant);
							etatd.echange('d');
							etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);
							etath.egal(etatcourant);
							etath.echange('h');
							etath.liste_mouv.ajout(etath.troul,etath.trouc);
							plusmauvaismelange3('g','h','d')
							for(i=0;i<3;i++)
							{
								if(pasdejapresent(eval('etat'+rangement[i][0]))){enfilerDFS(eval('etat'+rangement[i][0]));}
							}
						}	
						if((etatcourant.troul!=nbcasel)&(etatcourant.trouc!=1)&(etatcourant.trouc!=nbcasec)&(etatcourant.troul!=1))
						{
							etatg.egal(etatcourant);
							etatg.echange('g');
							etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);
							etatd.egal(etatcourant);
							etatd.echange('d');
							etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);
							etath.egal(etatcourant);
							etath.echange('h');
							etath.liste_mouv.ajout(etath.troul,etath.trouc);
							etatb.egal(etatcourant);
							etatb.echange('b');
							etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);
							plusmauvaismelange4('d','h','b','g')
							for(i=0;i<4;i++)
							{
								if(pasdejapresent(eval('etat'+rangement[i][0]))){enfilerDFS(eval('etat'+rangement[i][0]));}
							}
						}	
							if((etatcourant.troul==1)&(etatcourant.trouc==1))
						{
							etatb.egal(etatcourant);
							etatb.echange('b');
							etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);
							etatd.egal(etatcourant);
							etatd.echange('d');
							etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);
							plusmauvaismelange2('d','b');
							for(i=0;i<2;i++)
							{
							if(pasdejapresent(eval('etat'+rangement[i][0]))){enfilerDFS(eval('etat'+rangement[i][0]));}
							}
						}	
						if((etatcourant.troul==1)&(etatcourant.trouc==nbcasec))
						{
							etatb.egal(etatcourant);
							etatb.echange('b');
							etatb.liste_mouv.ajout(etatb.troul,etatb.trouc);
							etatg.egal(etatcourant);
							etatg.echange('g');
							etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);
							plusmauvaismelange2('g','b');
							for(i=0;i<2;i++)
							{
							if(pasdejapresent(eval('etat'+rangement[i][0]))){enfilerDFS(eval('etat'+rangement[i][0]));}
							}
						}	
						if((etatcourant.troul==nbcasel)&(etatcourant.trouc==1))
						{
							etath.egal(etatcourant);
							etath.echange('h');
							etath.liste_mouv.ajout(etath.troul,etath.trouc);
							etatd.egal(etatcourant);
							etatd.echange('d');
							etatd.liste_mouv.ajout(etatd.troul,etatd.trouc);
							plusmauvaismelange2('d','h');
						for(i=0;i<2;i++)
							{
								if(pasdejapresent(eval('etat'+rangement[i][0]))){enfilerDFS(eval('etat'+rangement[i][0]));}
							}
						}	
						if((etatcourant.troul==nbcasel)&(etatcourant.trouc==nbcasec))
						{
							etath.egal(etatcourant);
							etath.echange('h');
							etath.liste_mouv.ajout(etath.troul,etath.trouc);
							etatg.egal(etatcourant);
							etatg.echange('g');
							etatg.liste_mouv.ajout(etatg.troul,etatg.trouc);
							plusmauvaismelange2('g','h');
							for(i=0;i<2;i++)
							{
								if(pasdejapresent(eval('etat'+rangement[i][0]))){enfilerDFS(eval('etat'+rangement[i][0]));}
							}
						}	
					}
					
				}
		}
			
	 } if(ctrouve){solutiontrouvee(etatcourant);}
	}
		
