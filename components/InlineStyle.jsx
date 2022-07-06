export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "20px",
    margin: "20px",
    display: "flex",
    justifyContent: "space-around",
    aligntItems: "center"
  };

  const titleStyle = {
    margin: 0,
    color: "red"
  };

  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}> Inlyne Styles </p>
      <button style={buttonStyle}> FIGHT!</button>
    </div>
  );
};
