<template>
  <div>
      <!-- <p>A wonderful Quote</p> -->
      <!-- <p> {{ quote }}</p> -->
      <!-- <slot></slot> -->
      <div class="title">
          <slot name="title"></slot>
          <!-- <span style="color:#ccc;"><slot name="subtitle"></slot></span> -->
         <span style="color:#ccc;"><slot></slot></span>
      </div>
      <hr>
      <div>
          <!-- <slot name="content"></slot> -->
           <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
// props: ['quote']
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
    }
    h2 {
        color: red;
    }
</style>