$(function(){
  var hair = [
{ value: 'Alkane', trad: 'Alcano', data: 'Outro nome para a parafina, derivado de petróleo proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Ammonium Dimethicone PEG-7 Sulfate', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Ammonium Lauryl Ether Sulfate (ALES)', trad: 'Lauriléter Sulfato de Amônio', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Ammonium Lauryl Sulfate (ALS)', trad: 'Lauril Sulfato de Amônio', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Ammonium Xylenesulfonate', trad: 'Xileno Sulfonato de Amônio', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Amodimethicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Benzophenone-2, (ou 3, 5, 6, 7, 8, 9, 10)', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Benzophenone-4', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Benzyl salicylate', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Benzylidene camphor sulfonic acid', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Bis-Aminopropyl Dimethicon', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Bornelone', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'C13-14 Isoparaffin', trad: 'C13-14 Isoparafina', data: 'Derivado de petróleo proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Cetearyl Methicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Cetyl Dimethicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Cocamidopropyl Betaine', trad: 'Cocoamidopropil Betaína', data: 'Surfactante liberado para Low e No Poo', img: '<img src="images/liberado.png">' },
{ value: 'Cyclomethicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Cyclopentasiloxane', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Decyl Glucoside Poly Carboxylate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Dimethicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Dimethicone Copolyol', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Dimethicone Crosspolymer', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Dimethicone PEG/PPG-X Benzoate', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Dimethicone PEG/PPG-X Phosphate', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Dimethicone PEG-8 Adipate', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Dimethiconol', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Dimethylpolysiloxane', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Dioctyl Sodium Sulfosuccinate (Aerosol-OT ou AOT)', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Disodium Laureth Sulfoccinate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Distearoylethyl Hydroxyethylmonium Methosulfate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Dodecane', trad: 'Dodecano', data: 'Derivado de petróleo proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Dodecene', trad: 'Dodeceno', data: 'Derivado de petróleo proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Ethyl cinnamate', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Ethyl Peg-15 Cocamine Sulfate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Ethylhexyl methoxycinnamate (octyl methoxycinnamate) Octoxynol-40, - 20', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/proibido.png">' },
{ value: 'Hydrolyzed Wheat Protein Hydroxypropyl Polysiloxane', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Isododecane', trad: 'Isododecano', data: 'Derivado de petróleo proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Isoparaffin', trad: 'Isoparafina', data: 'Derivado de petróleo proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Laureth Sulfosuccinate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Lauryl methicone copolyol', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Lauryl Sulfoacetate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Methicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Methicone Silsesquioxane Crosspolymer', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Methylchloroisothiazolinone', trad: 'Não disponível', data: 'Conservante com ação bactericida e fungicida liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Methylisothiazolinone', trad: 'Não disponível', data: 'Conservante com ação bactericida e fungicida liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Mineral Oil', trad: 'Óleo Mineral', data: 'Derivado de petróleo proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Octyl methoxycinnamate', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Octyl Salicylate ', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Oxybenzone ', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Parafinum Liquid', trad: 'Parafina Líquida', data: 'Derivado de petróleo proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'PEG/PPG-X Dimethicone', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'PEG-25 PABA', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'PEG-33 (e) PEG-8 Dimethicone (e) PEG-14', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'PEG-40/PPG-8 Methylaminopropyldimethicone Crosspolymer', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'PEG-7 Amodimethicone', trad: 'Não disponível', data: 'Silicone solúvel em água, liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Petrolatum', trad: 'Petrolato', data: 'Derivado de petróleo proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Phenyl ketone', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Phenyl Trimethicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Pluronic surfactant', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Polyacrylamidomethyl benzylidene camphor', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Polydimethylsiloxane', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Polyglucosides', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Polysilicone', trad: 'Não disponível', data: 'Filtro solar liberado para No e Low Poo', img: '<img src="images/liberado.png">' },
{ value: 'Simethicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Sodium Alkylbenzene Sulfonate', trad: 'Alquil Benzeno Sulfonato de Sódio', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Sodium C14-16 Olefin Sulfonate ', trad: 'Sulfonato de Sódio Olefina C14-16', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Sodium Coco Sulfate', trad: 'Sulfato de Sódio Coco', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Sodium Cocoyl Glycinate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Sodium Cocoyl Sarcosinate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Sodium Cocyl Isethionate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Sodium Laureth Sulfate ou Sodium Lauryl Ether Sulfate (SLES)', trad: 'Lauriléter Sulfato de Sódio ou Lauril Éter Sulfato de Sódio', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Sodium Laurilsulfate ou Sodium Lauryl Sulfate (SLS)', trad: 'Lauril Sulfato de Sódio', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
{ value: 'Sodium Lauroyl Sarcosinate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Sodium Lauryl Glucose Carboxylate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Sodium Lauryl Sarcosinate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
{ value: 'Sodium Lauryl Sulfoacetate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
 { value: 'Sodium Methyl 2-Sulfolaurate ou Disodium Sulfolaurate ou Sodium Methyl Cocoyl ou Lauryl Taurate', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
 { value: 'Sodium Myreth Sulfate', trad: 'Miristil Éter Sulfato de Sódio', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
 { value: 'Sodium Trideceth Sulfate', trad: 'Tridecil Éter Sulfato de Sódio', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
 { value: 'Sodium Trideceth Sulfate ou Sodium Tridecyl Ether Sulfate', trad: 'Sulfato de Sódio Éter Tridecil', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
 { value: 'Sodium Tridecyl TRI (Oxyethyl) Sulfate', trad: 'Sulfato de Sódio Tridecil TRI (Oxietil)', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
 { value: 'Sodium Xylenesulfonate', trad: 'Xileno Sulfonato de Sódio', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
 { value: 'Stearyl Dimethicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
 { value: 'TEA Dodecylbenzenesulfonate', trad: 'TEA Dodecilbenzenosulfonato', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
 { value: 'TEA Lauryl Sulfate', trad: 'TEA Lauril Sulfato', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
 { value: 'Tetronic surfactant', trad: 'Não disponível', data: 'Surfactante proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
 { value: 'Tridecyl Polyoxyethylene Sodium Sulfate', trad: 'Sulfato de Sódio Polioxietileno Tridecil', data: 'Surfactante proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
 { value: 'Trimethylsilylamodimethicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
 { value: 'Vaseline', trad: 'Vaselina', data: 'Derivado de petróleo proibido para Low e No Poo', img: '<img src="images/proibido.png">' },
 { value: 'Vinyl Dimethicone', trad: 'Não disponível', data: 'Silicone insolúvel em água, proibido para No Poo e liberado para Low Poo', img: '<img src="images/atencao.png">' },
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: hair,
    onSelect: function (suggestion) {
      var thehtml = suggestion.img + ' <br> <strong>Nome do componente:</strong> ' + suggestion.value + ' <br> <strong>Tradução:</strong> ' + suggestion.trad + ' <br> <strong>O que é:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});