Disable caches for JavaScript development
bin/magento cache:status - показує статус кешів
bin/magento cache:disable block_html full_page - виключення кешів для block_html і full_page

uiRegistry
в консолі метод:  покаже назви ui компонентів на сторінці
require('uiRegistry').get (component => console.log(component.name))

по name можна витягнути інстанс ui компоненту
require('uiRegistry').get('parent.child1')

по index можна витягнути інстанс ui компоненту без вказування його парента(якшо він є)
require('uiRegistry').get('index = child2')

