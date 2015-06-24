var ProtoBuf = require('protobufjs');
var builder = ProtoBuf.protoFromFile("public/nyct-subway.proto"); // Load .proto file
var Message = builder.build("NyctFeedHeader"); // Build the Message namespace
var msg = new Message(); // Create a new Message

console.log('msg', msg);