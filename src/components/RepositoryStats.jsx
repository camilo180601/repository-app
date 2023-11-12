import React from 'react'
import StyleText from './StyleText'
import { StyleSheet, View } from 'react-native'

const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / 10}k`
        : String(value)
}

const RepositoryStats = ({ repository }) => {
    return (
        <View style={styles.containerStats}>
            <View>
                <StyleText align='center' fontWeight='bold'>Stars</StyleText>
                <StyleText align='center'>{parseThousands(repository.stargazersCount)}</StyleText>
            </View>
            <View>
                <StyleText align='center' fontWeight='bold'>Forks</StyleText>
                <StyleText align='center'>{parseThousands(repository.forksCount)}</StyleText>
            </View>
            <View>
                <StyleText align='center' fontWeight='bold'>Review</StyleText>
                <StyleText align='center'>{repository.reviewCount}</StyleText>
            </View>
            <View>
                <StyleText align='center' fontWeight='bold'>Rating</StyleText>
                <StyleText align='center'>{repository.ratingAverage}</StyleText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStats: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    }
})

export default RepositoryStats