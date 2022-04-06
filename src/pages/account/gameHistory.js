import { View, Text,FlatList,Image } from 'react-native'
import React from 'react'
import styles from './account.style'
import colors from '../../colors/colors'
export default function GameHistory({navigate,route}) {
    const {data} =route.params
    const renderItem = ({ item }) => {
        return (
          <View
            style={[
              styles.itemView,
              { backgroundColor: item.team.toLowerCase() == 'blue' ? '#0047ab' : colors.main },
            ]}
          >
            <View style={styles.four}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: item.assets.agent.small }}
              />
              <Text style={styles.character}> {item.character} </Text>
              <Text numberOfLines={1} adjustsFontSizeToFit style={styles.name}>
                {' '}
                {item.name}
              </Text>
            </View>
            <View>
              <Text style={styles.text}>
                {' '}
                {item.stats.kills}/{item.stats.deaths}/{item.stats.assists}{' '}
              </Text>
            </View>
            <View style={styles.four}>
              <Text style={styles.text}> Level : {item.level} </Text>
              <Text style={styles.text}> {item.currenttier_patched} </Text>
            </View>
            <View style={styles.last}>
              <Text style={styles.smallText}> Total Damage : {item.damage_made} </Text>
              <Text style={styles.smallText}> Headshots : {item.stats.headshots} </Text>
              <Text style={styles.smallText}> Bodyshots : {item.stats.bodyshots} </Text>
              <Text style={styles.smallText}> LegShots : {item.stats.legshots} </Text>
            </View>
          </View>
        );
      };
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}