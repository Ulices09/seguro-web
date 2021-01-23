import { FC, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import styles from './InputText.module.scss';

const InputText: FC<InputHTMLAttributes<any>> = ({
  className,
  type,
  placeholder,
  onBlur,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (focused) inputRef.current?.focus();
  }, [focused]);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    setFocused(false);
  };

  const keepFocusedStyle = () => focused || !!inputRef.current?.value;

  return (
    <div
      className={`${styles.container} ${className}`}
      onClick={() => setFocused(true)}
    >
      <span
        className={`font-bold ${styles.placeholder} ${
          keepFocusedStyle() && styles.focused
        }`}
      >
        {placeholder}
      </span>
      <input
        {...rest}
        type={type || 'text'}
        ref={inputRef}
        className={`${styles.input} ${keepFocusedStyle() && styles.focused}`}
        placeholder={undefined}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputText;
