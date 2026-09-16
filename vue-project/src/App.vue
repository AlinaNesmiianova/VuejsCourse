<script setup>
  const message = "Vue"
  const name = "Несмеянова Алина"
  const year = 2026
</script>


<template>
  <main class="block">
    <!-- Следующий прием называется text interpolation -->
    <!-- text interpolation позволяет вставлять текст из блока скриптов в блок разметки-->
    <h1>Hello, {{message}}!</h1>
    <p>Доки по отсупам: </p>
    <a href="https://doka.guide/css/margin/">margin</a>
    <a href="https://doka.guide/css/padding/">padding</a>
    <a href="https://doka.guide/css/">По другим стилям от Дока</a>
    <a href="https://skillbox.ru/media/code/vyravnivanie-po-tsentru-v-css-priyemy-svoystva-podvodnye-kamni/#stk-1">Приемы выравнивания от skillbox</a>

    <p>Другие доки</p>
    <a href="https://html5book.ru/block-inline-elements/#block">Доки по блочным и строчным элементам</a>
    <a href="https://html5book.ru/css-background/#background-color">CSS-фон</a>
  </main>
  <footer class="block">
    &copy; {{ name }}, {{ year }}
    <div>
      <a href="https://scrimba.com/learn-vuejs-c09q9jrprp/~02rd?via=vue">Гайд, по которому создавался первый vue-проект</a>
    </div>
  </footer>
</template>

<style scoped>
  h1 {
    font-weight: bold;
    text-align: center;
    color:rgb(228, 78, 183);
  }
  footer {
    font-style: italic;
    font-family: 'Times New Roman';
    font-size: 14pt;
    margin:15px; /* Пространство вокруг элемента, расстояние от края элемента до родительского элемента, если его нет, то до края окна браузера */
    /* По умолчанию браузерное окно имеет свои отступы, чтобы избавиться от них нужно добавить в body margin:0 */
    padding: 5px; /* Пространство внутри элемента */
    background-color: antiquewhite;
  }
  .block {
    background-color: aquamarine;
  }
</style>
