import "./style.scss";

export const Forms:React.FC = () => {
   return (
      <div className='container-form'> 
         <h1 className='form-title'>Обратная связь</h1>
         <form>
            <div>
               <label htmlFor="name">Имя и Фамилия </label> <br/>
               <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email </label> <br/>
              <input type="email" name="email" id="email" /> 
            </div>
            <div>
               <label htmlFor="phone">Номер телефона </label> <br/>
               <input type="tel" name="phone" id="phone" />
            </div>
            <div>
               <label htmlFor="date">Дата рождения </label> <br/>
               <input type="date" name="date" id="date" />
            </div>
            <div>
               <label htmlFor="message">Оставьте свое сообщение</label> <br/>
                <textarea name="message" id="message"></textarea>
            </div>
         </form>
      </div>
   )
}