<template>
    <div class="pop_con pri">
        <div>
            popup-privacy
        </div>
        <!-- 내부 pop -->
        <v-dialog
        v-model="dialog2"
        max-width="240"
        >
      <v-card title="Dialog 1">
        <template v-slot:text>
          <v-btn
            class="my-2"
            text="Open Dialog 2"
            @click="dialog2 = true"
          >
          </v-btn>
        </template>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="text"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog3: false,
        }
    },
}
</script>