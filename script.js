let header =  document.getElementById("header");

let startName = ["S","St","Sp","Spl","Sk","Sc", "Kr","V","B","D","Dr","Br","Bl","G","Gr","F","Fr","T","Tr","F","Fl","Q",];
let middleName = ["a","i","o","y","ö","ie","oo","ee", "öö", "oa"];
let endName = ["rk", "rt", "nk", "rkle", "k", "rtle", "rple", "gle", "nkle", "sh", "sch", "oo", "i"];

let fonts = ["'MuseoModerno', cursive", "'Syne', sans-serif", "'Kulim Park', sans-serif", "'Lexend Giga', sans-serif", "'Red Hat Display', sans-serif", "'Bungee', cursive", "'Arvo', serif", "'Bungee', cursive", ];
let colors = ["#FF6852", "#0047FF", "#00E56F", "#118DF0", "#2A176F", "#F85F73", "#FF304F", "#FFB401"];


let pickName = () => {
  console.log("Inside the function");
  let start = startName[Math.floor(Math.random() * startName.length)]
  let middle = middleName[Math.floor(Math.random() * middleName.length)]
  let end = endName[Math.floor(Math.random() * endName.length)]
  header.innerHTML = start + middle + end; 
}  


let changeFont = () => {
  let primaryFontEntities = document.getElementsByClassName("font");
  let font = randomFont();
  console.log(primaryFontEntities[0])
  primaryFontEntities[0].style.fontFamily = font;
  primaryFontEntities[1].style.fontFamily = font;
}

let changeColor = () => {
  const color = randomColor();
  document.body.style.background = color;
  document.getElementById("mainCTA").style.color = color;
}

let randomFont = () => {
  let font = fonts[Math.floor(Math.random() * fonts.length)]
  return font;
}

let randomColor = () => {
  let color = colors[Math.floor(Math.random() * colors.length)]
  return color;
}

const generateStyle = () => {
  pickName();
  changeFont();
  changeColor();
}

generateStyle();

// entity.style.fontFamily = "'Bungee', cursive";