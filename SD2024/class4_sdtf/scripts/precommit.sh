echo "HOLA PAPA"

echo $(pwd)

echo " formatting code " 
terraform fmt --recursive .

echo " Creating docs " 

terraform-docs markdown . > readme.md
sleep 5