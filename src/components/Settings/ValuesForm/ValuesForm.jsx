import { useForm } from "react-hook-form";

function ValuesForm(props) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
    },
  });

  const onSubmit = (data) => {
    props.setValues(Object.values(data));
  };

  return (
    <form className="values-inputs" onChange={handleSubmit(onSubmit)}>
      <input
        type="text"
        name=""
        id=""
        {...register("value1")}
        placeholder="Значение столбца 1"
      />
      <input
        type="text"
        name=""
        id=""
        {...register("value2")}
        placeholder="Значение столбца 2"
      />
      <input
        type="text"
        name=""
        id=""
        {...register("value3")}
        placeholder="Значение столбца 3"
      />
      <input
        type="text"
        name=""
        id=""
        {...register("value4")}
        placeholder="Значение столбца 4"
      />
      <input
        type="text"
        name=""
        id=""
        {...register("value5")}
        placeholder="Значение столбца 5"
      />
      <input
        type="text"
        name=""
        id=""
        {...register("value6")}
        placeholder="Значение столбца 6"
      />
    </form>
  );
}

export default ValuesForm;