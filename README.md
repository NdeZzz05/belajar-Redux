# File Belajar State Management Menggunakan File MovieZzz App

State Management Adalah konsep untuk mengelola semua state dalam website, dan memisahkannya dari elemen UI website. Dengan state management, front-end akan memiliki urusan UI dan alur data yang terpisah. Pendekatan ini memungkinkan perubahan data yang lebih konsisten.

Sedangkan Redux adalah sebuah library library state management yang agnostik. Artinya, tidak terikat framework tertentu dan bisa dipakai di project JavaScript apapun. Redux memiliki paradigma unik yang perlu kita perhatikan. Intinya, Redux mengandalkan state yang terpusat, atau single source of truth. Di elemen UI manapun, yang dipanggil selalu state yang sama, sehingga selalu konsisten.

Library React Redux
https://react-redux.js.org/tutorials/quick-start

### `branch main`
1. Konfigurasi dasar menggunakan library react redux
2. File yang dipakai:
  - Redux ./action , ./reduxHandle, ./store
  - index.js
  - components (semua button dan view)
3. untuk branch main/ versi 1 ini adalah settingan redux sederhana yang sudah bisa digunakan, akan tetapi belom standart company dan best practice

### `branch versi2`
● react-redux → $ npm install react-redux
● redux → $ npm install redux
● @reduxjs/toolkit → $ npm install @reduxjs/toolkit

1. Konfigurasi dengan menggunakan redux toolkit
2. File yang digunakan:
   - redux
       - actions
       - reducers
         -index.js
       - store
    - pages
        - authRedux
    - components
        - protected
3. untuk yang versi2 ini settingan memakai redux toolkit yang sudah implementasi redux thunk dan middleware, ini sudah standart company dan best practice, tetapi belum yang paling baik
