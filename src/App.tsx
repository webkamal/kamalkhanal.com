import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("✅ App component mounted");
  }, []);

  return (
    <div style={{ fontSize: "32px", color: "black", padding: "2rem" }}>
      ✅ Hello Kamal Khanal — Your App Works!
    </div>
  );
}

export default App;
