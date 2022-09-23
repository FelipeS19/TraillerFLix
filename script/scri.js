

var Series = document.getElementById("Series");
var Filmes = document.getElementById("Filmes");
var linksAdicionados = [];
var imgAdicionadas = [];

//==============================================series=============================================
var nomeseries = [
	"Game Of Thrones",
	"House of the Dragon",
	"Brooklyn 99",
	"Riverdale",
	"The Handmaid's Tale",
	"See",
	"Only Murders On The Bulding",

];

var trailerseries = [
	"https://youtu.be/KPLWWIOCOOQ", //"Game Of Thrones",
	"https://youtu.be/DotnJ7tTA34",//"House of the Dragon",
	"https://youtu.be/sEOuJ4z5aTc",//"Brooklyn 99",
	"https://youtu.be/HxtLlByaYTc",//"Riverdale",
	"https://youtu.be/LDUoUr7HT5E",//"The Handmaid's Tale",
	"https://youtu.be/eia3VGiVF-U",//"See",
	"https://youtu.be/bL15iO-YC3A",//"Only Murders On The Bulding",
];

var imgSeries = [
    "https://br.web.img3.acsta.net/pictures/19/03/21/16/15/4239577.jpg",
    "https://static.wikia.nocookie.net/gameofthrones/images/d/d0/House_of_the_Dragon.jpg/revision/latest?cb=20200531154058&path-prefix=pt-br",
    "https://upload.wikimedia.org/wikipedia/pt/7/71/Brooklyn_Nine-Nine_temporada_8_poster.jpg",
    "https://br.web.img2.acsta.net/pictures/18/09/06/10/23/3151996.jpg",
    "https://www.justwatch.com/images/poster/297850019/s332/saison-5",
    "https://br.web.img3.acsta.net/pictures/19/10/30/16/48/1062138.jpg",
    "https://f.i.uol.com.br/fotografia/2021/08/17/1629226986611c07ea7d8b2_1629226986_3x4_xl.jpg"
];

for (var i = 0; i < trailerseries.length; i++) {
	Series.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${trailerseries[i]}" target="_blank"><img src="${imgSeries[i]}" ></a><label>${nomeseries[i]}</label></li>`;
}

//==============================================Filmes=============================================

var nomeFilmes = [
	"Homem-Aranha: Sem Volta para Casa",
	"Vingadores: Ultimato",
	"Vingadores: Guerra Infinita",
	"Homem-Aranha: Longe de Casa",
	"Godzilla vs. Kong",
	"Interestelar",

];

var trailerFilmes = [
	"https://youtu.be/ae6w0-kZ3-M", //Homem-Aranha: Sem Volta para Casa
	"https://youtu.be/PgrmbRID0eY", //Vingadores Ultimato
	"https://youtu.be/4jGRyEa2jhE", //Vingadores Guerra Infinita
	"https://youtu.be/MqQdHaBtvGs", //Homem-Aranha Longe de casa
	"https://youtu.be/kIET9yMABD8", //Godzilla vs Kong
	"https://youtu.be/i6avfCqKcQo", //Interestelar

];

var imgFilmes = [
	"https://sm.ign.com/ign_pt/screenshot/default/spider-man-no-way-home-tom-holland-poster-691x1024_u682.jpg",
	"https://th.bing.com/th/id/OIP.iAf-VzZLAZXHOb2HFuP8dgHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.YUgoHbONN0ZC-Mc3ELSa4AHaKl?w=186&h=265&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.kQHM65LZs42_AqYXIyZf-AHaK4?w=186&h=273&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.yTOqdszq4xijhQJoIdSoGQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.38&pid=1.7",
	"https://th.bing.com/th/id/OIP.CvtIgj5JfuahxvYLshH5FgHaK5?w=186&h=274&c=7&r=0&o=5&dpr=1.38&pid=1.7"
];


for (i = 0; i < trailerFilmes.length; i++) {
	Filmes.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${trailerFilmes[i]}" target="_blank"><img src="${imgFilmes[i]}"></a><label>${nomeFilmes[i]}</label></li>`;
}

//==============================================Função=============================================




function adicionarFilme() {
	var nome = document.getElementById("Nome");
	var url = document.getElementById("url");
	var imagem = document.getElementById("Imagem");
	var categoria = document.getElementById("Categoria").value;

	if ([nome.value, url.value, imagem.value].every((elementValue) => elementValue !== "")) {

		if (
			linksAdicionados.indexOf(url.value) == -1 &&
			imgAdicionadas.indexOf(imagem.value) == -1
			
		) {
			var elemento = `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${url.value}" target="_blank"><img src="${imagem.value}"></a><label>${nome.value}</label></li>`;

			switch (categoria) {
				case "Series":
					Series.innerHTML += elemento;
					break;
				case "Filmes":
					Filmes.innerHTML += elemento;
			}
			linksAdicionados.push(url.value);
			imgAdicionadas.push(imagem.value);
		} else {
			alert("Imagem ja utilizada amg");
		}
	} else {
		alert("Poxa faltou algum campo!");
		}

	nome.value = "";
	url.value = "";
	imagem.value = "";
}

function mostrarTexto() {
	var target = event.currentTarget;
	target.lastChild.style.opacity = "1";

}

function ocultarTexto() {
	var target = event.currentTarget;
	target.lastChild.style.opacity = "0";
}