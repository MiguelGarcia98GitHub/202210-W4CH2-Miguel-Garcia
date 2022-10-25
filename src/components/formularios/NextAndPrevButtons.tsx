export function NextAndPrevButtons({
    currentForm,
    setCurrentForm,
    form,
    form1,
}: {
    currentForm: number;
    setCurrentForm: any;
    form: any;
    form1: any;
}) {
    return (
        <div>
            {" "}
            <button
                type="button"
                disabled={currentForm === 0 ? true : false}
                onClick={() => {
                    if (
                        form.birthdate === true &&
                        form.email === true &&
                        form.gender === true &&
                        form.lastname === true &&
                        form.name === true &&
                        form.newsletter === true
                    ) {
                        setCurrentForm(currentForm++);
                    }
                }}
            >
                Previous Form
            </button>
            <button
                type="button"
                onClick={() => {
                    if (
                        currentForm === 0 &&
                        form.birthdate.length > 2 &&
                        form.email.length > 2 &&
                        form.gender.length > 2 &&
                        form.lastname.length > 2 &&
                        form.name.length > 2 &&
                        form.newsletter === true
                    ) {
                        setCurrentForm(currentForm++);
                    }

                    if (
                        currentForm === 1 &&
                        form1.username.length > 2 &&
                        form1.password === form1.repeatpassword &&
                        form1.password > 2 &&
                        form1.repeatpassword > 2
                    ) {
                        setCurrentForm(currentForm++);
                    }
                }}
            >
                Next Form
            </button>
        </div>
    );
}
