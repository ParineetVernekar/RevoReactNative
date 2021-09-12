import { StyleSheet, Dimensions, Platform } from 'react-native';
import { useMediaQuery } from 'react-responsive'

const styles =  StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'flex-start',
      padding: 15,
      // paddingTop: 100,
            marginBottom:40,
            

    },
    containerDesktop:{
        flex: 1,
        justifyContent: 'flex-start',
        padding:50
    },
     separatorStyle:{
      height: 2,
      backgroundColor: '#85C1A3',
      width: Dimensions.get('window').width,
      maxWidth: 400,
      alignSelf:'center',
      marginTop:15

      // marginBottom: 15
    },
    revoText: {
      fontSize: 50,
    },
    revoTextDesktop: {
        fontSize: 70
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
      maxWidth: 400

    },
    mainText: {
      fontSize: 40,
      width: Dimensions.get('window').width / 2,
      maxWidth:400

    },
    mainTextDesktop: {
        fontSize: 50,
        width: Dimensions.get('window').width / 2,
        maxWidth:400,
        paddingBottom:40
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
      maxWidth: 600,
      maxHeight:150
    }, addNewBottleContainer:{
      alignSelf:'flex-start'
  },
    signUpButtonText: {
      fontSize: 20,
      textAlign: "center",
      color: "white",
  
    }, buttonContent: {
      alignItems: "center",
      alignSelf:'flex-start'      
    },
     signUpSubText: {
      paddingTop: 10,
      fontStyle: "italic",
    },
    background: {
      flex: 1,
    },
    buttonDivider: {
      height: 1,
      backgroundColor: '#85C1A3',
      marginVertical: 3,
      maxWidth:600
    },
    tinyLogo: {
      // zIndex: -1,
      // position: "absolute",
      alignSelf: "flex-end",
      right:-120,
      // // top: 60,
      // // right:-190,
      width: 500,
      // // width: 400,
      // height: 350,
      height: 400,
      resizeMode:'contain',
      // borderColor:'red',
      // borderWidth: 1,
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
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      width: Dimensions.get('window').width - 40,
      marginTop: 15,
      maxWidth: 300,
      minWidth:150,
      alignSelf:'center'

    },buttonImage:{
      resizeMode:'contain',
      width: 40,
      height: 40,
      alignSelf: "flex-end",

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
      alignSelf:'center',
      // borderRadius: 100,
padding:10,
height: 60,
    }, modalView: {
      flex: 1
    }, enterPhoneNumberInfoText: {
      // alignSelf: "flex-start",
      fontSize: 25,
      paddingLeft: 40,
      maxWidth: 600  
    }, enterPhoneNumberDividerStyle: {
      height: 1,
      backgroundColor: '#85C1A3',
      width: Dimensions.get('window').width - 70,
      marginVertical: 10,
      maxWidth:600

    }, 
    verifyPhoneNumberButton: {
      backgroundColor: '#85C1A3',
      width: Dimensions.get('window').width,
      padding: 10,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 600

    }, 
    verifyPhoneNumberButtonText: {
      fontSize: 30,
      color: 'white'
    }, verifyPhoneNumberButtonBackground:{
      opacity: 1
    },verifyPhoneNumberButtonBackgroundDisabled:{
      opacity: 0.5
    },
    map:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    }
  });
  

  const homeStyles = StyleSheet.create({
    homeBanner:{
      backgroundColor: "#000000",
      flexDirection:'row',
        justifyContent:'center',
        alignSelf: 'center',
        minWidth: Dimensions.get('window').width,
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
        flexShrink:1,
        marginLeft:10

      },
      circularProgress:{
        alignItems:'center',
        backgroundColor:'white',
          width:Dimensions.get('window').width,
          height: 380,
          paddingTop: 15,
          alignSelf:'center'
        }, circularProgressDesktop:{
          alignItems:'center',
          backgroundColor:'white',
            width:Dimensions.get('window').width,
            height: 365,
            paddingTop: 15,
            marginRight: 20,
            marginTop: 10,

            maxWidth:300,
            borderRadius:15,
        minWidth:150,
            shadowColor: "gray",
            shadowRadius: 3,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            alignSelf:'center'
        },
        
        item: {
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
    
          }, itemDesktop:{
            minWidth:500
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
            alignSelf:'center',
            width: 110, 
            height:90,
            resizeMode:'contain'
          }
  })

  const accountStyle = StyleSheet.create({
    container:{
      color:'red',
      flex:1,
      alignContent:'center',
      alignItems:'center',
      paddingHorizontal:20
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
      width:Dimensions.get('window').width,
      minWidth:Dimensions.get('window').width,
      maxHeight:320,
      alignSelf:'center'
    }, joinViewDesktop:{
      backgroundColor:'#ffffff',
      alignItems:'flex-start',
      alignSelf:'flex-start',
      padding:20,
      shadowColor: "gray",
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      maxWidth:360,
      width:360,
      // margin: 20,
      marginHorizontal:20,
      borderRadius:15,
      alignSelf:'center',
      height:330,
      justifyContent:'space-between'
    },
    joinText:{
      fontSize: 20
    },
    treeImage:{
      alignSelf:'flex-end',

      // position:'absolute',
    bottom: 40,
    // alignSelf:'flex-end',
    // right:15,
    // width: 90, 
    // height:80,
    // resizeMode:'contain'
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
    backgroundColor:'#85C1A3',
    maxWidth:700
  },
  hippo:{
    width:200,
    height: 150,
    resizeMode:'contain',
    alignSelf: "center",
    marginTop:5


  }
  })
  const bottleDetailStyles =  StyleSheet.create({
    container:{
      flex:1
    },
    innerView:{
      backgroundColor:'white',
      borderRadius: 20,
      flex:0.4,
      margin:15,
      padding:20,
      shadowColor: "gray",
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
    },
    makerText:{
      fontSize:13,
      color: '#85C1A3'
    },
    textContainer:{
      padding:3,
      flexShrink:1
    }
  })
  export {styles, homeStyles, accountStyle, bottleDetailStyles}

