import "./Divider.css";
function Divider({ text }) {
  return (
    <div className="divider" role="page divider">
      <div className="line"></div>
      <h2 className="divider--titel">{text}</h2>
      <div className="line"></div>
    </div>
  );
}

export default Divider;

// in app.jsx
// <Divider text={"Featured Blog Post"} />
// <Divider text={"Blog Post"} />
