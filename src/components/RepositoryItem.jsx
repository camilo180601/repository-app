import React from 'react'
import { Image, View, StyleSheet, Platform } from 'react-native'
import StyleText from './StyleText'
import RepositoryStats from './RepositoryStats.jsx'
import theme from '../theme'

const RepositoryItemHeaders = ({ repository }) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2}}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{uri: repository.ownerAvatarUrl}} />
            </View>
            <View style={{ flex: 1 }} >
                <StyleText fontWeight='bold'>{repository.fullName}</StyleText>
                <StyleText color='secondary'>{repository.description}</StyleText>
                <StyleText style={styles.language}>{repository.language}</StyleText>
            </View>
        </View>
    )
}

const RepositoryItem = ({ repository }) => {
    return (
        <View key={repository.id} style={styles.container}>
            <RepositoryItemHeaders repository={repository} />
            <RepositoryStats repository={repository} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: 'orange',
            default: 'purple'
        }),
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem