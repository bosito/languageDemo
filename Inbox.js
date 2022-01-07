import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Trans } from '@lingui/react';

export default function Inbox() {
    return (
        <View>
            <Text style={styles.heading}>
                <Trans>Message Inbox</Trans>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})
