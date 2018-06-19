#!/bin/bash

#variaveis
mdfile=$(echo "$1" | rev |cut -d "/" -f 1 | rev) 
mdnome=$(echo "$mdfile" | cut -d "." -f 1)

# funções
atualizaTex () {
	cat "$mdnome.tmp" > "$mdnome.tex" && rm "$mdnome.tmp"
}
#cria a pasta tex/arquivo e copia pra lá
cp "$1" tex/ && cd tex/

# convertendo as tags de LaTeX
cat "$mdfile" | \
sed 's/c\[\([[:alnum:]]*\)\]/\\textcite{\1}/g' | \
sed 's/ \?l\[\([[:alnum:]-]*\)\]/\\label{\1}/g' | \
sed 's/r\[\([[:alnum:]-]*\)\]/\\autoref{\1}/g' \
> "$mdnome.tmp"
cat "$mdnome.tmp" > "$mdfile" && rm "$mdnome.tmp"

#converte em .tex
pandoc --latex-engine=xelatex --wrap=preserve "$mdfile" -o "$mdnome.tex" && rm "$mdfile"

# limpando a bagunça do xelatex
cat "$mdnome.tex" | \
sed 's/\\texorpdfstring{//g' | \
sed 's/\\label/}\\label/g' | \
sed 's/}{.*//g' \
> "$mdnome.tmp"
atualizaTex

# arrumando sessoes e capitulos
cat "$mdnome.tex"| \
sed 's/\\section/\\chapter/'| \
sed 's/\\subsection/\\section/'| \
sed 's/\\subsubsection/\\subsection/'| \
sed 's/paragraph/subsubsection/'\
> "$mdnome.tmp"
atualizaTex
