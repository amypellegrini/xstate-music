import "./App.css";

function GridItem({ children }) {
  return <div style={{ width: "100px", margin: "30px" }}>{children}</div>;
}

function Circle() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="50"
        cy="50"
        r="45"
        fillOpacity="0"
        stroke="green"
        stroke-width="4"
      />
    </svg>
  );
}

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <GridItem />
        <GridItem>
          <Circle />
        </GridItem>
      </div>
      <div style={{ display: "flex" }}>
        <GridItem>
          <Circle />
        </GridItem>
        <GridItem>
          <Circle />
        </GridItem>
        <GridItem>
          <Circle />
        </GridItem>
      </div>
      <div style={{ display: "flex" }}>
        <GridItem />
        <GridItem>
          <Circle />
        </GridItem>
      </div>
    </div>
  );
}

export default App;
