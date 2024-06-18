import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
const NewsBoard = ({ country, category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Access environment variable directly
        console.log("VITE_API_KEY:", import.meta.env.VITE_API_KEY);
        let url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;

        let response = await axios.get(url);
        // console.log(first)
        // let data = await response.json();
        setArticles(response.data.articles);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [country, category]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error loading news: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      <h2 className="text-center mb-8 text-3xl font-bold">
        Latest <span className="badge bg-danger text-white">News</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;

// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const NewsBoard = ({ category }) => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setArticles(data.articles));
//   }, [category]);

//   return (
//     <div>
//       <h2 className="text-center">
//         Latest <span className="badge bg-danger">News</span>
//       </h2>
//       {articles.map((news, index) => {
//         console.log(news.description);
//         return (
//           <NewsItem
//             key={index}
//             title={news.title}
//             description={news.description}
//             src={news.urlToImage}
//             url={news.url}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default NewsBoard;

// import { useEffect } from "react";
// import { useState } from "react";
// import NewsItem from "./NewsItem";
// const NewsBoard = ({category}) => {
//     const [articles,setArticles] = useState([]);
//     useEffect(()=>{
//          let url = 'https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}';
//         let url = 'https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=26128182fdf248ec970532234c9b404c';
//         fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

//     },[category])
//     return (
//         <div>
//             <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
//             {articles.map((news,index)=>{
//                 console.log(news.description)
//                 return<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
//             })}
//         </div>
//     )
// }
// export default NewsBoard;
