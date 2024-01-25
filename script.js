const API_KEY="5408edd71c8b4a6a9359066b6a635cd1";
const url="https://newsapi.org/v2/everything?q=";

let cardsContainer=document.getElementById("cards-container");
// console.log(cardsContainer);
let Iplbutton=document.getElementById("Ipl");
let Financebutton=document.getElementById("Finance");
let Sciencebutton=document.getElementById("Science");
let newsinput=document.getElementById("news-input");
let searchbutton=document.getElementById("search-button");
console.log(Iplbutton);
console.log(Financebutton);
console.log(Sciencebutton);
console.log(newsinput);
console.log(searchbutton);
Iplbutton.addEventListener('click',()=>{
    fetchNews("Ipl")
})
Financebutton.addEventListener('click',()=>{
    fetchNews("Finance");
})
Sciencebutton.addEventListener('click',()=>{
    fetchNews("Science");
})
searchbutton.addEventListener('click',()=>{
    let searchNews=newsinput.value;
    fetchNews(searchNews);
})
window.addEventListener('load',()=>
{
const searchTerms = [
    "Weather",
    "News",
    "Sports",
    "Entertainment",
    "COVID-19",
    "Technology",
    "Health",
    "Recipes",
    "Travel",
    "Finance",
    "Fashion",
    "Movies",
    "Music",
    "Jobs",
    "DIY",
    "Fitness",
    "Gaming",
    "Home Decor",
    "Education",
    "Social Media"
  ];
const randomnumber=parseInt(Math.random()*(20- 0)+0);
const randomSearch=searchTerms[randomnumber];
console.log(randomSearch)
fetchNews(randomSearch);
});

async function fetchNews(query){
    const updtUrl=`${url}${query}&apiKey=${API_KEY}`;
    const res= await fetch(updtUrl);
    const data=await res.json();
    // console.log(data)
    // console.log(data.articles);
    getNews(data.articles);
}

function getNews(articles){
    // console.log(articles)
    cardsContainer.innerHTML='';
   const html=articles.map((article)=>{
        if(article.urlToImage){
            return `<div class="card">
            <div class="card-header">
                <img src="${article.urlToImage}" alt="article image">
            </div>
            <div class="card-content">
                <h2 id="news-title">${article.title}</h2>
                <h6 id="news-source" class="news-source">${article.content}</h6>
                <p id="news-desc" class="news-desc">${article.description}</p>
            </div>
        </div>`
        }
    }).filter(card =>card!==undefined);

    cardsContainer.innerHTML=html.join('');

}   


