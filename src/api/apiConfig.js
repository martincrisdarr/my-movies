const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a77a471f25b126245b946660f886a046',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;