<template>
    <div class="container">
        <div class="grid-row">
            <!-- -------手机端-------- -->
            <div class="col-lg-3 col-4 section1">
                <Card>
                    <img src="./个人照.jpeg" alt="" />
                    <Card class="selfintro">
                        <span>姓名：Giao</span>
                        <span>性别：男</span>
                        <span>生日：2000-4-18</span>
                        <span>籍贯：浙江</span>
                        <span>电话：13758595065</span>
                    </Card>
                </Card>
            </div>
            <!-- ------------------- -->
            <div class="col-lg-9 col-8 col-sm-12 section2">
                <Card>
                    <div class="grid-row">
                        <!-- -------手机端-------- -->
                        <div class="col-sm-6 picture">
                            <img src="./个人照.jpeg" alt="" />
                        </div>
                        <div class="col-sm-6 intro">
                            <span>姓名：Giao</span>
                            <span>性别：男</span>
                            <span>生日：2000-4-18</span>
                            <span>籍贯：浙江</span>
                            <span>电话：13758595065</span>
                        </div>
                        <!-- ------------------- -->
                        <!-- 教育背景 -->
                        <div class="col-12">
                            <Card class="education">
                                <!-- 头部 -->
                                <template #header>
                                    <i
                                        class="fa fa-graduation-cap"
                                        aria-hidden="true"
                                    ></i>
                                    <span> 教育背景 </span>
                                </template>
                                <!-- body部分 -->
                                <div class="content">
                                    <span>2019.09-2023.06</span>
                                    <span>温州理工学院</span>
                                    <span>计算机科学与技术</span>
                                    <span>本科</span>
                                </div>
                                <template #footer>
                                    <span
                                        >主修课程：数据结构与算法 网络 操作系统
                                        软件工程概论 软件质量管理与测试</span
                                    >
                                </template>
                            </Card>
                        </div>
                        <!-- 技能清单 -->
                        <div class="col-12">
                            <Card class="skill">
                                <template #header>
                                    <i
                                        class="fa fa-flag"
                                        aria-hidden="true"
                                    ></i>
                                    <span> 技能清单 </span>
                                </template>
                                <span class="title">熟练掌握的技能：</span>
                                <Card class="card" style="border: none; box-shadow: none">
                                    <List v-bind:items="familiar">
                                        <template v-slot:item="{ item }">
                                            <div>
                                                <strong style="color: #555">{{
                                                    item.title
                                                }}</strong>
                                                <span>{{ item.content }}</span>
                                            </div>
                                        </template>
                                    </List>
                                </Card>
                                <span class="title">接触并了解的技能：</span>
                                <Card class="card" style="border: none; box-shadow: none">
                                    <List v-bind:items="commonly">
                                        <template v-slot:item="{ item }">
                                            <div>
                                                <strong style="color: #555">{{
                                                    item.title
                                                }}</strong>
                                                <span>{{ item.content }}</span>
                                            </div>
                                        </template>
                                    </List>
                                </Card>
                            </Card>
                        </div>
                        <!-- 自我评价 -->
                        <div class="col-12">
                            <Card class="comment">
                                <template #header>
                                    <i
                                        class="fa fa-tags"
                                        aria-hidden="true"
                                    ></i>
                                    <span> 自我评价 </span>
                                </template>
                                <span>
                                    工作认真、态度端正、乐于沟通和分享，热爱编程，学习能力强，不断探索未知，能够快速适应环境。
                                </span>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "/src/component/Card";
import Page from "/src/component/Page";
import List from "/src/component/List";
export default {
    components: { Card, Page, List },
    data: function () {
        return {
            familiar: [
                { title: "编程语言：", content: "Java / C / C++ /  等" },
                {
                    title: "后端框架：",
                    content:
                        "Spring Boot / Spring / Spring MVC / Spring Data 等",
                },
                {
                    title: "运维技术：",
                    content: "Linux常用指令 / Docker容器、数据卷 / Nginx 等",
                },
                { title: "数据库中间件：", content: "MySQL / Redis 等" },
                { title: "前端技术：", content: "H5 / CSS / JS / Vue" },
                {
                    title: "其他：",
                    content: "常用数据结构/设计模式单例、观察者、工厂方法等",
                },
            ],
            commonly: [
                {
                    title: "",
                    content: "JVM如：内存与垃圾回收机制、编译与优化等",
                },
                {
                    title: "",
                    content: "多线程编程",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
@import url(../../css/global.less);

.section1 {
    display: block;
    img {
        max-width: 100%;
        height: auto;
        border-radius: 1rem;
    }
    .selfintro {
        span {
            display: block;
            font-size: 1.15rem;
            color: #777;
            font-weight: bold;
        }
    }
}
.section2 {
    .picture {
        display: none;
    }
    .intro {
        display: none;
    }
}
.comment,
.skill,
.education {
    span {
        color: @theme;
    }
    @fontsize: 1.5;
    font-size: @fontsize * 1rem;
    i {
        color: white;
        background-color: @theme;
        display: inline-block;
        width: @fontsize*1.7rem;
        border-radius: 50%;

        text-align: center;
        line-height: @fontsize * 1.7rem;
    }

    .card-body {

        .content {
            font-size: 1.3rem;
            display: flex;
            span {
                display: block;
                padding-left: 1rem;
            }
        }
        .title {
            color: @theme;
            font-size: @fontsize*0.7rem;
        }
    }

    .card-footer {
        span {
            color: #777;
            font-size: 1rem;
            margin-left: 1rem;
        }
    }
}

.comment,
.skill {
    .card-body {
        strong {
            font-size: 1rem;
        }
        span {
            font-size: 1rem;
            color: #777;
        }
    }
}

@media @small {
    .section1 {
        display: none;
    }
    .section2 {
        .picture {
            display: block;
            img {
                max-width: 100%;
                height: auto;
                border-radius: 1rem;
            }
        }
        .intro {
            display: block;
            // padding-top: 1rem;

            span {
                display: block;
                padding-top: 0.8rem;
                font-size: 1.15rem;
                color: #777;
                font-weight: bold;
            }
        }
    }
    .comment,
    .skill,
    .education {
        @fontsize: 1.3;
        font-size: @fontsize * 1rem;
        i {
            width: @fontsize*1.7rem;
            line-height: @fontsize * 1.7rem;
        }
        .card-body {
            .content {
                font-size: 0.8rem;
                display: flex;
                span {
                    display: block;
                    padding-left: 0.5rem;
                }
            }
        }
        .card-footer {
            span {
                color: #777;
                font-size: 0.8rem;
                margin-left: 1rem;
            }
        }
    }
}
</style>