import Title from './Title'
import {tours} from '../data'

function Tours() {
  return (
    <section className="section" id="tours">
    <Title title={'Featured'} subTitle='tours' />

    <div className="section-center featured-center">
    {tours.map((tour) => {
      const {id,img,date,title,text,location,days,price} = tour
      return (
      <article className="tour-card" key={id}>
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt={title} />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>
            {text}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {location}
            </p>
            <p>{days}</p>
            <p>{price}</p>
          </div>
        </div>
      </article>
      )
    }) }
    </div>
  </section>
  )
}

export default Tours
