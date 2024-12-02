import { FlatList, StyleSheet } from "react-native";
import ChatItem from "./ChatItem";

export default function ChatList({ chats, onChatPress }) {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) => (
                <ChatItem 
                    chat={item} 
                    onPress={() => onChatPress(item.id)}
                />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 20,
    },
});