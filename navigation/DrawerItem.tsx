/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {Icon} from 'react-native-paper';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

interface MenuItem {
  name: string;
  icon: string;
  screen: string;
}

interface DrawerItemProps {
  item: MenuItem;
  route: string;
  expand: () => void;
  isExpanded: boolean;
  textOpacityAnim: Animated.Value;
  hasTVPreferredFocus: boolean;
}

const DrawerItem = ({
  item,
  route,
  expand,
  isExpanded,
  textOpacityAnim,
  hasTVPreferredFocus,
}: DrawerItemProps) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const isActive = item.screen === route;

  return (
    <TouchableOpacity
      key={item.name}
      hasTVPreferredFocus={hasTVPreferredFocus}
      onFocus={() => {
        setIsFocused(true);
        if (!isExpanded) {
          expand();
        }
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      onPress={() => {
        navigation.navigate(item.screen);
      }}>
      <View style={styles.menuItem}>
        <Icon
          source={item.icon}
          size={24}
          color={isActive ? '#FF9900' : 'white'}
        />
        <Animated.Text
          style={[
            styles.menuItemText,
            {opacity: textOpacityAnim},
            isFocused && styles.focusedMenuItem,
          ]}>
          {item.name}
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    height: 54,
  },
  menuItemText: {
    color: 'white',
    marginLeft: 10,
    paddingBottom: 4,
  },
  focusedMenuItem: {
    borderBottomColor: '#FF9900',
    borderBottomWidth: 2,
  },
});
