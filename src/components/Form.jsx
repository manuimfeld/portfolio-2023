import { handleSubmit } from "../helpers/formSubmit";

const Form = () => {
  return (
    <form
      onSubmit={handleSubmit}
      acceptCharset="utf-8"
      action={import.meta.env.FORM_URI}
      className="bg-color-bg-third shadow-md rounded-[15px] px-8 pt-6 pb-8 mb-4 w-[100%] sm:w-[60%] lg:w-[50%] mx-auto"
    >
      <div className="mb-4">
        <label
          className="block text-text-primary text-sm font-bold mb-2"
          htmlFor="username"
        >
          Nombre
        </label>
        <input
          className="bg-color-bg-secondary shadow appearance-none border border-color-secondary rounded w-full py-2 px-3 text-text-primary leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          id="full-name"
          placeholder="Ej: Gustavo Lopez"
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-text-primary text-sm font-bold mb-2"
          htmlFor="password"
        >
          Email
        </label>
        <input
          className="bg-color-bg-secondary shadow appearance-none border  border-color-secondary rounded w-full py-2 px-3 text-text-primary  mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="Ej: loremips@gmail.com"
          required
        />
      </div>
      <textarea
        rows="5"
        name="message"
        id="message"
        placeholder="Escribe tu mensaje aquí."
        required
        className="bg-color-bg-secondary shadow appearance-none border  border-color-secondary rounded w-full py-2 px-3 text-text-primary  mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        value="Enviar mensaje"
        type="submit"
        className="w-[60%] sm:w-[50%] ml-[20%] sm:ml-[25%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      />
    </form>
  );
};
export default Form;
