import React,{useState}  from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { colors } from '../global/Vendor/Styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import { Badge, withBadge } from '@rneui/base';

export default function Header(props) {

    let [notifyCount,setNotifyCount]=useState(1)
    const BadgeIcon=withBadge(notifyCount)(Icon1)

    return (
        <View style={styles.titleBar}>
            <View style={{flex:.2,marginLeft:10,padding:10}}>
                <Icon
                name='navicon' 
                color={colors.cardbackground}
                size={30}
                onPress={()=>{
                    props.navigate.toggleDrawer()
                }}
                />   
            </View>
            <View style={{flex:.8}}>
                <Text style={styles.titleText}>{props.title} Dashboard</Text>
            </View>
{/*             <View style={{marginRight:15}}>
                <BadgeIcon
                    name="bell"
                    size={35}
                    color={colors.cardbackground}
                    onPress={()=>alert('Notifications In Progress')}
                />
            </View> */}
        </View>
    )
  }

const styles = StyleSheet.create({
    titleBar:{
        width:'100%',
        height:80,
        backgroundColor:colors.buttons,
        flexDirection:'row',
        alignItems:'center',
       // justifyContent:'space-evenly',
        paddingHorizontal:15
    },
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        color:colors.cardbackground
    }
})
