export { Card };

function Card() {
    const data = [
        {
            id: 1,
            name: "AIRLINES",
            imgURL: "airlines_img.png",
            url: "https://www.aviareps.com/industry/growing-your-airline/"
          },
          {
              id: 2,
              name: "DESTINATIONS",
              imgURL: "destinations_icon.png",
              url: "https://www.aviareps.com/industry/growing-your-destination/"
            },
            {
              id: 3,
              name: "HOTELS",
              imgURL: "hotels.png",
              url: "https://www.aviareps.com/industry/growing-your-hotel/"
            },
            {
              id: 4,
              name: "FOOD & WINE",
              imgURL: "Food-and-Wine.png",
              url: "https://www.aviareps.com/industry/marketing-sales-food-wine/"
            },
            {
              id: 5,
              name: "AIRPORTS",
              imgURL: "airports.png",
              url: "https://www.aviareps.com/industry/growing-your-airport/"
            },
            {
              id: 6,
              name: "CRUISE LINES",
              imgURL: "cruises_icon.png",
              url: "https://www.aviareps.com/industry/growing-your-cruise/"
            },
            {
              id: 7,
              name: "SHOPPING & ATTRACTIONS",
              imgURL: "shopping_icon.png",
              url: "https://www.aviareps.com/industry/growing-your-shopping-and-attractions/"
            },
            {
              id: 8,
              name: "CARS",
              imgURL: "cars_icon.png",
              url: "https://www.aviareps.com/industry/growing-your-car/"
            },
            {
                id: 9,
                name: "TRAINS",
                imgURL: "trains_icon.png",
                url: "https://www.aviareps.com/industry/growing-your-train/"
              },
              {
                id: 10,
                name: "TRAVEL PRODUCTS",
                imgURL: "travel.png",
                url: "https://www.aviareps.com/industry/growing-your-travel-products/"
              },
        ];

    return (
        <div className="text-center">
          <ul className="cards">
            {
                data.map( item => {
                    return  <li>
                          <a href={item.url} className="card">
                            <div className="card__top">
                              <img src={`Cards/${item.imgURL}`} className="card__image" alt="" />
                            </div>
                            
                            <div className="card__overlay">
                              <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                                <img className="card__thumb" src="https://www.aviareps.com/beta/wp-content/themes/aviareps/images/favicon.png" alt="" />
                                <div className="card__header-text">
                                  <h3 className="card__title">{item.name}</h3>
                                </div>          
                              </div>
                              <p className="card__description">Learn more about <b>{item.name} </b>by clicking the card!</p>
                            </div>
                          </a>
                        </li>    
                    
              //       <div classNameName="aviresp-cards" key={item.id}>
              //         <img src={`Cards/${item.imgURL}`} ></img>
              //         <h1 className="aviresp-cards-title">{item.name}</h1>
              //  </div>
                })
            }
             </ul>
        </div>
    );
}