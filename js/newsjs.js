
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("Loadinging").classList.add("pre-loader");
    }, 500); 
});

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
const sportsNewsURL = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${UtitbestAPIkey_NEW}`                                 //
const fashionNewsURL = `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${UtitbestAPIkey_NEW}`  
const url1 = `https://newsapi.org/v2/top-headlines?sources=bbc-news,cnn&pageSize=5&apiKey=${UtitbestAPIkey_NEW}`; //
//////////////////////////////////////////////////////// NO-GO AREA //////////////////////////////////////////////////////////////


selector = (d) => {
    return document.querySelector(d)
}
selectorAll = (d) => {
    return document.querySelectorAll(d)
}
const mainContainer = selector('main')
const NavChildren = selectorAll('.navstyle ul li a')
const home_tab = selector('#hometab')
const ImagePlaceholder = 'assets/placeholder-600x317.gif';
const seletingelement = selector('.contenttag')
const ianguages = selector('.ianguages')


function NavigationLink(){
    document.addEventListener('DOMContentLoaded', ()=>{
        
        NavChildren.forEach((Numb, indexc)=>{
            Numb.onclick = async function(){
                
               let nass = document.querySelector('.nass');
                if(nass){
                    nass.classList.remove('nass');
                }
                this.classList.add('nass');
                const vaqlues = Numb.innerHTML.toLowerCase().trim()
                switch(vaqlues){
                    case 'home':
                        mainContainer.innerHTML = `
                            <div class="loading-spinner">
                                <div class="spinner"></div>
                                <p>Loading news...</p>
                            </div>
                        `;
                        fetch(`tabs/${'home'}.html`)
                        .then(response => response.text())
                        .then(results =>{
                            mainContainer.innerHTML = '';
                            mainContainer.innerHTML = results;
                            const initFn = window[`init_home`];
                                if (typeof initFn === "function") {
                                    initFn(); 
                                }
                        })
                        .catch(error =>{
                            console.error(error)
                            mainContainer.innerHTML = `<p class="errorcontact">Failed to fetch: ${error}, please reload the page</p>`;
                        })
                    break;
                    
                    case 'news':
                        mainContainer.innerHTML = `
                            <div class="loading-spinner">
                                <div class="spinner"></div>
                                <p>Loading news...</p>
                            </div>
                        `;
                        fetch(`tabs/${'news'}.html`)
                        .then(response => response.text())
                        .then(results =>{
                            mainContainer.innerHTML = ''
                            mainContainer.innerHTML = results;
                            const initNews = window[`init_news`];
                                if (typeof initNews === "function") {
                                    initNews(); 
                                }
                        })
                        .catch(error =>{
                            console.error(error)
                            mainContainer.innerHTML = `<p class="errorcontact">Failed to fetch: ${error}, please reload the page</p>`;
                        })
                    break;
                    
                    case 'weather':
                        mainContainer.innerHTML = `
                            <div class="loading-spinner">
                                <div class="spinner"></div>
                                <p>Loading news...</p>
                            </div>
                        `;
                        fetch(`tabs/${'weather'}.html`)
                        .then(response => response.text())
                        .then(results =>{
                            mainContainer.innerHTML = ''
                            mainContainer.innerHTML = results;
                            const initweath = window[`init_weather`];
                                if (typeof initweath === "function") {
                                    initweath(); 
                                }
                        })
                        .catch(error =>{
                            console.error(error)
                            mainContainer.innerHTML = `<p class="errorcontact">Failed to fetch: ${error}, please reload the page</p>`;
                        })
                    break;
                
                    case 'about us':
                        mainContainer.innerHTML = `
                            <div class="loading-spinner">
                                <div class="spinner"></div>
                                <p>Loading news...</p>
                            </div>
                        `;
                        fetch(`tabs/${'about_us'}.html`)
                        .then(response => response.text())
                        .then(results =>{
                            mainContainer.innerHTML = ''
                            mainContainer.innerHTML = results;
                            // const initweath = window[`init_weather`];
                            //     if (typeof initweath === "function") {
                            //         initweath(); 
                            //     }
                        })
                        .catch(error =>{
                            console.error(error)
                            mainContainer.innerHTML = `<p class="errorcontact">Failed to fetch: ${error}, please reload the page</p>`;
                        })
                    break;

                    case 'blog':
                        mainContainer.innerHTML = `<h1> Blog page is coming Soon</h1>`
                    break;
                }
            }
        })

         //////////////////For home tabs///////////////////////

        fetch(`tabs/${'home'}.html`)
        .then(response => response.text())
        .then(results =>{
            mainContainer.innerHTML = results;
            const initFn = window[`init_home`];
                if (typeof initFn === "function") {
                    initFn(); 
                }
        })
        .catch(error =>{
            console.error(error)
        })
        NavChildren[0].classList.add('nass');
       
    })
}
NavigationLink()

function init_home() {
    TopFeedsContents();
}
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
        console.log(sportsNewsData)
        console.log(fashionNewsData)
        
        const worldnewsObj = worldNewsData.articles.map(article =>({
            title: article.title,
            url: article.url,
            content: article.content,
            description: article.description || '',
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
            description: article.description || '',
            image: article.urlToImage || ImagePlaceholder,
            source: article.source.name,
            author: article.author || 'Unknown Author',
            category:article.category || 'TECHNOLOGY',
            publishedAt: article.publishedAt
        })) || [];
                    
        const fashionnewObj = fashionNewsData.articles.map(article =>({
            title: article.title,
            content: article.content,
            url: article.url,
            description: article.description || '',
            image: article.urlToImage || ImagePlaceholder,
            source: article.source.name,
            author: article.author || 'Unknown Author',
            category:article.category || 'FASHION',
            publishedAt: article.publishedAt
        })) || [];

        const AllNews = [...worldnewsObj, ...sportnewsObj, ...fashionnewObj]
        
        const SlideShow = selector('.indicator')
        let startPos = 0
        let Slide_Timer = setInterval(()=>{
            if(startPos >= AllNews.length){
                startPos = 0
            }

            SlideShow.innerHTML = AllNews[startPos].title;
            SlideShow.setAttribute('href', AllNews[startPos].url)
            startPos++;
        }, 3000)

        const mainNews = selector('.main-news')
        const DateSplit = AllNews[0].publishedAt.split("T")[0]
        mainNews.setAttribute('href', AllNews[0].url)
        mainNews.innerHTML = `
            <img src="${AllNews[0].image}" alt="" onload="this.parentElement.classList.remove('loasdi')">
            <div class="ontoptrenn">
                <div class="contenttag">
                    <div class="hellow">${AllNews[0].category}</div>
                    <h4 class="titless">${AllNews[0].title}</h4>
                    <h5 class="Authourdetails">BY &nbsp;
                        <span class="and">${AllNews[0].author}</span>&nbsp;&nbsp;
                        <I class="fa fa-clock"></I>&nbsp;
                        <span>${DateSplit}</span>
                    </h5>
                </div>
            </div>
        `;


        const sidechick = selector('.side-news')
        const Second_looping = AllNews.slice(1, 5)
        Second_looping.forEach((second, index) =>{
            const contaner = document.createElement('a')
            const weed = Second_looping[index].publishedAt.split("T")[0]
            contaner.className = 'fourplate';
            contaner.setAttribute('href', Second_looping[index].url)
            contaner.innerHTML = `
                <img src="${Second_looping[index].image}" alt="" class="topfeedsImage" onload="this.closest('.loasdi1')?.classList.remove('loasdi1')">
                <div class="sidenewscontent">
                    <div class="absoluteside-content">
                        <div style="position: relative; display:flex;">
                            <div class="absoluteeee">${Second_looping[index].category}</div>
                        <h4>${Second_looping[index].title}</h4>
                        <h5>BY &nbsp;
                            <span>${Second_looping[index].author}</span>&nbsp;&nbsp;
                            <I class="fa fa-clock"></I>&nbsp;
                            <span>${weed}</span>
                        </h5>
                        </div>
                            
                    </div>
                </div>
            `;
            sidechick.append(contaner)
        })

        const bearer = selector('.bearer')
        const Third_looping = AllNews.slice(5, 33)
        Third_looping.forEach((product, Numbs)=>{
            const dte = Third_looping[Numbs].publishedAt.split("T")[0]
            const matter = document.createElement('a')
            matter.className = 'matters';
            matter.setAttribute('href', Third_looping[Numbs].url);
            matter.innerHTML = `
                <div class="forimagestake">
                    <img src="${Third_looping[Numbs].image}" alt="">
                    <div class="ontopsma">${Third_looping[Numbs].category}</div>
                </div>
                <div class="hearder">
                    <h2>${Third_looping[Numbs].title}</h2>
                    <h5>BY &nbsp;
                        <span class="loveq">${Third_looping[Numbs].author}</span>&nbsp;&nbsp;
                        <i class="fa fa-clock"></i>&nbsp;
                        <span>${dte}</span>
                        <i class="fa fa-comment"></i>
                        <span>0</span>
                    </h5>
                    <p class="poststatus">${Third_looping[Numbs].description}</p>
                </div>
            `;
            if((Numbs +1)% 5 === 0){
                const addvert = document.createElement('div')
                addvert.className = 'advertcontainer';
                addvert.innerHTML = `
                    <img src="./assets/ad_970x90.png" alt="">
                `
                bearer.append(addvert)
            }
            bearer.append(matter)
        })


        const wrapperForsmall = selector('.wrapperForsmall')
        const Fourth_looping = AllNews.slice(33)
        Fourth_looping.forEach((con, NOo)=>{
            const dte1 = Fourth_looping[NOo].publishedAt.split("T")[0]
            const smallnewContain = document.createElement('a')
            smallnewContain.className = 'smallnewContain';
            smallnewContain.setAttribute('href', Fourth_looping[NOo].url)
            smallnewContain.innerHTML = `
                <div class="smallnew">
                    <div class="foke">
                        <img src="${Fourth_looping[NOo].image}" alt="">
                        <div class="aboveall">${Fourth_looping[NOo].category}</div>
                    </div>
                    <div class="wordsnote">
                        <p class="ww-3">${Fourth_looping[NOo].title}</p>
                        <h5>
                            <i class="fa fa-clock"></i>
                            <span>${dte1}</span>
                            <i class="fa fa-comment"></i>
                            <span>0</span>
                        </h5>
                    </div>
                </div>
            `;
            if(NOo === 4){
                const addvertment = document.createElement('div')
                addvertment.className = 'connetnet';
                addvertment.innerHTML = `
                    <h3>Get Connected</h3>
                    <div class="concepconnnect">
                        <span class="" style="background-color:  #e4405f;">
                            <i class="fa-brands fa-instagram"></i>
                            <span>85.8k Followers</span>
                        </span>

                        <span class="" style="background-color: var(--darkblue-color);">
                            <i class="fa-brands fa-linkedin"></i>
                            <span>85.8k Followers</span>
                        </span>

                        <span class="" style="background-color: #f07;">
                            <i class="fa-brands fa-facebook"></i>
                            <span>85.8k Followers</span>
                        </span>

                        <span class=""  style="background-color: #ffae00;">
                            <i class="fa-brands fa-whatsapp"></i>
                            <span>85.8k Followers</span>
                        </span>
                    </div>
                `;

                const AddverPicture = document.createElement('div')
                AddverPicture.className = 'AddverPicture';
                AddverPicture.innerHTML = `<img src="./assets/ad_retail_300x250.jpg" alt="">`
            
                wrapperForsmall.append(addvertment, AddverPicture)
            }
            wrapperForsmall.append(smallnewContain)
        })

        const scrollcount = 300;
        const videoContainer = selector('.videSet');
        const clickToMove1 = selector('.clickToMove1')
        const clickToMove2 = selector('.clickToMove2')

        videoContainer.innerHTML = '';
        
          try {
            const res = await fetch('../public/video.json');
            const videos = await res.json();
            videos.forEach(video => {
                const dtei5 = video.publishedAt.split("T")[0];
                const vidcood = document.createElement('div');
                vidcood.className = 'vidcood';
            
                vidcood.innerHTML = `
                    <div class="forvideonews">
                        <div class="iframe-wrapper" style="position:relative;">
                            <div class="iframe-loader"></div>
                            <iframe 
                                src="https://www.youtube.com/embed/${video.videoId}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen
                                onload="this.previousElementSibling.style.display='none';">
                            </iframe>
                        </div>
                        <div class="forvideoinfo">
                            <p>${video.title}</p>
                            <h6><i class="fa fa-clock"></i> ${dtei5}</h6>
                        </div>
                    </div>
                `;
            
                videoContainer.appendChild(vidcood);
            });
            

            clickToMove1.addEventListener('click', function(){
                videoContainer.scrollLeft -= scrollcount;
            });
            clickToMove2.addEventListener('click', function(){
                videoContainer.scrollLeft += scrollcount;
            });

          } catch (error){
            console.error(error);
          }
        
        


    }catch (erro) {
        console.error(erro)
        mainContainer.innerHTML = `<p class="errorcontact">Failed to fetch: ${erro}, please reload the page or check console</p>`;
    }
}

function init_news(){
    News_Feeds()
}
async function News_Feeds(){
    const forimagenews = selector('.forimagenews')
    const fortextparagram = selector('.fortextparagram')
    const forimagenews1 = selector('.jdjd')
    const containersnewsworld = selector('.otherNewsworldnews1');
    const ForSport = selector('.ForSport');
    const fashion_stars = selector('.fashion_stars')

    try{
        const [worldRes1, sportsRes1, fashionRes1] = await Promise.all([
            fetch(worldNewsURL),
            fetch(sportsNewsURL),
            fetch(fashionNewsURL)
        ]);
        const worldNewsData1 = await worldRes1.json();
        const sportsNewsData1 = await sportsRes1.json();
        const fashionNewsData1 = await fashionRes1.json();
        
        const worldnewsObj1 = worldNewsData1.articles.map(article =>({
            title: article.title,
            url: article.url,
            content: article.content,
            description: article.description || '',
            image: article.urlToImage || ImagePlaceholder ,
            source: article.source.name,
            author: article.author || 'Unknown Author',
            category:article.category || 'GENERAL',
            publishedAt: article.publishedAt
        })) || [];
                    
        const sportnewsObj1 = sportsNewsData1.articles.map(article =>({
            title: article.title,
            content: article.content,
            url: article.url,
            description: article.description || '',
            image: article.urlToImage || ImagePlaceholder,
            source: article.source.name,
            author: article.author || 'Unknown Author',
            category:article.category || 'TECHNOLOGY',
            publishedAt: article.publishedAt
        })) || [];
                    
        const fashionnewObj1 = fashionNewsData1.articles.map(article =>({
            title: article.title,
            content: article.content,
            url: article.url,
            description: article.description || '',
            image: article.urlToImage || ImagePlaceholder,
            source: article.source.name,
            author: article.author || 'Unknown Author',
            category:article.category || 'FASHION',
            publishedAt: article.publishedAt
        })) || [];

        // const AllNews1 = [...worldnewsObj1, ...sportnewsObj1, ...fashionnewObj1]

        const FirstFetch = worldnewsObj1.slice(0, 3)

        

        const dtefi1 = FirstFetch[0].publishedAt.split("T")[0]
        const dtefi2 = FirstFetch[1].publishedAt.split("T")[0]
        const dtefi3 = FirstFetch[2].publishedAt.split("T")[0]

        forimagenews.setAttribute('href', FirstFetch[0].url)
        forimagenews.innerHTML = `
            <img src="${FirstFetch[0].image}" alt="" onload="this.parentElement.classList.remove('loasdi1')">
            <div class="forimagenews-concs">
                <div class="peace-unto">
                    <div class="softman">
                        <h2>${FirstFetch[0].title}</h2>
                        <h5 class="Authourdetails">BY &nbsp;
                            <span class="andwe">${FirstFetch[0].author}</span>&nbsp;&nbsp;
                            <i class="fa fa-clock"></i>&nbsp;
                            <span>${dtefi1}</span>
                        </h5>
                    </div>
                </div>
            </div>
        `;
        fortextparagram.setAttribute('href', FirstFetch[1].url)
        fortextparagram.innerHTML = `
            <h2>${FirstFetch[1].title}</h2>
            <h5 class="Authourdetails">BY &nbsp;
                <span class="andwe">${FirstFetch[1].author}</span>&nbsp;&nbsp;
                <i class="fa fa-clock"></i>&nbsp;
                <span>${dtefi2}</span>
            </h5>
            <p>${FirstFetch[1].description}</p>
        `;

        forimagenews1.setAttribute('href', FirstFetch[2].url)
        forimagenews1.innerHTML = `
            <img src="${FirstFetch[2].image}" alt="" onload="this.parentElement.classList.remove('loasdi1')">
            <div class="forimagenews-concs">
                <div class="peace-unto">
                    <div class="softman">
                        <h2>${FirstFetch[2].title}</h2>
                        <h5 class="Authourdetails">BY &nbsp;
                            <span class="andwe">${FirstFetch[2].author}</span>&nbsp;&nbsp;
                            <i class="fa fa-clock"></i> &nbsp;
                            <span>${dtefi3}</span>
                        </h5>
                    </div>
                </div>
            </div>
        `;

        const worldNews = worldnewsObj1.slice(3);
        worldNews.forEach((heir, gene)=>{
            const dtei4 = worldNews[gene].publishedAt.split("T")[0]
            const containersnewsworld1 = document.createElement('a')
            containersnewsworld1.className = 'containersnewsworld';
            containersnewsworld1.setAttribute('href', worldNews[gene].url)
            containersnewsworld1.innerHTML = `
                <div class="No-image">
                <img src="${worldNews[gene].image}" alt="">
                </div>
                <div class="textonecs">
                    <h3>${worldNews[gene].title}</h3>
                    <h5 class="Authourdetails">BY &nbsp;
                        <span class="andwe">${worldNews[gene].author}</span>&nbsp;&nbsp;
                       <i class="fa fa-clock"></i>&nbsp;
                        <span>${dtei4}</span>
                    </h5>
                </div>
            `;
            containersnewsworld.append(containersnewsworld1)
        })
        const anotherAdvert = document.createElement('div')
            anotherAdvert.className = 'anotherAdvert';
            anotherAdvert.innerHTML =  `
                <img src="../assets/Screenshot 2025-03-27 130807.jpg" alt="">
            `;
        containersnewsworld.append(anotherAdvert)


        const sportify = sportnewsObj1;
        sportify.forEach((kin, wane)=>{
            const twek = sportify[wane].publishedAt.split("T")[0]
             const contentwwaper = document.createElement('a')
             contentwwaper.setAttribute('href', sportify[wane].url)
             contentwwaper.className = 'contentwwaper';
             contentwwaper.innerHTML = `
                    <div class="imagrag">
                        <img src="${sportify[wane].image}" alt="">
                    </div>
                    <div class="fornewsconns">
                        <h2>${sportify[wane].title}</h2>
                        <p class="poststatus">${sportify[wane].description}</p>
                        <h5>BY &nbsp;
                            <span class="loveq">${sportify[wane].author}</span>&nbsp;&nbsp;
                            <i class="fa fa-clock"></i>&nbsp;
                            <span>${twek}</span>
                            <i class="fa fa-comment"></i>
                            <span>0</span>
                        </h5>
                    </div>
             `;
             ForSport.append(contentwwaper)
             if((wane +1)% 4 === 0){
                const advertcontainer = document.createElement('div')
                advertcontainer.className = 'advertcontainer';
                advertcontainer.innerHTML = `<img src="../assets/ad_970x90.png" alt="">`;
                ForSport.append(advertcontainer)
             }
        })
        

        const fashion_way = fashionnewObj1;
        fashion_way.forEach((fuk, dkd)=>{
            const dtei6 = fashion_way[dkd].publishedAt.split("T")[0]
            const trike = document.createElement('a');
            trike.setAttribute('href', fashion_way[dkd].url);
            trike.className = 'trike';
            trike.innerHTML = `
                <div class="Alligience1">
                    <img src="${fashion_way[dkd].image}" alt="">
                </div>
                <div class="Alligience2">
                    <h2>${fashion_way[dkd].title}</h2>
                    <h5>BY &nbsp;
                        <span class="loveq">Analisa  Novak</span>&nbsp;&nbsp;
                        <i class="fa fa-clock"></i>&nbsp;
                        <span>${dtei6}</span>
                    </h5>
                </div>
            `;
            fashion_stars.append(trike)
        })

    }catch(err){
        console.error(err)
        mainContainer.innerHTML = `<p class="errorcontact">Failed to fetch: ${err}, please reload the page</p>`;
    }
}

function init_weather(){
    Weather_Content()
    countryweather()
}
async function Weather_Content(){


    let countydiv = selector('.h1CountryName')
    let firstspan = selector('.weath1')
    let secondspan = selector('.weath2')
    let thirdspan = selector('.weath3')
    let fourthspan = selector('.weath4')
    const inputElement = selector('.inputElement')
    const searchbuds1 = selector('.searchbuds')
    searchbuds1.addEventListener('click', async()=>{
        const inputvalues = inputElement.value.trim()
        if(!inputvalues)return;        
        countydiv.innerHTML = `<span>🌍City / Country:<i class="fa fa-spinner fa-spin scu"></i></span>`;
        firstspan.innerHTML = `🌡️   Temperature: <i class="fa fa-spinner fa-spin scu"></i>`;
        secondspan.innerHTML = `⏰ Date & Time: <i class="fa fa-spinner fa-spin scu"></i>`;
        thirdspan.innerHTML = `🧭  Wind Direction: <i class="fa fa-spinner fa-spin scu"></i>`;
        fourthspan.innerHTML = `💨  Wind Speed:  <i class="fa fa-spinner fa-spin scu"></i>`;
        try{
            const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inputvalues}`);
            const geoData = await geoResponse.json();
            

            if(!geoData.results || geoData.results.length === 0) {
                countydiv.innerHTML = `<span>🌍City / Country:<utitbest>Search not found ❌</utitbest></span>`;
                firstspan.innerHTML = `🌡️   Temperature: <p>--</p>`;
                secondspan.innerHTML = `⏰ Date & Time: <p>--</p>`;
                thirdspan.innerHTML = `🧭  Wind Direction: <p>--</p>`;
                fourthspan.innerHTML = `💨  Wind Speed:  <p>--</p>`;            
                return;
            }
            const { latitude, longitude, name, country } = geoData.results[0];

            const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const weatherData = await weatherResponse.json();

            const weather = weatherData.current_weather;

            const datefo = weather.time.split("T")[0];
            const timefo = weather.time.split("T")[1];

            countydiv.innerHTML = `<span>🌍City / Country:<utitbest>${name}</utitbest></span>`;
            firstspan.innerHTML = `🌡️   Temperature: <p>${weather.temperature}&deg;C</p>`;
            secondspan.innerHTML = `⏰ Date & Time: <p>${datefo} ${timefo}</p>`;
            thirdspan.innerHTML = `🧭  Wind Direction: <p>${weather.winddirection}&deg;</p>`;
            fourthspan.innerHTML = `💨  Wind Speed:  <p>${weather.windspeed}km/h</p>`;

            // console.log(country, name, weather)

        }catch(error){
            console.error(error)
            countydiv.innerHTML = `<span>Fail to fetch:<utitbest>${error}</utitbest></span>`;
            firstspan.innerHTML = `🌡️   Temperature: <p>--</p>`;
            secondspan.innerHTML = `⏰ Date & Time: <p>--</p>`;
            thirdspan.innerHTML = `🧭  Wind Direction: <p>--</p>`;
            fourthspan.innerHTML = `💨  Wind Speed:  <p>--</p>`; 
        }
        
    })
}
async function countryweather(){
    let countries = [];
    let currentIndex = 0;
    const batchSize = 10;
    let isLoading = false;

    const loader = document.createElement('div');
    loader.className = 'loading-spinner1';
    loader.style.cssText = `
        text-align: center;
        font-size: 1.1rem;
        padding: 15px;
        color: #444;
    `;
    const contentwapp = selector('.contentwapp')
    const disciples = selector('.disciples')
    async function loadCountries() {
        const response = await fetch('./Countries.json');
        countries = await response.json();
        loadNextBatch(); 
    }
    
    async function getWeather(lat, lon) {
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
            const data = await response.json();
            return data.current_weather;
        } catch (error) {
            contentwapp.innerHTML = `<p class="sions"> Errors while fetching request, ${error}. Please reload page</p>`;
            return null
        }
        
    }
    
    // Load the next batch of countries
    async function loadNextBatch() {
        if (isLoading || currentIndex >= countries.length) return;
        isLoading = true;
        
        
        const batch = countries.slice(currentIndex, currentIndex + batchSize);
        disciples.insertBefore(loader, disciples.children[1]);
        for (const country of batch) {
            try{
            const weather = await getWeather(country.latitude, country.longitude);
    
            const countryDiv = document.createElement('div');
            countryDiv.className = 'country-card';
            countryDiv.innerHTML = `
              <div>
                  <h3>${country.country}</h3>
                  <p>🌡️ Temperature: ${weather.temperature}&deg;C</p>
                  <p>💨 Wind Speed: ${weather.windspeed} km/h</p>
                  <p>🧭 Wind Direction: ${weather.winddirection}&deg;</p>
              </div>
            `;
            contentwapp.append(countryDiv);
            }catch(errors){
                console.error(errors)
                mainContainer.innerHTML = `<p class="errorcontact">Failed to fetch: ${errors}, please reload the page</p>`;
            }
        }

        if(disciples.contains(loader)){
            loader.remove()
        }
        currentIndex += batchSize;
        isLoading = false;
    }
    
    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
        const scrolledToBottom = scrollTop + clientHeight >= scrollHeight - 150;
    
        if (scrolledToBottom) {
            loadNextBatch();
        }
    });
    
    window.addEventListener('DOMContentLoaded', () => {
        const { scrollHeight, clientHeight } = document.documentElement;
    
        if (scrollHeight <= clientHeight + 50) {
            loadNextBatch();
        }
    });
    loadCountries();

}

async function SearchFormore() {
    const searchInputvalues = selector('.searchbar input')
    const searchButton1 = selector('.searchbar span')
    try {

        searchInputvalues.addEventListener('input', () => {
            const value = searchInputvalues.value.trim();
          
            if (value === '') {
              mainContainer.innerHTML = `
                <div class="loading-spinner">
                    <div class="spinner"></div>
                    <p>Loading home content...</p>
                </div>
              `;
          
              fetch(`tabs/home.html`)
                .then(response => response.text())
                .then(results => {
                  mainContainer.innerHTML = results;
                  const initFn = window['init_home'];
                  if (typeof initFn === 'function') {
                    initFn();
                  }
                })
                .catch(error => {
                  console.error(error);
                  mainContainer.innerHTML = `<p class="errorcontact">Failed to load home content: ${error}</p>`;
                });
            }
        });

        searchButton1.addEventListener('click', async()=>{
            const checking = searchInputvalues.value.trim()

            if(!checking) return;

            mainContainer.innerHTML = `
                <div class="loading-spinner">
                    <div class="spinner"></div>
                    <p>Loading news...</p>
                </div>
            `;
            const [worldRes, sportsRes, fashionRes] = await Promise.all([
                fetch(worldNewsURL),
                fetch(sportsNewsURL),
                fetch(fashionNewsURL)
            ]);
            const worldNewsData = await worldRes.json();
            const sportsNewsData = await sportsRes.json();
            const fashionNewsData = await fashionRes.json();
    
            
            const worldnewsObj = worldNewsData.articles.map(article =>({
                title: article.title,
                url: article.url,
                content: article.content,
                description: article.description || '',
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
                description: article.description || '',
                image: article.urlToImage || ImagePlaceholder,
                source: article.source.name,
                author: article.author || 'Unknown Author',
                category:article.category || 'TECHNOLOGY',
                publishedAt: article.publishedAt
            })) || [];
                        
            const fashionnewObj = fashionNewsData.articles.map(article =>({
                title: article.title,
                content: article.content,
                url: article.url,
                description: article.description || '',
                image: article.urlToImage || ImagePlaceholder,
                source: article.source.name,
                author: article.author || 'Unknown Author',
                category:article.category || 'FASHION',
                publishedAt: article.publishedAt
            })) || [];
    
            const AllNews11 = [...worldnewsObj, ...sportnewsObj, ...fashionnewObj]

            const query = checking.toLowerCase();

            const filteredResults = AllNews11.filter(article =>
                article.title?.toLowerCase().includes(query) ||
                article.description?.toLowerCase().includes(query) ||
                article.content?.toLowerCase().includes(query) ||
                article.author?.toLowerCase().includes(query)
            );

            displayArticles(filteredResults)
        })

    } catch(error) {
        console.error(error)
        mainContainer.innerHTML = `<p class="errorcontact">Failed to fetch: ${error}, please reload the page</p>`;
    }
}
function displayArticles(articles) {
    mainContainer.innerHTML = ''; 
  
    if (articles.length === 0) {
      mainContainer.innerHTML = '<p>No matching articles found.</p>';
      return;
    }
    const searchCon =  document.createElement('div')
    searchCon.id = 'article1'
    
    articles.forEach(article => {
      const articleEl = document.createElement('div');
      articleEl.className = 'searchEle';
  
      articleEl.innerHTML = `
        <div class="imagesearch">
            <img src="${escapeHTML(article.image)}" alt="">
        </div>
        <div class="articlesCont">
            <h3>${escapeHTML(article.title)}</h3>
            <p><strong>Author:</strong> ${escapeHTML(article.author)}</p>
            <p>${escapeHTML(article.description)}</p>
            <a href="${article.url}">Read more</a>
        </div>
        <hr/>
      `; 
      searchCon.appendChild(articleEl);
    });
    mainContainer.appendChild(searchCon)
}
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, match => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[match]));
}
SearchFormore()

function DateFunction(){
    const DateElement = selector('header .smith_name .smith_name_contents .wantmore_content h3')
    const newDays = new Date()
    const year = newDays.getFullYear()
    const months = newDays.getMonth() 
    const date = newDays.getDate()
    const days = newDays.getDay()
    const MnthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const DaysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    DateElement.innerHTML = DaysArray[days] + ',  ' + MnthsArray[months] +" " + date + ", " + year   
}
DateFunction()





window.addEventListener('keydown', (event)=>{
    const searchbuds = selector('.searchbuds')
    const searchButton = selector('.searchbar span')

    if(event.key === 'Enter'){
        const targetId = event.target.id;

        if(targetId === 'generalSearch'){
            searchButton.click()
        }

        if(targetId === 'weatherSearch'){
            searchbuds.click()
        }
    }
})

window.addEventListener('scroll',()=>{
    if(window.scrollY > 500){
        ianguages.style.display = 'flex'
    }else{
        ianguages.style.display = 'none'
    }
})

ianguages.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior: "smooth"})
})

// FOR STUDYING PURPOSES BRO LET BE

// weatherInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//       searchbuds.click(); // for weather search
//     }
//   });
  
//   siteSearchInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//       button.click(); // for site-wide search
//     }
//   });