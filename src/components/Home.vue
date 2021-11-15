<template>
  <div>
    <h1>Vítejte na eshopu</h1>
    <p>Zvolte nějakou kategorii</p>

    <CategoryMenu ></CategoryMenu>
  </div>
</template>

<script>
export default {
  components: {
    CategoryMenu: () => import("./CategoryMenu.vue"),
  },
  name: "Home"
}
</script>

<style scoped>

</style>
