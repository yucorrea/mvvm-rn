import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput } from "react-native"
import { useTodoViewModel } from "../presenters/todo.view.model"

export const Todo = () => {
  const {handleAddTask, setText, tasks} = useTodoViewModel();

  return ( 
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Insira aqui um item" onChangeText={setText} style={styles.input} />
      <Button title="Salvar" onPress={handleAddTask} />

      <FlatList 
        keyExtractor={item => item.id.toString()} 
        data={tasks}
        renderItem={({item}) => <Text>{item.title}</Text>}  
        style={styles.list} 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 16,
  },
  list: {
    marginTop: 32,
  }
})