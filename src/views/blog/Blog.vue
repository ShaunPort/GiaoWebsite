<template>
    <div class='container'>
        <div class='grid-row'>
            <div class='col-12'>
                <Card>
                    <template #header>
                        <h2>最新更新</h2>
                    </template>

                    <List v-bind:items='content'>
                        <template v-slot:item='{ item }'>
                            <router-link
                                :to='`showblog/${item.id}/${item.title}`'
                                >{{ item.title }}</router-link
                            >
                            <span>{{ item.date }}</span>
                        </template>
                    </List>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '/src/component/Card';
import Page from '/src/component/Page';
import List from '/src/component/List';
import DB from '../../data/database';
export default {
    components: { Card, Page, List },
    data: function () {
        return {
            content: [{ title: '样例', date: '2022-5-9' }],
        };
    },
    methods: {
        getBlogList(){
            this.content=DB.blogList;
        }
    },
    mounted: function () {
        this.getBlogList();
    },
};
</script>

<style lang='less' scoped>
</style>