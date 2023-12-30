export const popular = async (set) => {
    const url =
        "https://movies-tv-shows-database.p.rapidapi.com/?year=2020&page=1";
    const options = {
        method: "GET",
        headers: {
            Type: "get-popular-movies",
            "X-RapidAPI-Key":
                "642ff82731mshb9284b2cfc87479p1aeeadjsn077ad2578941",
            "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const arr = result.movie_results.map((t) => t.imdb_id);
        set(arr);
    } catch (error) {
        console.error(error);
    }
};
export const titlefetch = async (arr, set) => {
    const f = async (id) => {
        const url = `https://movies-tv-shows-database.p.rapidapi.com/?movieid=${id}`;
        const options = {
            method: "GET",
            headers: {
                Type: "get-movies-images-by-imdb",
                "X-RapidAPI-Key":
                    "642ff82731mshb9284b2cfc87479p1aeeadjsn077ad2578941",
                "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error);
        }
    };
    const detail = arr.map((id) => f(id));
    // console.log(detail);
    detail.map(async (item) => {
        const r = await item;
        set((t) => [...t, r]);
    });
};
export const trending = async (set) => {
    const url = 'https://movies-tv-shows-database.p.rapidapi.com/?page=1';
    const options = {
        method: 'GET',
        headers: {
            Type: 'get-trending-movies',
            'X-RapidAPI-Key': '642ff82731mshb9284b2cfc87479p1aeeadjsn077ad2578941',
            'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const arr = result.movie_results.map((t) => t.imdb_id);
        set(arr);
    } catch (error) {
        console.error(error);
    }
};
