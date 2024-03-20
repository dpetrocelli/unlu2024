

RED='\033[0;31m'
NC='\033[0m' # No Color
echo " "
echo "----- STARTING EXECUTION FOR GLOBAL PATH -----"
    echo "[STEP 1] - Executing GitLeaks "
    if ! gitleaks protect -v ; then
        echo -e "${RED} Gitleaks execution detected security issues. Stopping...${NC}"
        exit 1
    fi
    sleep 2
    
echo "----- ENDING EXECUTION FOR GLOBAL PATH -----"