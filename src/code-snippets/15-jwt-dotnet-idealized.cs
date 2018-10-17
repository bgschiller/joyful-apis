IJwtDecoder decoder = new JwtDecoder();

var json = decoder.Decode(token, secret);
