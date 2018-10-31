var app = new Vue({
    el: '#app',
    data: {
        books: [],
        url: "https://api.myjson.com/bins/zyv02",
        search: "",
        noResults: true,

    },
    methods: {
        fetchData: function () {
            fetch(this.url, {
                    method: 'GET',
                })
                .then(function (data) {
                    return data.json();
                })

                .then(function (myData) {
                    app.books = myData.books;
                    console.log(app.books);
                })
        }
    },
    created: function () {
        this.fetchData();
    },

    computed: {
        filteredBooks: function () {
            var title = this.books.filter((book) => {
                return book.title.toLowerCase().match(this.search.toLowerCase());
            });

            var description = this.books.filter((book) => {
                return book.description.toLowerCase().match(this.search.toLowerCase());
            });

            return title || description;
        }
    }
})
