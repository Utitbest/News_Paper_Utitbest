const RSS_WORLDNEWS = "https://rss.nytimes.com/services/xml/rss/nyt/World.xml";
const RSS_SPORT = "https://www.cbssports.com/rss/headlines/";



selector = (d) => {
    return document.querySelector(d)
}
const mainimagetag = selector('.main-news img')
const titleheadline = selector('.ontoptrenn .contenttag h4')
const categorytext = selector('.ontoptrenn .contenttag .hellow')
const newtime = selector('.contenttag')
const author = selector('.contenttag h5')

    
    

// const rssFeeds = {
//     sports: "https://api.rss2json.com/v1/api.json?rss_url=https://www.espn.com/espn/rss/news",
//     fashion: "https://api.rss2json.com/v1/api.json?rss_url=https://www.vogue.com/rss",
//     worldNews: "https://api.rss2json.com/v1/api.json?rss_url=http://feeds.bbci.co.uk/news/world/rss.xml"
// };

// async function fetchNews() {
//     try {
//         // Fetch all RSS feeds and convert to JSON
//         const responses = await Promise.all([
//             fetch(rssFeeds.sports).then(res => res.json()),
//             fetch(rssFeeds.fashion).then(res => res.json()),
//             fetch(rssFeeds.worldNews).then(res => res.json())
//         ]);

//       //   const allNews = responses.flatMap(response => 
//       //     (response.items || []).map(item => ({
//       //         title: item.title,
//       //         link: item.link,
//       //         description: item.description,
//       //         image: item.enclosure?.link || extractImageFromDescription(item.description) || "default.jpg",
//       //         category: response.feed.title || "Uncategorized"
//       //     }))
//       // );
//         // Extract news articles from each response
//         const sportsNews = responses[0].items || [];
//         const fashionNews = responses[1].items || [];
//         const worldNews = responses[2].items || [];

//         // Merge all news into one array
//         const allNews = [...sportsNews, ...fashionNews, ...worldNews];

//         console.log(allNews); // Combined news feed
//     } catch (error) {
//         console.error("Error fetching news:", error);
//     }
// }



// BBC NEWS
// async function fetchNews() {
//   const categories = [
//       "http://feeds.bbci.co.uk/news/world/rss.xml",
//       "http://feeds.bbci.co.uk/sport/rss.xml",
//       "http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"
//   ];
  
//   try {
//       const responses = await Promise.all(categories.map(url => 
//           fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`)
//           .then(res => res.json())
//       ));

//       let allNews = responses.flatMap(response => response.items || []);
//       mainimagetag.src = allNews[1].enclosure.thumbnail
//       titleheadline.innerText = allNews[1].title
//     // categorytext.innerText = data
//     // data.items[0].pubDate
//       console.log(allNews)
//   } catch (error) {
//       console.error("Error fetching news:", error);
//   }
// }

// fetchNews();


const API_KEY = "193812853e940bef5a9117a82c572d02"; // Replace with your API key
const API_URL = `http://api.mediastack.com/v1/news?access_key=${API_KEY}&categories=sports&languages=en&limit=10`;


async function fetchNews() {
    const category = ["sports", "fashion", "world"];

    try {
        // const response = await fetch(`${BASE_URL}&categories=${category}`);
        const response = await fetch(API_URL)
        const data = await response.json();
        console.log(data.data)
        mainimagetag.src = data.data[7].image
        titleheadline.innerText = data.data[7].title
       categorytext.innerText = data.data[7].category
       author.innerHTML = `BY &nbsp;<span class="and">${data.data[7].author}</span>&nbsp;&nbsp;<I class="fa fa-clock"></I>&nbsp; <span>MARCH 10, 2025</span>`

        if (data.data)  {
            // displayNews(data.data, category);
            // console.log(data)
        } else {
            // console.error(`No news found for ${category}`);
        }
    } catch (error) {
        // console.error(`Error fetching ${category} news:`, error);
    }
}
fetchNews()


const API_KEY1 = "3eaf709c-9088-4519-a803-a1730b36f5a5"; // Replace with your actual API key
const BASE_URL = "https://content.guardianapis.com/search?api-key=" + API_KEY1;

const sections = {
    sports: "sport",
    fashion: "fashion",
    world: "world"
};

async function fetchNews1(category) {
    try {
        const response = await fetch(`${BASE_URL}&section=${sections[category]}&show-fields=headline,thumbnail,trailText,main&page-size=50`);
        const data = await response.json();
        console.log(data)
        if (data.response.results) {
            // displayNews(data.response.results, category);
        } else {
            console.error(`No news found for ${category}`);
        }
    } catch (error) {
        console.error(`Error fetching ${category} news:`, error);
    }
}

fetchNews1('sports')
