import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems:'flex-start',
        flex: 1,
        flexDirection: 'row',
        marginRight:16,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    container_text1: {
        flex: 1,
        flexDirection: 'column',
        borderRadius:10,
        paddingLeft:5,
        justifyContent: 'center',
        backgroundColor:'#1F9BF1',
        marginLeft:'50%'
    },
    container_text2: {
        flex: 1,
        flexDirection: 'column',
        borderRadius:10,
        paddingLeft:5,
        justifyContent: 'center',
        backgroundColor:'#1F9BF1',
        marginRight:'50%'
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        color: '#FFFFFF',
    },
    photo: {
        height: 40,
        width: 40,
        marginRight:5,
        marginLeft:5,

    },
});


const MessageRow = ({sender,name,message,image_url}) => (

    <View>
      {!sender?(<View style={styles.container}>
          <Image source={{ uri: image_url }} style={styles.photo} />
          <View style={styles.container_text2}>
            <Text style={styles.title}>
                {message}
            </Text>
            <Text style={styles.description}>
                {name}
            </Text>
        </View>
      </View>):null}

      {sender?(<View style={styles.container}>
          <View style={styles.container_text1}>
            <Text style={styles.title}>
                {message}
            </Text>
            <Text style={styles.description}>
                {name}
            </Text>
          </View>
        <Image source={{ uri: image_url }} style={styles.photo} />
      </View>):null}


    </View>
);

export default MessageRow;
