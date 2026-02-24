*Parcial 1 Alejandra Baires- Andrea Torres*

**Situación problemática**
**Enunciado:**
Las pastelerías artesanales reciben constantemente consultas a través de WhatsApp y llamadas telefónicas para cotizar pasteles personalizados. El precio varía según el sabor del pastel, el tipo de relleno y el número de porciones, lo que genera retrasos en la atención al cliente y, en muchos casos, la pérdida de posibles ventas debido a la espera de una respuesta.
Ante esta situación, los clientes buscan obtener un presupuesto inmediato sin depender de la disponibilidad del negocio. Por ello, se propone el desarrollo de una aplicación web interactiva que permita al usuario peronalizar su pastel según sus preferencias y visualizar en tiempo real un costo estimado, facilitando así la toma de decisiones antes de realizar el pedido formal.

**Sector al que va dirigido:**
Sector gastronómico, específicamente enfocado en repostería artesanal y emprendimientos de pastelería.

**Respuestas a preguntas**
**¿Qué valor agregado tiene el uso de webcomponents a su proyecto?**
El uso de WebComponents permitió crear el cotizador de pasteles como un componente personalizado (<cake-quoter>), lo que hace que el código sea más ordenado y fácil de mantener. Al trabajar con Shadow DOM, el formulario y su lógica están encapsulados, evitando conflictos con otros estilos o scripts de la página y facilitando la reutilización del componente en otros proyectos o secciones del sitio.


**¿De qué forma manipularon los datos sin recargar la página?**
Los datos se manipularon mediante eventos de JavaScript, específicamente el evento submit del formulario. Al utilizar event.preventDefault(), se evita que la página se recargue y se procesan los datos ingresados por el usuario de forma inmediata, mostrando el resultado dinámicamente en pantalla.


**¿De qué forma validaron las entradas de datos? Expliquen brevemente.**
Las entradas se validaron utilizando condicionales en JavaScript se verifica que el número de porciones no esté vacío, que sea un valor válido dentro de un rango permitido y que tanto el sabor del pastel como el relleno hayan sido seleccionados antes de realizar el cálculo. Si alguna validación falla, se muestra un mensaje de error al usuario.


**¿Cómo manejaría la escalabilidad futura en su página?**
La escalabilidad futura se manejaría creando más WebComponents para nuevas funcionalidades, como el registro de pedidos, historial de cotizaciones o integración con una base de datos. Además, se podría conectar el sistema a una API para automatizar pedidos y permitir que sea una aplicación movil que soporte un mayor número de usuarios sin afectar su funcionamiento.
