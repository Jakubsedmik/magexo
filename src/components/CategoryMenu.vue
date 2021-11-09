<template>
  <div>
    <ul v-if="categories">
      <li v-for="category in categories.items" :key="category.uid">{{category.name}} {{category.id}}</li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "CategoryMenu",
  apollo: {
    // Simple query that will update the 'hello' vue property
    categories: gql`query {
      categories(
        filters: {}
        pageSize:3
        currentPage: 1
      ) {
        total_count
        items {
          id
          uid
          level
          name
          path
          children_count
          children {
            uid
            level
            name
            path
            children_count
            children {
              uid
              level
              name
              path
            }
          }
        }
        page_info {
          current_page
          page_size
          total_pages
        }
      }
    }`,
  },
}
</script>

<style scoped>

</style>
