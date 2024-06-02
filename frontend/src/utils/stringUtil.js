export const stringToByteArray = (str) => {
  var myBuffer = [];
  var buffer = Buffer.from(str, "utf8");
  for (var i = 0; i < buffer.length; i++) {
    myBuffer.push(buffer[i]);
  }
  return myBuffer;
};
