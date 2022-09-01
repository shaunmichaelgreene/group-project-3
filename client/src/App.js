import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import styles from "./App.module.css";
import Modal from "./components/Modal/Modal.js";
import Nav from "./components/Nav";

// const REACT_APP_API_KEY = `${process.env.REACT_APP_API_KEY}`

// console.log(REACT_APP_API_KEY)

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//add conditional rendering to this return statement to trigger redirect to homepage if not logged in
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
        </Routes>

        <div>
          <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
            Open Modal
          </button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
          </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
