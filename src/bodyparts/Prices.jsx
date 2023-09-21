export default function Prices() {

  const prices = [
    {
      name: 'Off-szezon',
      date: '01.01.-05.31.',
      price: ' Ajánlatkérés szükséges',
      minimum: '2 éjszaka'
    },
    {
      name: 'Előszezon',
      date: '06.01.-07.01.',
      price: 'XXXX Ft/éj',
      minimum: '3 éjszaka'
    },
    {
      name: 'Balaton Sound',
      date: '07.02.-07.07.',
      price: ' Ajánlatkérés szükséges',
      minimum: '4 éjszaka'
    },
    {
      name: 'Főszezon',
      date: '07.08.-08.20.',
      price: 'XXXX Ft/éj',
      minimum: '3 éjszaka'
    },
    {
      name: 'Strand Fesztivál',
      date: '08.21.-08.25.',
      price: ' Ajánlatkérés szükséges',
      minimum: '3 éjszaka'
    },
    {
      name: 'Utószezon',
      date: '08.26.-09.30.',
      price: 'XXXX Ft/éj',
      minimum: '3 éjszaka'
    },
    {
      name: 'Off-szezon',
      date: '10.01.-12.31.',
      price: ' Ajánlatkérés szükséges',
      minimum: '2 éjszaka'
    }
  ]

  const renderedPriceCards = []

  prices.map(price => {
    renderedPriceCards.push(
      <div className="price-card" key={price.date}>
      <h5>{price.name}</h5>
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
      </div>
    </div>
  )
}