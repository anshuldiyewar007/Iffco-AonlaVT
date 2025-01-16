import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Navbar } from "./components/Navbar/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer/Footer";
import { AdminLayout } from "./components/layouts/admin-layouts";
import { AdminUsers } from "./pages/Admin-users";
import { AdminContacts } from "./pages/Admin-contacts";
import { AdminUpdate } from "./pages/Admin-Update";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
