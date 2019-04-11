const SerialPort = require('serialport');
const port = new SerialPort('/dev/ttyACM0', () => {
  console.log('Port Opened');
});
port.write('1', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})

// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message)
})
