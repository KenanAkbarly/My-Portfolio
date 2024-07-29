import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,

  
} from 'react-icons/si';
import {
  AiFillHtml5
} from 'react-icons/ai';
import {
  IoLogoCss3
} from 'react-icons/io';
import {
  FaBootstrap,
  FaFileWord,
  FaFilePowerpoint,
  FaFileExcel
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJquery,
  SiAdobephotoshop,
  SiPowerbi

} from 'react-icons/si';
import {
  FiFigma
} from 'react-icons/fi';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <AiFillHtml5 />
      </li>
      <li className={s.techIcon}>
        <IoLogoCss3 />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <FaBootstrap />
      </li>
      <li className={s.techIcon}>
        <SiTailwindcss />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <SiJquery />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiNextdotjs />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <FiFigma />
      </li>
      <li className={s.techIcon}>
        <SiAdobephotoshop />
      </li>
      <li className={s.techIcon}>
      <FaFileWord />
      </li>
      <li className={s.techIcon}>
      <FaFilePowerpoint />
      </li>
      <li className={s.techIcon}>
      <FaFileExcel />
      </li>
      <li className={s.techIcon}>
      <SiPowerbi />
      </li>
    </ul>
  );
};

export default TechSkills;
