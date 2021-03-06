/* exported data */
var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('entries-data');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function doDataJSON(event) {
  var dataJSON = JSON.stringify(data);
  this.localStorage.setItem('entries-data', dataJSON);
});
