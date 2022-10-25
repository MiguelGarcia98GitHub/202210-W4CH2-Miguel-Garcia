import { PersonalDataForm } from "./components/formularios/PersonalDataForm";
import "./App.css";
import { useState } from "react";

function App() {
    const [currentForm, setCurrentForm] = useState(0);
    console.log(currentForm);

    return (
        <div className="App">
            {currentForm === 0 ? (
                <PersonalDataForm
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                />
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
