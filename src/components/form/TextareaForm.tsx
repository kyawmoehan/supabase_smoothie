import { memo } from "react";

const TextareaForm = memo(function TextareaForm({
  title,
  name,
  row = 7,
  placeholder,
  register,
  errors = false,
}: {
  title: string;
  name: string;
  row?: number;
  placeholder: string;
  register: any;
  errors: any;
}) {
  return (
    <section>
      <label htmlFor={name} className="font-semibold my-2 block">
        {title}
      </label>
      <textarea
        id={name}
        rows={row}
        className="rounded-md py-1.5 px-4 border-stoke border-2 w-full"
        {...register(name)}
        placeholder={placeholder}
      ></textarea>
      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
    </section>
  );
});

export default TextareaForm;
