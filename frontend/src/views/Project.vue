<template>
    <body class="overflow-hidden">
        <div v-for="[key, image] in imageData.filter(image => image.location === title).entries()" :key="key">
            {{ image.location }}
        </div>
    </body>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import imageData from '../constants/imageData'

export default defineComponent({
  name: 'Project',
  computed: {
    title() {
        return this.$route.query.title
    }
  },
  data: () => ({
    imageData: imageData,
  }),
})
</script>
