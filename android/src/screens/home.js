import React, { Component } from 'react';
import { View, StatusBar, Text, TextInput, FlatList, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Hoshi } from 'react-native-textinput-effects';

let database = [
  { indonesia: 'Ayam', english: 'Chicken' },
  { indonesia: 'Anjing', english: 'Dog' },
  { indonesia: 'Kucing', english: 'Cat' },
  { indonesia: 'Kelinci', english: 'Rabbit' },
  { indonesia: 'Ikan', english: 'Fish' },
  { indonesia: 'Hiu', english: 'Shark' },
  { indonesia: 'Paus', english: 'Whale' },
]

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: database
    };
  }

  search = () => {
    let data = database;

    data = data.filter(item => item.indonesia.toLowerCase().includes(this.state.text.toLowerCase()));

    this.setState({
      data: data
    })
  }

  drawerMenuNavigation = (route) => {
    this.drawer.closeDrawer();
    this.props.navigation.navigate(route);
  }


  renderDrawer = () => {
    return(
      <View>
        <View style={{height: 150}}>
          <ImageBackground source={require('../images/book.jpg')} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#FFFFFF', fontSize: 36, fontFamily: 'Chewy-Regular'}}>Kamusku</Text>
          </ImageBackground>
        </View>

        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', margin: 10}}
          onPress={() => this.drawerMenuNavigation('Home')}
        >
          <View style={{width: 50, height: 25, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="home" size={25} color="#03a9f4" style={{ marginRight: 10 }} />
          </View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#03a9f4', marginLeft: 10}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', margin: 10}}
          onPress={() => this.drawerMenuNavigation('About')}
        >
          <View style={{ width: 50, height: 25, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="user" size={25} color="#9e9e9e" style={{ marginRight: 10 }}/>
          </View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#9e9e9e', marginLeft: 10}}>About Me</Text>
        </TouchableOpacity>
      </View>
    )
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
            <Icon name="bars" size={25} color="#FFFFFF" style={{ marginRight: 10 }} onPress={() => this.drawer.openDrawer()} />
            <View style={{flex: 1}}>
              <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 18 }}>KAMUSKU</Text>
            </View>
            
          </View>

          <View style={{marginHorizontal: 20, marginVertical: 10, backgroundColor: '#F9F7F6'}}>
            <Hoshi
              label={'Masukkan kata kunci'}
              // this is used as active border color
              borderColor={'#03a9f4'}
              // active border height
              borderHeight={3}
              inputPadding={16}
              // this is used to set backgroundColor of label mask.
              // please pass the backgroundColor of your TextInput container.
              backgroundColor={'#F9F7F6'}

              onChangeText={text => this.setState({ text: text })}
              value={this.state.text}
              onKeyPress={() => this.search()}
            />
          </View>

         

          <FlatList
            data={this.state.data}
            renderItem={({ item }) =>
              <TouchableOpacity style={{ elevation: 1, borderWidth: 1, borderColor: '#9e9e9e', borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, flexDirection: 'row', alignItems: 'center' }}
                onPress={() => this.props.navigation.navigate('Detail', {indonesia: item.indonesia, english: item.english}) }
              >
                <View style={{flex: 1}}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.indonesia}</Text>
                  <Text style={{ fontSize: 16, marginTop: 5 }}>{item.english}</Text>
                </View>
                <Icon name="chevron-right" size={25} color="#03a9f4" />
              </TouchableOpacity>
            }
            keyExtractor={item => item.indonesia}
          />

        </View>
      </DrawerLayout>
    );
  }
}

export default Home;