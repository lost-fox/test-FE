import React, { useState } from "react";
import "./style.scss";

export const Forms: React.FC = () => {
  const [username, setUsername] = useState("");
  const [isValidName, setValidName] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [userphone, setUserphone] = useState("");
  const [isValidPhone, setValidPhone] = useState(false);
  const [errorPhone, setErrorPhone] = useState("");
  const [isValidMessage, setValidMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const colorErrorLabel = (errorMessage: string) => {
    const color = !errorMessage ? "#000000" : "#db2a2a";
    return color;
  };

  const validName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    const reg = /^\s?[a-zA-Z]{3,30}\s([a-zA-Z]{3,30})$/i.test(name);
    if (!reg) {
      setErrorName(
        "Поле должно состоять из 2-х слов латинского алфавита, длинной от 3 до 30 символов и 1 пробел между словами"
      );
      setValidName(false);
      if (!name.length) setErrorName("");
    } else {
      setErrorName("");
      setValidName(true);
    }

    setUsername(name.toUpperCase());
  };

  const validEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const reg = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/gi.test(email);
    if (!reg) {
      setErrorEmail("Введите корректный E-mail");
      setValidEmail(false);
      if (!email.length) setErrorEmail("");
    } else {
      setErrorEmail("");
      setValidEmail(true);
    }
  };

  const validPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    if (phone.length > 0 && phone.length < 10) {
      setErrorPhone("Введите номер в формате YYYXXXXXXX, где YYY - код");
      setUserphone(phone);
    } else {
      setUserphone(
        phone.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, "+7 ($1) $2-$3-$4")
      );
      setErrorPhone("");
    }
    console.log(phone.length);
  };

  const validMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const message = e.target.value;

    if (message.length < 10 || message.length > 300) {
      setErrorMessage("Сообщение должно содержать от 10 до 300 символов");
      setValidMessage(false);
      if (!message.length) setErrorMessage("");
    } else {
      setErrorMessage("");
      setValidMessage(true);
    }
  };

  return (
    <div className="container-form">
      <h1 className="form-title">Обратная связь</h1>
      <form>
        <div>
          <label htmlFor="name" style={{ color: colorErrorLabel(errorName) }}>
            Имя и Фамилия
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Введите имя и фамилию"
            value={username}
            onChange={validName}
          />
          <p className="form-error">{errorName}</p>
        </div>
        <div>
          <label htmlFor="email" style={{ color: colorErrorLabel(errorEmail) }}>
            E-mail
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Введите E-mail"
            formNoValidate
            onChange={validEmail}
          />
          <p className="form-error">{errorEmail}</p>
        </div>
        <div>
          <label htmlFor="phone" style={{ color: colorErrorLabel(errorPhone) }}>
            Номер телефона
          </label>
          <br />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Введите номер телефона"
            value={userphone}
            onChange={validPhone}
          />
          <p className="form-error">{errorPhone}</p>
        </div>
        <div>
          <label htmlFor="date">Дата рождения </label> <br />
          <input type="date" name="date" id="date" />
          <p className="form-error">Error</p>
        </div>
        <div>
          <label
            htmlFor="message"
            style={{ color: colorErrorLabel(errorName) }}
          >
            Оставьте свое сообщение
          </label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder="Введите сообщение"
            onChange={validMessage}
          ></textarea>
          <p className="form-error">{errorMessage}</p>
        </div>
        <button className="send-btn">Отправить</button>
      </form>
    </div>
  );
};
