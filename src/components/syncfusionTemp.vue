<template>
  <div id="app">
    <ejs-grid :dataSource="books" :allowSorting="true">
      <e-columns>
        <e-column field="book" headerText="BOOKS" textAlign="Left" width="90"></e-column>
        <e-column field="authors" headerText="AUTHORS" textAlign="Left" width="90"></e-column>
        <e-column
          field="categories"
          headerText="CATEGORIES"
          textAlign="Left"
          format="C2"
          width="90"
        ></e-column>
        <e-column field="ratings" headerText="RATINGS" textAlign="Left" width="90"></e-column>
        <e-column field="pages" headerText="PAGES" textAlign="Left" width="90"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Sort } from "@syncfusion/ej2-vue-grids";

// Vue.use(GridPlugin);
import { isArray } from "util";
import { stringify } from "querystring";

export default {
  props: ["dataTable"],
  data() {
    return {
      books: [
        { OrderID: 10248, CustomerID: "VINET", Freight: 32.38 },
        { OrderID: 10249, CustomerID: "TOMSP", Freight: 11.61 },
        { OrderID: 10250, CustomerID: "HANAR", Freight: 65.83 },
        { OrderID: 10251, CustomerID: "VICTE", Freight: 41.34 },
        { OrderID: 10252, CustomerID: "SUPRD", Freight: 51.3 },
        { OrderID: 10253, CustomerID: "HANAR", Freight: 58.17 },
        { OrderID: 10254, CustomerID: "CHOPS", Freight: 22.98 },
        { OrderID: 10255, CustomerID: "RICSU", Freight: 148.33 },
        { OrderID: 10256, CustomerID: "WELLI", Freight: 13.97 }
      ]
    };
  },
  provide: {
    grid: [Sort]
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


<style>
@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>