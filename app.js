const app = Vue.createApp({
  data() {
    return {
      url: "https://www.amazon.com/",
      showBooks: true,
      books: [
        {
          title: "The Lion, the Witch and the Wardrobe",
          author: "C. S. Lewis",
          img: "./assets/1.jpg",
          isFav: true,
        },
        {
          title: "The Magician's Nephew",
          author: "C. S. Lewis",
          img: "./assets/2.jpg",
          isFav: false,
        },
        {
          title: "The Silver Chair",
          author: "C. S. Lewis",
          img: "./assets/3.jpg",
          isFav: true,
        },
        {
          title: "Prince Caspian",
          author: "C. S. Lewis",
          img: "./assets/4.jpg",
          isFav: false,
        },
        {
          title: "The Last Battle",
          author: "C. S. Lewis",
          img: "./assets/5.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e.type);
      if (data) {
        console.log(data);
      }
    },
    toggleFavBooks(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
