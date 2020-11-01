# 状態管理ライブラリ選定メモ 2020.11.01

createContext と useReducer を併用する感じの使い方にしました。

ContextOnly → ReducerOnly → ContextReducer の順でみていただけると理解はやいかもです。

３つとも同じ機能です。

## 参考記事

https://www.webopixel.net/javascript/1647.html

https://blog.woodsatweb.com/posts/20200601001/

https://uncle-javascript.com/react-typescript-hooks-best-practice

## 備考

useReducer での immutable な処理かくのがつらくなってきたら use-immer を使用することも検討。
