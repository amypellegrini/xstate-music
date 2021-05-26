import "./App.css";

function GridItem({ children }) {
  return <div style={{ width: "150px", margin: "60px" }}>{children}</div>;
}

function Circle({ harmonicFunction }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fillOpacity="0"
        stroke="#000000"
        stroke-width="2"
      />
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        style={{
          fontFamily: "monospace",
          fontSize: "2rem",
        }}
      >
        {harmonicFunction}
      </text>

      <Arrow x1="45" x2="45" y1="95" y2="187" />
      <line x1="40" x2="45" y1="177" y2="187" stroke="green" strokeWidth="2" />
      <line x1="50" x2="45" y1="177" y2="187" stroke="green" strokeWidth="2" />

      <Arrow x1="60" x2="60" y1="5" y2="-87" />
      <line x1="55" x2="60" y1="-77" y2="-85" stroke="purple" strokeWidth="2" />
      <line x1="65" x2="60" y1="-77" y2="-85" stroke="purple" strokeWidth="2" />

      <Arrow x1="5" x2="-85" y1="45" y2="45" />
      <line x1="-80" x2="-85" y1="50" y2="45" stroke="red" strokeWidth="2" />
      <line x1="-80" x2="-85" y1="40" y2="45" stroke="red" strokeWidth="2" />

      <Arrow x1="95" x2="185" y1="60" y2="60" />
      <line x1="180" x2="185" y1="65" y2="60" stroke="blue" strokeWidth="2" />
      <line x1="180" x2="185" y1="55" y2="60" stroke="blue" strokeWidth="2" />
    </svg>
  );
}

function Arrow({ x1, x2, y1, y2 }) {
  return (
    <line x1={x1} x2={x2} y1={y1} y2={y2} stroke="#000000" strokeWidth="2" />
  );
}

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ display: "flex" }}>
          <GridItem />
          <GridItem>
            <Circle harmonicFunction="IV" />
          </GridItem>
        </div>
        <div style={{ display: "flex" }}>
          <GridItem>
            <Circle harmonicFunction="II" />
          </GridItem>
          <GridItem>
            <Circle harmonicFunction="V" />
          </GridItem>
          <GridItem>
            <Circle harmonicFunction="I" />
          </GridItem>
        </div>
        <div style={{ display: "flex" }}>
          <GridItem />
          <GridItem>
            <Circle harmonicFunction="VI" />
          </GridItem>
        </div>
      </div>
    </div>
  );
}

export default App;
