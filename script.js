// Interactive Quiz Logic
const quizQuestions = [
    {
        question: "Which city is known as the 'City of Light'?",
        options: ["London", "Paris", "Tokyo", "Sydney"],
        answer: 1
    },
    {
        question: "Which city is famous for the Opera House by the harbor?",
        options: ["New York", "London", "Sydney", "Paris"],
        answer: 2
    },
    {
        question: "Mount Fuji is a landmark near which city?",
        options: ["Tokyo", "Paris", "London", "Sydney"],
        answer: 0
    },
    {
        question: "Which city is home to the Eiffel Tower?",
        options: ["Paris", "London", "New York", "Tokyo"],
        answer: 0
    }
];
let quizIndex = 0;
let quizScore = 0;
const quizContainer = document.getElementById('quizContainer');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const nextQuizBtn = document.getElementById('nextQuizBtn');

function showQuizQuestion() {
    if (quizIndex >= quizQuestions.length) {
        quizQuestion.textContent = `Quiz complete! Your score: ${quizScore} / ${quizQuestions.length}`;
        quizOptions.innerHTML = '';
        quizFeedback.textContent = '';
        nextQuizBtn.style.display = 'none';
        return;
    }
    const q = quizQuestions[quizIndex];
    quizQuestion.textContent = q.question;
    quizOptions.innerHTML = '';
    quizFeedback.textContent = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.style.margin = '0.5rem 0.7rem 0.5rem 0';
        btn.style.padding = '0.5rem 1.2rem';
        btn.style.borderRadius = '8px';
        btn.style.border = '1px solid #ddd';
        btn.style.background = '#f7f7fa';
        btn.style.cursor = 'pointer';
        btn.onclick = function() {
            if (idx === q.answer) {
                quizFeedback.textContent = 'Correct!';
                quizFeedback.style.color = 'green';
                quizScore++;
            } else {
                quizFeedback.textContent = `Wrong! The correct answer is "${q.options[q.answer]}".`;
                quizFeedback.style.color = '#fc5c7d';
            }
            Array.from(quizOptions.children).forEach(b => b.disabled = true);
            nextQuizBtn.style.display = 'inline-block';
        };
        quizOptions.appendChild(btn);
    });
    nextQuizBtn.style.display = 'none';
}
if (quizContainer && quizQuestion && quizOptions && nextQuizBtn) {
    showQuizQuestion();
    nextQuizBtn.onclick = function() {
        quizIndex++;
        showQuizQuestion();
    };
}
// Travel Explorer Carousel and Weather Script

// Carousel Data (replace with your own images if desired)
const destinations = [
    { name: 'London', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=40' },
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=40' },
    { name: 'New York', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=40' },
    { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=200&q=40' },
    { name: 'Sydney', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=200&q=40' },
    { name: 'Rome', image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=200&q=40' },
    { name: 'Berlin', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=200&q=40' },
    { name: 'Cape Town', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=200&q=40' },
    { name: 'Dubai', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=40' },
    { name: 'Singapore', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=200&q=40' },
    { name: 'Rio de Janeiro', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=40' },
    { name: 'Toronto', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=40' },
    { name: 'Cairo', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=40' },
    { name: 'Barcelona', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=200&q=40' },
    { name: 'Istanbul', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=200&q=40' },
    { name: 'Bangkok', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=40' },
    { name: 'Los Angeles', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=40' },
    { name: 'Amsterdam', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=200&q=40' },
    { name: 'Venice', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=200&q=40' },
    { name: 'Athens', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=200&q=40' },
    { name: 'Prague', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=200&q=40' },
    { name: 'Hong Kong', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', thumb: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=200&q=40' }
];

let currentSlide = 0;
let carouselInterval;

const carouselImages = document.querySelector('.carousel-images');
const carouselThumbnails = document.querySelector('.carousel-thumbnails');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function renderCarousel() {
    carouselImages.innerHTML = '';
    const img = document.createElement('img');
    img.src = destinations[currentSlide].image;
    img.alt = destinations[currentSlide].name;
    carouselImages.appendChild(img);
    renderThumbnails();
}

function renderThumbnails() {
    carouselThumbnails.innerHTML = '';
    destinations.forEach((dest, idx) => {
        const thumb = document.createElement('img');
        thumb.src = dest.thumb;
        thumb.alt = dest.name;
        thumb.className = idx === currentSlide ? 'active' : '';
        thumb.onclick = () => {
            currentSlide = idx;
            renderCarousel();
            resetCarouselInterval();
        };
        carouselThumbnails.appendChild(thumb);
    });
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + destinations.length) % destinations.length;
    renderCarousel();
    resetCarouselInterval();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % destinations.length;
    renderCarousel();
    resetCarouselInterval();
}

function startCarouselInterval() {
    carouselInterval = setInterval(nextSlide, 4000);
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    startCarouselInterval();
}

if (carouselImages && prevBtn && nextBtn) {
    renderCarousel();
    startCarouselInterval();
    prevBtn.onclick = prevSlide;
    nextBtn.onclick = nextSlide;
}

// Responsive Nav Toggle
const navToggle = document.getElementById('navToggle');
const navUl = document.querySelector('nav ul');
if (navToggle && navUl) {
    navToggle.onclick = () => {
        navUl.classList.toggle('open');
    };
}

// Weather API Integration
const weatherForm = document.getElementById('weatherForm');
const destinationSelect = document.getElementById('destinationSelect');
const weatherResult = document.getElementById('weatherResult');

const OPENWEATHER_API_KEY = '0e752233287b891570261421bdee9d34'; // <-- Replace with your OpenWeatherMap API key

weatherForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const city = destinationSelect.value;
    if (!city) return;
    weatherResult.textContent = 'Loading...';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                // Show the actual error message from the API for easier debugging
                weatherResult.textContent = `Weather not found. (${data.message || 'Unknown error'})`;
                console.log('Weather API error:', data);
                return;
            }
            const temp = data.main.temp;
            const desc = data.weather[0].description;
            const icon = data.weather[0].icon;
            weatherResult.innerHTML = `
                <div style="display:flex;align-items:center;gap:1rem;">
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" style="width:60px;height:60px;">
                    <div>
                        <strong>${city}</strong><br>
                        <span style="font-size:1.3em;">${temp}&deg;C</span><br>
                        <span style="text-transform:capitalize;">${desc}</span>
                    </div>
                </div>
            `;
        })
        .catch((err) => {
            weatherResult.textContent = 'Error fetching weather.';
            console.log('Fetch error:', err);
        });
});
