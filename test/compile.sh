# This is run inside the docker container
set -e

clang -static -nostartfiles -nostdlib main.c -o /out/main.o
objdump -d /out/main.o
