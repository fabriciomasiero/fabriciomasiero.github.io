---
layout: post
title: How to add UIKit component on your SwiftUI project
categories:
- iOS 
- SwiftUI
- Swift
- Xcode
- UIKit
- Xcode
- UIViewRepresentable
feature_image: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
---

A brief to how to add WKWebView on your SwiftUI view
First of all, there is no WebView component write in SwiftUI, so, how I add this component?

Yes, we need to add an UIKit component to a SwiftUI view 🤔
Ok, lets build a simple app in SwiftUI.

![Creating Project on Xcode](/Images/2020-03-09-how-to-add-UIKit-component-on-your-SwiftUI-project/create-project.png)

Xcode auto generate a Hello World project, its awesome, because it pretty easy to add WebView now!

![Initial State](/Images/2020-03-09-how-to-add-UIKit-component-on-your-SwiftUI-project/initial-project.png)


Ok, finally lets work on some code

We need to create a ViewModel to treat the webview statement.

```
import Foundation
import WebKit

public class WebViewViewModel: NSObject {
    
    private let stringUrl: String
    public let webView: WKWebView
    
    init(stringUrl: String) {
        self.stringUrl = stringUrl
        self.webView = WKWebView()
    }
}
```

We create a ViewModel called *WebViewViewModel* with **url** and **webview** initializers. But, why?

**url** — is an string url to you web site e.g google.com

**webview** — is an WKWebView object to store and control your component

and after this we need to perform a webview request to load the website, so add this on your ViewModel

```
public func request() {
    guard let url = URL(string: stringUrl) else {
        return
    }
    let urlRequest = URLRequest(url: url)
    webView.load(urlRequest)
    if webView.navigationDelegate == nil {
        webView.navigationDelegate = self
    }
}
```

And last but not least add WKNavigationDelegate to your ViewModel

```
extension WebViewViewModel: WKNavigationDelegate {
    public func webView(_ webView: WKWebView, didCommit navigation: WKNavigation!) {
        
    }
    public func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        
    }
}
```
Our ViewModel is completed! Now we need to add this webview on our SwiftUI view, back to ContentView class and add this **UIViewRepresentable**

```
struct WebView: UIViewRepresentable {
    
    let viewModel: WebViewViewModel
    
    func makeUIView(context: Context) -> WKWebView {
        return viewModel.webView
    }
    func updateUIView(_ uiView: WKWebView, context: Context) {
        viewModel.request()
    }
}
```
But… Whats is **UIViewRepresentable?** Basically is a instance to create and menage UIKit components, you can read more [here](https://developer.apple.com/documentation/swiftui/uiviewrepresentable) and [here](https://developer.apple.com/documentation/swiftui/uiviewrepresentable/3278050-updateuiview).

Lets understand what that code do. 

The function **makeUIView** is responsable to return your component.

The function **updateUIView** is responsable to tells your app state change.

Finally, the last thing we need to do is add our webview to our main view, like this:

```
struct ContentView: View {
    var body: some View {
        WebView(viewModel: WebViewViewModel(stringUrl: "https://tinyurl.com/w498z2l"))
    }
}
```
Yes, is simple like that!

[You can download the source code here](https://github.com/fabriciomasiero/WebViewSwiftUI/tree/master)

I hope you enjoyed.
Bye bye =D





