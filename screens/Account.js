import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
} from 'react-native';
import { Button, Avatar } from 'react-native-elements';

class Account extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Avatar
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                    rounded
                    size={150}
                    containerStyle={{ marginTop: 20, marginLeft: 20 }}
                />
                <Text style={ styles.name }>Pete Wiley</Text>
                <Text style={ styles.status }>Maker Pro</Text>
                <Button 
                onPress={() => this.props.navigation.navigate('EditAccount')}
                containerStyle={{ marginTop: 40 }}
                buttonStyle={{ backgroundColor: "#e80707" }}
                title="Edit Account"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 40,
        marginLeft: 10,
        color: 'black'
    },
    status: {
        fontSize: 30,
        marginLeft: 10,
        fontStyle: 'italic'
    },
    container: {
        flex: 1,
        
        alignItems: 'center',     
    }
})

export default Account;
