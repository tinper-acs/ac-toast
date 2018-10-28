
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";import Demo3 from "./demolist/Demo3";import Demo4 from "./demolist/Demo4";import Demo5 from "./demolist/Demo5";import Demo6 from "./demolist/Demo6";
var DemoArray = [{"example":<Demo1 />,"title":" toast","code":"/**\n *\n * @title toast\n * @description toast基本示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Toast from '../../src/index';\n\nclass Demo1 extends Component {\n    componentDidMount(){\n    }\n    fPopToast(){\n        Toast.info({\n            msg: '提交中...',\n            duration: 3000,\n            mode: 'order',\n            transition: 'fade',\n            icon: 'hourglass',\n            onClose: function(){\n                console.log('toast close');\n            }\n        });\n        Toast.info({\n            msg: 'toast info1',\n            duration: 2000,\n            mode: 'order'\n        });\n        Toast.info({\n            msg: 'toast info2',\n            duration: 2000,\n            mode: 'order'\n        });\n        Toast.info({\n            msg: 'toast info3',\n            duration: 2000,\n            mode: 'order'\n        });\n        // Toast.info({\n        //     msg: 'toast info4',\n        //     duration: 10000\n        // });\n        // setTimeout(() => {\n        //     Toast.success({\n        //         msg: 'toast info2' \n        //      });\n        // },3000);\n        // setTimeout(() => {\n        //     Toast.warning({\n        //         msg: 'toast info2' \n        //     });\n        // },6000);\n        // setTimeout(() => {\n        //     Toast.error({\n        //         msg: 'toast info2'\n        //     });\n        // },9000);\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <button className=\"btn\" onClick={this.fPopToast}>toast</button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" toast基本示例"},{"example":<Demo2 />,"title":" toast","code":"/**\n *\n * @title toast\n * @description toast图标示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Toast from '../../src/index';\n\nclass Demo2 extends Component {\n    componentDidMount(){\n        \n    }\n    fPopToast(){\n        Toast.info({\n            msg: '提交中...',\n            duration: 3000,\n            transition: 'fade',\n            icon: 'hourglass',\n            className: 'submiting'\n        });\n    }\n    fPopToast1(){\n        Toast.info({\n            msg: '提交成功',\n            duration: 3000,\n            transition: 'fade',\n            icon: 'success',\n            className: 'submit-success'\n        });\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <button className=\"btn\" onClick={this.fPopToast}>提交中</button>\n                <button className=\"btn btn2\" onClick={this.fPopToast1}>提交成功</button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" toast图标示例"},{"example":<Demo3 />,"title":" toast","code":"/**\n *\n * @title toast\n * @description toast图片示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Toast from '../../src/index';\n\nclass Demo3 extends Component {\n    componentDidMount(){\n        \n    }\n    fPopToast(){\n        Toast.info({\n            msg: '迎客松',\n            duration: 3000,\n            mode: 'order',\n            transition: 'fade',\n            img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3189276298,1072963024&fm=58'\n        });\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <button className=\"btn\" onClick={this.fPopToast}>图片</button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" toast图片示例"},{"example":<Demo4 />,"title":" toast","code":"/**\n *\n * @title toast\n * @description toast关闭回调\n *\n */\n\nimport React, { Component } from 'react';\nimport Toast from '../../src/index';\n\nclass Demo4 extends Component {\n    componentDidMount(){\n        \n    }\n    fPopToast(){\n        Toast.info({\n            msg: '提交中...',\n            duration: 3000,\n            transition: 'fade',\n            icon: 'hourglass',\n            onClose: function(){\n                alert('toast close');\n            }\n        });\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <button className=\"btn\" onClick={this.fPopToast}>关闭回调</button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" toast关闭回调"},{"example":<Demo5 />,"title":" toast","code":"/**\n *\n * @title toast\n * @description toast loading示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Toast from '../../src/index';\n\nclass Demo4 extends Component {\n    componentDidMount(){\n        \n    }\n    fPopToast(){\n        let id = '1';\n        Toast.info({\n            id: id,\n            msg: '提交中...',\n            duration: 3000,\n            transition: 'fade',\n            icon: 'loading',\n            autoClose: false\n        });\n        setTimeout(() => {\n            Toast.close(id);\n        },3000);\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <button className=\"btn\" onClick={this.fPopToast}>loading示例</button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" toast loading示例"},{"example":<Demo6 />,"title":" toast","code":"/**\n *\n * @title toast\n * @description toast 不同颜色示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Toast from '../../src/index';\n\nclass Demo4 extends Component {\n    componentDidMount(){\n        \n    }\n    fPopToast(type){\n        Toast[type]({\n            msg: '提交信息',\n            duration: 3000,\n            transition: 'fade'\n        });\n    }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <button className=\"btn\" onClick={this.fPopToast.bind(this,'success')}>success</button>\n                <button className=\"btn\" onClick={this.fPopToast.bind(this,'warning')}>warning</button>\n                <button className=\"btn\" onClick={this.fPopToast.bind(this,'error')}>error</button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" toast 不同颜色示例"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name).replace('../../src/index',pkg.name) }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
