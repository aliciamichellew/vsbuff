// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { TestPanel } from "./TestPanel";
import { SidebarProvider } from "./SidebarProvider";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vsgym" is now active!');

  const sidebarProvider = new SidebarProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("vsgym-sidebar", sidebarProvider)
  );

  let disposable = vscode.commands.registerCommand("vsgym.helloWorld", () => {
    TestPanel.createOrShow(context.extensionUri);
  });

  context.subscriptions.push(disposable);

  context.subscriptions.push(
    vscode.commands.registerCommand("vsgym.refresh", () => {
      TestPanel.kill();
      TestPanel.createOrShow(context.extensionUri);
      setTimeout(() => {
        vscode.commands.executeCommand(
          "workbench.action.webview.openDeveloperTools"
        );
      }, 500);
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
