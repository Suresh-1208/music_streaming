import React from "react";

const FormField = ({ label, type, id, value, onChange, required }) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormField;
