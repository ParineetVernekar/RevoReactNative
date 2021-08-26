import { StyleSheet, Dimensions, Platform } from 'react-native';
const styles =  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 15,
      // paddingTop: 100,
            marginBottom:40

    }, separatorStyle:{
      height: 2,
      backgroundColor: '#85C1A3',
      width: Dimensions.get('window').width,
      // marginBottom: 15
    },
    revoText: {
      fontSize: 50,
    },
    homeSubText: {
      fontSize: 15,
      paddingBottom: 15
    },
    textContainer: {
      alignContent: "flex-start",
    },
    dividerStyle: {
      width: 100,
      backgroundColor: "#85C1A3",
      height: 3,
    },
    mainText: {
      fontSize: 40,
      width: Dimensions.get('window').width / 2
    },
    button: {
      backgroundColor: "#FBA131",
      height: 60,
      borderRadius: 15,
      padding: 20,
      shadowColor: "gray",
      shadowRadius: 2,
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 1,
      width: Dimensions.get('window').width - 40,
    },
    signUpButtonText: {
      fontSize: 20,
      textAlign: "center",
      color: "white",
  
    }, buttonContent: {
      alignItems: "center"
    }, signUpSubText: {
      paddingTop: 10,
      fontStyle: "italic"
    },
    background: {
      flex: 1,
    },
    buttonDivider: {
      height: 1,
      backgroundColor: '#85C1A3',
      marginVertical: 3
    },
    tinyLogo: {
      zIndex: -1,
      position: "absolute",
      alignSelf: "flex-end",
      top: 30,
    },
    addBottleSubText: {
      color: '#2FBB89',
      fontSize: 13
    },
    addBottleButton: {
      backgroundColor: '#ffffff',
      height: 60,
      borderRadius: 15,
      padding: 20,
      // paddingTop: 5,
      justifyContent: 'center',
      shadowColor: "gray",
      shadowRadius: 2,
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 1,
      width: Dimensions.get('window').width - 40,
      marginTop: 15,
      maxWidth: 400,
      alignSelf:'center'

    },
    addBottleText: {
      fontSize: 18
    },
    addbottlebuttonSubView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
    },
    enterPhoneNumber: {
      width: Dimensions.get('window').width - 40,
      backgroundColor: "#ffffff",
      borderRadius: 5,
      height: 60 
  
    }, modalView: {
      flex: 1
    }, enterPhoneNumberInfoText: {
      alignSelf: "flex-start",
      fontSize: 25,
      paddingLeft: 40
    }, enterPhoneNumberDividerStyle: {
      height: 1,
      backgroundColor: '#85C1A3',
      width: Dimensions.get('window').width - 70,
      marginVertical: 10
    }, 
    verifyPhoneNumberButton: {
      backgroundColor: '#85C1A3',
      width: Dimensions.get('window').width,
      padding: 10,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    verifyPhoneNumberButtonText: {
      fontSize: 30,
      color: 'white'
    }, verifyPhoneNumberButtonBackground:{
      opacity: 1
    },verifyPhoneNumberButtonBackgroundDisabled:{
      opacity: 0.5
    }
  });
  

  const homeStyles = StyleSheet.create({
      homeBanner:{
        backgroundColor: "#000000",
        flexDirection:'row',
          justifyContent:'space-around',
          alignSelf: 'center',
          width: Dimensions.get('window').width,
          padding: 4
      },
      homeBannerItemContainer:{
          textAlign: 'center',
          alignItems:'center',
          backgroundColor: "#000000",
          padding: 5
      },
      homeBannerItemSubText:{
          color: "#ffffff"
      },
      homeBannerItemMainText:{
          fontSize: 30,
          color: "#85C1A3"
      },
      itemSubView:{
          flexDirection:'row',
        //   width: Dimensions.get('window').width - 40
      }, name:{
        flexShrink:1

      },
      circularProgress:{
          alignItems:'center',
          backgroundColor:'white',
            width:Dimensions.get('window').width,
            height: 380,
            paddingTop: 15
        
        }, item: {
            backgroundColor: '#ffffff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius:15,
            shadowColor: "gray",
            shadowRadius: 3,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
                    //   width: Dimensions.get('window').width - 40
    
          },
         
          maker:{
              color:'#85C1A3'
          },
          progressMainText:{
              color:'#2FBB89',
              fontSize:80
          },
          progressSubText:{
              color:'#878F8C'
          },
          progressViewRefillsSubText:{
              textAlign:'center',
              fontStyle:'italic'
          },
          treeCentralImage:{
              position:'absolute',
            top: 240,
            alignSelf:'center'
          }
  })

  const accountStyle = StyleSheet.create({
    container:{
      color:'red',
      flex:1,
      alignContent:'center',
      alignItems:'center'
    },
    phoneNumber:{
      fontSize:27
    },
    joinView:{
      backgroundColor:'#ffffff',
      alignItems:'flex-start',
      padding:20,
      shadowColor: "gray",
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
    },
    joinText:{
      fontSize: 20
    },
    treeImage:{
      position:'absolute',
    top: 215,
    alignSelf:'flex-end',
    right:15
  },
  accountEndButtons:{
    color:'#3E4743',
    paddingHorizontal: 14,
    fontSize: 16,
    paddingBottom: 15,
    paddingTop: 10
  },
  bottomDivider:{
    alignSelf:'center',
    width: Dimensions.get('window').width  -30,
    height: 2,
    backgroundColor:'#85C1A3'
  }
  })

  export {styles, homeStyles, accountStyle}
