import { View, ScrollView, SafeAreaView} from "react-native";
import BottomNavBar from "../components/BottomNavBar";
import Card from "../components/Card";
import TopNavBar from "../components/TopNavBar";

export default function FeedPage({ navigation }) {
  return (
    <View className="flex-1 h-screen items-center justify-center scroll">
      <SafeAreaView className="flex-1">
        <View className="grow">
          <TopNavBar className="m-2" value="" onChangeText={() => {}} />
        </View>
        <View className="w-screen items-center justify-center android:top-10">
        <ScrollView className="w-screen position-relative scroll ">
          <Card
            url="https://project.up.railway.app/_next/image?url=https%3A%2F%2Fsbleaping.s3.us-east-1.amazonaws.com%2Fsb%2F7b57ff9681d844198ddca4cbe9b92554.png&w=1080&q=90"
            className="h-40"
          />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
      </SafeAreaView>
      <BottomNavBar navigation={navigation} />
    </View>
  );
}
