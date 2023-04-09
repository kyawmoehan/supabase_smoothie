import { memo, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const InputForm = memo(function InputForm({
  title,
  name,
  register,
  errors = false,
  type = "text",
  placeholder = "",
  disable = false,
  showTitle = true,
}: {
  title: string;
  name: string;
  register: any;
  errors: any;
  type?: string;
  placeholder: string;
  disable?: boolean;
  showTitle?: boolean;
}) {
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [typeStatus, setTypeStatus] = useState(type);

  return (
    <section className="w-full relative">
      {showTitle && (
        <label htmlFor={name} className="font-semibold my-2 block">
          {title}
        </label>
      )}
      <input
        id={name}
        type={typeStatus}
        className="rounded-md py-1.5 px-4 border-stoke border-2 w-full disabled:opacity-40"
        placeholder={placeholder}
        {...register(name)}
        disabled={disable}
      />
      {type === "password" && (
        <div
          className={`absolute ${
            showTitle ? "bottom-1 right-2" : "top-2 right-2"
          }`}
        >
          {passwordStatus ? (
            <button
              type="button"
              onClick={() => {
                setPasswordStatus(false);
                setTypeStatus("password");
              }}
            >
              <AiFillEye size={20} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setPasswordStatus(true);
                setTypeStatus("text");
              }}
            >
              <AiFillEyeInvisible size={20} />
            </button>
          )}
        </div>
      )}
      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
    </section>
  );
});

export default InputForm;

//  <div className="flex flex-col">
//       <label htmlFor={name} className="pb-4 text-lg text-black/40">
//         {title}
//       </label>
//       <input
//         id={name}
//         type={type}
//         className="flex-grow px-3 py-2.5 rounded-md bg-input"
//         placeholder={placeholder}
//         {...register(name)}
//       />
//       {errors[name] && (
//         <p className="pt-2 text-red-500">{errors[name]?.message}</p>
//       )}
//     </div>
