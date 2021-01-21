import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Animated
} from "react-native";
import {} from 'react-native-iphone-x-helper'
import {icons, COLORS, SIZES, FONTS} from '../constants'

const Restaurant = ({ route, navigation }) => {

  const [restaurant, setRestaurant ] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  React.useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurant(item)
    setCurrentLocation(currentLocation)
  })

  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center'
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30
            }}
          />
        </TouchableOpacity>

        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <View
                style={{
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: SIZES.padding * 3,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray3
                }}
            >
                <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
            </View>
        </View>

        <TouchableOpacity
            style={{
                width: 50,
                paddingRight: SIZES.padding * 2,
                justifyContent: 'center'
            }}
        >
            <Image
                source={icons.list}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30
                }}
            />
        </TouchableOpacity>
      </View>
    )
  }

  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      >
        {
          restaurant?.menu.map((item, index) => (
              <View
                  key={`menu-${index}`}
                  style={{ alignItems: 'center' }}
              >
                  <View style={{ height: SIZES.height * 0.35 }}>

                      <Image
                          source={item.photo}
                          resizeMode="cover"
                          style={{
                              width: SIZES.width,
                              height: "100%"
                          }}
                      />
                       <View
                            style={{
                                position: 'absolute',
                                bottom: - 20,
                                width: SIZES.width,
                                height: 50,
                                justifyContent: 'center',
                                flexDirection: 'row'
                            }}
                        >
                          <TouchableOpacity
                              style={{
                                  width: 50,
                                  backgroundColor: COLORS.white,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderTopLeftRadius: 25,
                                  borderBottomLeftRadius: 25
                              }}

                          >
                              <Text style={{ ...FONTS.body1 }}>-</Text>
                          </TouchableOpacity>
                          <View
                              style={{
                                  width: 50,
                                  backgroundColor: COLORS.white,
                                  alignItems: 'center',
                                  justifyContent: 'center'
                              }}
                          >
                              <Text style={{ ...FONTS.h2 }}>5</Text>
                          </View>

                          <TouchableOpacity
                              style={{
                                  width: 50,
                                  backgroundColor: COLORS.white,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderTopRightRadius: 25,
                                  borderBottomRightRadius: 25
                              }}

                          >
                              <Text style={{ ...FONTS.body1 }}>+</Text>
                          </TouchableOpacity>
                        </View>
                  </View>

                  <View
                      style={{
                          width: SIZES.width,
                          alignItems: 'center',
                          marginTop: 15,
                          paddingHorizontal: SIZES.padding * 2
                      }}
                  >
                      <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}>{item.name} - {item.price.toFixed(2)}</Text>
                      <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
                  </View>
              </View>
          ))
        }

      </Animated.ScrollView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: COLORS.lightGray2
  }
})

export default Restaurant;