<template>
  <div>
    <ul>
      <li v-for="product in products.items" :key="product.sku">
        <img :src="product.image.url">
        <h2>{{product.name}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>

import gql from "graphql-tag";

export default {
  name: "ProductList",
  props:{
    category: {
      required: true,
      default: "43"
    },
    page: {
      required: true
    },
  },
  apollo: {
    products: {
      query: gql`query
        example($category: String){
          products(
              filter: { category_id: {eq: $category} }
          ) {
            items {
              name
              sku,
              image{
                  url
              }
            }
          }
        }
      `,
      variables() {
        return {
          category: this.category
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
