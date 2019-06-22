<template>
  <div class="footer">
    <div class="footer-btn">{{ txt }}</div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
@Component
export default class Footer extends Vue {
  @Prop() private txt!: string
}
</script>
<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 7px 30px;
  background-color: #fff;

  &-btn {
    flex: 1;
    height: 40px;
    font-size: 16px; /* no */
    font-weight: 500;
    line-height: 40px;
    color: #fff;
    background-color: #d33a31;
    border-radius: 20px;
  }
}
</style>


