//h1要素を取得
const title = document.querySelector("#title");
console.log(title);

//h1テキストの書き換え
title.textContent = "JavaScriptで変更しました。";
console.log(title);

//p要素を取得
const text = document.querySelector(".text");
console.log(text);

//pのテキスト書き換え
text.textContent = "この文章も変更されました。";
