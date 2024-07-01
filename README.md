# «Реакт. Построение приложения»

![alt text](image.png)

## Stack

- npm
- redux toolkit
- rtk query
- classnames

## Next

Для ветки next

```git
git switch next

or

git checkout next
```

> Вомзожно там будет пусто (Там пусто, не успеваю 😃)

## Критерии оценивания SPA:

### Базовые требования ✅

### Функциональные требования:

#### Шапка ✅

#### Авторизация ✅

Для авторизации всплывает модальное окно через портал. Оно не закрывается пока пользователь не введет верно данные (на сервере есть 30% шанс, что данные помимо admin, admin будут отклонены), либо пока пользователь не закроет окно. 

Токен получается с rtk query запроса и копируется в localstorage и стор где будет лежать состояние авторизации и сам token.

После выхода токен удаляется, а при инициализации проверяется.

#### Реализована страница списка фильмов ✅

Во время входа дергается пустой search. При выборе фильтров url обновляется в url добовляются соответствующие параметры. Соответственно если параметр не нужен (Не выбран) или если параметр помешает отображению (page=2, а список меньше 10 элементов), то он удалится из url. 

И для какой то цели я сделал слайс для query параметров, но зачем не помню 😃.

#### Страница фильма ✅

Фильмы приходят по ручке. Оценку можно поставить только авторизованным (без авторизации поля оценки не отображается), обновленные данные сразу покажутся. Выставленные оценки хранятся в store (movieId: rating). Дважды поставить подряд одинаковые оценки нельзя. 

#### Общий функционал ✅

Ошибки обрабатываются в errorBoundary, в случае чего выкидывает на пустую страницу с ошибкой в консоле.

Лоадер на месте.

Дебаунс стоит на поиске фильмов, но на выставлении оценок я его решил не ставить. Просто потому хук который я написал с опозданием не только оценку отправлял, но и отрисовывал звезды 😊. Вообще это не сложно было починить, но мне показалось, что конкретно там от дебаунса можно отказаться. В замен я сделал доп проверку на повторные запросы.

> Я все таки добавил дебаунс на рейтинг, раз уж это обязательное требование.

#### Стор ✅

Стор хранит 

- параметры поиска (фильтров и тп)
- проставленные оценки
- параметры авторизации
- rtk query запросы

> Вспомнил зачем слайс для query параметров( в ЛМС о них было сказано 😊).