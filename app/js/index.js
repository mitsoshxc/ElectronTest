var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  document.write('Event Triggered');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');
