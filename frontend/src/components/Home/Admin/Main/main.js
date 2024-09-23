

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="w-full">
  <nav className="h-16 bg-green-500 flex items-center justify-between">
    <h1 className="text-white text-lg ml-4">fakebook</h1>
    <button className="white-btn mr-4" onClick={handleLogout}>
      Logout
    </button>
  </nav>
</div>

	);
};

export default Main;
