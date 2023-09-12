import mark from '../assets/reviews/review_mark_pic.jpg'
import nikolett from '../assets/reviews/review_nikolett_pic.jpg'
import hedviga from '../assets/reviews/review_hedviga_pic.jpg'

export default function Reviews() {

  const reviews = [
    {
      name: 'Márk',
      date: '2020. augusztus',
      text: '„Családoknak és baráti társaságoknak teljesen optimális szállás. A szállásadó pedig rugalmas, gyorsan válaszol és korrekt.”',
      picture: mark
    },
    {
      name: 'Nikolett',
      date: '2019. augusztus',
      text: '„Mindent rendben találtunk, baráti társaságoknak minden szempontból megfelelő, tágas szobák és nagy terasz.”',
      picture: nikolett
    },    
    {
      name: 'Hedviga',
      date: '2018. szeptember',
      text: '„Csodálatos ingatlan, nagyszerű elhelyezkedés, közel a strandhoz, üzletekhez és kocsmákhoz. Funkcionális, tiszta és otthonos, nagyszerű szálláshely.”',
      picture: hedviga
    }
  ]

  const renderedReviews = []

  reviews.forEach(review => {
    renderedReviews.push(
      <div className='review' key={review.name}>
        <div className='review-top'>
          <img src={review.picture} alt='profile picture' />
          <div className='review-title'>
            <h3 className='reviewer-name'>
              {review.name}
            </h3>
            <p className='review-date'>
              {review.date}
            </p>
          </div>
        </div>
        <div className='review-text'>
          {review.text}
        </div>
      </div>
    )
  })


  return (
    <div className="reviews">
      <div className="reviews-wrapper component-wrapper">
        <h1 className="reviews-title">
          Rólunk mondták
        </h1>
        <div className='rendered-reviews'>
          {renderedReviews}
        </div>
      </div>
    </div>
  )
}