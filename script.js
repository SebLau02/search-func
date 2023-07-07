//********** récupération des éléments du dom **********
//********** I retrieve my elements from the DOM **********

const searchBar = document.querySelector(".search-bar");
const result = document.querySelector(".result");

const searchBarTow = document.querySelector(".search-bar-tow");
const resultTow = document.querySelector(".result-tow");

//********** mon tableau dans lequel il y a la chose que je recherhce, par exemple données issu d'un api **********
//********** An array that contains objects that I want, for example, data from an API **********

//********** un tableau classique **********
//********** classical array **********

const array = ["pomme", "poire", "banane", "cerise", "ananas", "pêche"];

//********** un tableau d'objet / données d'api **********
//********** an array object / data from api **********

const objectArray = [
	{
		nom: "pomme",
		couleur: "rouge",
		saison: "automne",
	},
	{
		nom: "banane",
		couleur: "jaune",
		saison: "été",
	},
	{
		nom: "orange",
		couleur: "orange",
		saison: "hiver",
	},
];

//********** fonction permettant de rechercher dans un tableau**********
//********** search function in an array **********

const searchFuncOne = (e) => {
	//********** on va utiliser les méthodes filter() et includes() des tableaux**********
	//********** on filtre le tableau et on ne garde que les éléments qui correspondent à la valeur saisi dans notre input (e.target.value) **********
	//********** la méthode filter retourne un nouveau tableau donc le stock dans une variable onSearchResult **********

	//********** i will use filter() and includes() **********
	//********** I filter the array and I keep the elements which match with the value of the input **********
	//********** The filter method returns a new array, so I store it in onSearchResult **********

	let onSearchResult = null;

	onSearchResult = array.filter((fruit) => fruit.includes(e.target.value));

	//********** on affiche (innerHTML) dans les résultats filtré dans notre paragraphe (result) dans le dom **********
	//********** I display (innerHTML) the filtered results in my paragraph (result) in the DOM  **********

	result.innerHTML = onSearchResult;
};

//********** fonction permettant de rechercher dans un tableau d'objet**********
//********** search function in array of object**********

const searchFuncTow = (e) => {
	//********** on va utiliser les méthodes filter() et includes() des tableaux**********
	//********** on filtre le tableau et on ne garde que les éléments qui correspondent à la valeur saisi dans notre input (e.target.value) **********
	//********** la méthode filter retourne un nouveau tableau donc le stock dans une variable onSearchResult **********

	//********** i will use filter() and includes() **********
	//********** I filter the array and I keep the elements which match with the value of the input **********
	//********** The filter method returns a new array, so I store it in onSearchResult **********

	let onSearchResult = [];

	//********** maintenant on fait pareil avec le tableau d'objet **********
	//********** Now we do the same with the array of objects. **********

	onSearchResult = objectArray.filter((fruit) => {
		return (
			fruit.nom.includes(e.target.value) ||
			fruit.couleur.includes(e.target.value) ||
			fruit.saison.includes(e.target.value)
		);
	});

	//********** on affiche (innerHTML) dans les résultats filtré dans notre paragraphe (result) dans le dom **********
	//********** I display (innerHTML) the filtered results in my paragraph (result) in the DOM  **********

	resultTow.innerHTML = onSearchResult[0].nom;
};

//********** on écoute l'évènement keydown (lorsque une touche est enfoncé) sur notre barre de recherche **********
//********** We listen to the keydown event (when a key is pressed) on our search bar. **********

searchBar.addEventListener("keydown", searchFuncOne);
searchBarTow.addEventListener("keydown", searchFuncTow);
