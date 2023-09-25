export default function Prices() {

  const prices = [
    {
      name: 'Balaton Sound / Strand Fesztivál',
      date: 'A fesztiválok időpontja szerint',
      price: ' Ajánlatkérés szükséges',
      minimum: '4 éjszaka',
      priority: true
    },
    {
      name: 'Főszezon',
      date: '07.08.-08.20.',
      price: 'XXXX Ft/éj',
      minimum: '3 éjszaka',
      priority: true
    },
    {
      name: 'Off-szezon',
      date: '01.01.-05.31. / 10.01.-12.31.',
      price: ' Ajánlatkérés szükséges',
      minimum: '2 éjszaka',
      priority: false
    },
    {
      name: 'Előszezon / Utószezon',
      date: '06.01.-07.01. / 08.26.-09.30.',
      price: 'XXXX Ft/éj',
      minimum: '3 éjszaka',
      priority: false
    }
  ]

  const renderedPriceCards = []

  prices.map(price => {
    renderedPriceCards.push(
      <div className="price-card" key={price.date}>
        <div className={`price-card-title-container${price.priority ? ' priority' : ''}`}>
          <h5>{price.name}</h5>
        </div>
        <p className="card-data-type">Időszak:</p>
        <p className="card-data">{price.date}</p>
        <p className="card-data-type">Ár:</p>
        <p className="card-data">{price.price}</p>
        <p className="card-data-type">Minimum: </p>
        <p className="card-data">{price.minimum}</p>
      </div>
    )
  })


  return (
    <div className="prices">
      <div className="prices-wrapper component-wrapper">
        <h1 className="prices-title">Árak</h1>
        <div className="price-cards">
          {renderedPriceCards}  
        </div>
        <p className="prices-additional-info">
          9 fő esetén +15.000Ft a pótágy
        </p>
      </div>
    </div>
  )
}