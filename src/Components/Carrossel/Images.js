const Todas_imagens = [];

for (let i = 1; i <= 126; i++) {
  const id = i.toString();
  const num = i.toString().padStart(4, "0"); // Garante WA0001, WA0002, etc.
  const image = `/images/IMG-20250721-WA${num}.jpg`;
  Todas_imagens.push({ id, image });
}

console.log(Todas_imagens);

// const Todas_imagens = [
//   { id: "1", image: "/images/IMG-20250721-WA0002.jpg" },
// { id: "2", image: "/images/IMG-20250721-WA0003.jpg" },
// { id: "3", image: "/images/IMG-20250721-WA0004.jpg" },
// { id: "4", image: "/images/IMG-20250721-WA0005.jpg" },
//   { id: "5", image: "/images/IMG-20250721-WA0006.jpg" },
//   { id: "6", image: "/images/IMG-20250721-WA0007.jpg" },
//   { id: "7", image: "/images/IMG-20250721-WA0008.jpg" },
//   { id: "8", image: "/images/IMG-20250721-WA0009.jpg" },
//   { id: "9", image: "/images/IMG-20250721-WA0010.jpg" },
//   { id: "10", image: "/images/IMG-20250721-WA0011.jpg" },
//   { id: "11", image: "/images/IMG-20250721-WA0012.jpg" },
//   { id: "12", image: "/images/IMG-20250721-WA0013.jpg" },
//   { id: "13", image: "/images/IMG-20250721-WA0014.jpg" },
//   { id: "14", image: "/images/IMG-20250721-WA0015.jpg" },
//   { id: "15", image: "/images/IMG-20250721-WA0016.jpg" },
//   { id: "16", image: "/images/IMG-20250721-WA0017.jpg" },
//   { id: "17", image: "/images/IMG-20250721-WA0018.jpg" },
//   { id: "18", image: "/images/IMG-20250721-WA0019.jpg" },
//   { id: "19", image: "/images/IMG-20250721-WA0020.jpg" },
//   { id: "20", image: "/images/IMG-20250721-WA0021.jpg" },
//   { id: "21", image: "/images/IMG-20250721-WA0022.jpg" },
//   { id: "22", image: "/images/IMG-20250721-WA0023.jpg" },
//   { id: "23", image: "/images/IMG-20250721-WA0024.jpg" },
//   { id: "24", image: "/images/IMG-20250721-WA0025.jpg" },
//   { id: "25", image: "/images/IMG-20250721-WA0026.jpg" },
//   { id: "26", image: "/images/IMG-20250721-WA0027.jpg" },
//   { id: "27", image: "/images/IMG-20250721-WA0028.jpg" },
//   { id: "28", image: "/images/IMG-20250721-WA0029.jpg" },
//   { id: "29", image: "/images/IMG-20250721-WA0030.jpg" },
//   { id: "30", image: "/images/IMG-20250721-WA0031.jpg" },
//   { id: "31", image: "/images/IMG-20250721-WA0032.jpg" },
//   { id: "32", image: "/images/IMG-20250721-WA0033.jpg" },
//   { id: "33", image: "/images/IMG-20250721-WA0034.jpg" },
//   { id: "34", image: "/images/IMG-20250721-WA0035.jpg" },
//   { id: "35", image: "/images/IMG-20250721-WA0036.jpg" },
//   { id: "36", image: "/images/IMG-20250721-WA0037.jpg" },
//   { id: "37", image: "/images/IMG-20250721-WA0038.jpg" },
//   { id: "38", image: "/images/IMG-20250721-WA0039.jpg" },
//   { id: "39", image: "/images/IMG-20250721-WA0040.jpg" }
// ];

export default Todas_imagens;
