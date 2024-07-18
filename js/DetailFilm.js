const id = window.location.search.split('=')[1];

const getDetailFilm = async (id) => {
    const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '348fa93ebamsh5392cfeb2a8990dp1188c3jsnb722fd52dfd8',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

getDetailFilm(id).then((film) => {
    console.log(film);
})
