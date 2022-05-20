<style lang="less" scoped>
@import url(../css/global.less);

header {
    user-select: none;
    border-bottom: solid 5px #a29bfe;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    .navbar {
        display: flex;
        padding: 1rem;
        align-items: center;
        .logo {
            color: @theme;
            font-weight: bold;
            margin-right: 24px;
            font-size: 1.4rem;
        }
        .collapse {
            display: flex;
            flex-grow: 1;
            .links {
                display: flex;
                margin-right: auto;
                li {
                    margin: 0 10px;
                    a {
                        color: #777;
                        font-weight: bold;
                        &:hover {
                            color: #222;
                            font-weight: bold;
                        }
                    }
                }
            }
            .form {
                a {
                    border: 0.18rem solid @theme;
                    border-radius: 0.4rem;
                    padding: 0.2rem 0.8rem;
                    color: @theme;
                    &.form-gb {
                        background: @theme;
                        color: #fff;
                        margin-left: 8px;
                    }
                }
            }
        }
        label {
            display: none;
            & + input {
                display: none;
            }
        }
    }
}

@media @small {

    header {
        .navbar {
            flex-flow: row wrap;
            label {
                display: block;
                margin-left: auto;
                font-size: 1.2rem;
                border: solid 1px #ddd;
                padding: 0.2rem 0.6rem;
                color: #555;
                cursor: pointer;
                & + input:checked {
                    & + .collapse {
                        display: block;
                    }
                }
            }
            .collapse {
                display: none;
                width: 100%;
                flex-flow: column;
                margin-top: 0.4rem;
                .links {
                    flex-direction: column;
                    margin-bottom: 1rem;
                    li {
                        margin: 0.5rem 0;
                    }
                }
            }
        }
    }
}
@media @medium {

}

@media @big {

}
</style>

<template>
    <div @click="falseChecked">
        <!-- 导航栏 -->
        <header class="mb-3">
            <div class="container">
                <div class="navbar">
                    <!-- logo -->
                    <a href="" class="logo">Mobius</a>
                    <!-- 手机端才展示的按钮 -->
                    <label @click="changeChecked" @click.stop>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </label>
                    <!-- 用于手机端，菜单栏的弹出 -->
                    <input type="checkbox" id="toggle-nav" />
                    <!-- 菜单栏 -->
                    <div class="collapse">
                        <ul class="links">
                            <li><router-link :to="'/home'">首页</router-link></li>
                            <li><router-link :to="'/resume'">个人简历</router-link></li>
                            <li><router-link :to="'/blog'">Blog</router-link></li>
                            <!-- <li><router-link :to="'/project'">项目作业</router-link></li> -->
                        </ul>
                        <!-- <div class="form">
                            <a href="">注册</a>
                            <a href="" class="form-gb">登录</a>
                        </div> -->
                    </div>
                </div>
            </div>
        </header>
        <!-- 内容 -->
        <router-view />
    </div>
</template>

<script>
export default {
    data:function(){
        return{

        }
    },
    methods:{
        falseChecked(){
            let e=document.getElementById('toggle-nav')
            console.log(e.checked)
            e.checked=false;
        },
        changeChecked(){
            let e=document.getElementById('toggle-nav')
            console.log(e.checked)
            e.checked=!e.checked;
        },
    },
    mounted:function(){

    }
};
</script>