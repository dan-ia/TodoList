import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    title: string
}

export function Title({ title }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}