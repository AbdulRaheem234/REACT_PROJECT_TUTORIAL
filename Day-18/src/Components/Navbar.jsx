function Navbar({ theme, setTheme }) {
  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}

export default Navbar;
