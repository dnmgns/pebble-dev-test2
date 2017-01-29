var UI = require('ui');
var Vector2 = require('vector2');

var card = new UI.Card({
  title: 'Cellar Temp',
  body: 'Loading data..',
  scrollable: true
});

card.show();


var textfield = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: 'ffs'
});


/*
card2.add(text)
*/

/*card.on('click', function(e) {
  card.subtitle('Button ' + e.button + ' pressed.');
});*/

var ajax = require('ajax');
ajax({ url: 'http://weeny.lindvall.co/temperature.php', type: 'json' },
  function(data) {
    
    var hwid = data[0].hwid;
    var id = data[0].id;
    var temperature = data[0].temperature.toFixed(2);
    var type = data[0].type;
    var unit = data[0].unit.substring(0,1).toUpperCase();
    card.body(temperature + '' + unit);
    textfield.text(type);
  }
);


card.on('click', 'select', function() {
  console.log('logging ffs!!!')
  var wind = new UI.Window();
  //card2.show();
  //card.toggle();
  //text.show();
  //text.text();
wind.add(textfield);
wind.show();
//wind.show();

});