import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="content">
        <Card title="Welcome!" text="This is a reusable Card component." />
        <Card title="Another Card" text="You can add as many as you like." />
        <Card title="Component Power" text="React makes UI reusable and clean." />
      </main>
      <Footer />
    </>
  );
}
