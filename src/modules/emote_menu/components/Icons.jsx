import * as faTwitch from '@fortawesome/free-brands-svg-icons/faTwitch';
import * as faBasketballBall from '@fortawesome/free-solid-svg-icons/faBasketballBall';
import * as faBox from '@fortawesome/free-solid-svg-icons/faBox';
import * as faClock from '@fortawesome/free-solid-svg-icons/faClock';
import * as faFlag from '@fortawesome/free-solid-svg-icons/faFlag';
import * as faHeart from '@fortawesome/free-solid-svg-icons/faHeart';
import * as faHeartBroken from '@fortawesome/free-solid-svg-icons/faHeartBroken';
import * as faIceCream from '@fortawesome/free-solid-svg-icons/faIceCream';
import * as faLeaf from '@fortawesome/free-solid-svg-icons/faLeaf';
import * as faLightbulb from '@fortawesome/free-solid-svg-icons/faLightbulb';
import * as faLock from '@fortawesome/free-solid-svg-icons/faLock';
import * as faPlane from '@fortawesome/free-solid-svg-icons/faPlane';
import * as faSmileWink from '@fortawesome/free-solid-svg-icons/faSmileWink';
import * as faStar from '@fortawesome/free-solid-svg-icons/faStar';
import * as faUnlock from '@fortawesome/free-solid-svg-icons/faUnlock';
import {Icon} from '@rsuite/icons';
import classNames from 'classnames';
import React from 'react';
import FontAwesomeSvgIcon from '../../../common/components/FontAwesomeSvgIcon.jsx';
import styles from './Icons.module.css';

const twitchGamingLogo = {
  prefix: 'custom',
  iconName: 'twitch',
  svgPathData: 'M2.68,22.71V89.22s-.25,4.13,5.55,4.13h114.5s4.44.35,4.44-4.21V21.72l-26,27L64.92,13,30,48.7Z',
  width: 132,
  height: 102,
  ligatures: [],
};

function BrandedImage({src, alt, brandSrc}) {
  return (
    <div className={styles.icon}>
      <img src={src} alt={alt} className={classNames(styles.icon, styles.iconBorderRadius)} />
      <img src={brandSrc} alt="" className={styles.brandIcon} />
    </div>
  );
}

export default {
  STAR: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faStar} />,
  PEOPLE: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faSmileWink} />,
  LEAF: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faLeaf} />,
  ICE_CREAM: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faIceCream} />,
  BASKET_BALL: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faBasketballBall} />,
  PLANE: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faPlane} />,
  BOX: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faBox} />,
  HEART: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faHeart} />,
  HEART_BROKEN: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faHeartBroken} />,
  FLAG: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faFlag} />,
  CLOCK: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faClock} />,
  UNLOCK: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faUnlock} />,
  LOCK: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faLock} />,
  BULB: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faLightbulb} />,
  TWITCH: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={faTwitch} />,
  TWITCH_GAMING: <Icon as={FontAwesomeSvgIcon} fontAwesomeIcon={twitchGamingLogo} />,
  IMAGE: (brandSrc, alt, src = null) =>
    src != null ? (
      <BrandedImage src={src} alt="" brandSrc={brandSrc} />
    ) : (
      <img src={brandSrc} alt="" className={classNames(styles.icon, styles.iconBorderRadius)} />
    ),
};
