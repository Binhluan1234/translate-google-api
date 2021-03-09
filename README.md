# translate-google-api

Forked from [Binhluan1234/translate-google-api](https://github.com/Binhluan1234/translate-google-api)

A free and unlimited API for Google Translate（support single text and Multi-segment text） 💵🚫
# Feature

- Multi-segment text support
- Auto language detection
- Language correction
- Fast and reliable – it uses the same servers that [translate.google.com](https://translate.google.com/) uses
- Free and unlimited (translate.google.com uses a token to authorize the requests. If you are not Google, you do not have this token and will have to pay [$20 per 1 million characters of text](https://cloud.google.com/translate/v2/pricing))
- Supports: ReactJs, React-Native, NodeJs ...

# Install

```shell
npm install --save @william5553/translate-google-api
```

# Usage

Single segment
```javascript
import translate from 'translate-google-api';
const result = await translate(`I'm fine.`, {
  tld: "cn",
  to: "vi",
});
// ["Tôi ổn."]


```

Multi-segment text
```javascript
import translate from 'translate-google-api';

const result = await translate(['Hi', 'How are you?', `I'm fine`], {
  tld: "cn",
  to: "vi",
});
//["Chào","Bạn khỏe không?","Tôi ổn."]

```

Proxy

proxy-config [https://github.com/axios/axios#request-config](https://github.com/axios/axios#request-config)
```javascript
const result = await translate([`I'm fine. And you?`,`I'm ok.`], {
  tld: "cn",
  to: "vi",
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  }
});
```

# API

## translate(text, options)

### text

Type: `string`, `array`

The text to be translated

### options

Type: object

**from？**
Type: `string` Default: auto

The text language. Must be auto or one of the codes/names (not case sensitive) contained in src/languages.ts

**to**
Type: `string` Default: en

The language in which the text should be translated. Must be one of the codes/names (not case sensitive) contained in src/languages.ts.

**tld**
Type: `string` 'com' | 'cn' <Default 'com'>

`cn` is for China, `com` for others.

**proxy**
Type: `AxiosProxyConfig`

proxy for request.

**config**
Type: `object`

config for [axios](https://github.com/axios/axios)