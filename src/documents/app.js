var ko    = require('knockout'),
	poker = require('./poker.js');

require('./bindings/scoring.js');
require('./bindings/frontend.js');
require('./bindings/localStorage.js');
require('./bindings/keybindings.js');

ko.applyBindings( poker );
