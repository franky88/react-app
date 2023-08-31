import Navbar from "./components/Navbar";
import ListGroup from "./components/ListGroup";
import Card from "./components/Card";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  let fruits = ["Banana", "Mango", "Papaya", "Pineapple"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-3">
            <ListGroup
              items={fruits}
              headings="List Group"
              onSelectedItem={handleSelectItem}
            />
          </div>
          <div className="col-sm-9">
            {alertVisible && (
              <Alert
                onClose={() => {
                  setAlertVisibility(false);
                }}
                title="Ohh wow!"
              >
                It is working! <a href="#">sample link</a>
              </Alert>
            )}
            <div className="card-group mt-3 gap-2">
              {fruits.map((fruit) => (
                <Card
                  key={fruit}
                  message={fruit}
                  title={fruit}
                  onClick={() => {
                    setAlertVisibility(true);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
