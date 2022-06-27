import { FormFieldProps } from "../../interface/FormFieldProps";

export const FormField: React.FC<FormFieldProps> = (props) => {
  const { name, title, color, children, error } = props;
  return (
    <div>
      <label htmlFor={name} style={{ color: color }}>
        {title}
      </label>
      <br />
      {children}
      <p className="form-error">{error}</p>
    </div>
  );
};
