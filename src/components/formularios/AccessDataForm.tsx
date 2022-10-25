import { useState } from "react";
import { NextAndPrevButtons } from "./NextAndPrevButtons";

type AccessData = {
    username: string;
    password: string;
    repeatpassword: string;
    account: string;
};

export function AccessDataForm({
    currentForm,
    setCurrentForm,
}: {
    currentForm: number;
    setCurrentForm: any;
}) {
    const accessdata = {
        username: "",
        password: "",
        repeatpassword: "",
        account: "personal",
    };

    const [form1, setForm1] = useState(accessdata);

    const handlerSubmit = (ev: any) => {
        ev.preventDefault();
        console.log("Enviando Personal Data Form...");
        setCurrentForm(2);
    };

    const handleForm = (ev: any) => {
        const element = ev.target as HTMLFormElement;
        console.log(element.name);
        setForm1({
            ...form1,
            [element.name]:
                element.type === "checkbox" ? element.checked : element.value,
        });
        console.log("handleform");
    };

    return (
        <>
            <div className="form__container">
                <form onSubmit={handlerSubmit}>
                    <legend>
                        <span className="form__title">Access Data Form</span>
                    </legend>
                    <div className="form__container__element">
                        <label>
                            <input
                                type="text"
                                name="username"
                                value={form1.username}
                                onInput={handleForm}
                                placeholder="Enter your username"
                            />
                        </label>
                    </div>
                    <div className="form__container__element">
                        <label>
                            <input
                                type="text"
                                name="password"
                                value={form1.password}
                                onInput={handleForm}
                                placeholder="Enter your password"
                            />
                        </label>
                    </div>
                    <div className="form__container__element">
                        <label>
                            <input
                                type="text"
                                name="repeatpassword"
                                value={form1.repeatpassword}
                                onInput={handleForm}
                                placeholder="Enter your password"
                            />
                        </label>
                    </div>
                    <div className="form__container__element">
                        <select
                            value={accessdata.account}
                            onChange={(event) =>
                                setForm1({
                                    ...form1,
                                    account: event.target.value,
                                })
                            }
                        >
                            <option value="personal">personal</option>
                            <option value="pro">pro</option>
                            <option value="business">business</option>
                        </select>
                    </div>
                </form>
            </div>
            <div>
                <NextAndPrevButtons
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                    form={{}}
                    form1={form1}
                />
                :
            </div>
        </>
    );
}
