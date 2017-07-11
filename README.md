# clastream
講義等でSlackの特定のチャンネルに来たメッセージを、ニ○ニコ風に流すアプリ

## Environment
* Linux

## Usage
### Installation
#### 1. Install Node.js
Node.js[このサイト](https://github.com/nodejs/node "Node.js")を見てインストールしてください．

#### 2. Clone
以下のコマンドを実行することで，このリポジトリをクローンすることができます．
```shell
git clone https://github.com/akakou/clastream/
```
#### 3. Set Config
`/config.js`をエディタ等で編集します．
何も編集してない場合，以下のようなコードが保存されていると思います．
```javascript
/* config.js
Set Config In This Source */

var config = {
  channel_id: 'channel id',
  bots_token: 'bots token'
}

module.exports = config;
```

ここの`'channel id'`の部分にSlackのchannelのidを，`'bots token'`の部分に`Incoming Webhooks`のtokenを張ってください．

#### Run Server
あなたのPCにNode.jsが入っていれば，以下のコマンドで実行できます．
```shell
node index.js
```
