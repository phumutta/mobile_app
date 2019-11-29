import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import MessageRow from './MessageRow';




const MessageListview = ({ itemList }) => (
    <View style={styles.container}>
            <FlatList
                    data={itemList}
                    renderItem={({ item }) => <MessageRow
                        sender={item.sender}
                        name={item.name}
                        message={item.message}
                        image_url={item.image_url}
                    />}
                />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MessageListview;
