#!/bin/bash

# Path to images directory
IMAGES_DIR=".next/cache/images"

# Check if the directory exists
if [ -d "$IMAGES_DIR" ]; then
    # Directory exists, proceed with cleanup

    # Number of days since last modification (e.g., files modified more than 2 days ago)
    DAYS=2

    # Delete files modified more than $DAYS days ago in images directory
    find "$IMAGES_DIR" -type f -mtime +$DAYS -exec rm {} \;
else
    # Directory doesn't exist, print a message and exit gracefully
    echo "Directory $IMAGES_DIR does not exist. Skipping cleanup."
fi