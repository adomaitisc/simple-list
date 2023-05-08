//
//  ContentView.swift
//  SimpleList
//
//  Created by Cauã Adomaitis on 5/2/23.
//

import SwiftUI
import AppKit

struct Todo: Identifiable, Codable {
    var id = UUID()
    var title: String
    var isComplete = false
}

struct TodoData: Codable {
    var todos: [Todo]
}

func loadTodos() -> [Todo] {
    let todosURL = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0].appendingPathComponent("todos.json")
    guard let data = try? Data(contentsOf: todosURL) else {
        return []
    }
    let decoder = JSONDecoder()
    guard let todoData = try? decoder.decode(TodoData.self, from: data) else {
        return []
    }
    return todoData.todos
}

func saveTodos(todos: [Todo]) {
    let todosURL = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0].appendingPathComponent("todos.json")
    let encoder = JSONEncoder()
    let todoData = TodoData(todos: todos)
    guard let data = try? encoder.encode(todoData) else {
        return
    }
    try? data.write(to: todosURL)
}

struct CircleButton: View {
    var color: Color = .red
    var icon: String
    var action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Image(systemName: icon)
                .foregroundColor(color)
        }
        .buttonStyle(PlainButtonStyle())
    }
}

struct DeleteButton: View {
    var action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Image(systemName: "trash")
                .foregroundColor(Color.gray)
        }
        .buttonStyle(PlainButtonStyle())
    }
}

struct ContentView: View {
    @State private var todos = loadTodos()
    @State private var newTodoTitle = ""
    
    var body: some View {
        VStack {
            List {
                Text("Simple List")
                    .padding(6)
                    .font(.title)
                    .listStyle(.sidebar)
                ForEach(todos) { todo in
                    HStack {
                        if todo.isComplete {
                            CircleButton(icon: "checkmark.circle.fill", action: {
                                if let index = todos.firstIndex(where: { $0.id == todo.id }) {
                                    todos[index].isComplete.toggle()
                                    saveTodos(todos: todos)
                                }
                            })
                        } else {
                            CircleButton(icon: "circle", action: {
                                if let index = todos.firstIndex(where: { $0.id == todo.id }) {
                                    todos[index].isComplete.toggle()
                                    saveTodos(todos: todos)
                                }
                            })
                        }
                        Text(todo.title)
                            .font(.body)
                        Spacer()
                        DeleteButton(action: {
                            if let index = todos.firstIndex(where: { $0.id == todo.id }) {
                                todos.remove(at: index)
                                saveTodos(todos: todos)
                            }
                        })
                    }
                    .padding(6)
                    .cornerRadius(6)
                }
                TextField("Add new item", text: $newTodoTitle)
                    .onSubmit{ addTodo() }
                    .textFieldStyle(.roundedBorder)
            }
        }
    }
    
    private func addTodo() {
        if !newTodoTitle.isEmpty {
            let newTodo = Todo(title: newTodoTitle)
            todos.append(newTodo)
            newTodoTitle = ""
            saveTodos(todos: todos)
        }
    }
}

struct ContentView_Preview: PreviewProvider {
    static var previews: some View {
        ContentView()
            .frame(width: 300, height: 400)
            .listStyle(.sidebar)
    }
}
