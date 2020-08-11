import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
const MyCounter = (props) => {
    const [isCounter, setCounter] = useState(parseInt(props.start));

    const { end } = props;
    const press = () => {
        if (isCounter < parseInt(end)) {
            setCounter(isCounter + 1);
        }
    };

    return (
        <View>
            <Text>{isCounter}</Text>
            <Button
                title="Klick mich"
                onPress={press}
                disabled={isCounter < parseInt(end) ? false : true}
            />
        </View>
    );
}

export default MyCounter;
