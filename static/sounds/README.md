# Efectos de Sonido para Ruleta Rusa

Para completar la experiencia inmersiva de la animación 3D del revólver, necesitas añadir los siguientes archivos de sonido a la carpeta `/static/sounds/`:

## Archivos necesarios:

1. `revolver-click.mp3` - Sonido de gatillo vacío/click
2. `revolver-shot.mp3` - Sonido de disparo del revólver 
3. `heartbeat.mp3` - Sonido de latidos de corazón (para la secuencia dramática)
4. `cylinder-spin.mp3` - Sonido del cilindro girando

## Opciones para obtener los sonidos:

1. **Bancos de sonido gratuitos**:
   - [Freesound](https://freesound.org/)
   - [Zapsplat](https://www.zapsplat.com/)
   - [Mixkit](https://mixkit.co/free-sound-effects/)

2. **Crear sonidos personalizados** con herramientas como Audacity.

3. **Descargar paquetes de efectos** para juegos de sitios como Unity Asset Store, con licencias apropiadas.

## Formato y tamaño:

- Usa archivos MP3 para mejor compatibilidad y menor tamaño
- Mantén los archivos pequeños (menos de 500KB) para rápida carga
- Asegúrate que los sonidos tengan buena calidad pero no sean demasiado altos

## Implementación:

Los archivos de sonido ya están configurados en el código. Solo necesitas agregar los archivos con los nombres exactos a la carpeta `/static/sounds/`.

```
static/
  sounds/
    revolver-click.mp3
    revolver-shot.mp3
    heartbeat.mp3
    cylinder-spin.mp3
```

¡Una vez agregados, la experiencia de la Ruleta Rusa será mucho más dramática e inmersiva!
