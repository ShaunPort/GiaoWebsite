<template>
    <div>
        <div class="grid-row">
            <div class="col-12">
                <section>
                    <div>
                        <div class="container">
                            <div class="circle">
                                <span style="--i: 0"></span>
                                <span style="--i: 1"></span>
                                <span style="--i: 2"></span>
                                <span style="--i: 3"></span>
                                <span style="--i: 4"></span>
                                <span style="--i: 5"></span>
                                <span style="--i: 6"></span>
                                <span style="--i: 7"></span>
                                <span style="--i: 8"></span>
                                <span style="--i: 9"></span>
                                <span style="--i: 10"></span>
                                <span style="--i: 11"></span>
                                <span style="--i: 12"></span>
                                <span style="--i: 13"></span>
                                <span style="--i: 14"></span>
                                <span style="--i: 15"></span>
                                <span style="--i: 16"></span>
                                <span style="--i: 17"></span>
                                <span style="--i: 18"></span>
                                <span style="--i: 19"></span>
                                <span style="--i: 20"></span>
                            </div>
                            <div class="circle">
                                <span style="--i: 0"></span>
                                <span style="--i: 1"></span>
                                <span style="--i: 2"></span>
                                <span style="--i: 3"></span>
                                <span style="--i: 4"></span>
                                <span style="--i: 5"></span>
                                <span style="--i: 6"></span>
                                <span style="--i: 7"></span>
                                <span style="--i: 8"></span>
                                <span style="--i: 9"></span>
                                <span style="--i: 10"></span>
                                <span style="--i: 11"></span>
                                <span style="--i: 12"></span>
                                <span style="--i: 13"></span>
                                <span style="--i: 14"></span>
                                <span style="--i: 15"></span>
                                <span style="--i: 16"></span>
                                <span style="--i: 17"></span>
                                <span style="--i: 18"></span>
                                <span style="--i: 19"></span>
                                <span style="--i: 20"></span>
                            </div>
                        </div>
                    </div>
                </section>
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
};
</script>

<style lang='less' scoped>
@import url("../css/global");

section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    // background: #042104;
    animation: animateColor 8s linear infinite;
    @keyframes animateColor {
        0% {
            filter: hue-rotate(0deg);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
    .container {
        display: flex;
        .circle {
            display: flex;
            position: relative;
            width: 300px;
            height: 300px;
            margin: 0 -15px;
            span {
                position: absolute;
                top: 152px;
                left: 0;
                width: 100%;
                width: 100%;
                transform: rotate(calc(18deg * var(--i)));
                // 360 / 20 = 18 deg
            }
            span:before {
                content: "";
                position: absolute;
                right: 0;
                top: calc(50% -15px);
                width: 30px;
                height: 30px;
                background: #a29bfe;
                border-radius: 50%;
                box-shadow: 0 0 10px #a29bfe, 0 0 20px #a29bfe, 0 0 40px #a29bfe,
                    0 0 60px #a29bfe, 0 0 80px #a29bfe, 0 0 100px #a29bfe;
                transform: scale(0.1);
                animation: animate 4s linear infinite;
                animation-delay: calc(0.1s * var(--i));
            }
        }
        @keyframes animate {
            0% {
                transform: scale(1);
            }
            50%,
            100% {
                transform: scale(0.1);
            }
        }
        .circle:nth-child(2) {
            transform: rotate(-180deg);
            span::before {
                animation-delay: calc(-0.1s * var(--i));
            }
        }
    }
}

@media @small {
    section {
        min-height: 500px;
        .container {
            display: flex;
            .circle {
                width: 200px;
                height: 200px;
                margin: 0 -10px;
                span {
                    top: 102px;
                }
                span:before {
                    top: calc(50% -10px);
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
}

@media @big {
    section {
        min-height: 500px;
        .container {
            display: flex;
            .circle {
                width: 400px;
                height: 400px;
                margin: 0 -20px;
                span {
                    top: 201px;
                }
                span:before {
                    top: calc(50% -5px);
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
}
</style>