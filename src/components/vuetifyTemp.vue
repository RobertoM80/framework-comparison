<template>
  <div>
    <div class="table">
      <v-data-table :headers="headers" :items="books" class="elevation-1">
        <template v-slot:items="props">
          <td>{{ props.item.book }}</td>
          <td>{{ props.item.authors }}</td>
          <td>{{ props.item.categories }}</td>
          <td>{{ props.item.ratings }}</td>
          <td>{{ props.item.pages }}</td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import { isArray } from "util";
import { stringify } from "querystring";
export default {
  props: ["dataTable"],
  data() {
    return {
      headers: [
        { text: "Book", value: "book" },
        { text: "Authors", value: "authors" },
        { text: "Categories", value: "categories" },
        { text: "Rating", value: "rating" },
        { text: "Pages", value: "pages" }
      ],
      books: []
    };
  },
  computed: {
    setTableData: function() {
      let books = this.dataTable.map(item => {
        let book = item.volumeInfo;
        let cat = isArray(book.categories)
          ? book.categories.join(", ")
          : book.categories;
        return {
          book: book.title,
          authors: book.authors.join(", "),
          categories: cat,
          ratings: parseInt(book.ratingsCount) || 0,
          pages: book.pageCount
        };
      });
      this.books = books;
    }
  },
  mounted() {
    this.setTableData;
  }
};
</script>