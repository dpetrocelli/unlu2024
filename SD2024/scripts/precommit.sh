#!/bin/bash


# Check if the folder path argument is provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide the folder path as an argument."
    exit 1
fi

RED='\033[0;31m'
NC='\033[0m' # No Color

folder_path="$1"


# Run pre-commit actions based on the folder path
case "$folder_path" in
        *class4_sdtf*)
             # Run terraform fmt
            cd ../../$folder_path ; terraform init 
            
            echo "Running terraform formatting code"

            if ! terraform fmt "$folder_path"; then
                echo -e "${RED}Terraform formatting failed for $folder_path. Exiting...${NC}"
                exit 1
            fi
            sleep 2

            # Validate Terraform code
            echo "Validating Terraform code"
            if ! terraform validate "$folder_path"; then
                echo -e "${RED}Terraform validation failed for $folder_path. Exiting...${NC}"
                exit 1
            fi
            sleep 2

            # Create Terraform documentation
            echo "Creating Terraform documentation"
            if ! terraform-docs markdown "$folder_path" > "$folder_path/terraform_docs.md"; then
                echo -e "${RED}Terraform documentation generation failed for $folder_path. Exiting...${NC}"
                exit 1
            fi
            sleep 2

            echo "----- ENDING EXECUTION FOR PATH : $folder_path -----"
            ;;
        *) # DEFAULT METHOD
        echo "No hook to be executed on path $folder_path"
        
        ;;
esac