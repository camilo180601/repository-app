import React from 'react'
import { View } from 'react-native'
import { Switch, Route, Redirect } from 'react-router-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import Login from '../pages/Login'

const Main = () => {
    return (
        <View style={{flexGrow: 1 }}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/signin' exact>
                    <Login />
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    )
}

export default Main