
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
const mainContainer = selector('main')
const NavChildren = selectorAll('.navstyle ul li a')

const topnotch = document.createElement('div')
topnotch.className = 'topnotch';

const side_news = document.createElement('div')
side_news.className = 'side-news';

const editorspicksworks = document.createElement('div')
editorspicksworks.className = 'editorspicksworks';

const firstparentElement = document.createElement('div');
firstparentElement.className = 'firstparentElement';

const bearer = document.createElement('div')
bearer.className = 'bearer';

const secondparentElement = document.createElement('div')
secondparentElement.className = 'secondparentElement';

const divNoclass = document.createElement('div')

const smallnewContain = document.createElement('div')
smallnewContain.className = 'smallnewContain';

const troubleContainer = document.createElement('div')
troubleContainer.className = 'troubleContainer';
const fortroubleContainer = document.createElement('div')
fortroubleContainer.style.flexDirection = 'column';

const connetnet = document.createElement('div')
connetnet.className = 'connetnet';
const forconnetnet = document.createElement('div')
forconnetnet.className = 'ddddsdk'

const nmmn = document.createElement('div')


const continuw = document.createElement('div')
continuw.className = 'continuw';
const forcontinuw = document.createElement('div')
forcontinuw.style.flexDirection = 'column';
///////////////////////////////////////////////////
                // FOR WORLD NEWS
const worldNewsonly = document.createElement('div')
worldNewsonly.className = 'worldNewsonly';

const worldOfSport_fashion = document.createElement('div')
worldOfSport_fashion.className = 'worldOfSport-fashion'
/////////////////////////////////////////////////
const ImagePlaceholder = 'assets/placeholder-600x317.gif';

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
                        location.reload()
                    break;
                    
                    case 'news':
                            ///////////////////////////////////////////
                            mainContainer.innerHTML = `
                            <div class="loading-spinne">
                                <div class="spinner"></div>
                                <p>Loading news...</p>
                            </div>
                        `;
                        try {
                            
                            ////////////////////////////////////////////////
                            const [worldRes, sportsRes, fashionRes] = await Promise.all([
                                fetch(worldNewsURL),
                                fetch(sportsNewsURL),
                                fetch(fashionNewsURL)
                            ]);
                            const worldNewsData = await worldRes.json();
                            const sportsNewsData = await sportsRes.json();
                            const fashionNewsData = await fashionRes.json();
                            mainContainer.innerHTML = '';
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
                                category:article.category || 'SPORT',
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

                            const Newsh1 = document.createElement('h1')
                            Newsh1.className = 'Newsh1';
                            Newsh1.innerText = 'News';
                            ////////////////////////////////////////////
                            const secondMainMan = document.createElement('div')
                            secondMainMan.className = 'secondMainMan';
                            secondMainMan.innerHTML = `
                                <div class="addver">
                                    <h6>Advertisement</h6>
                                    <img src="./assets/11206313772825155776.jpeg" alt="">
                                </div>
                            `;
                            // localStorage.setItem('feedsback1', JSON.stringify(worldnewsObj))
                            // localStorage.setItem('feedsback2', JSON.stringify(sportnewsObj))
                            // localStorage.setItem('feedsback3', JSON.stringify(fashionnewObj))
                            const forworldnewsh2 = document.createElement('h2')
                            forworldnewsh2.className = 'forworldnewsh2';
                            forworldnewsh2.innerText = 'Most Read!';
                            ///////////////////////////////////////////////////////
                            const worldnewFacts = worldnewsObj
                            const WorldnewConsumtion1 = worldnewFacts.slice(0, 3);
                            const santacomse1 = WorldnewConsumtion1[0].publishedAt.split("T")[0]
                            const santacomse2 = WorldnewConsumtion1[1].publishedAt.split("T")[0]
                            const santacomse3 = WorldnewConsumtion1[2].publishedAt.split("T")[0]
                            const worldNewsonlywrapper = document.createElement('div')
                            worldNewsonlywrapper.className = 'worldNewsonlywrapper';
                            worldNewsonlywrapper.innerHTML = `
                                <div class="wrappnewsMain">
                                        <div class="seniorwrapper">

                                            <div class="forimagenews">
                                                <img src="${WorldnewConsumtion1[0].image}" alt="">
                                                <div class="forimagenews-concs">
                                                    <div class="peace-unto">
                                                        <div class="softman">
                                                            <h2>${WorldnewConsumtion1[0].title}</h2>
                                                            <h5 class="Authourdetails">BY &nbsp;
                                                                <span class="andwe">${WorldnewConsumtion1[0].author}</span>&nbsp;&nbsp;
                                                                <i class="fa fa-clock"></i>&nbsp;
                                                                <span>${santacomse1}/span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="fortextparagram">
                                                <h2>${WorldnewConsumtion1[1].title}</h2>
                                                <h5 class="Authourdetails">BY &nbsp;
                                                    <span class="andwe">${WorldnewConsumtion1[1].author}</span>&nbsp;&nbsp;
                                                    <i class="fa fa-clock"></i>&nbsp;
                                                    <span>${santacomse2}</span>
                                                </h5>
                                                <p>${WorldnewConsumtion1[1].description}</p>
                                            </div>

                                            <div class="forimagenews">
                                                <img src="${WorldnewConsumtion1[2].image}" alt="">
                                                <div class="forimagenews-concs">
                                                    <div class="peace-unto">
                                                        <div class="softman">
                                                            <h2>${WorldnewConsumtion1[2].title}</h2>
                                                            <h5 class="Authourdetails">BY &nbsp;
                                                                <span class="andwe">${WorldnewConsumtion1[2].author}</span>&nbsp;&nbsp;
                                                                <i class="fa fa-clock"></i>&nbsp;
                                                                <span>${santacomse3}</span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                            `;
                            ////////////////////////////////////////////////////////////
                            const otherNewsworldnews = document.createElement('div')
                            otherNewsworldnews.className = 'otherNewsworldnews';
                            const otherNewsworldnews1 = document.createElement('div')
                            otherNewsworldnews1.className = 'otherNewsworldnews1';
                            const restofworldnews = worldnewFacts.slice(3)
                            restofworldnews.forEach((them, tens)=>{
                                const publictime = restofworldnews[tens].publishedAt.split("T")[0]
                                const containersnewsworld = document.createElement('div')
                                containersnewsworld.className = 'containersnewsworld';
                                containersnewsworld.innerHTML = `
                                    <div class="No-image">
                                        <img src="${restofworldnews[tens].image}" alt="">
                                    </div>
                                    <div class="textonecs">
                                        <h3>${restofworldnews[tens].title}</h3>
                                        <h5 class="Authourdetails">BY &nbsp;
                                            <span class="andwe">${restofworldnews[tens].author}</span>&nbsp;&nbsp;
                                            <i class="fa fa-clock"></i>&nbsp;
                                            <span>${publictime}</span>
                                        </h5>
                                    </div>
                                `;
                                otherNewsworldnews1.append(containersnewsworld)
                            })
                            const anotherAdvert = document.createElement('div');
                            anotherAdvert.className = 'anotherAdvert';
                            anotherAdvert.innerHTML = `<img src="./assets/Screenshot 2025-03-27 130807.jpg" alt="">`;
                            otherNewsworldnews1.append(anotherAdvert)
                            otherNewsworldnews.append(otherNewsworldnews1)
                            worldNewsonly.append(forworldnewsh2, worldNewsonlywrapper, otherNewsworldnews)
                            ////////////////////////////////////////////////////////////////////////////
                            const fortoborns = document.createElement('div')
                            fortoborns.className = 'fortoborns';
                            fortoborns.innerHTML = `<h3 class="sporth3">SPORT</h3>`;
                            
                            const ForSport = document.createElement('div');
                            ForSport.className = 'ForSport';
                            const supportwrapper = document.createElement('div')
                            supportwrapper.className = 'supportwrapper';

                            const AllNews1 = sportnewsObj
                            AllNews1.forEach((over, size)=>{
                                const twek = AllNews1[size].publishedAt.split("T")[0]
                                const contentwwaper = document.createElement('div')
                                contentwwaper.className = 'contentwwaper';
                                contentwwaper.innerHTML = `
                                     <div class="imagrag">
                                        <img src="${AllNews1[size].image}" alt="">
                                    </div>
                                    <div class="fornewsconns">
                                        <h2>${AllNews1[size].title}</h2>
                                        <p class="poststatus">${AllNews1[size].description}</p>
                                        <h5>BY &nbsp;
                                            <span class="loveq">${AllNews1[size].author}</span>&nbsp;&nbsp;
                                            <I class="fa fa-clock"></I>&nbsp;
                                            <span>${twek}</span>
                                            <i class="fa fa-comment"></i>
                                            <span>0</span>
                                        </h5>
                                    </div>
                                `;
                                ForSport.append(contentwwaper)
                                if((size +1) % 5 === 0){
                                    const Advertment = document.createElement('div')
                                    Advertment.className = 'advertcontainer jjs';
                                    Advertment.innerHTML = '<img src="./assets/ad_970x90.png" alt="">';
                                    ForSport.append(Advertment)
                                }
                            })
                            //////////////////////////////////////////////
                            const ForFashion = document.createElement('div')
                            ForFashion.className = 'ForFashion';

                            const topmane = document.createElement('div')
                            topmane.className = 'topmane';
                            topmane.innerHTML = `
                                <i class="fa fa-fire bvb"></i>
                                <h3>Fashion & Entertainment</h3>
                            `;

                            const newmaningame = document.createElement('div')

                            const FashionMode = fashionnewObj
                            FashionMode.forEach((echo, bed)=>{
                                const solder = FashionMode[bed].publishedAt.split("T")[0]
                                const trike = document.createElement('div')
                                trike.className = 'trike';
                                trike.innerHTML = `
                                    <div class="Alligience1">
                                         <img src="${FashionMode[bed].image}" alt="">
                                     </div>
                                     <div class="Alligience2">
                                         <h2>${FashionMode[bed].title}</h2>
                                         <h5>BY &nbsp;
                                             <span class="loveq">${FashionMode[bed].author}</span>&nbsp;&nbsp;
                                             <I class="fa fa-clock"></I>&nbsp;
                                             <span>${solder}</span>
                                         </h5>
                                     </div>
                                `;
                                newmaningame.append(trike)
                            })

                            ForFashion.append(topmane, newmaningame)

                            worldOfSport_fashion.append(ForSport, ForFashion)
                             mainContainer.append(Newsh1, secondMainMan, worldNewsonly, fortoborns, worldOfSport_fashion)
                        } catch (error) {
                            console.log(error)
                        }
                        
                    break;
                    
                    case 'weather':
                        mainContainer.innerHTML = `<h1> Weather is coming Soon</h1>`
                    break;
                
                    case 'category':
                        mainContainer.innerHTML = `<h1> Category is coming Soon</h1>`
                    break;
                }
            }
        })
        // TopFeedsContents()
        NavChildren[0].classList.add('nass')
    })
}
// NavigationLink()

async function TopFeedsContents(){
            mainContainer.innerHTML = `
                <div class="loading-spinne">
                    <div class="spinner"></div>
                    <p>Loading news...</p>
                </div>
            `;
            try {
                const [worldRes, sportsRes, fashionRes] = await Promise.all([
                    fetch(worldNewsURL),
                    fetch(sportsNewsURL),
                    fetch(fashionNewsURL)
                ]);
                const worldNewsData = await worldRes.json();
                const sportsNewsData = await sportsRes.json();
                const fashionNewsData = await fashionRes.json();
                mainContainer.innerHTML = '';

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
                    category:article.category || 'SPORT',
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
                localStorage.setItem('feedsback', JSON.stringify(AllNews))
        
                // const AllNews = JSON.parse(localStorage.getItem('feedsback'))
                 
                let startIndex = 0;
                setInterval(() => {
                    if(startIndex >= AllNews.length) {
                        startIndex = 0; 
                    }
                nmmn.className = 'nmmn';
                nmmn.innerHTML = `
                <div class="seconwrman">
                    <h4>Live News</h4>
                    <a href="${AllNews[startIndex].url}" class="indicator">
                        ${AllNews[startIndex].title}
                    </a>
                </div>
                `;
                    startIndex++; 
                }, 3000);
                
             
                //////////////////////////////To The Big Man/////////////////////////////////
                const MainNews = AllNews.slice(0, 1)
                const dataonly = MainNews[0].publishedAt.split("T")[0]

                const mainurl = document.createElement('a')
                 mainurl.setAttribute('href', MainNews[0].url)
                 mainurl.className = 'main-news';
                 mainurl.innerHTML = `
                <img src="${MainNews[0].image}" alt="">
                <div class="ontoptrenn">
                    <div class="contenttag">
                        <div class="hellow">${MainNews[0].category}</div>
                        <h4 class="titless">${MainNews[0].title}</h4>
                        <h5 class="Authourdetails">BY &nbsp;
                            <span class="and">${MainNews[0].author}</span>&nbsp;&nbsp;
                            <I class="fa fa-clock"></I>&nbsp;
                            <span>${dataonly}</span>
                        </h5>
                    </div>
                </div>
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
                    side_news.append(sidecontainer)
                });
                topnotch.append(mainurl, side_news)
                // remaining to append topnotch to MaincontentElement


                ////////////////////////////////////Dont Touch////////////////////////////////////////////
                const MainBodyFeed = AllNews.slice(5, 30)
                // console.log('MainBodyFeed', MainBodyFeed)
        
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
                    bearer.append(MaincontentElement)
                    if((sort + 1) % 5 === 0){
                        const Advertment = document.createElement('div')
                        Advertment.className = 'advertcontainer';
                        Advertment.innerHTML = '<img src="./assets/ad_970x90.png" alt="">';
                        bearer.append(Advertment)
                    }
                });
                firstparentElement.append(bearer)
                ///////////////////////////////////Plenty content Area///////////////////////////////////////////
                
                const topmane = document.createElement('div')
                topmane.className = 'topmane'
                topmane.innerHTML = `
                    <i class="fa fa-fire bvb"></i>
                    <h3>Fashion & Entertainment</h3>
                `;

                const remaiin = AllNews.slice(30, 35)
                // console.log('remaiin',remaiin)
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
                   divNoclass.append(newsmallElemnet)
                //    divNoclass.append(smallnewContain)
                })
                smallnewContain.append(divNoclass)
                ////////////////////////////////////////////////////////////////////////////////////////////////
        
        
                const continuetion = AllNews.slice(35, 40)
                    // console.log(continuetion)
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
                    fortroubleContainer.append(sohigh)
                })
                troubleContainer.append(fortroubleContainer)
                // /////////////////////////////////////////////////////////////////////////////////////////////////
                forconnetnet.innerHTML = `
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
                connetnet.append(forconnetnet);



                const leftbehind = AllNews.slice(40, 52)
                // console.log(leftbehind)
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
                        continuw.append(lamba)
                    }
                    // secondflow.append(fleash)
                    forcontinuw.append(fleash)
                })
                continuw.append(forcontinuw);

                const advertcontainer3 = document.createElement('div')
                advertcontainer3.className = 'advertcontainer3'
                advertcontainer3.innerHTML = `
                    <div>
                        <img src="./assets/Screenshot 2025-03-27 130807.jpg" alt="">
                    </div>
                `;

                secondparentElement.append(topmane, smallnewContain, troubleContainer, connetnet, continuw)
                editorspicksworks.append(firstparentElement, secondparentElement)
               return mainContainer.append(topnotch, nmmn, editorspicksworks, advertcontainer3)

            } catch(error) {
                console.log(error)
            }
    
}

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
// fetchVideoNews("sports news");
// fetchVideoNews("fashion news");
// fetchVideoNews("world news");
function DateFunction(){
 
    const DateElement = selector('header .smith_name .smith_name_contents .wantmore_content h3')
    const newDays = new Date()
    const year = newDays.getFullYear()
    const months = newDays.getMonth()
    const date = newDays.getDate()
    const days = newDays.getDay()
    const MnthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const DaysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    DateElement.innerHTML = DaysArray[days] + ',  ' + MnthsArray[months] +" " + date + ", " + year   
}
DateFunction()