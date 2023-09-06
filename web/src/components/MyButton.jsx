// eslint-disable-next-line react/prop-types
export default function MyButton({ title, disable, onClick }) {
  return (
    <button disabled={disable}
      onClick={onClick} className="button" >
      {title}
    </button >
  );
}