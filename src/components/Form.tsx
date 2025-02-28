type propstype = {
  name: string;
  email: string;
  password: number | string;
  contact: number;
};
const Form = (props: propstype) => {
  return (
    <>
      <div className="p-6 bg-white rounded shadow-lg space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Name: {props.name}
        </h1>
        <h1 className="text-2xl font-semibold text-gray-800">
          Email: {props.email}
        </h1>
        <h1 className="text-2xl font-semibold text-gray-800">
          Password: {props.password}
        </h1>
        <h1 className="text-2xl font-semibold text-gray-800">
          Contact: {props.contact}
        </h1>
      </div>
    </>
  );
};

export default Form;
