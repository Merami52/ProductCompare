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

## Основная структура
app/         — страницы и layout
components/  — UI-компоненты
contexts/    — глобальные состояния
hooks/       — кастомные хуки
lib/         — утилиты
cypress/     — тесты e2e
public/      — изображения и ассеты
