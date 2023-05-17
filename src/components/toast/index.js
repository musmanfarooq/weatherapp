const Toast = ({ Error }) => {
  return (
    <div className="m-3 p-3 text-red-600 bg-red-200 rounded-lg max-w-lg">{Error}</div>
  );
};

export default Toast;
