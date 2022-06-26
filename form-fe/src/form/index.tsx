import React, { useState } from "react";
import "./style.scss";

export const Forms: React.FC = () => {
  const [username, setUsername] = useState("");
  const [isValidName, setValidName] = useState(false);
  const [errorName, setErrorName] = useState("");

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
          <label htmlFor="email">E-mail </label> <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Введите E-mail"
            formNoValidate
          />
          <p className="form-error">Error</p>
        </div>
        <div>
          <label htmlFor="phone">Номер телефона </label> <br />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Введите номер телефона"
          />
          <p className="form-error">Error</p>
        </div>
        <div>
          <label htmlFor="date">Дата рождения </label> <br />
          <input type="date" name="date" id="date" />
          <p className="form-error">Error</p>
        </div>
        <div>
          <label htmlFor="message">Оставьте свое сообщение</label> <br />
          <textarea
            name="message"
            id="message"
            placeholder="Введите сообщение"
          ></textarea>
          <p className="form-error">Error</p>
        </div>
        <button className="send-btn">Отправить</button>
      </form>
    </div>
  );
};
