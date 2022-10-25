import { PersonalDataForm } from "./components/formularios/PersonalDataForm";
import "./App.css";
import { useState } from "react";
import { AccessDataForm } from "./components/formularios/AccessDataForm";

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
            {currentForm === 1 ? (
                <AccessDataForm
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                />
            ) : (
                ""
            )}
            {currentForm === 2 ? <div>EN OBRAS</div> : ""}
        </div>
    );
}

export default App;
