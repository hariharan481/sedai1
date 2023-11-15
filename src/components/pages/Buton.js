export const CustomButton = ({ onClick, style, label }) => {
  return (
    <button
      onClick={onClick}
      style={{
        ...style,
        width: "100%",
        maxWidth: "130px",
        height: "100%",
        maxHeight: "45px",
        fontSize: "13px",
        fontWeight: "bold",
        borderRadius: "25px",
        margin: "0 auto",
        backgroundColor: "transparent",
        color: "white",
        borderColor: "white",
        cursor: "pointer",
        marginLeft: "2%",
        marginTop: "2%",
      }}
    >
      {label}
    </button>
  );
};
export const CustomButton1 = ({ onClick, style, label }) => {
  return (
    <button
      onClick={onClick}
      style={{
        ...style,
        width: "100%",
        maxWidth: "130px",
        height: "100%",
        maxHeight: "45px",
        fontSize: "13px",
        fontWeight: "bold",
        borderRadius: "25px",
        margin: "0 auto",
        background: "linear-gradient(45deg, #8A2BE2 30%, #FF8E53 90%)",
        color: "white",
        border: "none",
        cursor: "pointer",
        marginRight: "7%",
        marginTop: "2%",
        transition: "background 0.3s, filter 0.3s",
      }}
      onMouseOver={(e) => {
        e.target.style.background =
          "linear-gradient(45deg, #8A2BE2 30%, #FE6B8B 90%)";
        e.target.style.filter = "brightness(0.8)"; // Decrease brightness on hover
      }}
      onMouseOut={(e) => {
        e.target.style.background =
          "linear-gradient(45deg, #8A2BE2 30%, #FF8E53 90%)";
        e.target.style.filter = "brightness(1)"; // Restore normal brightness on mouse out
      }}
    >
      {label}
    </button>
  );
};
