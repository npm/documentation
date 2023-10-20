
#!/bin/bash

ARGS=$@
LOG_FILE=".gatsby-stderr.log"

trap "rm -f $LOG_FILE" EXIT

function run_with_args {
  gatsby $ARGS
}

function clean_and_run {
  rm -f $LOG_FILE
  gatsby clean
  run_with_args
}

run_with_args 2> $LOG_FILE
CODE=$?

if [ $CODE -ne 0 ]; then
  echo "Command failed with code $CODE and error logs:"
  cat $LOG_FILE

  if grep -iqE 'segmentation fault|mutex' $LOG_FILE; then
    echo "Cleaning caches and running again..."
    clean_and_run
  fi
fi
