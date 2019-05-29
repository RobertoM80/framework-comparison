<template>
  <el-table
    :data="books"
    max-height="300"
    :default-sort="{prop: 'date', order: 'descending'}"
    style="width: 100%"
  >
    <el-table-column prop="book" label="Book" sortable width="180"></el-table-column>
    <el-table-column prop="authors" label="Authors" sortable width="180"></el-table-column>
    <el-table-column prop="categories" label="Categories" sortable></el-table-column>
    <el-table-column prop="ratings" label="Ratings" sortable></el-table-column>
    <el-table-column prop="pages" label="Pages" sortable></el-table-column>
  </el-table>
</template>

<script>
import { isArray } from "util";

export default {
  props: ["dataTable"],
  data() {
    return {
      books: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
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



// import { isArray } from "util";
// import { stringify } from "querystring";
// export default {
//   props: ["dataTable"],
//   data() {
//     return {
//       headers: [
//         { text: "Book", value: "book" },
//         { text: "Authors", value: "authors" },
//         { text: "Categories", value: "categories" },
//         { text: "Rating", value: "rating" },
//         { text: "Pages", value: "pages" }
//       ],
//       books: []
//     };
//   },
//   computed: {
//     setTableData: function() {
//       let books = this.dataTable.map(item => {
//         let book = item.volumeInfo;
//         let cat = isArray(book.categories)
//           ? book.categories.join(", ")
//           : book.categories;
//         return {
//           book: book.title,
//           authors: book.authors.join(", "),
//           categories: cat,
//           ratings: parseInt(book.ratingsCount) || 0,
//           pages: book.pageCount
//         };
//       });
//       this.books = books;
//     }
//   },
//   mounted() {
//     this.setTableData;
//   }
// };
// </script>