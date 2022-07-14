import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary";

const HomeScreen = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const ProfileScreen = () => (
  <div>
    <h1>Profile Screen</h1>
  </div>
);

const ShopScreen = () => {
  throw new Error();
  // <div>
  //   <h1>Here is a list of projects</h1>
  // </div>;
};

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          </NavLink>
        </li>
        <li>
          <NavLink to="shop">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                <ErrorBoundary>
                  <ShopScreen />
                </ErrorBoundary>
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <NavList />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
      </Routes>
    </div>
  );
}

export default App;
