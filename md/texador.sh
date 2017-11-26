#!/bin/bash

#variaveis
mdfile=$(echo "$1" | rev |cut -d "/" -f 1 | rev) 
mdnome=$(echo "$mdfile" | cut -d "." -f 1)

#cria a pasta tex/arquivo e copia pra lá
if [ ! -d tex/"$mdnome" ]
then
	mkdir tex/"$mdnome"
else
	echo > /dev/null
fi

cp "$1" tex/"$mdnome"/
cd tex/"$mdnome"

#arruma path das imagens
cat "$mdfile" | sed 's/\.\.\///' > "$mdnome.tmp"
cat "$mdnome.tmp" > "$mdfile" && rm "$mdnome.tmp"

#converte em .tex

pandoc --latex-engine=xelatex --wrap=preserve "$mdfile" -o "$mdnome.tex" && rm "$mdfile"
