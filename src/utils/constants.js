export const smartContract = {
  developerAddress : 'TTVVtovFaTpLBQ5fHfcDWN8hxzPjGpW3ef', // 开发者账户地址
  developerPrivateKey : 'FB0836516A9B6E2502A971A8175CA9986BB755A68609086BE291C1969FDBB441', // 开发者私钥
  assistantPrivateKey : 'FB0836516A9B6E2502A971A8175CA9986BB755A68609086BE291C1969FDBB441', // assistant私钥
  fullNodeUrl : 'http://47.90.240.201:8090',
  solidityNodeUrl : 'http://47.90.240.201:8091',
  eventServerUrl : 'http://47.90.240.201:8092',
  contractHexAddress : '412c68606d590aeebdb56b09bc3d55bf11672e53be',
  contractBase58Address : 'TE21miaHFLdgXYaNF4dinLxKJFumQn2yvC',
  assistantHexAddress : '412c68606d590aeebdb56b09bc3d55bf11672e53be',
  assistantBase58Address : 'TE21miaHFLdgXYaNF4dinLxKJFumQn2yvC',
}


// 每日排行榜
export const rankColumns = [{
  title: '排名',
  dataIndex: 'rank',
  key: 'rank',
  align: 'center',
}, {
  title: '玩家',
  dataIndex: 'player',
  key: 'player',
  align: 'center',
}, {
  title: '总投注额',
  dataIndex: 'amount',
  key: 'amount',
  align: 'center',
}, {
  title: '收益',
  dataIndex: 'award',
  key: 'award',
  align: 'center',
}];

// 所有投注、我的投注
export const allBuyColumns = [{
  title: '时间',
  dataIndex: 'time',
  key: 'time',
  align: 'center',
}, {
  title: '玩家',
  dataIndex: 'player',
  key: 'player',
  align: 'center',
}, {
  title: '投注',
  dataIndex: 'amount',
  key: 'amount',
  align: 'center',
}, {
  title: '收益',
  dataIndex: 'award',
  key: 'award',
  align: 'center',
}];

// 怎么玩说明
export const howPlayDirections = [
	'1.确保您有一个TRONLink钱包。有关如何创建一个TRON钱包的更多信息，请单击<a>此处</a>。',
	'2.要参与游戏您必须拥有TRX，这是为TRON网络提供动力的基础加密货币。',
	'3.设置您的投注额度，也就是您要下注的TRX数量。',
	'4.仍然还有疑问？欢迎加入我们的电报组，我们非常乐意为您提供帮助！'
];

// 公平说明
export const faireExplanation = [
	'TRONbet的所有投注都通过我们在TRON.network区块链上的智能合约执行。这确保了TRONbet可证明是相对公平的。这是它的工作原理：',
	'您可以在TRON.net工作中输入您自己的种子。如果您没有输入自己的种子，那么将使用公共随机种子。',
	'当玩家下注并进入他们自己的种子时，智能合约将生成一个随机的SHA-256哈希值 ，当前下注的时间戳和来自Coinbase的前一个区块哈希将被',
	'混合以生成随机散列。然后将由智能合约生成的种子和由玩家提供的种子混合以生成随机幸运值。'
];