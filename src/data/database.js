export default class DB {
    static blogList = [
        {
            id: 1,
            title: '设计模式',
            date:'2020-10-12',
            content: "<div id='write'  class=''><h2 id='设计原则'><span>设计原则</span></h2><ol start='' ><li><span>封装变数</span></li><li><span>针对接口编程，而不是实现</span></li><li><span>多用组合（委托），少用继承</span></li><li><span>为了交互对象之间的松耦合设计而努力</span></li><li><span>类应该对扩展开发，对修改关闭</span></li><li><span>要依赖抽象，不要依赖具体类（依赖倒置）</span></li><li><span>最少知识原则：只和你的密友谈话（减少对象间的交互，只留下密友）</span></li><li><span>好莱坞原则：别调用（打电话给）我们，我们会调用（打电话给）你</span></li><li><span>单一责任：一个类应该只有一个引起变化的原因（高内聚）</span></li></ol><p>&nbsp;</p><p>&nbsp;</p><h2 id='设计模式'><span>设计模式</span></h2><h4 id='策略模式'><span>策略模式</span></h4><p><span>定义：定义算法族，分别封装起来，让它们之间可以互相替换，此模式让算法的变化独立于使用算法的客户。</span></p><p>&nbsp;</p><p><span>这类算法，完成的功能类似，可划分为一类，所以可以替换使用，只不过功能的实现不同。 </span></p><p>&nbsp;</p><h4 id='观察者模式'><span>观察者模式</span></h4><p><span>定义：定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新。</span></p><p>&nbsp;</p><p><span>当subject（observable）通知observer后observer有两种获取数据的方法，一种是subject推给observer，另一种是observer从subject拉取数据。</span></p><p><span>两种各有好处，拉有更好的扩展性，但会多次调用；而推可以在通知的时候就将数据传递，但是当数据种类增加，就会改代码。</span></p><p>&nbsp;</p><h4 id='装饰者模式'><span>装饰者模式</span></h4><p><span>定义：动态地将责任附加到对象上。若要扩展功能，装饰者提供了比继承更有弹性的替代方案。</span></p><p>&nbsp;</p><p><span>通过继承来达到”类型匹配”，而不是利用继承获得行为。</span></p><p>&nbsp;</p><h4 id='工厂方法模式'><span>工厂方法模式</span></h4><p><span>定义：定义了一个创建对象的接口，但由子类决定要实例划的类是哪一个。工厂方法让类把实例化推迟到了子类。</span></p><blockquote><p><span>依赖倒置</span></p><ul><li><p><span>变量不可以持有具体类的引用</span></p><blockquote><p><span>如果使用new，就会持有具体类的引用。可以改用工厂来避开这样的做法</span></p></blockquote></li><li><p><span>不要让类派生自具体类</span></p><blockquote><p><span>如果派生自具体类，就会依赖具体的类。改用派生自一个抽象或接口</span></p></blockquote></li><li><p><span>不要覆盖基类中已经实现的方法</span></p><blockquote><p><span>如果覆盖基类已实现的方法，说明这个基类不是一个真正合适被继承的抽象。基类中已实现的方法，应该由所有的子类共享</span></p></blockquote></li></ul><p>&nbsp;</p></blockquote><p><span>			</span></p><p>&nbsp;</p><h4 id='抽象工厂模式'><span>抽象工厂模式</span></h4><p><span>定义：提供一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类。</span></p><p>&nbsp;</p><h4 id='单例模式'><span>单例模式</span></h4><p><span>确保一个类只有一个实例，并提供全局访问点。</span></p><p>&nbsp;</p><h4 id='命令模式'><span>命令模式</span></h4><p><span>定义：将请求封装成对象，这可以让你使用不同的请求、队列，或者日志请求来参数化其他对象。命令模式也可以支持撤销操作。</span></p><p>&nbsp;</p><h4 id='适配器模式'><span>适配器模式</span></h4><p><span>定义：讲一个类的接口转换成客户期望的另一个接口。适配器让原本接口不兼容的类可以合作无间。</span></p><p>&nbsp;</p><h4 id='外观模式'><span>外观模式</span></h4><p><span>提供了一个统一的接口，用来访问子系统中的一群接口。外观定义了一个高层接口，让子系统更容易实现。</span></p><p>&nbsp;</p><h4 id='模版方法模式'><span>模版方法模式</span></h4><p><span>定义：在一个方法中定义一个算法的骨架，而将一些步骤延迟到子类中。模版方法使得子类可以在不改变算法机构的情况下，重新定义算法中的某些步骤。</span></p><p>&nbsp;</p><h4 id='迭代器模式'><span>迭代器模式</span></h4><p><span>定义：提供一种方法顺序访问一个聚合对象中的各个元素，而又不暴露其内部的表示。</span></p><p>&nbsp;</p><h4 id='组合模式'><span>组合模式</span></h4><p><span>定义：允许你将对象组合成树形结构来表现“整体/部分”的层次结构。组合能让客户以一致的方式处理个别对象和对象组合。</span></p><p>&nbsp;</p><h4 id='状态模式'><span>状态模式</span></h4><p><span>定义：允许对象在内部状态改变时改变它的行为，对像看起来好像修改了它的类。</span></p><p>&nbsp;</p><h4 id='代理模式'><span>代理模式</span></h4><p><span>定义：为另一个对象提供一个替身或占位符以访问这个对象</span></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></div></div>"

        },
        {
            id: 2,
            title: 'redis安装',
            date:'2021-3-14',
            content: "<h2 id='1安装'>1.安装</h2>\
            <blockquote><p>从官网上下载压缩包</p>\
            <p>&nbsp;</p>\
            <p>上传服务器</p>\
            <p>&nbsp;</p>\
            <p>解压</p>\
            <pre><code class='language-shell' lang='shell'>tar xzf redis-6.0.8.tar.gz\
            </code></pre>\
            <p>&nbsp;</p>\
            <p>进入目录</p>\
            <p>编译</p>\
            <pre><code class='language-shell' lang='shell'>make\
            </code></pre>\
            <p>出现src目录 里面有启动的文件</p>\
            <p>&nbsp;</p>\
            <p>在根目录下有 redis.conf 配置文件</p>\
            </blockquote>\
            <p>&nbsp;</p>\
            <p>&nbsp;</p>\
            <h2 id='2配置redis'>2.配置redis</h2>\
            <blockquote><p>&nbsp;</p>\
            <p>如果想要可以远程访问redis需要注解掉bind 关闭protected-mode，设置密码</p>\
            <pre><code>#bind 127.0.0.1  \n protected-mode no \n requirepass 你的密码 \n</code></pre>\
            <p>&nbsp;</p>\
            <p>#打开进程保护</p>\
            <pre><code>daemonize yes\
            </code></pre>\
            <p>&nbsp;</p>\
            <h4 id='redisconf的其他配置项即说明'>redis.conf的其他配置项即说明</h4>\
            <p>ps aux | grep redis</p>\
            <p>当 Redis 以守护进程方式运行时，Redis 默认会把 pid 写入 /var/run/redis.pid 文件，可以通过 pidfile 指定</p>\
            <pre><code>pidfile /var/run/redis.pid \
            </code></pre>\
            <p>&nbsp;</p>\
            <p>默认端口为 6379</p>\
            <pre><code>port 6379\
            </code></pre>\
            <p>&nbsp;</p>\
            <p>指定日志记录级别，Redis 总共支持四个级别：debug、verbose、notice、warning，默认为 notice</p>\
            <pre><code>loglevel notice\
            </code></pre>\
            <p>&nbsp;</p>\
            <p>日志记录方式，默认为标准输出，如果配置 Redis 为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给 /dev/null</p>\
            <pre><code>logfile stdout\
            </code></pre>\
            <p>&nbsp;</p>\
            </blockquote>\
            <p>&nbsp;</p>\
            <h2 id='常用命令'>常用命令</h2>\
            <p>src目录下</p>\
            <p>redis-server 启动客户端</p>\
            <p>&nbsp;</p>\
            <p>redis-cli 登录本地redis</p>\
            <p>&nbsp;</p>\
            <p>远程登录</p>\
            <pre><code>redis-cli -h host -p port -a password</code></pre>\
            <p>&nbsp;</p>"
        }
        ,
        {
            id: 3,
            title: 'Vue项目优化',
            date: '2021-11-23',
            content: "\
            "
        }

    ]



}