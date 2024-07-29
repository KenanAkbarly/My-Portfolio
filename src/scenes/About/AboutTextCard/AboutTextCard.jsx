import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Kenan Akbarly </span>
        from <span className={s.purple}>Baku, Azerbaijan.</span>
        <br />
        Skilled MERN Stack Developer.
        <br /> Bachelor in Information Technology from
        <br />
        Azerbaijan Technical University, Baku.
        <br />
        <br /> Master in information systems in management from
        <br />
        Azerbaijan University of Architecture and Construction, Baku.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> To Do Sport
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>

     
    </div>
  );
};

export default AboutTextCard;
