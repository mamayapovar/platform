<h1 align="center">
<a href="http://kolakrhd.beget.tech/" target="_blank"><img src="assets/banner.svg" width="800" alt="VKUI logo"></a>
</h1>
<p align="center">
Мама, я повар! — это платформа,
<br>где люди могут делиться своими рецептами и обсуждать их с другими.
</p>
<p align="center">
<a href="http://kolakrhd.beget.tech/">Сайт</a>⠀⠀ 
<a href="https://sonniy.notion.site/72491004fa1044d8b0dccf9cdeb44053">О проекте</a>⠀⠀ 
<a href="https://sonniy.notion.site/dc78c73a196947be85c434d15fa95582?v=37757ba6e8d1477095099ec10404ba5b">Бэклог</a>
</p>

## Как устроена
Платформа «Мама, я повар!» работает на базе фреймворка [Django](https://www.djangoproject.com/).

Шаблоны, стили и скрипты платформы обновляются в [отдельном репозитории](https://github.com/mamayapovar/source).

## Как запустить
Посмотреть текущую версию платформы можно на [сайте](http://kolakrhd.beget.tech/) или установив локальную версию.

Чтобы установить локальную версию:

1. Скачайте и установите [Python 3.10.6](https://www.python.org/downloads/release/python-3106/).
    > _Обратите внимание:_ на других версиях Python проект может не запуститься.

2. Скачайте и разархивируйте архив с [последним релизом](https://github.com/mamayapovar/platform/releases) платформы.

3. Откройте консоль в распакованной папке.

4. В зависимости от вашей ОС, по очереди напишите в консоль следующие команды:

    **Windows**
    ```sh
    pip install virtualenv
    ```

    ```sh
    python -m venv venv
    ```

    ```sh
    .\venv\Scripts\activate
    ```

    ```sh
    pip install -r requirements.txt
    ```

    ```sh
    cd mamayapovar
    ```

    ```sh
    python manage.py runserver
    ```

    **Mac OS**
    ```sh
    sudo pip3 install virtualenv
    ```

    ```sh
    python3 -m venv venv
    ```

    ```sh
    source venv/bin/activate
    ```

    ```sh
    pip3 install -r requirements.txt
    ```

    ```sh
    cd mamayapovar
    ```
    
    ```sh
    python3 manage.py runserver
    ```

    **Linux**
    ```sh
    pip install virtualenv
    ```

    ```sh
    python3 -m venv venv
    ```

    ```sh
    source venv/bin/activate
    ```

    ```sh
    pip install -r requirements.txt
    ```

    ```sh
    cd mamayapovar
    ```
    
    ```sh
    python3 manage.py runserver
    ```

5. Готово! Можете переходить по адресу [127.0.0.1:8000](http://127.0.0.1:8000/) и работать с локальной версией проекта.
    > Если вы запускаете локальную версию, то _уже загруженные изображения_ отображаться не будут, так как все пути в базе данных абсолютные, но если вы добавите свои рецепты, то все будет прекрасно работать!

## Браузеры
На данный момент мы поддерживаем браузеры следующих версий:
- Safari >= 13.1
- Chrome >= 80
- Firefox >= 72