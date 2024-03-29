Инструкция по запуску приложения
Это приложение разработано с использованием Vite, React и TypeScript. Для запуска приложения следуйте приведенным ниже шагам.

Шаг 1: Клонирование репозитория
Используйте следующую команду в терминале, чтобы склонировать репозиторий на свой компьютер:
git clone git@github.com:GeorgiusDomna/ShorterURL.git

Шаг 2: Установка зависимостей
Перейдите в каталог скачанного репозитория и выполните команду установки зависимостей:
cd ваш-путь-к-репозиторию
npm install

Шаг 3: Запуск приложения
После успешной установки зависимостей, выполните команду для запуска приложения:
npm run dev
Откройте браузер и перейдите по адресу, указанному в консоли.

Vercel Deploy: https://shorter-url-vert.vercel.app/


Проект предоставляет следующий функционал:

- Страница регистрации
Пользователи могут зарегистрироваться в системе, предоставляя необходимые учетные данные.

- Страница авторизации
Зарегистрированные пользователи могут войти в систему, используя свои учетные данные.

- Просмотр статистики по созданным ссылкам
На странице статистики пользователи могут просматривать информацию о созданных ими сокращенных ссылках. Информация представлена в виде таблицы, содержащей три столбца: короткая ссылка, исходная ссылка и количество переходов по короткой ссылке.

- Пагинация для таблицы
Страница статистики поддерживает пагинацию, позволяя пользователям просматривать данные постранично для удобства навигации.

- Сортировка по столбцам
Пользователи имеют возможность сортировать данные в таблице по различным столбцам, что обеспечивает более удобный доступ к нужной информации.

- Возможность сортировки по нескольким столбцам
Пользователи могут применять сортировку к нескольким столбцам таблицы статистики одновременно, чтобы получить более точные и удовлетворяющие их результаты.

- Копирование сокращенных ссылок
При клике по соответствующему элементу в таблице, пользователи могут скопировать короткую ссылку в буфер обмена для удобства использования.
