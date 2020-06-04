import { useState } from "react";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const change = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return [form, change, () => setForm(initialForm)];
};
