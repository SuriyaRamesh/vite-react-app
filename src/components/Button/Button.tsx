import styles from './Button.module.css';

interface ButtonProps {
    children: string;
    OnClickHandle: () => void;
}

const Button = ({ children, OnClickHandle } : ButtonProps) => {
  return (
    <div>
      <button type='button' className={styles.btn} onClick={OnClickHandle}>{children}</button>
    </div>
  )
}

export default Button
