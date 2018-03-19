/**
 * Created by OXOYO on 2018/3/10.
 *
 * 知识点数据
 */

module.exports = [
  {
    name: 'FSE',
    title: '全栈',
    description: 'Web全栈工程师技能树梳理',
    type: 'catalog',
    category: '',
    url: {
      site: '',
      github: ''
    },
    children: [
      {
        name: 'FE',
        title: '前端',
        description: '前端知识点',
        type: 'catalog',
        category: '',
        url: {
          site: '',
          github: ''
        },
        children: [
          {
            name: 'Language',
            title: '语言',
            description: '前端语言',
            type: 'catalog',
            category: 'language',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'HTML',
                title: 'HTML',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: '',
                  github: ''
                },
                children: [
                  {
                    name: 'HTML4',
                    title: 'HTML4',
                    description: '',
                    type: 'catalog',
                    category: 'language',
                    url: {
                      site: 'https://www.w3.org/html/',
                      github: ''
                    },
                    children: []
                  },
                  {
                    name: 'HTML5',
                    title: 'HTML5',
                    description: '',
                    type: 'catalog',
                    category: 'language',
                    url: {
                      site: 'https://www.w3.org/TR/html5/',
                      github: ''
                    },
                    children: []
                  }
                ]
              },
              {
                name: 'JavaScript',
                title: 'JavaScript',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'http://www.ecma-international.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'TypeScript',
                title: 'TypeScript',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'http://www.typescriptlang.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'CoffeeScript',
                title: 'CoffeeScript',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'http://coffeescript.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'CSS',
                title: 'CSS',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: '',
                  github: ''
                },
                children: [
                  {
                    name: 'CSS Preprocessor',
                    title: 'CSS Preprocessor',
                    description: '',
                    type: 'node',
                    category: 'css-preprocessor',
                    url: {
                      site: '',
                      github: ''
                    },
                    children: [
                      {
                        name: 'LESS',
                        title: 'LESS',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: 'http://lesscss.org/',
                          github: 'https://github.com/less'
                        },
                        children: []
                      },
                      {
                        name: 'SASS',
                        title: 'SASS',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: 'http://sass-lang.com/',
                          github: 'https://github.com/sass'
                        },
                        children: []
                      },
                      {
                        name: 'Stylus',
                        title: 'Stylus',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: 'http://stylus-lang.com/',
                          github: 'https://github.com/stylus/stylus/'
                        },
                        children: []
                      },
                      {
                        name: 'CSS-Crush',
                        title: 'CSS-Crush',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: 'http://the-echoplex.net/csscrush/',
                          github: 'https://github.com/peteboere/css-crush'
                        },
                        children: []
                      },
                      {
                        name: 'Myth',
                        title: 'Myth',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: 'http://www.myth.io/',
                          github: 'https://github.com/segmentio/myth'
                        },
                        children: []
                      },
                      {
                        name: 'Rework',
                        title: 'Rework',
                        description: '',
                        type: 'node',
                        category: 'language',
                        url: {
                          site: '',
                          github: 'https://github.com/reworkcss/rework'
                        },
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: 'Browser',
            title: '浏览器',
            description: '',
            type: 'catalog',
            category: 'debug-browser',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'IE',
                title: 'IE浏览器',
                description: '',
                type: 'catalog',
                category: 'debug-browser',
                url: {
                  site: 'https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads',
                  github: ''
                },
                children: []
              },
              {
                name: 'Chrome',
                title: 'Chrome浏览器',
                description: '',
                type: 'catalog',
                category: 'debug-browser',
                url: {
                  site: 'https://www.google.cn/chrome/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Firefox',
                title: 'Firefox浏览器',
                description: '',
                type: 'catalog',
                category: 'debug-browser',
                url: {
                  site: 'http://www.firefox.com.cn/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Safari',
                title: 'Safari浏览器',
                description: '',
                type: 'catalog',
                category: 'debug-browser',
                url: {
                  site: 'https://www.apple.com/cn/safari/',
                  github: ''
                },
                children: []
              }
            ]
          },
          {
            name: 'Debug tool',
            title: '调试工具',
            description: '',
            type: 'catalog',
            category: 'debug-tool',
            children: [
              {
                name: 'Fiddler',
                title: 'Fiddler',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: 'https://www.telerik.com/fiddler',
                  github: ''
                },
                children: []
              },
              {
                name: 'HttpWatch',
                title: 'HttpWatch',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: 'https://www.httpwatch.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'YSlow',
                title: 'YSlow',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: 'http://yslow.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'whistle',
                title: 'whistle',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: '',
                  github: 'https://github.com/avwo/whistle'
                },
                children: []
              },
              {
                name: 'wireshark',
                title: 'wireshark',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: 'https://www.wireshark.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'weinre',
                title: 'weinre',
                description: '',
                type: 'catalog',
                category: 'debug-tool',
                url: {
                  site: 'http://people.apache.org/~pmuellr/weinre/',
                  github: 'https://www.npmjs.com/package/weinre'
                },
                children: []
              }
            ]
          },
          {
            name: 'IDE',
            title: '编辑器',
            description: '',
            type: 'catalog',
            category: 'develop-tool',
            children: [
              {
                name: 'VIM',
                title: 'VIM',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://www.vim.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Webstorm',
                title: 'Webstorm',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'http://www.jetbrains.com/webstorm/?fromMenu',
                  github: ''
                },
                children: []
              },
              {
                name: 'Sublime',
                title: 'Sublime',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://www.sublimetext.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Notepad++',
                title: 'Notepad++',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://notepad-plus-plus.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'EditPlus',
                title: 'EditPlus',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://www.editplus.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'ATOM',
                title: 'ATOM',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://atom.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Brackets',
                title: 'Brackets',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'http://brackets.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'HBuilder',
                title: 'HBuilder',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'http://www.dcloud.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Ace',
                title: 'Ace',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://ace.c9.io/',
                  github: 'https://github.com/ajaxorg/ace'
                },
                children: []
              },
              {
                name: 'Visual Studio',
                title: 'Visual Studio',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'https://www.visualstudio.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Eclipse',
                title: 'Eclipse',
                description: '',
                type: 'node',
                category: 'develop-tool',
                url: {
                  site: 'http://www.eclipse.org/',
                  github: ''
                },
                children: []
              }
            ]
          },
          {
            name: 'Book',
            title: '前端书籍',
            description: '',
            type: 'catalog',
            category: 'book',
            children: [
              {
                name: '《JavaScript高级程序设计》',
                title: '《JavaScript高级程序设计》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《编写可维护的JavaScript》',
                title: '《编写可维护的JavaScript》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《jQuery 权威指南》',
                title: '《jQuery 权威指南》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《Javascript语言精粹》',
                title: '《Javascript语言精粹》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《锋利的jQuery》',
                title: '《锋利的jQuery》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript DOM 编程艺术》',
                title: '《JavaScript DOM 编程艺术》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《学习 JavaScript 数据结构与算法》',
                title: '《学习 JavaScript 数据结构与算法》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《ES6标准入门》',
                title: '《ES6标准入门》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript忍者秘籍》',
                title: '《JavaScript忍者秘籍》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《高性能 JavaScript》',
                title: '《高性能 JavaScript》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《HTTP权威指南》',
                title: '《HTTP权威指南》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《编写可维护的JavaScript》',
                title: '《编写可维护的JavaScript》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《HTML5高级程序设计》',
                title: '《HTML5高级程序设计》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《基于MVC的JavaScript Web富应用开发》',
                title: '《基于MVC的JavaScript Web富应用开发》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《你不知道的 JavaScript》',
                title: '《你不知道的 JavaScript》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript 设计模式》',
                title: '《JavaScript 设计模式》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《webkit技术内幕》',
                title: '《webkit技术内幕》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《web性能权威指南》',
                title: '《web性能权威指南》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript框架设计》',
                title: '《JavaScript框架设计》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript函数式编程》',
                title: '《JavaScript函数式编程》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《Node.js+MongoDB+AngularJS Web开发》',
                title: '《Node.js+MongoDB+AngularJS Web开发》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《JavaScript快速全栈开发》',
                title: '《JavaScript快速全栈开发》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: '《数据结构与算法JavaScript描述》',
                title: '《数据结构与算法JavaScript描述》',
                description: '',
                type: 'node',
                category: 'book',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              }
            ]
          },
          // Front-end engineering
          {
            name: 'Front-end engineering',
            title: '前端工程化',
            description: '前端工程化',
            type: 'catalog',
            category: 'front-end-engineering',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'Yeoman',
                title: 'Yeoman',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'http://yeoman.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Bower',
                title: 'Bower',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://bower.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Grunt',
                title: 'Grunt',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://gruntjs.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Gulp',
                title: 'Gulp',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://gulpjs.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Webpack',
                title: 'Webpack',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://webpack.js.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Browsersync',
                title: 'Browsersync',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://browsersync.io/',
                  github: '',
                  resources: [
                    {
                      title: 'Browsersync中文网',
                      description: '',
                      url: 'http://www.browsersync.cn/'
                    }
                  ]
                },
                children: []
              },
              {
                name: 'npm',
                title: 'npm',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://www.npmjs.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'yarn',
                title: 'yarn',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://yarnpkg.com/en/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Travis Ci',
                title: 'Travis Ci',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://www.travis-ci.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Codecov',
                title: 'Codecov',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://codecov.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Mocha',
                title: 'Mocha',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://mochajs.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Chai',
                title: 'Chai',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'http://www.chaijs.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'FIS',
                title: 'FIS',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'http://fis.baidu.com/',
                  github: 'https://github.com/fex-team/fis3'
                },
                children: []
              },
              {
                name: 'Rollup',
                title: 'Rollup',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://rollupjs.org',
                  github: ''
                },
                children: []
              },
              {
                name: 'Parcel',
                title: 'Parcel',
                description: '',
                type: 'node',
                category: 'front-end-engineering',
                url: {
                  site: 'https://parceljs.org/',
                  github: 'https://github.com/parcel-bundler/parcel'
                },
                children: []
              }
            ]
          },
          {
            name: 'FrameWork',
            title: '框架',
            description: '前端框架',
            type: 'catalog',
            category: 'front-end-framework',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'Angular',
                title: 'Angular',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://angularjs.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Vue',
                title: 'Vue',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://vuejs.org/',
                  github: 'https://github.com/vuejs/vue'
                },
                children: []
              },
              {
                name: 'React',
                title: 'React',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://reactjs.org/',
                  github: 'https://github.com/facebook/react'
                },
                children: []
              },
              {
                name: 'Bootstrap',
                title: 'Bootstrap',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://getbootstrap.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Purecss',
                title: 'Purecss',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://purecss.io/',
                  github: 'https://github.com/pure-css/pure'
                },
                children: []
              },
              {
                name: 'UIkit',
                title: 'UIkit',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://getuikit.com/',
                  github: 'https://github.com/uikit/uikit'
                },
                children: []
              },
              {
                name: 'Amazeui',
                title: 'Amazeui',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://amazeui.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Frozen UI',
                title: 'Frozen UI',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://frozenui.github.io/',
                  github: 'https://github.com/frozenui/frozenui'
                },
                children: []
              },
              {
                name: 'Semantic UI',
                title: 'Semantic UI',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://semantic-ui.com/',
                  github: 'https://github.com/semantic-org/semantic-ui/'
                },
                children: []
              },
              {
                name: 'KISSY',
                title: 'KISSY',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://docs.kissyui.com/',
                  github: 'https://github.com/kissyteam/kissy'
                },
                children: []
              },
              {
                name: 'bui',
                title: 'bui',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://www.builive.com/',
                  github: 'https://github.com/dxq613/bui'
                },
                children: []
              },
              {
                name: 'Layui',
                title: 'Layui',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://www.layui.com/',
                  github: 'https://github.com/sentsin/layui/'
                },
                children: []
              },
              {
                name: 'MUI',
                title: 'MUI',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://dev.dcloud.net.cn/mui/',
                  github: 'https://github.com/dcloudio/mui/'
                },
                children: []
              },
              {
                name: 'Avalon',
                title: 'Avalon',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://avalonjs.coding.me/',
                  github: 'https://github.com/RubyLouvre/avalon'
                },
                children: []
              },
              {
                name: 'WinJS',
                title: 'WinJS',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://try.buildwinjs.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'SUI',
                title: 'SUI',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://sui.taobao.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'ELECTRON',
                title: 'ELECTRON',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://electronjs.org/',
                  github: 'https://github.com/electron'
                },
                children: []
              },
              {
                name: 'Ruff',
                title: 'Ruff',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://ruff.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'kendo-ui',
                title: 'kendo-ui',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'https://www.telerik.com/kendo-ui',
                  github: ''
                },
                children: []
              },
              {
                name: 'MontageJS',
                title: 'MontageJS',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://montagestudio.com/montagejs',
                  github: 'https://github.com/montagejs/montage'
                },
                children: []
              },
              {
                name: 'cordova',
                title: 'cordova',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://cordova.apache.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Nuclear',
                title: 'Nuclear',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: '',
                  github: 'https://github.com/AlloyTeam/Nuclear'
                },
                children: []
              },
              {
                name: 'Omijs',
                title: 'Omijs',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: '',
                  github: 'https://github.com/AlloyTeam/omi'
                },
                children: []
              },
              {
                name: 'QingUi',
                title: 'QingUi',
                description: '',
                type: 'catalog',
                category: 'front-end-framework',
                url: {
                  site: 'http://qingui.uis.cc/',
                  github: ''
                },
                children: []
              }
            ]
          },
          {
            name: 'Documentation tool',
            title: '文档工具',
            description: '文档工具',
            type: 'catalog',
            category: 'documentation-tool',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'JSDoc',
                title: 'JSDoc',
                description: 'An API documentation generator for JavaScript.',
                type: 'catalog',
                category: 'documentation-tool',
                url: {
                  site: 'http://usejsdoc.org/',
                  github: 'https://github.com/jsdoc3/jsdoc'
                },
                children: []
              },
              {
                name: 'ESDoc',
                title: 'ESDoc',
                description: 'ESDoc is a documentation generator for JavaScript.',
                type: 'catalog',
                category: 'documentation-tool',
                url: {
                  site: 'https://esdoc.org/',
                  github: 'https://github.com/esdoc/esdoc'
                },
                children: []
              },
              {
                name: 'apiDoc',
                title: 'apiDoc',
                description: 'Generates a RESTful web API Documentation.',
                type: 'catalog',
                category: 'documentation-tool',
                url: {
                  site: 'http://apidocjs.com/',
                  github: 'https://github.com/apidoc/apidoc'
                },
                children: []
              },
              {
                name: 'GraphQL Voyager',
                title: 'GraphQL Voyager',
                description: 'Represent any GraphQL API as an interactive graph. ',
                type: 'catalog',
                category: 'documentation-tool',
                url: {
                  site: 'https://apis.guru/graphql-voyager/',
                  github: 'https://github.com/APIs-guru/graphql-voyager'
                },
                children: []
              }
            ]
          },
          {
            name: 'Other',
            title: '其他知识点',
            description: '其他知识点',
            type: 'catalog',
            category: 'Other',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'YouMightNotNeedJS',
                title: 'YouMightNotNeedJS',
                description: 'You might not need scripts at all.',
                type: 'catalog',
                category: 'Other',
                url: {
                  site: 'http://youmightnotneedjs.com/',
                  github: 'https://github.com/una/YouMightNotNeedJS/'
                },
                children: []
              },
              {
                name: 'YouMightNotNeedjQuery',
                title: 'YouMightNotNeedjQuery',
                description: 'You might not need scripts at all.',
                type: 'catalog',
                category: 'Other',
                url: {
                  site: 'http://youmightnotneedjquery.com/',
                  github: 'https://github.com/HubSpot/youmightnotneedjquery'
                },
                children: []
              },
              {
                name: 'You-Dont-Need-Lodash-Underscore',
                title: 'You-Dont-Need-Lodash-Underscore',
                description: 'List of JavaScript methods which you can use natively + ESLint Plugin',
                type: 'catalog',
                category: 'Other',
                url: {
                  site: '',
                  github: 'https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore'
                },
                children: []
              },
              {
                name: 'Bouncy Ball',
                title: 'Bouncy Ball',
                description: 'Compare web animation techniques by bouncing a ball with each one.',
                type: 'catalog',
                category: 'Other',
                url: {
                  site: 'http://sparkbox.github.io/bouncy-ball',
                  github: 'https://github.com/sparkbox/bouncy-ball'
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        name: 'BE',
        title: '后端',
        description: '后端知识点',
        type: 'catalog',
        category: '',
        url: {
          site: '',
          github: ''
        },
        children: [
          {
            name: 'Language',
            title: '语言',
            description: '后端语言',
            type: 'catalog',
            category: 'language',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'NodeJS',
                title: 'NodeJS',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'https://nodejs.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'PHP',
                title: 'PHP',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'http://php.net/',
                  github: ''
                },
                children: [
                  {
                    name: 'FrameWork',
                    title: 'PHP框架',
                    description: 'PHP框架',
                    type: 'catalog',
                    category: 'php-framework',
                    url: {
                      site: '',
                      github: ''
                    },
                    children: [
                      {
                        name: 'thinkPHP',
                        title: 'thinkPHP',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'http://www.thinkphp.cn/',
                          github: ''
                        },
                        children: []
                      },
                      {
                        name: 'CodeIgniter',
                        title: 'CodeIgniter',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'https://www.codeigniter.com/',
                          github: ''
                        },
                        children: []
                      },
                      {
                        name: 'YII',
                        title: 'YII',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'http://www.yiiframework.com/',
                          github: ''
                        },
                        children: []
                      },
                      {
                        name: 'Zend Framework',
                        title: 'Zend Framework',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'https://framework.zend.com/',
                          github: ''
                        },
                        children: []
                      },
                      {
                        name: 'Laravel',
                        title: 'Laravel',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'https://laravel.com/',
                          github: ''
                        },
                        children: []
                      },
                      {
                        name: 'Phalcon',
                        title: 'Phalcon',
                        description: '',
                        type: 'catalog',
                        category: 'php-framework',
                        url: {
                          site: 'https://phalconphp.com/zh/',
                          github: ''
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Java',
                title: 'Java',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'http://java.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Go',
                title: 'Go',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'https://golang.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Python',
                title: 'Python',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'https://www.python.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Swift',
                title: 'Swift',
                description: '',
                type: 'catalog',
                category: 'language',
                url: {
                  site: 'https://www.apple.com/cn/swift/',
                  github: ''
                },
                children: []
              }
            ]
          },
          {
            name: 'Database',
            title: 'Database',
            description: '',
            type: 'catalog',
            category: 'database',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'MySQL',
                title: 'MySQL',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'https://www.mysql.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'SQL Server',
                title: 'SQL Server',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'https://www.microsoft.com/zh-CN/sql-server/',
                  github: ''
                },
                children: []
              },
              {
                name: 'MongoDB',
                title: 'MongoDB',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'https://www.mongodb.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Redis',
                title: 'Redis',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'https://redis.io/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Memcached',
                title: 'Memcached',
                description: '',
                type: 'catalog',
                category: 'database',
                url: {
                  site: 'http://memcached.org/',
                  github: ''
                },
                children: []
              }
            ]
          },
          {
            name: 'Web Server',
            title: 'Web Server',
            description: '',
            type: 'catalog',
            category: 'web-server',
            url: {
              site: '',
              github: ''
            },
            children: [
              {
                name: 'Apache',
                title: 'Apache',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://httpd.apache.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Nginx',
                title: 'Nginx',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://nginx.org/en/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Tomcat',
                title: 'Tomcat',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://tomcat.apache.org/',
                  github: ''
                },
                children: []
              },
              {
                name: 'IIS',
                title: 'IIS',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://www.iis.net/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Lighttpd',
                title: 'Lighttpd',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://www.lighttpd.net/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Zeus',
                title: 'Zeus',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: '',
                  github: ''
                },
                children: []
              },
              {
                name: 'Cherokee',
                title: 'Cherokee',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://cherokee-project.com/',
                  github: 'https://github.com/cherokee/webserver'
                },
                children: []
              },
              {
                name: 'Appweb',
                title: 'Appweb',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://www.embedthis.com',
                  github: ''
                },
                children: []
              },
              {
                name: 'Jetty',
                title: 'Jetty',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://www.eclipse.org/jetty/',
                  github: ''
                },
                children: []
              },
              {
                name: 'Resin',
                title: 'Resin',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://www.caucho.com/',
                  github: ''
                },
                children: []
              },
              {
                name: 'WebSphere',
                title: 'WebSphere',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://www.ibm.com/cloud/websphere-application-platform',
                  github: ''
                },
                children: []
              },
              {
                name: 'WebLogic',
                title: 'WebLogic',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://www.oracle.com/middleware/weblogic/index.html',
                  github: ''
                },
                children: []
              },
              {
                name: 'Tengine',
                title: 'Tengine',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'http://tengine.taobao.org/index_cn.html',
                  github: ''
                },
                children: []
              },
              {
                name: 'H2O',
                title: 'H2O',
                description: '',
                type: 'catalog',
                category: 'web-server',
                url: {
                  site: 'https://h2o.examp1e.net/',
                  github: 'https://github.com/h2o/h2o/'
                },
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
]
