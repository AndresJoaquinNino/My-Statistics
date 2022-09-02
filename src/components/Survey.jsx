import './../scss/components/Survey.scss'
import { Formik, Form, Field } from 'formik';
import { sendSurveyData } from '../api';
import { FaArrowRight } from "react-icons/fa";

function Survey({ dataTypes }) {

    const { socialMedia, genderTypes, rangesOfAge, rangeOfTime } = dataTypes;

    const socialMediaValues = socialMedia.reduce((acc, ele) => {
        return { ...acc, ['timeIn' + ele]: '' }
    }, {});

    const initialValues = {
        email: '',
        sex: '',
        age: '',
        favoriteSocialMedia: '',
        ...socialMediaValues,
    }

    const validationClass = (isInValid) => isInValid ? 'is-invalid' : '';

    const validate = (values) => {
        const errors = {};
        const numberRegex = /[0-9]/;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!emailRegex.test(values.email)) errors.email = '*Dirección de correo invalidad';

        for (const field in values) {
            if (field.includes('timeIn') && !numberRegex.test(values[field])) errors[field] = '*Solo números';
            if (values[field].trim() === '') errors[field] = '*Campo Requerido';
        }

        return errors;
    }

    const handleSubmit = (values, { resetForm }) => {
        sendSurveyData(values);
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validateOnChange={false}
            validateOnBlur={false}
            validate={validate}
            onSubmit={handleSubmit}
            render={({ errors }) => (
                <div className='form'>
                    <div className='card text-center py-2 mb-4'>
                        <span className='h2 text-primary mb-0'>
                            Encuestas de Redes Sociales
                        </span>
                    </div>
                    <Form className='card mx-auto p-3'>
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="form-label"
                            >
                                Correo Electrónico
                            </label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                className={`form-control ${validationClass(errors.email)}`}
                                placeholder="nombre@ejemplo.com"
                            />
                            <div
                                className='invalid-feedback'
                            >
                                {errors.email}
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col">
                                <label
                                    htmlFor="sex"
                                    className="form-label"
                                >
                                    Sexo
                                </label>
                                <Field
                                    id="sex"
                                    name="sex"
                                    as="select"
                                    className={`form-select ${validationClass(errors.sex)}`}
                                >
                                    <option defaultValue>...</option>
                                    {genderTypes.map((ele, index) => (
                                        <option key={index}>
                                            {ele}
                                        </option>
                                    ))}
                                </Field>
                                <div
                                    className='invalid-feedback'
                                >
                                    {errors.sex}
                                </div>
                            </div>
                            <div className="col">
                                <label
                                    htmlFor="age"
                                    className="form-label"
                                >
                                    Rango de Edad
                                </label>
                                <Field
                                    id="age"
                                    name="age"
                                    as="select"
                                    className={`form-select ${validationClass(errors.age)}`}
                                >
                                    <option defaultValue>...</option>
                                    {rangesOfAge.map((ele, index) => (
                                        <option key={index}>
                                            {ele}
                                        </option>
                                    ))}
                                </Field>
                                <div
                                    className='invalid-feedback'
                                >
                                    {errors.age}
                                </div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="favoriteSocialMedia"
                                className="form-label"
                            >
                                Red Social Favorita
                            </label>
                            <Field
                                id="favoriteSocialMedia"
                                name="favoriteSocialMedia"
                                as="select"
                                className={`form-select ${validationClass(errors.favoriteSocialMedia)}`}
                            >
                                <option defaultValue>...</option>
                                {socialMedia.map((ele, index) => (
                                    <option key={index}>
                                        {ele}
                                    </option>
                                ))}
                            </Field>
                            <div
                                className='invalid-feedback'
                            >
                                {errors.favoriteSocialMedia}
                            </div>
                        </div>
                        <span className='mb-3'> ¿Cuántas horas pasas en tus redes sociales al dia? </span>
                        <div className='row justify-content-center px-2 mb-2'>
                            {socialMedia.map((ele, index) => (
                                <div className='w-50 mb-2' key={index}>
                                    <label
                                        htmlFor={`timeIn${ele}`}
                                        className="form-label"
                                    >
                                        {ele}
                                    </label>
                                    <Field
                                        id={`timeIn${ele}`}
                                        name={`timeIn${ele}`}
                                        as="select"
                                        className={`form-select  ${validationClass(errors[`timeIn${ele}`])}`}
                                    >
                                        <option defaultValue>...</option>
                                        {rangeOfTime.map((ele, index) => (
                                            <option value={ele} key={index}>
                                                {ele}
                                            </option>
                                        ))}
                                    </Field>
                                    <div
                                        className='invalid-feedback'
                                    >
                                        {errors[`timeIn${ele}`]}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary px-5 ms-auto"
                        >
                            <span className='me-2'>Enviar</span>
                            <FaArrowRight />
                        </button>
                    </Form>
                </div>
            )}
        />
    );
}

export default Survey;
