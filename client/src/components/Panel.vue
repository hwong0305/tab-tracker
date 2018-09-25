<template>
    <div class="elevation-12">
        <v-toolbar color="primary" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
                <v-btn flat icon v-if="first" to="/songs/add"><v-icon>add</v-icon></v-btn>
            </v-toolbar-items>
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
    min-height: 250px;
}

#body > h3 {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
}
</style>
