import React, { Component } from 'react';
import { View, StatusBar, Text, TouchableOpacity, ImageBackground} from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Icon from 'react-native-vector-icons/FontAwesome5';

class About extends Component {

  renderDrawer = () => {
    return (
      <View >
         <View style={{height: 150}}>
          <ImageBackground source={require('../images/book.jpg')} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#FFFFFF', fontSize: 36, fontFamily: 'Chewy-Regular'}}>Kamusku</Text>
          </ImageBackground>
        </View>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
          onPress={() => this.drawerMenuNavigation('Home')}
        >
          <View style={{ width: 50, height: 25, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="home" size={25} color="#9e9e9e" style={{ marginRight: 10 }} />
          </View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#9e9e9e', marginLeft: 10 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
          onPress={() => this.drawerMenuNavigation('About')}
        >
          <View style={{ width: 50, height: 25, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="user" size={25} color="#03a9f4" style={{ marginRight: 10 }} />
          </View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#03a9f4', marginLeft: 10 }}>About Me</Text>
        
        </TouchableOpacity>
      </View>
    )
  }

  drawerMenuNavigation = (route) => {
    this.drawer.closeDrawer();
    this.props.navigation.navigate(route);
  }

  render() {
    return (
      <DrawerLayout
        ref={drawer => {
          this.drawer = drawer;
        }}
        drawerWidth={250}
        drawerPosition={DrawerLayout.positions.Left}
        drawerType='front'
        drawerBackgroundColor="#FFF"
        renderNavigationView={this.renderDrawer}>

        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#0288d1" barStyle="light-content" />

          <View style={{ padding: 20, backgroundColor: '#03a9f4', elevation: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="bars" size={25} color="#FFFFFF" onPress={() => this.drawer.openDrawer()} />
            <View style={{ flex: 1 }}>
              <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 18 }}>ABOUT ME</Text>
            </View>
          </View>

          <View style={{margin: 20}}>

         
            <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>KSL PAMEKASAN</Text>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>AHMAD HOSEN</Text>

            <Text style={{marginTop: 10, textAlign: 'justify'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet lacus quis tempor fringilla. Vivamus a risus dapibus, pharetra odio eget, ullamcorper sem. Donec faucibus dictum dolor non fringilla. Sed in tortor id arcu auctor iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consequat augue nec sem varius vehicula. Aliquam dictum blandit erat. Aliquam gravida augue eu orci imperdiet, vel interdum metus mattis. Aenean ut erat leo. Vivamus pellentesque porta lorem non dictum. Donec ante leo, ullamcorper eget augue ac, tincidunt finibus odio. Aenean purus felis, ornare vulputate ipsum in, facilisis eleifend dolor. Curabitur in enim a felis pretium tempor. Cras eu imperdiet dui.
            </Text>

            <Text style={{marginTop: 20, fontWeight: 'bold'}}>Special Thanks to </Text>
            <Text> - Drawer Photo by Dollar Gill on Unsplash</Text>

          </View>

          

        </View>
      </DrawerLayout>
    );
  }
}

export default About;