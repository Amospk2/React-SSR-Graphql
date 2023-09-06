
// eslint-disable-next-line react/prop-types
export default function TextField({ fullWidth, title, modelSet, model }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      textAlign: "center"
    }}>
      <h2 style={{
        alignSelf: "center",
        fontSize: "18px"
      }}>{title}</h2>

      <input
        type="text"
        name="email"
        id="email"
        value={model}
        onChange={(v) => {
          modelSet(v.target.value)
        }}
        className={fullWidth ? "full-width input" : "input"}
      />
    </div>
  );
}
