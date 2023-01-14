import React, { FC } from "react";

import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from "./Card.module.css"
import classNames from "classnames";

import { CardType } from "../../Constants/@types";
import { Fire } from "../../Assets/Fire";

type CardProps = {
   card: CardType;
};

const Card: FC<CardProps> = ({ card }) => {
   const { image, rating, title, genres } = card;

   const {theme} = useThemeContext()

   return (
      <div className={classNames(styles.container, {[styles.lightContainer] : theme === Theme.Light})}>
         
         <span
            className={classNames(styles.rating, {
               [styles.ratingRed]: rating <= 5,
               [styles.ratingYellow]: rating > 5 && rating <= 7,
               [styles.ratingGreen]: rating > 7 && rating <= 7.5,
               [styles.ratingBlue]: rating > 7.5,
         })}
         >
         {rating > 7.5 ? <Fire /> : ''}
         {rating}
         </span>

         <img className={styles.card} src={image} alt={''} />
         <div className={styles.title}>{title}</div>
         <div className={styles.genres}>{genres}</div>
      </div>
   );
};

export default Card;