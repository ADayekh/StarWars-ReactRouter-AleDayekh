import { Await } from "react-router";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			films: [],
			filmsDetail: {},
			chracters:[],
			chractersDetail:{},
			planets:[],
			planetsDetail:{},
			vehicles:[],
			vehiclesDetail:{},
			favouriteItems: [],
			repeat: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

	
			
			addFavouriteItem: (item) => {
				const store = getStore();

				if (item !== store.repeat){
				setStore({ favouriteItems: [...store.favouriteItems, item] })
				console.log(store.favouriteItems)
				store.repeat = item;
				}
				else 
					console.log("Don´t repeat favourite")
			},

			deleteFavouriteItem: (indexid) => {
				const store = getStore();
				store.favouriteItems = store.favouriteItems.filter((_, index) => index !== indexid);
				setStore ({ favouriteItems: [...store.favouriteItems]})
			},

			getFilms: async () => {
				try {
					const response = await fetch (`https://www.swapi.tech/api/films/`)
					if (!response.ok) {
						throw new Error("La respuesta no fue existosa");
					}
					const data = await response.json()
					setStore({films: data.result})
					console.log(data)
				} catch (error) {
					console.error("La respuesta no fue existosa")
				}
			}, 
	
			getPlanets: async () => {
				try {
					const response = await fetch (`https://www.swapi.tech/api/planets/`)
					if (!response.ok) {
						throw new Error("La respuesta no fue existosa");
					}
					const data = await response.json()
					setStore({planets: data.results})
				} catch (error) {
					console.error("La respuesta no fue existosa")
				}
			},

			getVehicles: async () => {
				try {
					const response = await fetch (`https://www.swapi.tech/api/vehicles/`)
					if (!response.ok) {
						throw new Error("La respuesta no fue existosa");
					}
					const data = await response.json()
					setStore({vehicles: data.results})
					console.log(data)
				} catch (error) {
					console.error("La respuesta no fue existosa")
				}
			},

			
			getChracters: async () => {
				try {
					const response = await fetch (`https://www.swapi.tech/api/people/`)
					if (!response.ok) {
						throw new Error("La respuesta no fue existosa");
					}
					const data = await response.json()
					setStore({chracters: data.results})
					console.log(data)
				} catch (error) {
					console.error("La respuesta no fue existosa")
				}
			},

			getCharacterDetail: async (uid) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch Character");
                    }
                    const data = await response.json();
                    setStore({ chractersDetail: data.result.properties});
                } catch (error) {
					console.error("La respuesta no fue existosa")
                }
            },
 
			getFilmDetail: async (uid) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/films/${uid}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch Character");
                    }
                 const data = await response.json();
				 setStore({ filmsDetail: data.result.properties});
                } catch (error) {
					console.error("La respuesta no fue existosa")
                }
            }, 

			getPlanetDetail: async (uid) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch Character");
                    }
                 const data = await response.json();
				 setStore({ planetsDetail: data.result.properties});
                } catch (error) {
					console.error("La respuesta no fue existosa")
                }
            }, 

			getVehicleDetail: async (uid) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch Character");
                    }
                 const data = await response.json();
				 setStore({ vehiclesDetail: data.result.properties});
                } catch (error) {
					console.error("La respuesta no fue existosa")
                }
            }, 
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

		}
	};
};

export default getState;
