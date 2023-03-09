import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link className={s.logo} to={routes.HOME}>
      <img className={s.logoPrimary} style={{width:'80px',height:'50px'}} src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" alt="" />
      <span>Akbarly</span>
      
      </Link>
      
    </div>
  );
};

export default Logo;
