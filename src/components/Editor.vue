<script setup lang="ts">
import CodeMirror from "codemirror-editor-vue3";

import "codemirror/mode/swift/swift.js";
import "../assets/xcode-dark.css";

import { ref } from "vue";

const code = ref(`protocol WrappedAnimationProtocol {
  var animationView: AnimationView! { get set }

  func update(withEngine renderingEngine: RenderingEngineOption)
}
final public class DismissableUIHostingController<Content: View>: UIHostingController<Content> {
  public override init(rootView: Content) {
    super.init(rootView: rootView)
    navigationItem.leftBarButtonItem = UIBarButtonItem(
      barButtonSystemItem: .stop, target: self, action: #selector(tapOnDismiss))
  }

  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  @objc private func tapOnDismiss() {
    dismiss(animated: true, completion: nil)
  }
}`);
const options = {
  mode: "swift",
  theme: "xcode-dark",
  lineNumbers: false,
  smartIndent: true,
  indentUnit: 2,
  foldGutter: true,
  styleActiveLine: true,
};
</script>

<template>
  <CodeMirror :options="options" v-model:value="code" />
</template>

<style lang="scss">
.CodeMirror {
  * {
    font-size: 15px;
    font-family: "JetBrains Mono", cursive;
    word-break: break-word;
  }
}
</style>
