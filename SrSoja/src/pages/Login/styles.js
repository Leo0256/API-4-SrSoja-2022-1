import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7BB26'
  },

  scroll:{
    flex: 1,
    alignItems:'center',
    paddingTop: '40%'
  },

  logoView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding:10
  },

  logotype: {
    height: 200,
    width: 150
  },

  logoText: {
    height: 100,
    width: 50
  },
  
  header: {
    height: '100%',
    width: '100%',
    padding: 10
  },
  
  body:{
    marginTop:20
  },
  
  bodyTitle: {
    color: '#333',
    marginBottom: 5,
    width: '100%',
    fontSize: 12
  },

  bodyInput: {
    color: 'black',
    width: 250,
    borderBottomWidth: 2,
    padding: 5,
    borderColor: '#555',
    borderRadius: 4,
    fontSize: 16,
    backgroundColor:'white'
  },
  bodyText:{
    color:'#F7BB26',
    textAlign: 'center',
  },
  bodyButton: {
    flex:1, 
    marginTop:'20%', 
    justifyContent:'center',
  },
  bodyButton1: {
    backgroundColor: "#343434",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginHorizontal: 10,

  },
  bodyButton2: {
    backgroundColor: "#343434",
    marginTop:10,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginHorizontal: 10,
    justifyContent: 'center',
    flexDirection: "row"
  },
  imagem2:{
    marginLeft: 10,
    width: 25,
    height: 28
  }
});
  
export default styles