import clsx from "clsx";
import s from "./Button.module.css";
// I created a reusable Button component that forwards all additional props to the native button element and applies conditional styles based on the selected state.

// Оголошується універсальний UI-компонент Button, який приймає набір пропсів із дефолтними значеннями та додаткові атрибути.

// Проп selected відповідає за візуальний стан кнопки і за замовчуванням дорівнює false.

// Проп type визначає тип HTML-кнопки і за замовчуванням встановлений як "button".

// children визначає вміст кнопки.

// Усі інші передані пропси збираються в обʼєкт otherProps і проксіюються безпосередньо в нативний <button>, що дозволяє використовувати компонент як повноцінну HTML-кнопку з onClick, disabled, aria-* тощо.
const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  //     Клас кнопки формується динамічно за допомогою clsx:
  // базовий клас s.btn застосовується завжди,
  // а модифікатор s.isSelected додається лише тоді, коли selected === true.
  return (
    <button
      className={clsx(s.btn, {
        [s.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
