import {Link} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import {AppRoute} from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <div className="user-page__content">
        <div style={{textAlign: 'center', marginTop: '10%'}}>
          <h1 className="page-title"><span style={{fontWeight: '700', fontSize: '36px'}}>404.</span> Page not found</h1>
          <p>The page you&#39;re looking for doesn&#39;t exist. <Link to={AppRoute.Root} className='user-block__link' style={{display:'inline-block'}}>Go to Main Page &rarr;</Link></p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundScreen;
