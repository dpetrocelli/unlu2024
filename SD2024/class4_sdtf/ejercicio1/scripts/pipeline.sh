#PIPELINE APP
# precondición: Máquina PIPELINE ya tiene docker instalado docker. 
# paso0: 🦿 update del código (print ("a")) y guardo.
# paso1: Crear la imagen de docker
cd .. 
docker build . -t dpetrocelli/prueba1 --platform linux/amd64 -f dockerfiles/ejemplo3.dockerfile

docker login

docker push dpetrocelli/prueba1

cd scripts

