/**
 * @param socket
 */
exports.registerSocketIoHandler = function(socket) {
  socket.on('timesync', function (data, callback) {
    callback({
      id: 'id' in data ? data.id : null,
      result: Date.now()
    });
  });
};