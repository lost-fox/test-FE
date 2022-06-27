import React, { useEffect, useState } from "react";
import { FormType } from "../interface/Forms";
import { getToday } from "../utils/getToday";
import { FormField } from "./FormField";
import "./style.scss";

export const Forms: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [isValidName, setValidName] = useState<boolean>(true);
  const [errorName, setErrorName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setValidEmail] = useState<boolean>(true);
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [userphone, setUserphone] = useState<string>("");
  const [isValidPhone, setValidPhone] = useState<boolean>(true);
  const [errorPhone, setErrorPhone] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [isValidDate, setValidDate] = useState<boolean>(true);
  const [errorDate, setErrorDate] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isValidMessage, setValidMessage] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [validButton, setValidButton] = useState<boolean>(true);
  const [status, setStatus] = useState<string>("");
  const [forms, setForm] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    const isValid: boolean =
      !isValidName &&
      !isValidEmail &&
      !isValidPhone &&
      !isValidDate &&
      !isValidMessage;
    setValidButton(!isValid);
  }, [isValidDate, isValidEmail, isValidMessage, isValidName, isValidPhone]);

  const colorErrorLabel = (errorMessage: string) => {
    const color: string = !errorMessage ? "#000000" : "#db2a2a";
    return color;
  };

  const changeHandler = (name: string, value: string) => {
    setForm({ ...forms, [name]: value });
  };

  const validName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.value;
    const reg: boolean = /^\s?[a-zA-Z]{3,30}\s([a-zA-Z]{3,30})$/i.test(name);
    if (!reg) {
      setErrorName(
        "Поле должно состоять из 2-х слов латинского алфавита, длинной от 3 до 30 символов и 1 пробел между словами"
      );
      setValidName(true);
      if (!name.length) setErrorName("");
    } else {
      setErrorName("");
      setValidName(false);
      changeHandler("name", name.toUpperCase());
    }
    setUsername(name.toUpperCase());
  };

  const validEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email: string = e.target.value;
    setEmail(email);
    const reg: boolean = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/gi.test(
      email
    );
    if (!reg) {
      setErrorEmail("Введите корректный E-mail");
      setValidEmail(true);
      if (!email.length) setErrorEmail("");
    } else {
      setErrorEmail("");
      setValidEmail(false);
      changeHandler("email", email);
    }
  };

  const validPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone: string = e.target.value.replace(/\D+/g, "");
    if (phone.length !== 10 && phone.length !== 19) {
      setErrorPhone("Введите номер в формате YYYXXXXXXX, где YYY - код");
      setUserphone(phone);
      setValidPhone(true);
    } else {
      setUserphone(
        phone.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, "+7 ($1) $2-$3-$4")
      );
      setErrorPhone("");
      setValidPhone(false);
      changeHandler("phone", phone);
    }
  };

  const validDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date: string = e.target.value;
    setDate(date);
    if (date === "" || date > getToday()) {
      setErrorDate("Введите корректную дату");
      setValidDate(true);
    } else {
      setErrorDate("");
      setValidDate(false);
      changeHandler("date", date);
    }
  };

  const validMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const message: string = e.target.value;
    setMessage(message);
    if (message.length < 10 || message.length > 300) {
      setErrorMessage("Сообщение должно содержать от 10 до 300 символов");
      setValidMessage(true);
      if (!message.length) setErrorMessage("");
    } else {
      setErrorMessage("");
      setValidMessage(false);
      changeHandler("message", message);
    }
  };

  const sendForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const data: string = JSON.stringify(forms);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: data,
    }).then((response) => {
      if (response.ok) {
        setStatus("Запрос отправлен успешно");
      } else {
        setStatus("Ошибка при отправке запроса");
      }
    });
    cleanForm();
  };

  const cleanForm = () => {
    setUsername("");
    setEmail("");
    setUserphone("");
    setDate("");
    setMessage("");
  };

  return (
    <div className="container-form">
      <h1 className="form-title">Обратная связь</h1>
      <form>
        <FormField
          name="name"
          title="Имя и Фамилия"
          color={colorErrorLabel(errorName)}
          error={errorName}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Введите имя и фамилию"
            value={username}
            onChange={validName}
          />
        </FormField>
        <FormField
          name="email"
          title="E-mail"
          color={colorErrorLabel(errorEmail)}
          error={errorEmail}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Введите E-mail"
            formNoValidate
            value={email}
            onChange={validEmail}
          />
        </FormField>
        <FormField
          name="phone"
          title="Номер телефона"
          color={colorErrorLabel(errorPhone)}
          error={errorPhone}
        >
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Введите номер телефона"
            inputMode="numeric"
            value={userphone}
            onChange={validPhone}
          />
        </FormField>
        <FormField
          name="date"
          title="Дата рождения"
          color={colorErrorLabel(errorDate)}
          error={errorDate}
        >
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            max={getToday()}
            onChange={validDate}
          />
        </FormField>
        <FormField
          name="message"
          title="Оставьте свое сообщение"
          color={colorErrorLabel(errorMessage)}
          error={errorMessage}
        >
          <textarea
            name="message"
            id="message"
            placeholder="Введите сообщение"
            value={message}
            onChange={validMessage}
          ></textarea>
        </FormField>
        <input
          type="button"
          className="send-btn"
          disabled={validButton}
          onClick={sendForm}
          value="Отправить"
        ></input>
      </form>
      <div className="status">{status}</div>
    </div>
  );
};
