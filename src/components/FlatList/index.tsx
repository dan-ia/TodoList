import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList, Text, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { theme } from "../../theme";

export default function Flat() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodosFromUserDevice();
    }, []);

    useEffect(() => {
        saveTodoToUserDevice(todos);
    }, [todos]);

    const [textInput, setTextInput] = useState('');

    const addTodo = () => {
        if (textInput.trim() === "") {
            Alert.alert("Erro", "A tarefa não pode ser vazia");
        } else {
            const newTodo = {
                id: Math.random(),
                task: textInput,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setTextInput('');
        }
    };

    const markTodoComplete = (todoId) => {
        const newTodos = todos.map(item => {
            if (item.id === todoId) {
                return { ...item, completed: true };
            }
            return item;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (todoId) => {
        const newTodos = todos.filter(item => item.id !== todoId);
        setTodos(newTodos);
    };

    const clearTodos = () => {
        if (todos.length === 0) {
            Alert.alert('Confirma', 'Não há nada a ser apagado');
        } else {
            Alert.alert('Confirma', 'Deseja apagar tudo da lista?', [
                {
                    text: 'Sim',
                    onPress: () => setTodos([]),
                },
                {
                    text: 'Não',
                }
            ]);
        }
    };

    const saveTodoToUserDevice = async todos => {
        try {
            const stringifiedTodos = JSON.stringify(todos);
            await AsyncStorage.setItem('todos', stringifiedTodos);
        } catch (error) {
            console.log(error);
        }
    };

    const getTodosFromUserDevice = async () => {
        try {
            const todos = await AsyncStorage.getItem('todos');
            if (todos !== null) {
                setTodos(JSON.parse(todos));
            }
        } catch (error) {
            Alert.alert('Erro');
        }
    };

    const ListItem = ({ todo }) => {
        if (!todo) return null;
        return (
            <View style={styles.containerList}>
                <Text style={{
                    maxWidth: 270,
                    fontSize: 16,
                    color: todo.completed ? "#37cd86" : "#fff",
                    textDecorationLine: todo.completed ? "line-through" : "none",
                }}>{todo.task}</Text>
                <View style={styles.btns}>
                    {!todo.completed && (
                        <TouchableOpacity style={styles.btnDone} onPress={() => markTodoComplete(todo.id)}>
                            <FontAwesome5 name="check" size={15} color={theme.colors.white} />
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity style={styles.btnTrash} onPress={() => deleteTodo(todo.id)}>
                        <Entypo name="cross" size={24} color={theme.colors.white} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={todos}
                contentContainerStyle={styles.flat}
                inverted={false}
                renderItem={({ item }) => <ListItem todo={item} />}
            />
            <View style={styles.containerInput}>
                <TouchableOpacity style={styles.btnClearAll} onPress={() => clearTodos()}>
                    <FontAwesome5 name="trash-alt" size={24} color={theme.colors.red} />
                </TouchableOpacity>

                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        value={textInput}
                        onChangeText={(text) => setTextInput(text)}
                        placeholder="Adicionar Tarefa"
                        placeholderTextColor={theme.colors.gray[600]}
                        selectionColor={theme.colors.white}
                    />
                </SafeAreaView>

                <TouchableOpacity onPress={addTodo} style={styles.btnAdd}>
                    <Entypo name="plus" size={35} color={theme.colors.green} />
                </TouchableOpacity>
                
            </View>
        </View>
    );
}
