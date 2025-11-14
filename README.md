# ProductCompare

Современное веб-приложение для **сравнения характеристик товаров**, построенное на **Next.js + TypeScript** с использованием **React-компонентов**, **Tailwind CSS** и **Cypress** для тестирования.

---

## Возможности
- Добавление товаров в список сравнения  
- Табличное сравнение характеристик  
- Удобный, адаптивный UI  
- Чистая архитектура: компоненты, контексты, хуки  
- E2E-тесты на Cypress

---

## Технологический стек
- **Next.js (App Router)**  
- **React + TypeScript**  
- **Tailwind CSS**  
- **Cypress (E2E)**  

---

## Запуск проекта
git clone https://github.com/Merami52/ProductCompare
cd ProductCompare
npm install        # или yarn / pnpm
npm run dev        # запуск разработки

## Сборка:

npm run build
npm start


## Тестирование:

npm run cypress

## Архитектура проекта

| Компонент              | Технология                     |
|------------------------|--------------------------------|
| Фреймворк              | Next.js (App Router)           |
| Язык                   | TypeScript                     |
| UI                    | React                          |
| Стилизация             | Tailwind CSS                   |
| Управление состоянием  | React Context + кастомные хуки |
| Тестирование           | Cypress (E2E)                  |
| Сборка и дев-сервер    | Next.js встроенный             |
| Пакетный менеджер      | npm / yarn / pnpm              |
| Конфигурации           | `tsconfig.json`, `tailwind.config.ts`, `next.config.mjs` |
| Статические файлы      | `/public`                      |
| Компоненты интерфейса  | `/components`                  |
| Страницы и маршруты    | `/app`                         |

