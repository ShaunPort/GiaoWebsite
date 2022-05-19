<template>
    <div class='container'>
        <div class='grid-row'>
            <div class='col-12'>
                <Card>
                    <template #header>
                        <h1>{{ data.title }}</h1>
                        <h6>发布时间:{{data.date}}</h6>
                    </template>
                    <div v-html='data.content'></div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '/src/component/Card';
import Page from '/src/component/Page';
import List from '/src/component/List';
import DB from '/src/data/database';
export default {
    components: { Card, Page, List },
    data: function () {
        return {
            data: '',
        };
    },
    methods: {
        getBlogContent(id) {
            this.data = DB.blogList.find((ele) => {
                console.log(id);
                return ele.id == id;
            });
        },
    },
    mounted: function () {
        let id = this.$route.params.id;
        console.log(this.$route.params);
        this.getBlogContent(id);
    },
};
</script>

<style lang='less' scoped>
@import url('../../css/md.css');
</style>