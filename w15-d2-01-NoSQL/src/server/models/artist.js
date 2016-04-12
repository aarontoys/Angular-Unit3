// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var ArtistSchema = new Schema({
//   name: String,
//   movement: Mixed,
//   imageUrl: String
// });

// var Artist = mongoose.model('artists', ArtistSchema);

// Artist.find(function (err, artists) {
//   if (err) {
//     console.log('Error!', err);
//   }
//   console.log('Artists:', artists);
// });

// module.exports = Artist;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistsSchema = new Schema({
  name: String,
  movement: String,
  imageUrl: String
});

var Artists = mongoose.model('artists', ArtistsSchema);

Artists.find(function (err, artists) {
  if (err) { console.log('Error!', err);}
  console.log('Artists:', artists);
})

module.exposrts = Artists;