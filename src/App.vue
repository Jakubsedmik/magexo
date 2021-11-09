<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <Category-menu></Category-menu>
    <ProductList
        category="31"
    ></ProductList>
  </div>
</template>

<script>

import CategoryMenu from "@/components/CategoryMenu";
import ProductList from "@/components/ProductList";

export default {
  name: 'App',
  components: {
    ProductList,
    CategoryMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
