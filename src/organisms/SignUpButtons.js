/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Alert
} from 'react-native';

// galio component
import { Block, Button, Text} from 'galio-framework';
import theme from '../theme';

const SignUpButtons = ({navigation}) => {
  return (
    <Block flex center>
      <Block flex middle>
        <Button
          round
          color="primary"
          size="large"
          onPress={() =>
            Alert.alert(
              'Sign up action',
              `
              Username: ${'user'}
              Email: ${'email'}
              Password: ${'password'}`
            )
          }
        >
          Sign up
        </Button>
        <Text 
          center
          size={theme.SIZES.FONT * 0.75}
          style={{ paddingTop: 8 }}
          onPress={() => navigation.navigate('Login')}
          >
          Already have an account? Sign In
        </Text>
      </Block>
    </Block>

  )
};

export default SignUpButtons;
