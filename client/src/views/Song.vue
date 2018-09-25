<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center wrap>
            <v-flex md6>
                <!-- Use the prop first=true to display the add symbol -->
                <Panel title="Single" class="mr-1" first="true">
                    <h3>Artist</h3>
                    <h3>Title</h3>
                    <h3>Album</h3>
                    <v-btn color="info">Edit</v-btn>
                    <v-btn color="error">Delete</v-btn>
                </Panel>
            </v-flex>
            <v-flex md6>
                <Panel title="Double" class="ml-1">
                </Panel>
            </v-flex>
            <v-flex md12>
                <Panel title="Triple" class="mt-3">
                </Panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Panel from '../components/Panel';
export default {
    components: {
        Panel
    }
};
</script>

<style scoped>
</style>
