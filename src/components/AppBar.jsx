import React from 'react'
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import StyleText from './StyleText.jsx'
import Constants from 'expo-constants'
import { Link, useLocation } from 'react-router-native'
import theme from '../theme.js'

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
}

const AppBarTab = ({ children, to }) => {

    const { pathname } = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyleText fontWeight='bold' style={textStyles}>
                {children}
            </StyleText>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.AppBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
    },
    text: {
        color: theme.AppBar.textSecondary,
        paddingHorizontal: 10
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.AppBar.textPrimary
    }

})

export default AppBar