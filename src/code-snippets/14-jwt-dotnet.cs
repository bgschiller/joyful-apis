IJsonSerializer serializer = new JsonNetSerializer();
IDateTimeProvider provider = new UtcDateTimeProvider();
IJwtValidator validator = new JwtValidator(serializer, provider);
IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
IJwtDecoder decoder = new JwtDecoder(serializer, validator, urlEncoder);

var json = decoder.Decode(token, secret, verify: true);
