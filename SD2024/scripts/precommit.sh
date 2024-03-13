#!/bin/bash

# Check if the folder path argument is provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide the folder path as an argument."
    exit 1
fi

folder_path="$1"

# Run pre-commit actions based on the folder path
case "$folder_path" in
    "class4_sdft")
        # Actions for folder1
        
        ;;
    "folder2")
        # Actions for folder2
        ;;
    *)
        echo "Error: Invalid folder path."
        exit 1
        ;;
esac