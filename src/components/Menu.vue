<template>
    <q-btn color="primary" label="Basic Menu" style="margin-top:5px">
        <q-tooltip>
          Dropdown Menu
        </q-tooltip>
        <q-menu>
            <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                    <q-item-section>Click 1</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                    <q-item-section>Click 2</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                    <q-item-section>Click 3</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                    <q-item-section>Click 4</q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </q-btn>
</template>

<script>
export default {
    
}
</script>