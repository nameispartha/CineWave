

---

## 🎬 Project Name: **CineWave**

> *"Where movies flow like a wave of entertainment!"*

---

## 🧠 What This Project Is About

> I have built this Movie Web Application 💻 completely **with my own hands** using ReactJS. I did not copy-paste code — instead, I wrote each line with **pure understanding**. I only took help from **ChatGPT** for writing CSS styles and UI improvements.

This project helped me learn and practice key concepts in **ReactJS**, such as:

---

## 🔧 Concepts I Used — What, Why & How:

### 1. **React Components**

> ✅ *Why:* To break the UI into reusable blocks.
> ✅ *Used For:* `MovieList`, `MovieDetails`, `Header`, `Fav`, and `App` are all separate components.

---

### 2. **React Hooks**

#### a. `useState()`

> ✅ *Why:* To store and update dynamic data (like movie list, search input, favorites).
> ✅ *How:*

```js
const [movie, setMovie] = useState([]);
```

#### b. `useEffect()`

> ✅ *Why:* To run code when the component loads (API call).
> ✅ *How:*

```js
useEffect(() => {
  // Fetch movie data
}, []);
```

---

### 3. **Axios**

> ✅ *Why:* To make HTTP requests to fetch movie data from the **OMDB API**.
> ✅ *How:*

```js
axios.get(`https://www.omdbapi.com/?s=india&apikey=yourKey`);
```

---

### 4. **React Router DOM**

> ✅ *Why:* To create different pages like `/`, `/details/:id`, and `/fav`.
> ✅ *How:*

```js
<Route path="/" element={<Movielist />} />
<Route path="/details/:id" element={<MovieDetails />} />
<Route path="/fav" element={<Fav />} />
```

---

### 5. **Props**

> ✅ *Why:* To pass data like search and sorting values from parent (`App.jsx`) to child (`Header`, `Movielist`).
> ✅ *How:*

```js
<Header search={search} setSearch={setSearch} />
```

---

### 6. **Filtering & Sorting**

> ✅ *Why:* To allow users to **search** and **sort** movies by year.
> ✅ *How:*

```js
.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase()))
.sort((a, b) => sort === 'ascending' ? a.Year - b.Year : b.Year - a.Year);
```

---

### 7. **Context API**

> ✅ *Why:* To manage and access favorite movies (`fav`) globally across pages.
> ✅ *How:*

```js
export const CreateFavourite = createContext();
```

---

### 8. **CSS (with ChatGPT Help 🧠)**

> ✅ *Why:* To make the UI look clean and attractive like Netflix or Amazon Prime.
> ✅ *Note:* I focused mainly on **React logic**. For styles, I took **help from ChatGPT** and customized them for better visuals.

---

## 📁 Folder Structure (Simple & Clean)

```
Movie-App-Duplicate/
├── public/
├── src/
│   ├── Components/
│   │   └── Header.jsx
│   ├── Context/
│   │   └── Context.jsx
│   ├── Pages/
│   │   ├── Movielist.jsx
│   │   ├── MovieDetails.jsx
│   │   └── Fav.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## 📝 Project Description 

> 🎥 **CineWave** – A simple and beautiful Movie App where users can browse films, view details, and add their favorites!

✨ I have built this complete project **with my own hands** using **ReactJS**. I did not copy from YouTube or any blog — instead, I understood each concept and wrote code line-by-line. For designing (CSS), I took **guidance from ChatGPT** to improve visuals — but the full **logic, structure, and functionality** was written by me.

---

## ✅ What This Project Teaches

* How to **call real APIs** using Axios
* How to manage data with **state and context**
* How to do **search and sort**
* How to build **multi-page apps** with React Router

---


