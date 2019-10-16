#! /bin/sh

while getopts "o:" opt
do
   case "$opt" in
      o) output="$OPTARG" ;;
   esac
done

yarn build
node dist/bundle.js > input.html
export OUTPUT=$output
echo $OUTPUT
node src/html2pdf.js