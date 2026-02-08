const OrganKey = ({ note, color, onClick }) => {
  const style = {
    width: color === "white" ? "40px" : "30px",
    height: color === "white" ? "150px" : "100px",
    backgroundColor: color,
    border: "1px solid black",
    position: "relative",
    zIndex: color === "white" ? 1 : 2,
    marginLeft: color === "black" ? "-15px" : "0",
  };

  return <div style={style} onClick={() => onClick(note)}></div>;
};
