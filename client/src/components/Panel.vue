<template>
    <div class="elevation-12">
        <v-toolbar color="primary" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div id="body">
            <slot>
                Default Content
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Panel',
    props: {
        title: '',
        first: false
    }
};
</script>

<style scoped>
#body {
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 300px;
}

#body > h3 {
    width: 100%;
    margin: 0 0 0 0;
}
</style>
