import { PersonalDataForm } from "./components/formularios/PersonalDataForm";
import "./App.css";
import { useState } from "react";
import { NextAndPrevButtons } from "./components/formularios/NextAndPrevButtons";

function App() {
    const [currentForm, setCurrentForm] = useState(0);
    console.log(currentForm);
    const [validForm1, setValidForm1] = useState(false);

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
