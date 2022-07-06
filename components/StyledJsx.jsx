export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled Jsx</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
      .container {
        border: solid 2px #392eff;
        border-radius: 20px;
        padding: 20px;
        margin: 20px;
        display: flex;
        justify-content: space-around;
        alignt-items: center;
      }

      .title{
        margin: 0;
        color: red;
      }

      .button{
        background-color: #abedd8;
        border: none;
        padding: 8px;
        border-radius: 8px;
        &:hover{
          background-color:rgb(39, 190, 90);
          color:#fff;
          cursor: pointer;
        }
    `}</style>
    </>
  );
};
