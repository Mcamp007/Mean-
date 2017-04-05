function deckconstructor(){

 var suits=["hearts","spades","clubs","diamonds"];
 var values = ["Ace","2","3","4","5","6","7","8","9", "jack", "Queen", "King"];
 var deck = [];


  this.showdeck = function(){
    console.log(deck);

  }


var generatedeck = function(){
 for(var i=0; i <suits.length; i++){
   for (var j =0; j<values.length; j++){
       var card = {};
       card.suit = suits[i];
       card.values = values[j];
       deck.push(card);
     }
     console.log(deck);
   }
 }
}
generateDeck();

  var mydeck = new deckconstructor();
  mydeck.showdeck();
 mydeck.generatedeck();
