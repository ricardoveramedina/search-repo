import React, { MouseEventHandler } from 'react';
import navigate_back from '../../../assets/navigate_before.png';
import navigate_next from '../../../assets/navigate_next.png';
import styles from './navigationButton.module.scss';

export enum ButtonDirection {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

type ButtonDirectionStrings = keyof typeof ButtonDirection;

type NavigationButtonProps = {
  children?: React.ReactNode | React.ReactNode[];
  variant: ButtonDirectionStrings;
  handleClick: MouseEventHandler;
  disabled?: boolean;
};

export default function NavigationButton({
  children,
  variant,
  handleClick,
  disabled,
}: NavigationButtonProps) {
  const srcIcon =
    ButtonDirection[variant] === ButtonDirection.LEFT
      ? navigate_back
      : navigate_next;

  return (
    <button
      className={`${styles.button} ${!disabled && styles.enabled} `}
      onClick={handleClick}
      disabled={disabled}
    >
      <img
        src={srcIcon}
        alt={`navigate ${ButtonDirection[variant]}`}
        className={styles.icon}
      />
      {children}
    </button>
  );
}
