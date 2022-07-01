## Bug 记录
### 问题背景
因为项目需要迁移到云端，所以需要对项目的node版本和webpack版本进行升级

### 问题说明
在webpack4 升级到webpack5之后，发现即使配置了转换js代码的箭头以兼容ie，然后配置不起作用

### 原因分析
当前项目是主项目的一个简化模版，在测试时发现webpack升级到v5之后，存在[output.outputenvironment](https://webpack.js.org/configuration/output/#outputenvironment) 配置项，该项主要用于配置webpack 打包时入口支持的 wasm 加载类型的列表，即打包后运行代码的环境是否支持指定功能，如果支持可以开启，如果不支持即关闭，关闭后会以兼容的方式处理，如果项目从webpack4迁移到webpack5，为了不做大的改动，我们可以全部关闭可用的配置项，让webpack4和webpack5 在打包时一致

### 如何解决
在webpack中加上一下配置
```javascript
output: {
  environment: {
    // The environment supports arrow functions ('() => { ... }').
    arrowFunction: false,
    // The environment supports BigInt as literal (123n).
    bigIntLiteral: false,
    // The environment supports const and let for variable declarations.
    const: false,
    // The environment supports destructuring ('{ a, b } = obj').
    destructuring: false,
    // The environment supports an async import() function to import EcmaScript modules.
    dynamicImport: false,
    // The environment supports 'for of' iteration ('for (const x of array) { ... }').
    forOf: false,
    // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...')
    module: false,
    // The environment supports optional chaining ('obj?.a' or 'obj?.()').
    optionalChaining: false,
    // The environment supports template literals.
    templateLiteral: false,
  },
}
```