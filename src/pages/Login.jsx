import { loginValidationSchema } from '../validationSchemas/login'
import StyleTextInput from '../components/StyleTextInput'
import { StyleSheet, View, Button } from 'react-native'
import StyleText from '../components/StyleText'
import { Formik, useField } from 'formik'
import React from 'react'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 10,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <StyleTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyleText style={styles.error}>{meta.error}</StyleText>}
        </>
    )
}

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Email is Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) errors.password = 'Password is Required'

    console.log(errors)

    return errors
}

const Login = () => {
    
    return (
        <Formik validationSchema={loginValidationSchema} initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleSubmit }) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue
                            name='email'
                            placeholder='Email'
                        />
                        <FormikInputValue
                            name='password'
                            placeholder='Password'
                            secureTextEntry
                        />
                        <Button onPress={handleSubmit} title='Log In' />
                    </View>
                )
            }}
        </Formik>
    )

}

export default Login