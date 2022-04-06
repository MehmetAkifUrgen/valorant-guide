import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');
import colors from '../../colors/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    
    alignItems:'center'
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    color: '#f5f5f5',
    fontSize: 16,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
    borderRadius: 2,
    borderWidth: 2,
    
    borderColor: colors.dark,
    
  },
  smallText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#Ebf6f7',
  },
  four: {
    width: window.width / 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  last: {
    width: window.width / 3.5,
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    color: '#f8f8ff',
  },
  character: {
    color: '#fdf5e6',
    fontSize: 13,
  },
  gameList: {
    margin: 7,
    padding: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:window.width *0.9
    
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  headView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    color: 'white',
    fontSize: 16,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: window.width * 0.6,
    marginTop: 10,
  },
  modal: {
    
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  date:{
    fontSize:15,
    color:'#fdf5e6',
    fontWeight:'500'
  },
  kda:{
    fontSize:18,
    color:'#f5f5f5',
    fontWeight:'800'
  },
  map:{
    fontSize:15,
    color:'#f8f8ff',
    fontWeight:'600'
  },
  team:{
    fontSize:14,
    color:'#Ebf6f7',
    fontWeight:'500'
  },
  gameItemRightView:{
    
    alignItems:'flex-start',
    justifyContent:'center',
    margin:4
  }
});
