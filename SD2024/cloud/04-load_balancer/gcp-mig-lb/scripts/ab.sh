#!/bin/bash

# Variables
LB_ENDPOINT="http://34.160.161.237/"
CONCURRENCY=100
NUM_REQUESTS=1000

# Run Apache Bench to generate traffic
ab -n $NUM_REQUESTS -c $CONCURRENCY $LB_ENDPOINT