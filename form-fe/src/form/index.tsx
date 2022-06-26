import "./style.scss";

export const Forms: React.FC = () => {
  return (
    <div className="container-form">
      <h1 className="form-title">Обратная связь</h1>
      <form noValidate>
        <div>
          <label htmlFor="name">Имя и Фамилия </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Введите имя и фамилию"
          />
          <p className="form-error">Error</p>
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
