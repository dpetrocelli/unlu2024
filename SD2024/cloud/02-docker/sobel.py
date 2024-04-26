import cv2
import numpy as np

# Leer la imagen
imagen = cv2.imread('imagen.jpg', cv2.IMREAD_GRAYSCALE)

# Obtener dimensiones de la imagen
alto, ancho = imagen.shape

# Dividir la imagen en 4 partes
parte1 = imagen[:alto//2, :ancho//2]
parte2 = imagen[:alto//2, ancho//2:]
parte3 = imagen[alto//2:, :ancho//2]
parte4 = imagen[alto//2:, ancho//2:]

# Aplicar el filtro Sobel en cada parte
sobel_p1_x = cv2.Sobel(parte1, cv2.CV_64F, 1, 0, ksize=3)
sobel_p2_x = cv2.Sobel(parte2, cv2.CV_64F, 1, 0, ksize=3)
sobel_p3_x = cv2.Sobel(parte3, cv2.CV_64F, 1, 0, ksize=3)
sobel_p4_x = cv2.Sobel(parte4, cv2.CV_64F, 1, 0, ksize=3)

sobel_p1_y = cv2.Sobel(parte1, cv2.CV_64F, 0, 1, ksize=3)
sobel_p2_y = cv2.Sobel(parte2, cv2.CV_64F, 0, 1, ksize=3)
sobel_p3_y = cv2.Sobel(parte3, cv2.CV_64F, 0, 1, ksize=3)
sobel_p4_y = cv2.Sobel(parte4, cv2.CV_64F, 0, 1, ksize=3)

# Calcular la magnitud en cada parte combinando las respuestas en x e y
magnitud_p1 = np.sqrt(sobel_p1_x**2 + sobel_p1_y**2)
magnitud_p2 = np.sqrt(sobel_p2_x**2 + sobel_p2_y**2)
magnitud_p3 = np.sqrt(sobel_p3_x**2 + sobel_p3_y**2)
magnitud_p4 = np.sqrt(sobel_p4_x**2 + sobel_p4_y**2)

# Normalizar las magnitudes para mostrarlas correctamente
magnitud_p1 = cv2.normalize(magnitud_p1, None, 0, 255, cv2.NORM_MINMAX, cv2.CV_8U)
magnitud_p2 = cv2.normalize(magnitud_p2, None, 0, 255, cv2.NORM_MINMAX, cv2.CV_8U)
magnitud_p3 = cv2.normalize(magnitud_p3, None, 0, 255, cv2.NORM_MINMAX, cv2.CV_8U)
magnitud_p4 = cv2.normalize(magnitud_p4, None, 0, 255, cv2.NORM_MINMAX, cv2.CV_8U)

# Unificar las imágenes resultantes
resultado_superior = np.hstack((magnitud_p1, magnitud_p2))
resultado_inferior = np.hstack((magnitud_p3, magnitud_p4))
resultado_final = np.vstack((resultado_superior, resultado_inferior))

# Guardar la imagen resultante
cv2.imwrite('magnitud_sobel_dividida.jpg', resultado_final)

# Mostrar la imagen resultante
cv2.imshow('Magnitud Sobel dividida', resultado_final)

# Esperar a que se presione una tecla y luego cerrar la ventana
cv2.waitKey(0)
cv2.destroyAllWindows()
