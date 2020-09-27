let header =  document.getElementById("header");

let startName = ["S","St","Sp","Spl","Sk","Sc", "Kr","V","B","D","Dr","Br","Bl","G","Gr","F","Fr","T","Tr","F","Fl","Q",];
let middleName = ["a","e","i","o","y","ö","ie","oo","ee"];
let endName = ["rk", "rt", "nk", "k", "rtle", "rple", "gle", "nkle", "sh", "sch"];


let pickName = () => {
  console.log("Inside the function");
  let start = startName[Math.floor(Math.random() * startName.length)]
  let middle = middleName[Math.floor(Math.random() * middleName.length)]
  let end = endName[Math.floor(Math.random() * endName.length)]
  header.innerHTML = start + middle + end; 
}  

pickName();



