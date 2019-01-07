# QWeb
QOS JS SDK  

[![version](https://img.shields.io/github/tag/cosmos/cosmos-sdk-js.svg)](https://github.com/cosmos/cosmos-sdk-js/releases/latest)
[![Build Status](https://travis-ci.org/cosmos/cosmos-sdk-js.svg?branch=master)](https://travis-ci.org/cosmos/cosmos-sdk-js)
[![license](https://img.shields.io/github/license/cosmos/cosmos-sdk-js.svg)](https://github.com/cosmos/cosmos-sdk-js/blob/master/LICENSE)
[![](https://tokei.rs/b1/github/cosmos/cosmos-sdk-js?category=lines)](https://github.com/cosmos/cosmos-sdk-js)

# 开发
- 安装依赖 `npm install`
- 运行Demo页面 
    - 运行 `npm run dev` 
    - 然后在浏览器中打开 `http://127.0.0.1:9393`
    - 在 console中查看测试结果
- 运行单元测试
    - 运行 `npm run unittest` 
    - 在 console中查看测试结果
- 生产打包
    - 运行 `npm run build`
    
# 用法
## 1、引入dist/qweb.js
## 2、new一个QWeb对象
    const qweb = new QWeb({ chainId: 'qos-test', baseUrl: 'http://192.168.1.223:1317' }

## 3、账户和交易
- Account
```javascript
    // 新建账户
    const newAccount = qweb.newAccount()
    console.log(newAccount)
    console.log('--------------------------------------')

    // 根据助记词恢复账户
    const mn = 'milk garden scare goat sketch laundry teach rival loyal double cotton renew giraffe spend web amused vault snake emerge beauty suffer kitten surface level'
    const recoveryAccount = qweb.recoveryAccountByMnemonic(mn)
    console.log(recoveryAccount)
    console.log('--------------------------------------')

    // 根据私钥恢复账户
    const rAccount = qweb.recoveryAccountByPrivateKey('JcoHX1Oeuvo1coS7nTukw1Km24YbFTccQMpAof/ZEhH2i2uznasYVD/U7oKYN4eL5JT9syYSh+KBmgTffinyNg==')
    console.log(rAccount)
    console.log('--------------------------------------')

    // 根据地址查询账户
    qweb.account.get('address1pcjs0t9m9vl7vejwttuc2fzfgnutndnrpyw08m').then(res=>{
        console.log(res.data)
    })
```
- Tx
    - 一对一转账
    ``` javascript
    const promise = qweb.tx.from([
        {
            privateKey: 'privateKey1',
            addr: 'addr1',
            qos: '0',
            qscs: [
                {
                    coin_name: 'AOE', amount: '100'
                }
            ]
        }
    ]).to([
        {
            addr: 'addr2',
            qos: '0',
            qscs: [
                {
                    coin_name: 'AOE', amount: '100'
                }
            ]
        }
    ]).send()

    promise.then(res => {
        console.log(res.data)
    })

    ```
    - 一对多转账
    ``` javascript
    const promise = qweb.tx.from([
        {
            privateKey: 'privateKey1',
            addr: 'addr1',
            qos: '0',
            qscs: [
                {
                    coin_name: 'AOE', amount: '200'
                }
            ]
        }
    ]).to([
        {
            addr: 'addr2',
            qos: '0',
            qscs: [
                {
                    coin_name: 'AOE', amount: '100'
                }
            ]
        },
        {
            addr: 'addr3',
            qos: '0',
            qscs: [
                {
                    coin_name: 'AOE', amount: '100'
                }
            ]
        }
    ]).send()

    promise.then(res => {
        console.log(res.data)
    })
    ```
    - 多对多转账(from和to的币数量总量需要相等)
    ``` javascript
    const promise = qweb.tx.from([
        {
            privateKey: 'privateKey1',
            addr: 'addr1',
            qos: '2',
            qscs: [
                { coin_name: 'AOE', amount: '1' }
            ]
        },
        {
            privateKey: 'privateKey2',
            addr: 'addr2',
            qos: '1',
            qscs: []
        }
    ]).to([
        {
            addr: 'addr3',
            qos: '1',
            qscs: [{ coin_name: 'AOE', amount: '1' }]
        },
        {
            addr: 'addr4',
            qos: '2'
        }
    ]).send()

    promise.then(res => {
        console.log(res.data)
    })

    ```