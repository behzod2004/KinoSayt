const movies = [
    {
        id:1,
        image:'https://uzhd.org/uploads/posts/2024-03/1711914543_1685895224_usmon.webp',
        title:'Hukmdor Usmon',
        year:2022,
        subtitle:'Uzbek tilida',
        category:3,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/_O4cT1M3-q8" title="hukmdor Usmon,  oʻzbek tilida, , soʻngi boʻlum janglari #rulerosman #kuruluşosman #tarixiy #newmovie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:2,
        image:'https://images.uzmovi.com/2024-04-08/31cb3a4232586dab3242cc29d332420f.jpg',
        title:'Qonli qsos',
        year:2024,
        subtitle:'Uzbek tilida premyera' ,
        category:2,
        video:'<iframe width="1060" height="593" src="https://www.youtube.com/embed/kN743pdC53E" title="QONLI QASOS UZBEK TILIDA KINO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:3,
        image:'https://images.uzmovi.com/ii/1612172692/a9fcb4c5/33172931.jpg',
        title:'Yashash yaxshi',
        year:2024,
        subtitle:'Hind kino' ,
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/i-yLzkoNcpc" title="Yashasin jay HD Hind kino (Uzbek tilida) #hindkinosi #shox2200" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:4,
        image:'https://images.uzmovi.com/2024-04-06/b6198024a50d27900c58a199902a1f7f.jpg',
        title:'Kulrang parazit ',
        year:2024,
        subtitle:'Uzb tilida' ,
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/CQBCVUAT2LE" title="Parasyte: The Grey | Official Teaser | Netflix [ENG SUB]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:5,
        image:'https://images.uzmovi.com/2024-02-28/8bc660803efbf27267aed74cb3fd822e.jpg',
        title:'Avatar ang afsonasi ',
        year:2024,
        subtitle:'Uzb tilida' ,
        category:3,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/64FladZZLdA" title="Avatar: Aang afsonasi | Rasmiy Tizer O‘zbek tilida🇺🇿" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:6,
        image:'https://images.uzmovi.com/2024-03-14/c1bc1db55f23d0501f07c88f30bd7866.jpg',
        title:'Ishq ertagi esma turk seriali',
        year:2024,
        subtitle:'Barcha qismlar' ,
        category:3,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/1TM1yPm5i0M" title="Ишк эртаги турк сериалидагилар 18 йилда канчалик узгарди" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:7,
        image:'https://images.uzmovi.com/2024-02-28/f5e18eda08f23c2075d96c457f873a64.jpg',
        title:'Epidemya xronikasi tarixi',
        year:2024,
        subtitle:' Uzb tilida barcha qismlar' ,
        category:3,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/teNAJBIBnA8" title="Insoniyatning qonli tarixi. Bizda qancha qon bor? Gemoglobin, Anabioz va Rezus omil | XURMO [ТОПЛЕС]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:8,
        image:'https://images.uzmovi.com/2024-03-14/3e3f0d364754a30e294e8920e6cb45b2.jpg',
        title:'Shamollar musavviri ',
        year:2023,
        subtitle:'Koreys seriali' ,
        category:3,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/TTaSp3s1P60" title="SHAMOLLAR MAMLAKATI SERIALI AKTYOR VA AKTRISALARI HOZIR QANDAY KO&#39;RINISHDA?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:9,
        image:'https://images.uzmovi.com/2024-03-20/70959675d817fffc693877d7c3853e9f.jpg',
        title:'Yirtqich Gaddar',
        year:2023,
        subtitle:' Uzb tilida barcha qismlar' ,
        category:3,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/tob8_GqQOpQ" title="Yirtqich Gaddar uzbek o&#39;zbek tilida turk serial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:10,
        image:'https://images.uzmovi.com/2024-02-18/c853012797e004637b3c776be778725d.jpg',
        title:'Noyob buyumlar honasi',
        year:2024,
        subtitle:'Ujas serial Uzb tilida barcha qismlar' ,
        category:3,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/L4-8YGYuxks" title="Kino 18 yoshdan o&#39;tganlarga tavsiya etiladi.Kino nomi daxshatli xona" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:11,
        image:'https://images.uzmovi.com/2024-01-19/793af778b2bb7d382d280b479e18533c.jpg',
        title:'Zulmat , Ko\'rlar so\'qirlar ',
        year:2024,
        subtitle:'Uzb tilida barcha qismlar' ,
        category:3,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/to3Dm1QCclw" title="Zulmat (узбек кино) | Зулмат (узбек кино)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:12,
        image:'https://images.uzmovi.com/2024-03-31/db8112ac1e63d145e07c490f69b5dcde.jpg',
        title:'Jeki-chan sarguzashtlari',
        year:2022,
        subtitle:'Multiserial barcha qismlar' ,
        category:4,
        video:'<iframe width="791" height="593" src="https://www.youtube.com/embed/Z5-k2TBRbTY" title="Приключения Джеки Чана - 4 сезон 13 серия" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:13,
        image:'https://images.uzmovi.com/2024-03-12/a2d85229105094f259483417efd430b4.jpg',
        title:'Lilo va stitch',
        year:2023,
        subtitle:'Multiserial barcha qismlar' ,
        category:4,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/HiH8NHyYyBA" title="Лило и Стич - Ветрянка - Серия 1, Сезон 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:14,
        image:'https://images.uzmovi.com/2024-03-08/a15a1b0de5878e301ba438e649d6b324.jpg',
        title:'Buzg\'unchi ralf',
        year:2021,
        subtitle:' Premyera multfilm' ,
        category:4,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/kcD2u0PTeQc" title="Ральф Против Интернета Дисней Полностью Прохождение Wreck-It Ralph Часть 1 на PS 4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:15,
        image:'https://images.uzmovi.com/2024-02-26/1519a91445365d3bf1eba8a4b82e8449.jpg',
        title:'Tilak orzu',
        year:2023,
        subtitle:' Multfilm premyera ' ,
        category:4,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/WAGAlH18AlQ" title="💥Tilak (Wish) - 2023 multfilm treyleri o&#39;zbek tilida | AfsonaStudio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:16,
        image:'https://images.uzmovi.com/2024-02-20/c8100f2f7ea707ccf93f1ba3b7cbc2b5.jpg',
        title:'Uyimizda o\'zga sayyoraliklar',
        year:2024,
        subtitle:' Multfilm ' ,
        category:4,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/gUs-7mWk3nk" title="Yovvoyi sayyora multfilim" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:17,
        image:'https://images.uzmovi.com/2024-02-17/72e68c0d316ae487d83cbc12e6469b0c.jpg',
        title:'Qo\'ylar bo\'rilarga qarshi',
        year:2024,
        subtitle:'Premyera Multfilm ' ,
        category:4,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/-wFSwTWxk_E" title="BO&#39;RILAR VA QO&#39;YLAR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:18,
        image:'https://images.uzmovi.com/2024-02-17/1f6df1075dc46a21d2ebcc0b0c531733.jpg',
        title:'Janubga parvoz , Migratsiya , Ko\'chish',
        year:2024,
        subtitle:'Premyera',
        category:4,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/mmQjVPIavaU" title="&quot;Zambeziya&quot; tarjima multfilm ozbek tilida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:19,
        image:'https://images.uzmovi.com/2024-02-01/e31b1d5b131914afaace919655de96ba.jpg',
        title:'Quvnoq oyoqchalar',
        year:2024,
        subtitle:'Premyera',
        category:4,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/62JP9uqyoTU" title="HAPPY FEET | All The Best Clips and Trailer Compilation - Animated Family Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:20,
        image:'https://images.uzmovi.com/2024-04-08/a87bf00ae8af3c6ca8f942d413c5e78b.jpg',
        title:'Qaynoq qalblar',
        year:2023,
        subtitle:'Premyera',
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/YxIYkXrvbvY" title="Dusti uchun jonini beradiganlar. Judayam tasrli vidio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:21,
        image:'https://images.uzmovi.com/2024-03-31/75c68a5e42b309f13df9ed6e6306df20.jpg',
        title:'Qiruvchi premyera',
        year:2024,
        subtitle:'Hind kino',
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/v1aMpyPRZBs" title="Qiruvchi | Jangchi hind kinosi uzbek tilida 2024 o&#39;zbekcha tarjima kino HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:22,
        image:'https://images.uzmovi.com/2024-03-30/e14bd9b891684e3ec669ede52b1f0534.jpg',
        title:'Godzilla Kongga qarshi yangi imperya',
        year:2024,
        subtitle:'Uzbek tilida',
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/lFGlvSFnXwk" title="Godzilla Endi Eng Kuchlisi Emas | Yangi Qirol | Godzilla va Kong: Yangi Imperiya - Treyler Tahlil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:23,
        image:'https://images.uzmovi.com/2024-03-29/0b50f62a7446c7d2955f1b26cada50d5.jpg',
        title:'Snister 1',
        year:2022,
        subtitle:'Uzbek tilida ujas film',
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/YVWtgiJB7KU" title="O&#39;LIM SHARPASI - SINISTER I uzbek tilida tarjima kinolar , узбек тилида таржима кинолар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:24,
        image:'https://images.uzmovi.com/2024-03-29/1936c6f16de29593b6ea620ca2909e1f.jpg',
        title:'Snister 2',
        year:2022,
        subtitle:'Uzbek tilida ujas film',
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/zRSyC7LlANY" title="sinister 2 hd KINO UZBEK TILIDA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:25,
        image:'https://images.uzmovi.com/2024-03-29/0b292a47b5f0515ea84733a7d52a013a.jpg',
        title:'Teskari Hisob',
        year:2024,
        subtitle:'Uzbek tilida qo\'rqinchli film',
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/KnjSh0_hnCg" title="TESKARI HISOB // HD 720 // TARJIMA KINOLAR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:26,
        image:'https://images.uzmovi.com/2024-03-29/05174efabc02e97e7650a39584da20f8.jpg',
        title:'Odamxo\'rlar oilasi',
        year:2020,
        subtitle:'Uzbek tilida qo\'rqinchli ujas film',
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/XGtK4AOVXxg" title="Odamxo&#39;rlar oilasi premyera kino uzbek tilida telegram kanalda kanal silksi videoda va kemantariyada" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:27,
        image:'https://images.uzmovi.com/2024-03-29/fc4c8a6191a8c430a226eb4ea192efd4.jpg',
        title:'Kul',
        year:2020,
        subtitle:'Turk filmi',
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/iJ2lOjhNs5Y" title="Chekinmanglar uzbek tilida ,,HOBBIT&quot; kinosidan olingan @kinoolami7933| kino parcha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id:28,
        image:'https://images.uzmovi.com/2024-03-29/17240088d0837189151d168de3cd9503.jpg',
        title:'Tron taxt meros',
        year:2022,
        subtitle:'Premyera',
        category:2,
        video:'<iframe width="1054" height="593" src="https://www.youtube.com/embed/tcQTpnoa_Zw" title="Трон Эволюция ИГРОФИЛЬМ сюжет фантастика" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
  ]
  
   const categories = [
    {
        id:1,
        title:'Hammasi',
    },
    {
        id:2,
        title:'Kino',
    },
    {
        id:3,
        title:'Serial',
    },
    {
        id:4,
        title:'Multfilm',
    }
  ]
  
   const user = ['1','1'];
  
  
  const loginBanner = document.querySelector('.login-banner');
  let loginButton = document.querySelector('.login-button');
  let closeButton = document.querySelector('.close-login');
  let inputLogin = document.querySelector('.login-input');
  let inputPassword = document.querySelector('#password');
  const adminn = document.querySelector('.admin');
  
  function createElement (tagName, clasName, text, parent){
      let element = document.createElement(tagName);
      element.setAttribute('class', clasName);
      element.innerHTML = text
      parent.appendChild(element) 
      return element
   }
  
   function createImage(src, alt, parent){
      let image = document.createElement('img');
      image.setAttribute('src', src);
      image.setAttribute('alt', alt);
      parent.appendChild(image)
  }
  //  id
  function createId(movies){
      return movies[movies.length-1].id + 1;
  }
  
  console.log(`bazadagi kino ${createId(movies)}`);
  function createPanel (title,subtitle,year,image,youtube,category){
      let pp = {
          id:createId(movies),
          title:title,
          subtitle:subtitle,
          year:year,
          image:image,
          category:category,
          video:youtube,
      }
      movies.push(pp);
      console.log(malumot);
      console.log(pp);
  }
  // kinolar royhati
  
  let arrovIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:#fff;"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>'
  let a = inputLogin.value;
  let b = inputPassword.value;
  loginButton.addEventListener('click',function(){
      console.log(user[0]);
      console.log(user[1]);
      console.log(inputLogin.value);
      console.log(inputPassword.value);
      if(inputLogin.value.trim() !== '' && inputPassword.value.trim() !== '' ){
          let body = document.querySelector('.wrapper-admin');
          let adminMenu = createElement('div','admin-menu','',body);
          let top = createElement('div','admin-menu-top',arrovIcon,adminMenu)
          let bottom = createElement('div','admin-menu-top',arrovIcon,adminMenu)
          let MenuQoshish = createElement('button','admin-add','kino qo\'shish',top);
          MenuQoshish.setAttribute('type','button');
          let MenuOchirish = createElement('button','admin-delete','kinolar',bottom);
          MenuOchirish.setAttribute('type','button');
  
  
          let adminMenuButton = document.querySelector('.admin-menu-button');
          adminMenuButton.addEventListener('click',function(){
          if(adminMenu.classList.contains('active')){
          adminMenu.classList.remove('active');
          }else{
          adminMenu.classList.add('active');
          }
  })
  
        // ochirish menu  button
          MenuOchirish.addEventListener('click',function(){
            adminn.innerHTML = '';
            for(let movie of movies){
              let cart = createElement('div', 'movies-cart', '', adminn);
              let movieImage = createElement('div', 'movies-cart-image', '', cart)
              createImage(movie.image, 'product image', movieImage);
              let cartContent = createElement('div', 'movies-cart__content', '', cart);
              let cartRow = createElement('div', 'movies-cart__row', '', cartContent);
              let cartLink = createElement('a', 'movies-cart__title', movie.title, cartRow);
              cartLink.setAttribute('href', '#');
              createElement('p', 'movies-cart__year',  movie.year, cartRow);
              createElement('p', 'movies-cart__subtitle', movie.subtitle, cartContent);
              let deleteButton = createElement('button', 'movies-cart__button', 'o\'chirish', cartContent);
              // play video
              deleteButton.addEventListener('click', function(){
                  let indexMovie = movies.indexOf(movie)-1;
                   movies.splice(indexMovie,1);
                   console.log(indexMovie)
              })
            }
          })
          // qoshish button
  
          MenuQoshish.addEventListener('click',function(){
            adminn.innerHTML =''
            inputLogin.value = '';
            inputPassword.value='';
            loginButton.setAttribute('type','button');
            loginBanner.classList.add('active');
    
            let form = createElement('form','form-admin','',adminn)
            let inputLabel = createElement('label','label-admin','Kino nomi:',form);
            inputLabel.setAttribute('for','title');
            let inputTitle = createElement('input','input-admin','',form);
            inputTitle.setAttribute('type','text');
            inputTitle.setAttribute('id','title');
  
            inputLabel = createElement('label','label-admin','Yili:',form);
            inputLabel.setAttribute('for','year');
            let inputYear = createElement('input','input-admin','',form);
            inputYear.setAttribute('type','number');
            inputYear.setAttribute('id','year');
  
            inputLabel = createElement('label','label-admin','Tili:',form);
            inputLabel.setAttribute('for','malumot');
            let inputSubtitle = createElement('input','input-admin','',form);
            inputSubtitle.setAttribute('type','text');
            inputSubtitle.setAttribute('id','malumot');
  
            inputLabel = createElement('label','label-admin','Rasm:',form);
            inputLabel.setAttribute('for','malumot');
            let inputImage = createElement('input','input-admin','',form);
            inputImage.setAttribute('type','url');
            inputImage.setAttribute('id','image');
  
            inputLabel = createElement('label','label-admin','Youtube kod:',form);
            inputLabel.setAttribute('for','malumot');
            let inputYoutube = createElement('input','input-admin','',form);
            inputYoutube.setAttribute('type','text');
            inputYoutube.setAttribute('id','youtube');
            
            inputLabel = createElement('label','label-admin','Turi:',form);
            inputLabel.setAttribute('for','tur');
            let inputCategory = createElement('input','input-admin','',form);
            inputCategory.setAttribute('type','text');
            inputCategory.setAttribute('id','tur');
  
            var saveButton = createElement('button','admin-button','qo\'shish',form);
                saveButton.setAttribute('type','button');
                saveButton.addEventListener('click',function(){
                createPanel(inputTitle.value,inputSubtitle.value,inputYear.value,inputImage.value,inputYoutube.value);
                inputCategory.value = '';
                inputImage.value = '';
                inputLabel.value = '';
                inputLogin.value = '';
                inputPassword.value ='';
                inputSubtitle.value ='';
                inputTitle.value ='';
                inputYear.value ='';
                inputYoutube.value='';
            })
  
          })
  
  
          if(inputLogin.value.trim() === user[0] && inputPassword.value.trim() === user[1]) {
                  inputLogin.value = '';
                  inputPassword.value='';
                  loginButton.setAttribute('type','button');
                  loginBanner.classList.add('active');
                  let form = createElement('form','form-admin','',adminn)
                  let inputLabel = createElement('label','label-admin','Kino nomi:',form);
                  inputLabel.setAttribute('for','title');
                  let inputTitle = createElement('input','input-admin','',form);
                  inputTitle.setAttribute('type','text');
                  inputTitle.setAttribute('id','title');
  
                  inputLabel = createElement('label','label-admin','Yili:',form);
                  inputLabel.setAttribute('for','year');
                  let inputYear = createElement('input','input-admin','',form);
                  inputYear.setAttribute('type','number');
                  inputYear.setAttribute('id','year');
  
                  inputLabel = createElement('label','label-admin','Tili:',form);
                  inputLabel.setAttribute('for','malumot');
                  let inputSubtitle = createElement('input','input-admin','',form);
                  inputSubtitle.setAttribute('type','text');
                  inputSubtitle.setAttribute('id','malumot');
  
                  inputLabel = createElement('label','label-admin','Rasm:',form);
                  inputLabel.setAttribute('for','malumot');
                  let inputImage = createElement('input','input-admin','',form);
                  inputImage.setAttribute('type','url');
                  inputImage.setAttribute('id','image');
  
                  inputLabel = createElement('label','label-admin','Youtube kod:',form);
                  inputLabel.setAttribute('for','malumot');
                  let inputYoutube = createElement('input','input-admin','',form);
                  inputYoutube.setAttribute('type','text');
                  inputYoutube.setAttribute('id','youtube');
                  
                  inputLabel = createElement('label','label-admin','Turi:',form);
                  inputLabel.setAttribute('for','tur');
                  let inputCategory = createElement('input','input-admin','',form);
                  inputCategory.setAttribute('type','text');
                  inputCategory.setAttribute('id','tur');
  
                  var saveButton = createElement('button','admin-button','qo\'shish',form);
                      saveButton.setAttribute('type','button');
                      saveButton.addEventListener('click',function(){
                        inputTitle.innerHTML='';
                        inputSubtitle.innerHTML='';
                        inputYear.innerHTML='';
                        inputCategory.innerHTML='';
                        inputYoutube.innerHTML='';
                        inputImage.innerHTML='';
                      createPanel(inputTitle.value,inputSubtitle.value,inputYear.value,inputImage.value,inputYoutube.value,inputCategory.value);
                  })
  
          }else{
              alert('parol xato 🤦‍♂️')
          }
      }
  })
  
  closeButton.addEventListener('click',function(){
      window.close();
  })
  
  // 
  
  