
///////////////////////////////////// MOVEMENT RESTRICTED////////////////////////////////////////////////////////////////////////
const graceAkpanAPIkey_GuardianApi = '4569e36f-573a-4744-92a6-a49888e1601d';                                                   //
const UtitbestAPIkey_GuardianApi = '3eaf709c-9088-4519-a803-a1730b36f5a5';                                                     //
const UtitbestAPIkey1_MediastackApi = "193812853e940bef5a9117a82c572d02";                                                      //
const UtitbestAPIkey_GNewsApi = '0517399da9fa0881246f4d88bec3297c';                                                            //
const UtitbestAPIkey_API_SPORT = '0c4f2e5bc808b34df58cb5cd21d955be';
const UtitbestAPIkey_NEW = '3a6da55f29714013a7ae7d0875c9f219';                                                            //
                                                                                                                                //
// const worldNewsURL = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=${UtitbestAPIkey_GNewsApi}`;        //
const worldNewsURL = `https://newsapi.org/v2/top-headlines?category=general&apiKey=${UtitbestAPIkey_NEW}`                                 //
const sportsNewsURL = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${UtitbestAPIkey_NEW}`                                 //
const fashionNewsURL = `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${UtitbestAPIkey_NEW}`                                 //
//////////////////////////////////////////////////////// NO-GO AREA //////////////////////////////////////////////////////////////


selector = (d) => {
    return document.querySelector(d)
}
selectorAll = (d) => {
    return document.querySelectorAll(d)
}
const mainImage = selector('.main-news img')
const categoryUnit = selector('.contenttag .hellow')
const title1 = selector('.titless')
const AboutAuthor = selector('.Authourdetails')
const sideNewsContainer = selector('.side-news')
const slideEffectNews = selector('.indicator')
const MaincontentAppender = selector('.bearer')
const smallNewtwo = selector('.smallnewContain')
const troubleContainer = selector('.troubleContainer')
const secondflow = selector('.continuw')
secondflow.innerHTML = '';
troubleContainer.innerHTML = '';
smallNewtwo.innerHTML = '';
MaincontentAppender.innerHTML = '';
sideNewsContainer.innerHTML = '';
////////////////////////////////////////////////////

///////////////////////////////////////////////////

// const TopFeedImageTag = selectorAll('.topfeedsImage')
const ImagePlaceholder = 'assets/placeholder-600x317.gif'
async function TopFeedsContents(){
    
    try {
        const [worldRes, sportsRes, fashionRes] = await Promise.all([
            fetch(worldNewsURL),
            fetch(sportsNewsURL),
            fetch(fashionNewsURL)
        ]);
        const worldNewsData = await worldRes.json();
        const sportsNewsData = await sportsRes.json();
        const fashionNewsData = await fashionRes.json();
        console.log(worldNewsData)
        const worldnewsObj = worldNewsData.articles.map(article =>({
            title: article.title,
            url: article.url,
            content: article.content,
            description: article.description,
            image: article.urlToImage || ImagePlaceholder ,
            source: article.source.name,
            author: article.author || 'Unknown Author',
            category:article.category || 'GENERAL',
            publishedAt: article.publishedAt
        })) || [];

        const sportnewsObj = sportsNewsData.articles.map(article =>({
            title: article.title,
            content: article.content,
            url: article.url,
            description: article.description,
            image: article.urlToImage || ImagePlaceholder,
            source: article.source.name,
            author: article.author || 'Unknown Author',
            category:article.category || 'SPORT',
            publishedAt: article.publishedAt
        })) || [];

        const fashionnewObj = fashionNewsData.articles.map(article =>({
            title: article.title,
            content: article.content,
            url: article.url,
            description: article.description,
            image: article.urlToImage || ImagePlaceholder,
            source: article.source.name,
            author: article.author || 'Unknown Author',
            category:article.category || 'FASHION',
            publishedAt: article.publishedAt
        })) || [];
        const AllNews = [...worldnewsObj, ...sportnewsObj, ...fashionnewObj]
        localStorage.setItem('feedsback', JSON.stringify(AllNews))

        // const AllNews = JSON.parse(localStorage.getItem('feedsback'))
        liveNewsSlider(AllNews)
        // console.log(AllNews)
        //////////////////////////////To The Big Man/////////////////////////////////
        const MainNews = AllNews.slice(0, 1)
        const mainurl = selector('.main-news')
        // console.log('MainNews',MainNews)
            mainImage.src = MainNews[0].image
            categoryUnit.innerHTML = MainNews[0].category
            title1.innerHTML = MainNews[0].title
            const dataonly = MainNews[0].publishedAt.split("T")[0]
            mainurl.setAttribute('href', MainNews[0].url)
            AboutAuthor.innerHTML = `
                BY &nbsp;
                <span class="and">${MainNews[0].author}</span>&nbsp;&nbsp;
                <I class="fa fa-clock"></I>&nbsp;
                <span>${dataonly}</span>
            `;
        ////////////////////////////////////Dont Touch//////////////////////////////////////

        //////////////////////////////////For the four brothers Fuck Off///////////////////////////////////////
        const FourBrother = AllNews.slice(1, 5)
        // console.log('FourBrother',FourBrother)
        FourBrother.forEach((element, indexx) => {
            const sidecontainer = document.createElement('a')
            sidecontainer.className = 'fourplate';
            sidecontainer.setAttribute('href', FourBrother[indexx].url)
            const formatDate = FourBrother[indexx].publishedAt.split("T")[0]
            sidecontainer.innerHTML = `
                <img src="${FourBrother[indexx].image}" alt="">
                    <div class="sidenewscontent">
                        <div class="absoluteside-content">
                            <div style="position: relative; display:flex;">
                                <div class="absoluteeee">${FourBrother[indexx].category}</div>
                            <h4>${FourBrother[indexx].title}</h4>
                            <h5>BY &nbsp;
                                <span>${FourBrother[indexx].author}</span>&nbsp;&nbsp;
                                <I class="fa fa-clock"></I>&nbsp;
                                <span>${formatDate}</span>
                            </h5>
                            </div>
                            
                        </div>
                    </div>
            `;
            sideNewsContainer.append(sidecontainer)
        });
        
        ////////////////////////////////////Dont Touch////////////////////////////////////////////
        const MainBodyFeed = AllNews.slice(5, 30)
        console.log('MainBodyFeed', MainBodyFeed)

        MainBodyFeed.forEach((element, sort) => {
            const dateform = MainBodyFeed[sort].publishedAt.split('T')[0]
            const MaincontentElement = document.createElement('a')
            MaincontentElement.className = 'matters';
            MaincontentElement.setAttribute('href', MainBodyFeed[sort].url)
            MaincontentElement.innerHTML = `
                <div class="forimagestake">
                            <img src="${MainBodyFeed[sort].image}" alt="">
                            <div class="ontopsma">${MainBodyFeed[sort].category}</div>
                        </div>
                        <div class="hearder">
                            <h2>${MainBodyFeed[sort].title}</h2>
                            <h5>BY &nbsp;
                                <span class="loveq">${MainBodyFeed[sort].author}</span>&nbsp;&nbsp;
                                <I class="fa fa-clock"></I>&nbsp;
                                <span>${dateform}</span>
                                <i class="fa fa-comment"></i>
                                <span>0</span>
                            </h5>
                            <p class="poststatus">
                                ${MainBodyFeed[sort].description}
                            </p>
                            
                        </div>
            `;
            MaincontentAppender.append(MaincontentElement)
            if((sort + 1) % 5 === 0){
                const Advertment = document.createElement('div')
                Advertment.className = 'advertcontainer';
                Advertment.innerHTML = '<img src="./assets/ad_970x90.png" alt="">';
                MaincontentAppender.append(Advertment)
            }
        });

        ///////////////////////////////////Plenty content Area///////////////////////////////////////////
        
        const remaiin = AllNews.slice(30, 35)
        console.log('remaiin',remaiin)
        remaiin.forEach((remain, No) =>{
            const perfecto = remaiin[No].publishedAt.split("T")[0]
           const newsmallElemnet = document.createElement('a')
           newsmallElemnet.className = 'smallnew';
           newsmallElemnet.setAttribute('href', remaiin[No].url)
           newsmallElemnet.innerHTML = `
            <div class="foke">
                <img src="${remaiin[No].image}" alt="">
                <div class="aboveall">${remaiin[No].category}</div>
            </div>
            <div class="wordsnote">
                <p class="ww-3">${remaiin[No].title}</p>
                <h5>
                    <i class="fa fa-clock"></i>
                    <span>${perfecto}</span>
                    <i class="fa fa-comment"></i>
                    <span>0</span>
                </h5>
            </div>
           `;
           smallNewtwo.append(newsmallElemnet)
        })
        ////////////////////////////////////////////////////////////////////////////////////////////////


        const continuetion = AllNews.slice(35, 40)
            console.log(continuetion)
        continuetion.forEach((continu, sums) =>{
            const datform = continuetion[sums].publishedAt.split("T")[0]
            const sohigh = document.createElement('a')
            sohigh.className = 'troubledisv';
            sohigh.setAttribute('href', continuetion[sums].url);
            sohigh.innerHTML = `
                <div class="troubledisv-h1">
                    <img src="${continuetion[sums].image}" alt="">
                </div>
                <div class="troubledisv-h2">
                    <p>${continuetion[sums].title}</p>
                    <h5>
                        <i class="fa fa-clock"></i>
                        <span>${datform}</span>
                    </h5>
                </di
            `;
            troubleContainer.append(sohigh)
        })
        // /////////////////////////////////////////////////////////////////////////////////////////////////
        
        const leftbehind = AllNews.slice(40, 52)
        console.log(leftbehind)
        leftbehind.forEach((lefmen, vlee)=>{
            const dt3 = leftbehind[vlee].publishedAt.split("T")[0]
            const fleash = document.createElement('a')
            fleash.className = 'troubledisv';
            fleash.setAttribute('href', leftbehind[vlee].url);
            fleash.innerHTML = `
                <div class="troubledisv-h1">
                    <img src="${leftbehind[vlee].image}" alt="">
                </div>
                <div class="troubledisv-h2">
                    <p>${leftbehind[vlee].title}</p>
                    <h5>
                        <i class="fa fa-clock"></i>
                        <span>${dt3}</span>
                    </h5>
                </div>
            `;
            if((vlee +1) % 5 === 0){
                const lamba = document.createElement('div')
                lamba.className = 'lamba'
                lamba.innerHTML = '<img src="./assets/ad_retail_300x250.jpg" alt="">';
                secondflow.append(lamba)
            }
            secondflow.append(fleash)
        })
        //////////////////////////////////////////////////////////////////////
        const few = AllNews.slice(52)
        console.log('few',few)
    } catch(error) {
        console.log(error)
    }
}
TopFeedsContents()

function liveNewsSlider(d) {
    const NewsData = d; 
    let startIndex = 0;
    setInterval(() => {
        if(startIndex >= NewsData.length) {
            startIndex = 0; 
        }
        slideEffectNews.innerHTML = NewsData[startIndex].title;
        slideEffectNews.setAttribute('href', NewsData[startIndex].url)
        startIndex++; 
    }, 3000);
}

// async function TestApi(url) {
//     try {
//         const response = await fetch(url);

//         // Check if response is JSON before parsing
        // const contentType = response.headers.get("content-type");
        // if (!contentType || !contentType.includes("application/json")) {
        //     throw new Error("Invalid JSON response. Check API URL or Key.");
        // }

//         const data = await response.json(); 
//         console.log("API Response:", data); 

//         return data;
//     } catch (error) {
//         console.error("Error fetching news:", error.message);
//         return null; // Prevents crashing if API fails
//     }
// }

// TestApi(sportsNewsURL);

async function fetchVideoNews(topic) {
    const apiUrl = `https://pipedapi.kavin.rocks/search?q=${encodeURIComponent(topic)}&filter=video`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            displayVideos(data.items.slice(0, 5)); // Display only top 5 videos
        } else {
            console.log("No videos found.");
        }
    } catch (error) {
        console.error("Error fetching video news:", error);
    }
}

function displayVideos(videos) {
    const videoContainer = document.getElementById("videoNews");
    videoContainer.innerHTML = ""; // Clear previous content

    videos.forEach(video => {
        const videoElement = document.createElement("div");
        videoElement.className = "video-item";
        videoElement.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" />
            <h4>${video.title}</h4>
            <a href="https://www.youtube.com/watch?v=${video.url}">Watch Video</a>
        `;
        videoContainer.appendChild(videoElement);
    });
}

// Fetch different categories
fetchVideoNews("sports news");
fetchVideoNews("fashion news");
fetchVideoNews("world news");
