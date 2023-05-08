//
//  SimpleListApp.swift
//  SimpleList
//
//  Created by Cauã Adomaitis on 5/2/23.
//

import SwiftUI

@main
struct SimpleListApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .listStyle(.sidebar)
        }
        .defaultSize(width: 300, height: 400)
    }
}
