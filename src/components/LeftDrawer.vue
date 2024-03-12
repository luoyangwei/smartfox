<script setup>

</script>

<template>
    <div>
        <q-list bordered padding separator class="w-full">
            <q-item-label>Components</q-item-label>
            <q-item clickable v-ripple @click="$router.push('/components')">
                <q-item-section avatar>
                    <q-icon name="sym_o_cards"></q-icon>
                </q-item-section>
                <q-item-section>Component</q-item-section>
            </q-item>
            <q-item-label>Database</q-item-label>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="sym_o_database"></q-icon>
                </q-item-section>
                <q-item-section>Local Database</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="sym_o_database"></q-icon>
                </q-item-section>
                <q-item-section>Remote Database</q-item-section>
            </q-item>
            <q-item-label>Settings</q-item-label>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="sym_o_settings"></q-icon>
                </q-item-section>
                <q-item-section>Button Component</q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<style scoped lang="scss">

</style>
