<template>
  <div class="album">
    <img src="../assets/CBEF21A692ADBABD42BC2F536805FEF6.jpg" :width="widths" />
    <img src="../assets/E1731A716AF4D3B2A82D84B8BD56161B.jpg" :width="widths" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Album extends Vue {
  private widths = 0;
  mounted() {
    this.widths = document.body.clientWidth;
  }
}
</script>
<style lang="scss" scoped>
// html,body
//   {
//     margin: 0;
//     padding: 0;
//   }
</style>
