// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.debug.registerDebugConfigurationProvider('tvm', {
        provideDebugConfigurations() {
            return [
                {
                    type: 'tvm',
                    name: 'Debug',
                    request: 'launch',
                }
            ];
        }
    }));

    context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory('tvm', {
        createDebugAdapterDescriptor(session, executable) {
            return new vscode.DebugAdapterServer(42069);
        },
    }));

    context.subscriptions.push(vscode.commands.registerCommand('tvm-debugger.tvmDebug', () => {
        vscode.debug.startDebugging(undefined, {
            type: 'tvm',
            name: 'Debug',
            request: 'launch',
        });
    }))
}

// This method is called when your extension is deactivated
export function deactivate() {}
