// components
import Header from "./components/Shared/Header";
import LeftBar from "./components/Shared/LeftBar";

import Footer from "./components/Shared/Footer";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div>
      <Header />
      <div className="middle">
        <LeftBar />
        <UsersList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
