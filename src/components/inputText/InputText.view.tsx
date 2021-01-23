import { FC, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { InvalidFeedback } from 'components';
import styles from './InputText.module.scss';

type IProps = {
  error?: string;
} & InputHTMLAttributes<any>;

const InputText: FC<IProps> = ({
  className,
  error,
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
    <>
      <div
        className={`${styles.container} ${className} ${error && styles.error}`}
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
      {error && <InvalidFeedback>{error}</InvalidFeedback>}
    </>
  );
};

export default InputText;
