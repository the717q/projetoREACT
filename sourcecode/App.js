import BasicCard, { Lengthofarticles } from './components/Basic-card';
import { useEffect, useState } from 'react';
import './index.css';
import Data from './components/Data-info';

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  let url = 'https://dev.to/api/articles';

  function getArticles() {
    return fetch(url)
      .then((response) => response.json())
      .then((articles) => {
        console.log(articles);
        setData(articles);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className='App'>
      <h1>React Fetch</h1>
      <Data
        length={data.length}
        sumofpositivereactions={data.reduce(function (total, acc) {
          return total + acc.positive_reactions_count;
        }, 1)}
      />
      <div className='articles'>
        {data &&
          data.map((article) => (
            <>
              <BasicCard
                key={article.id}
                alt={article.alt}
                date={article.created_at}
                description={article.description}
                imgPath={article.cover_image}
                link='Read more'
                title={article.title}
                url={article.url}
                reactions={article.public_reactions_count}
                typeof={article.type_of}
                id={article.id}
                firstName={article.user.name}
                array={article.title.replaceAll(' ', '').length}
              />
            </>
          ))}
      </div>
    </div>
  );
}
