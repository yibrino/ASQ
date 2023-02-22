import "./globals.css";
import Header from "./header/header";
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (
    <div id="app">
      <div id="nav" class="sticky text-white left-0 right-0 top-0 z-50">
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}

// <style lang="scss">
// #app {
//   font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   // text-align: center;
//   // color: #2c3e50;
//   // background-color: #f2f2f2;
// }

// </style>
