<script setup lang="ts">
import Editor from "../components/Editor.vue";
</script>

<template>
  <main class="container">
    <div class="content">
      <div class="window">
        <div class="window-header">
          <div class="controls">
            <div class="control close"></div>
            <div class="control minimize"></div>
            <div class="control maximize"></div>
          </div>
        </div>
        <Editor />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background-color: #7c01ff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.window {
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.7);
  width: 80%;
  padding: 16px;

  .window-header {
    display: grid;
    grid-template-columns: 60px auto 60px;
    height: 15px;

    .controls {
      display: flex;
      align-items: center;

      .control {
        width: 12px;
        height: 12px;
        border-radius: 6px;
      }

      .close {
        background-color: var(--control-close-background-color);
        margin-right: 8px;
      }
      .minimize {
        background-color: var(--control-minimize-background-color);
        margin-right: 8px;
      }

      .maximize {
        background-color: var(--control-maximize-background-color);
      }
    }
  }
}
</style>
