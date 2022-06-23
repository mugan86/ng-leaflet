# 🇪🇸 Contribuyendo al proyecto Angular Leaflet Map
¡Nos encantaría recibir tu aporte! Queremos que las contribuciones a este proyecto sean lo más fáciles y transparentes posible, como por ejemplo:

- Reportar errores
- Discutir el estado actual del código.
- Presentar una propuesta de corrección de una incidencia.
- Sugerir nuevas características.
- Implementar nuevas características.
- Hacer traducciones de idiomas existentes y/o nuevos idiomas

## Desarrollamos con Github
Usamos github para almaccenar todo el código, analizar los problemas que puedan surgir y solicitudes de nuevas funcionalidades, así como aceptar solicitudes de mejora / solución de lo dearrollado.

## Usamos [Github Flow](https://guides.github.com/introduction/flow/index.html), por lo que todos los cambios de código se darán a través de pull requests
Los pull requests son la mejor manera de proponer cambios en el código base (usamos [Github Flow](https://guides.github.com/introduction/flow/index.html)). Son bienvenidos vuestros pull requests. Instrucciones para realizar correctamente el proceso para propuestas / solución de código:

1. Bifurque el repositorio mediante **fork** y cree su rama desde `develop`.
2. El idioma que se usará tanto para los commit y el desarrollo del código será en inglés. Aplicaremos buenas prácticas basándonos en la [guía de estilos de Angular](https://angular.io/guide/styleguide).
3. Si agregamos código que debe probarse, agregue pruebas.
4. Si cambiamos / añadimos algo en las API, actualizamos la documentación (que se encuentra en **official-docs/es**) para que esté lo más actualizado posible.
5. Asegúrese de que el conjunto de test pase.
6. Escriba un buen mensaje de commit para [Gitflow comete mejores prácticas para escribir mensajes](https://roalcantara.medium.com/a-guide-to-improve-the-git-hub-flow-and-commits-messages-b495461e1115 )
7. Para un buen commit y seguir trabajando correctamente con Git Flow, debemos de tener en cuenta los siguientes puntos, ya que si no respetamos el formato, no podremos realizar commit.
8. El formato a seguir en el commit:
```bash
git commit -m "<type> : <message>"
```
Donde tenemos los ddiferentes **types**:

* **feat**: Nueva funcionalidad
* **fix**: Corrección de un error / bug
* **docs**: Cambios en la documentación
* **style**: Cambios que no afectan en el funccionamiento del código (espacios en blanco, formato, faltantes) punto y coma, etc.)
* **refactor**: Un cambio de código que no corrige un error ni agrega una característica
* **perf**: Un cambio de código que mejora el rendimiento
* **test**: Adición de tests faltantes o corrección de tests existentes
* **build**: Cambios que afectan el sistema de compilación, la configuración de CI o las dependencias externas (ámbitos de ejemplo: gulp, broccoli, npm)
* **ci**: Cualquier cambio en nuestros scripts y archivos de configuración de CI (Travis, Circle CI, BrowserStack, SauceLabs)
* **chore**: Otros cambios que no modifican los archivos `src` o `test`
Siendo un ejemplo de posible commit, por ejemplo para una nueva funcionalidad para pantalla completa.
```bash
git commit -m "feat : add fullscreen control option"
```
9. ¡Emitir el pull request!

Pendiente de seguir añadiendo información...

-----------

# 🇬🇧 Contributing to Angular Leaflet Map
We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer(code)

## We Develop with Github
We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests
Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `develop`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Create a Stackblitz [demo from the template](https://stackblitz.com/edit/angular-leaflet-map-basic?file=src%2Fapp%2Fapp.component.ts) to showcase the new functionality. You can build on [these examples already created](https://mugan86.github.io/ng-leaflet/es/demos-ejemplos). 
6. Make sure your code lints.
7. Write good commit message to [Gitflow commit beest practices to write messages](https://roalcantara.medium.com/a-guide-to-improve-the-git-hub-flow-and-commits-messages-b495461e1115)
8. Issue that pull request!

## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issues](https://github.com/mugan86/ng-leaflet/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/mugan86/ng-leaflet/issues/new/choose); it's that easy!

## Write bug reports with detail, background, and sample code
[This is an example](http://stackoverflow.com/q/12488905/180626) of a bug report I wrote, and I think it's not a bad model. Here's [another example from Craig Hockenberry](http://www.openradar.me/11905408), an app developer whom I greatly respect.

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can. [My stackoverflow question](http://stackoverflow.com/q/12488905/180626) includes sample code that *anyone* with a base R setup can run to reproduce what I was seeing
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People *love* thorough bug reports. I'm not even kidding.

## Use a Consistent Coding Style
I'm again borrowing these from [Facebook's Guidelines](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)

* 2 spaces for indentation rather than tabs
* You can try running `npm run lint` for style unification

## License
By contributing, you agree that your contributions will be licensed under its MIT License.

## References
This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)
