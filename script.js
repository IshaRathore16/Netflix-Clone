// User Authentication
function toggleForm(form) {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById(form + '-form').classList.remove('hidden');
  }
  
  function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
  
    if (!username || !password || !confirm) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (password !== confirm) {
      alert('Passwords do not match!');
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const exists = users.find(user => user.username === username);
    if (exists) {
      alert('Username already exists!');
      return;
    }
  
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created successfully! Please log in.');
    toggleForm('login');
  }
  
  function logIn() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      document.getElementById('auth-container').classList.add('hidden');
      document.getElementById('main-content').classList.remove('hidden');
      displayContent(movies, 'movies');
      displayContent(series, 'series');
      displayContent(tvshows, 'tvshows');
    } else {
      alert('Invalid login credentials!');
    }
  }
  
  // Data
  const movies = [
    { title: "The Batman", image: "https://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg", video: "https://www.youtube.com/embed/mqqft2x_Aa4" },
    { title: "Inception", image: "https://image.tmdb.org/t/p/w300/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg", video: "https://www.youtube.com/embed/YoHD9XEInc0" },
    { title: "Interstellar", image: "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", video: "https://www.youtube.com/embed/zSWdZVtXT7E" },
    { title: "Joker", image: "https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", video: "https://www.youtube.com/embed/zAGVQLHvwOY" },
    { title: "Tenet", image: "https://image.tmdb.org/t/p/w300/k68nPLbIST6NP96JmTxmZijEvCA.jpg", video: "https://www.youtube.com/embed/L3pk_TBkihU" },
    { title: "Dune", image: "https://image.tmdb.org/t/p/w300/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", video: "https://www.youtube.com/embed/n9xhJrPXop4" },
  ];
  
  const series = [
    { title: "Stranger Things", image: "https://image.tmdb.org/t/p/w300/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", video: "https://www.youtube.com/embed/b9EkMc79ZSU" },
    { title: "The Witcher", image: "https://image.tmdb.org/t/p/w300/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg", video: "https://www.youtube.com/embed/tjujvMkqWe4" },
    { title: "Breaking Bad", image: "https://image.tmdb.org/t/p/w300/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", video: "https://www.youtube.com/embed/HhesaQXLuRY" },
    { title: "Dark", image: "https://image.tmdb.org/t/p/w300/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", video: "https://www.youtube.com/embed/ESEUoa-mz2c" },
    { title: "Money Heist", image: "https://image.tmdb.org/t/p/w300/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", video: "https://www.youtube.com/embed/p_PJbmrX4uk" },
    { title: "Squid Game", image: "https://image.tmdb.org/t/p/w300/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", video: "https://www.youtube.com/embed/oqxAJKy0ii4" },
  ];
  
  const tvshows = [
    { title: "The Mandalorian", image: "https://image.tmdb.org/t/p/w300/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg", video: "https://www.youtube.com/embed/aOC8E8z_ifw" },
    { title: "Lucifer", image: "https://image.tmdb.org/t/p/w300/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",video: "https://www.youtube.com/embed/X4bF_quwNtw"  }, 
   { title: "Game of Thrones", image: "https://image.tmdb.org/t/p/w300/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg", video: "https://www.youtube.com/embed/BpJYNVhGf1s" },
    { title: "Vikings", image: "https://image.tmdb.org/t/p/w300/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg", video: "https://www.youtube.com/embed/9GgxinPwAGc" },
    { title: "Peaky Blinders", image: "https://image.tmdb.org/t/p/w300/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", video: "https://www.youtube.com/embed/oVzVdvGIC7U" },
    { title: "Sherlock", image: "https://image.tmdb.org/t/p/w300/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg", video: "https://www.youtube.com/embed/IrBKwzL3K7s" },
  ];
  
  function displayContent(contentArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
  
    contentArray.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('movie');
  
      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <h3>${item.title}</h3>
        <iframe width="250" height="140" src="${item.video}" frameborder="0" allowfullscreen></iframe>
      `;
  
      container.appendChild(div);
    });
  }
  
  // Search functionality
  document.getElementById('search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
  
    const filteredMovies = movies.filter(item => item.title.toLowerCase().includes(searchTerm));
    const filteredSeries = series.filter(item => item.title.toLowerCase().includes(searchTerm));
    const filteredTvshows = tvshows.filter(item => item.title.toLowerCase().includes(searchTerm));
  
    displayContent(filteredMovies, 'movies');
    displayContent(filteredSeries, 'series');
    displayContent(filteredTvshows, 'tvshows');
  });
  
  