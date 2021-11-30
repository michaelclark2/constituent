import "./Header.scss";

const Header = (props) => {
  return (
    <header className="App-header">
      <h1>Constituent</h1>
      <div className="header-btns">
        <button className="btn btn-primary">Login</button>
      </div>
    </header>
  );
};

export default Header;
