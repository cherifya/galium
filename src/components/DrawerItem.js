import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, Icon } from "galio-framework";

import theme from '../theme';

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Home":
        return (
          <Icon
            name="shop"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : theme.COLORS.PRIMARY}
          />
        );
      case "Elements":
        return (
          <Icon
            name="map"
            family="font-awesome"
            size={14}
            color={focused ? "white" : theme.COLORS.ERROR}
          />
        );
      case "Articles":
        return (
          <Icon
            name="rocket"
            family="font-awesome"
            size={14}
            color={focused ? "white" : theme.COLORS.PRIMARY}
          />
        );
      case "Profile":
        return (
          <Icon
            name="chart-pie"
            family="font-awesome-5"
            size={14}
            color={focused ? "white" : theme.COLORS.WARNING}
          />
        );
      case "Account":
        return (
          <Icon
            name="calendar-alt"
            family="font-awesome-5"
            size={14}
            color={focused ? "white" : theme.COLORS.INFO}
          />
        );
      case "Dashboard":
        return (
          <Icon
            name="dashboard"
            family="font-awesome"
            size={14}
            color={focused ? "white" : theme.COLORS.INFO}
          />
        );
      case "Settings":
        return (
          <Icon
            name="settings"
            family="feather"
            size={14}
            color={focused ? "white" : theme.COLORS.INFO}
          />
        );
      case "Getting Started":
        return (<Icon
          name="hands-helping"
          family="font-awesome-5"
          size={14}
          color={focused ? "white" : "rgba(0,0,0,0.5)"}
        />);
      case "Log out":
        return <Icon />;
      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() =>
          title == "Getting Started"
            ? Linking.openURL(
                "https://demos.creative-tim.com/argon-pro-react-native/docs/"
              ).catch(err => console.error("An error occurred", err))
            : navigation.navigate(title)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  activeStyle: {
    backgroundColor: theme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
