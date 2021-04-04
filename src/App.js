import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import NavNews from './components/NavNews';
import NewsContent from './components/newsContent/NewsContent';


function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const apiKey = 'e36090a378b94e2ca5203e23c1348f51';


  const newsApi=async() => {
    try {

      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);    
    } catch (error) {
      console.log(error);
    }
  };
 

  useEffect(() => {
    newsApi(); 
    
    // eslint-disable-next-line
  }, [newsResults,category, loadMore]);

  return (
    <div className="App" id="#home">
      <NavNews  setCategory={setCategory} />

      
        <NewsContent newsArray ={newsArray} newsResults={newsResults} 
        loadMore={loadMore} setLoadMore={setLoadMore} />
      <Footer />
    </div>
  );
}

export default App;
